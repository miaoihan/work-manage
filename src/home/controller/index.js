'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    let question = this.model('question')
    let queList = await question.select()
    console.log(queList);
    this.assign('queList', queList)
    return this.display()
  }
}