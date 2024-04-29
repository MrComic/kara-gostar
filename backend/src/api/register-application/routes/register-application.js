'use strict';

/**
 * register-application router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::register-application.register-application');
