
const path = require('path');
const withTM = require('next-transpile-modules')(['eventjuicer-site-components']);
const { withSentryConfig } = require('@sentry/nextjs');

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};



module.exports = withSentryConfig(withTM({

    webpack: (config) => {
      config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');
      return config
    },

    i18n: {
      locales: ['pl'],
      defaultLocale: 'pl',    
    },
  
}), SentryWebpackPluginOptions);