import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Label, Sidebar } from '@/components';
import { ROUTES } from '@/routes';
import { RxCodesandboxLogo, RxDashboard, RxPerson } from 'react-icons/rx';
import { IoMdCloudOutline } from 'react-icons/io';

const LeftNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = useCallback((path: string) => location.pathname === path, [location]);

  return (
    <div className="h-full relative">
      <Sidebar aria-label="App Navigation">
        <div className="flex h-20 mb-10 items-center justify-center">
          <p className="capitalize font-extrabold text-white text-2xl">Dighub Logo</p>
        </div>
        <Label className="flex uppercase text-gray-400 pb-4 pl-1">
          <FormattedMessage id="menu" />
        </Label>
        <Sidebar.Items id="sidebar-items">
          <Sidebar.ItemGroup>
            <Sidebar.Item
              icon={RxDashboard}
              active={isActive(ROUTES.DASHBOARD)}
              onClick={() => navigate(ROUTES.DASHBOARD)}
            >
              <FormattedMessage id="dashboard" />
            </Sidebar.Item>
            <Sidebar.Item
              icon={RxCodesandboxLogo}
              active={isActive(ROUTES.DEPLOYMENTS)}
              onClick={() => navigate(ROUTES.DEPLOYMENTS)}
            >
              <FormattedMessage id="deployments" />
            </Sidebar.Item>
            <Sidebar.Item
              icon={IoMdCloudOutline}
              active={isActive(ROUTES.STORAGE)}
              onClick={() => navigate(ROUTES.STORAGE)}
            >
              <FormattedMessage id="storage" />
            </Sidebar.Item>
            <Sidebar.Item icon={RxPerson} active={isActive(ROUTES.ACCOUNT)} onClick={() => navigate(ROUTES.ACCOUNT)}>
              <FormattedMessage id="account" />
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* app-wide modals */}
    </div>
  );
};

export { LeftNav };
