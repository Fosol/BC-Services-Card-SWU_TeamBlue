/* eslint-disable no-invalid-this */
import * as service from '../../services/user';

/**
 * TestController.getTests endpoint.
 * Makes a request to the datasource to retrieve all models.
 * @export getTests
 * @param {object} req - The express request.
 * @param {object} res - The express response.
 * @param {object} next - The express next.
 */
export default function(req, res, next) {
  service
      .getMany({
        db: this.db,
        request: req,
      })
      .then((result) => {
        res.status(200).json({
          status: 'success',
          data: result,
        });
      })
      .catch((err) => {
        return next(err);
      });
}
