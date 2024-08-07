import * as React from 'react';

declare module 'next-themes' {
  interface ThemeProviderProps {
    attribute?: string;
    children: React.ReactNode;
  }

  const ThemeProvider: React.FC<ThemeProviderProps>;

  export { ThemeProvider }; 
}