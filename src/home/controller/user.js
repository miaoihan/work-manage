'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }

    async addAction() {
        if (this.isGet()) {
            return this.display()
        }
        let model = this.model('user')
        let id = this.post('id')
        //if is old
        if (id) {
            await model.where({ id: id }).update({
                name: this.post('name'),
                password: this.post('password')
            })
            return this.redirect('find')
        }
        //if is new
        if (await model.add({
                name: this.post('name'),
                password: this.post('password')
            })) {
            // this.findAction()
            this.redirect('find')
        } else {
            this.assign('info', 'error')
        }
    }

    async editAction() {
        let model = this.model('user')
        let user = model.where({ id: this.get('id') }).find()
        if (this.isGet()) {
            this.assign('user', user)
            return this.display('add')
        }
        let id = this.get('id')
        let result = await model.where({ id: id }).upadte({
            name: this.post('name'),
            password: this.post('password')
        })
    }

    async deleteAction() {
        console.log(66666);
        let user = this.model('user')
        let id = this.get('id')
            //返回影响的行数
        let result = await user.where({ id: id }).delete()
        if (result) {
            //self in the find url,so need another
            this.redirect('/user/find')
                // this.findAction()
        }
    }

    async findAction() {
        let user = this.model('user')
        let userList = await user.select()
        this.assign('userList', userList)
        return this.display('find')
    }

}