import getMany from './getMany';
import getOne from './getOne';
import updateOne from './updateOne';
import removeOne from './removeOne';

/**
 * @export Controller
 * @class Controller
 */
export default class Controller {
  /**
   *Creates an instance of Controller.
   * @param {*} db
   * @memberof Controller
   */
  constructor(db) {
    this.db = db;
    this.getMany = getMany.bind(this);
    this.getOne = getOne.bind(this);
    this.updateOne = updateOne.bind(this);
    this.removeOne = removeOne.bind(this);
  }
}
