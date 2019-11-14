/* eslint-disable no-invalid-this */
import * as service from '../../services/user';
import Problem from 'api-problem';

/**
 * TestController.removeTest endpoint.
 * Delete the specified model from the datasource.
 * @export removeTest
 * @param {object} req - The express request.
 * @param {object} res - The express response.
 * @param {object} next - The express next.
 */
export default function(req, res, next) {
  const id = req.params.id;
  service
      .removeOne(id,
          {
            db: this.db,
            request: req,
          })
      .then((result) => {
        if (result.rowCount) {
          res.status(200).json({
            status: 'success',
            rows: result.rowCount,
          });
        } else {
          next(
              new Problem(400, 'Delete Failed', {
                error: 'Requested object doesn\'t exist.',
              }),
          );
        }
      })
      .catch((err) => {
        return next(err);
      });
}
