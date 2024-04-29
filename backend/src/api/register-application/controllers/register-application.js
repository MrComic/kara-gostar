'use strict';

/**
 * register-application controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::register-application.register-application');
