import { useCallback } from 'react';
import { Sidebar } from 'flowbite-react';
import { Button } from 'flowbite-react';
import { 
  HiOutlineArrowLeft, 
  HiOutlineArrowRight,
  HiGlobeAlt,
  HiArchive
} from 'react-icons/hi';
import { FaRegRectangleList, FaFilePen } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import ROUTES from '@/routes/route-constants';
import { useNavigate } from 'react-router-dom';
import {FLUSH} from "redux-persist";

const ButtonContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 10px;
`;

const LeftNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [leftNavExpanded, setLeftNavExpanded] = useState<boolean>(true);
  const buttonArrowSize: string = "h-3 w-3";

  const isActive = useCallback(
    (path: string) => {
      return location.pathname === path;
    },
    [location],
  );
  
  const handleToggleLeftNav = useCallback(
    () => {
      if (leftNavExpanded){
        setLeftNavExpanded(() => false);
      }else{
        setLeftNavExpanded(() => true);
      }
    },
    [leftNavExpanded]
  );

  const CollapseButton = () => {
    return(
      <ButtonContainer>
        <Button pill color="light" onClick={handleToggleLeftNav}>
          {
            (leftNavExpanded) ?
              <HiOutlineArrowLeft className={buttonArrowSize}/> :
              <HiOutlineArrowRight className={buttonArrowSize}/>
          }
        </Button>
      </ButtonContainer>
    );
  }

  const SidebarItems = () => {
    return (
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            style={{ cursor: 'pointer', justifyContent: 'center' }}
            active={isActive(ROUTES.BROWSER)}
            onClick={() => navigate(ROUTES.BROWSER)}
            icon={leftNavExpanded && HiGlobeAlt}
          >
            {
              (leftNavExpanded) ?
                <FormattedMessage id="browser" /> :
                <HiGlobeAlt/>
            }
          </Sidebar.Item>
          <Sidebar.Item
            style={{ cursor: 'pointer',  }}
            active={isActive(ROUTES.MY_STORE)}
            onClick={() => navigate(ROUTES.MY_STORE)}
            icon={leftNavExpanded && FaRegRectangleList}
          >
            {
              (leftNavExpanded) ?
                <FormattedMessage id="my-stores" /> :
                <FaRegRectangleList/>
            }
          </Sidebar.Item>
          <Sidebar.Item
            style={{ cursor: 'pointer' }}
            active={isActive(ROUTES.EDIT_STORE)}
            onClick={() => navigate(ROUTES.EDIT_STORE)}
            icon={leftNavExpanded && FaFilePen}
          >
            {
              (leftNavExpanded) ?
                <FormattedMessage id="edit-store" /> :
                <FaFilePen/>
            }
          </Sidebar.Item>
          <Sidebar.Item
            style={{ cursor: 'pointer' }}
            active={isActive(ROUTES.VIEW_STORE)}
            onClick={() => navigate(ROUTES.VIEW_STORE)}
            icon={leftNavExpanded && HiArchive}
          >
            {
              (leftNavExpanded) ?
                <FormattedMessage id="view-store" /> :
                <HiArchive/>
            }
          </Sidebar.Item>
          <Sidebar.Item
            style={{ cursor: 'pointer' }}
            active={isActive(ROUTES.SETTINGS)}
            onClick={() => navigate(ROUTES.SETTINGS)}
            icon={leftNavExpanded && IoSettingsOutline}
          >
            {
              (leftNavExpanded) ?
                <FormattedMessage id="settings" /> :
                <IoSettingsOutline/>
            }
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    );
  }

  return (
    <div
      className={`bg-white`}
      style={{ width: '100%', height: '100%', overflow: 'auto' }}
    >
      <Sidebar aria-label="App Navigation" style={ (leftNavExpanded) ? {} : {width: '75px'}}>
        <CollapseButton/>
        <SidebarItems/>
      </Sidebar>
    </div>
  );
};

export { LeftNav };
