/* eslint-disable no-invalid-this */
import * as service from '../../services/user';
import Problem from 'api-problem';

/**
 * TestController.updateTest endpoint.
 * Makes a request to the datasource to update the specified model.
 * @export updateTest
 * @param {object} req - The express request.
 * @param {object} res - The express response.
 * @param {object} next - The express next.
 * @return {void}
 */
export default function(req, res, next) {
  const id = req.params.id;
  const body = req.body;
  service
      .updateOne(this.db, id, body)
      .then((data) => {
        res.status(200).json({
          status: 'success',
          data: data,
        });
      })
      .catch((err) => {
        if (err.data && err.data[0] && !err.data[0].success) {
          return next(
              new Problem(400, 'Invalid Request', {
                error: 'The specified object does not exist.',
              }),
          );
        } else if (err.data && err.data[1] && !err.data[1].success) {
          return next(
              new Problem(400, 'Concurrency Error', {
                error: 'The specified object is not up-to-date',
              }),
          );
        }
        return next(err);
      });
}
