/* eslint-disable no-invalid-this */
import * as service from '../../services/keycloak';

/**
 * TestController.getTest endpoint.
 * Returns the model for the specified 'id'.
 * @export getTest
 * @param {*} req - The express request.
 * @param {*} res - The express response.
 * @param {*} next - The express next.
 * @return {void}
 */
export default function(req, res, next) {
  const id = req.params.id;
  service
      .getUserInfo(id, {
        db: this.db,
        request: req,
      })
      .then((result) => {
        if (result != null) {
          res.status(200).json({
            status: 'success',
            data: result,
          });
        } else {
          res.status(204).json({
            status: 'failure',
            data: result,
            message: `No data for ${id}`,
          });
        }
      })
      .catch((err) => {
        return next(err);
      });
}
