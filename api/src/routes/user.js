/* eslint-disable new-cap */

import express from 'express';
import Controller from '../controllers/user';

const router = express.Router();

/**
 * Adds controller endpoint routes.
 * @export route
 * @param {object} options - The configuration options.
 * @param {object} options.db - The client connection.
 * @param {object} options.keycloak - The keycloak configuration.
 * @return {Router}
 */
export default function route(options) {
  const controller = new Controller(options.db);

  router.get('/find', controller.getMany);
  router.get('/:id',
      options.keycloak.protect(`realm:administrator`),
      controller.getOne);
  router.put('/',
      options.keycloak.protect(`realm:administrator`),
      controller.updateOne);
  router.delete('/:id',
      options.keycloak.protect(`realm:administrator`),
      controller.removeOne);

  return router;
}
