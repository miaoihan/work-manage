'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async answerAction() {
        let answer = this.model('answer')
        let content = this.post('content')
        let q_id = this.post('qid')
        if (await answer.add({  
                content: content,
                q_id: q_id
            })) {
            // this.findAction()
            this.redirect(`/question/details?id=${q_id}`)
        } else {
            this.assign('info', 'error')
        }
    }
}