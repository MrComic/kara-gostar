'use strict';

/**
 * register-application service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-application.register-application');
