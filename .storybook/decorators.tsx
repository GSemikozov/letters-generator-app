import type { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from '../src/app/providers/AppProvider';

export const withRouter: Decorator = (Story, _context) => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Story />
      </AppProvider>
    </BrowserRouter>
  );
};

export const withRouterOnly: Decorator = (Story, _context) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
