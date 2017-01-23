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

    async registerAction() {
        if (this.isGet()) {
            return this.display()
        }
        let model = this.model('user')
        let id = this.post('id')
        let user = this.post()

        let crypto = require('crypto');
        let password = this.post('password');
        let shasum = crypto.createHash('sha1');
        shasum.update(password);
        password = shasum.digest('hex');
        user.password = password
        //if is old
        if (id) {
            await model.where({ id: id }).update(user)
            return this.redirect('find')
        }
        //if is new
        if (await model.add(user)) {
            // this.findAction()
            this.redirect('/user/login')
        } else {
            this.assign('info', 'error')
        }
    }

    async loginAction() {
        if (this.isGet()) return this.display()
        let model = this.model('user')
        // let user = this.post()
        let username = this.post('username')
        let password = this.post('password');

        let crypto = require('crypto');
        let shasum = crypto.createHash('sha1');
        shasum.update(password);
        password = shasum.digest('hex');
        
        let user = await model.where({ username: username, password: password }).find()
        this.session("user",user);
        console.log(user);
        if(think.isEmpty(user)){
            console.log(888888888888);
            this.assign('info', '用户名或密码错误')
            return this.display()
        }
        this.assign('user', user)
        return this.redirect('/')
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
            username: this.post('username'),
            password: this.post('password')
        })
    }

    async deleteAction() {
        // console.log(66666);
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