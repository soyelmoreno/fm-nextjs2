/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
//import React from 'react';

// If necessary, and hopefully it's not, we can create a stylesheet that applies
// globally and import it. Can only do this in *this* file: _app.js
import '../src/styles.css';

// A better approach is to use CSS modules for each component. During build time
// NextJS will generate a dynamic, unique class name and apply it to the
// selectors inside all CSS modules. This will scope the styles to that
// particular component. This prevents issues with globally applied styling
// rules.

// Re: _app.js: This file is typically created for you automatically by NextJS.
// However, if you want to add any global styles, you must do it through this
// file. So you need to manually create this file, with App being the default
// export, and then import your global styles.

// To use Theme UI we need to wrap stuff in a <Provider>. We can add a Provider
// around every page, but that's cumbersome. Instead we can add a Provider here
// around the entire app.
import { ThemeProvider } from 'theme-ui';
import myTheme from '../theme';
import Nav from '../src/components/Nav';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={myTheme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
