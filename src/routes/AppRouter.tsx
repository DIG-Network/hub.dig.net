import React from 'react';
import { BrowserRouter as Router, Navigate, redirect, Route, Routes } from 'react-router-dom';
import { ROUTES } from './route-constants';
import * as Pages from '@/pages/authenticated';
import { Template } from '@/components';

const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route // remove trailing slash
            path="*(/+)"
            loader={({ params }) => redirect(params['*'] || '/')}
          />
          <Route path="" element={<Template />}>
            <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} />} />
            <Route path={ROUTES.DASHBOARD} element={<Pages.DashboardPage />} />
            <Route path={ROUTES.ACCOUNT} element={<Pages.AccountPage />} />
            <Route path={ROUTES.DEPLOYMENTS} element={<Pages.DeploymentsPage />} />
            <Route path={ROUTES.STORAGE} element={<Pages.StoragePage />} />
            <Route path="*" element={<Navigate replace to={ROUTES.DASHBOARD} />} />
          </Route>
        </Routes>
        {/* app-wide blocking modals */}
      </Router>
    </>
  );
};

export { AppRouter };
