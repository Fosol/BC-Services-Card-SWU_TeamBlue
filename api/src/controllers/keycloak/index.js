import getUserInfo from './getUserInfo';

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
    this.getUserInfo = getUserInfo.bind(this);
  }
}
