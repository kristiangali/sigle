import React from 'react';
import { Protected } from '../modules/auth/Protected';
import { Home } from '../modules/home';

const HomePage = () => {
  return (
    <Protected>
      <Home type="drafts" />
    </Protected>
  );
};

export default HomePage;
