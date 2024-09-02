import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '@/pages';
import { AppNavigationBar, LeftNav } from '@/components';

const headerPx = 64;

const Template = () => {
  return (
    <ErrorBoundary>
      <div id="app" className="w-screen h-screen flex md:flex-row">
        <LeftNav />
        <div id="content" className="w-full relative dark:text-white">
          <ErrorBoundary>
            <div id="navbar-div" style={{ height: headerPx }}>
              <AppNavigationBar />
            </div>
            <div id="outlet-div" style={{ height: `calc(100vh - ${headerPx})` }}>
              <Outlet />
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export { Template };
