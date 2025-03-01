import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from '@/pages/authenticated';
import { AppNavigationBar, LeftNav } from '@/components';

const headerPx = 80;

const Template = () => {
  return (
    <ErrorBoundary>
      <div id="app" className="w-screen h-screen flex md:flex-row">
        <LeftNav />
        <div id="content" className="w-full h-full relative bg-gray-200 dark:bg-gray-900 dark:text-white">
          <ErrorBoundary>
            <div id="navbar-div" style={{ height: headerPx }}>
              <AppNavigationBar />
            </div>
            <div id="outlet-div" style={{ height: 'calc(100vh - 80px)', overflowY: 'scroll' }}>
              <Outlet />
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export { Template };
