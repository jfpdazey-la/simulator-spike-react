// note - this configuration is NOT currently working. Encounter the following error when running `npm run lint`:
/*
  Cannot read config file: /Users/jfpdazey/development/code/fsi/simulator-spike-react/simulator-web/.eslintrc.js
  Error: Cannot find module 'next/core-web-vitals'
*/

module.exports = {
  root: true,
  extends: [
    require.resolve('next/core-web-vitals'),
    // require.resolve('@vercel/style-guide/eslint/browser'),
    // require.resolve('@vercel/style-guide/eslint/react'),
    // require.resolve('@vercel/style-guide/eslint/next'),
  ]
};
