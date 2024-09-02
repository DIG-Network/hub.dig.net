import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Sidebar } from '@/components';
import { ROUTES } from '@/routes';

const LeftNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = useCallback((path: string) => location.pathname === path, [location]);

  return (
    <div className="h-full relative">
      <Sidebar aria-label="App Navigation">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item
              style={{ cursor: 'pointer' }}
              active={isActive(ROUTES.HELLO_WORLD)}
              onClick={() => navigate(ROUTES.HELLO_WORLD)}
            >
              <p className="capitalize">
                <FormattedMessage id="hello-world" />
              </p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      {/* app-wide modals */}
    </div>
  );
};

export { LeftNav };
