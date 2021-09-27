// eslint-disable-next-line no-global-assign
require = require('esm')(module);

/*
const env = process.env.NODE_ENV || 'default';

require('dotenv').config({
  path: `${process.cwd()}/config/${env}.env`,
});
*/
require('./app');