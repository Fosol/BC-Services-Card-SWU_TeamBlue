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
  router.get(
      '/:id',
      options.keycloak.protect('BCSC-SWU:administrator'),
      controller.getOne,
  );
  router.put(
      '/:id',
      options.keycloak.protect('BCSC-SWU:adminitrator'),
      controller.updateOne,
  );
  router.delete(
      '/:id',
      options.keycloak.protect('BCSC-SWU:adminitrator'),
      controller.removeOne,
  );

  return router;
}
