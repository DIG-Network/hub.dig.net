import React from 'react';
import { BrowserRouter as Router, Navigate, redirect, Route, Routes } from 'react-router-dom';
import { ROUTES } from './route-constants';
import * as Pages from '@/pages';
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
            <Route path="/" element={<Navigate to={ROUTES.HELLO_WORLD} />} />
            <Route path={ROUTES.HELLO_WORLD} element={<Pages.HelloWorld />} />
            <Route path="*" element={<Navigate replace to={ROUTES.HELLO_WORLD} />} />
          </Route>
        </Routes>
        {/* app-wide blocking modals */}
      </Router>
    </>
  );
};

export { AppRouter };
