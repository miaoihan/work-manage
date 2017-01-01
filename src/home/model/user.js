'use strict';
/**
 * model
 */
import moment from 'moment'
export default class extends think.model.base {
    /**
     * 数据表字段定义
     * @type {Object}
     */
    schema = {
        name: { //全名
            default: function() { //first_name 和 last_name 的组合，这里不能用 Arrows Function
                return '';
            }
        },
        password: { //全名
            default: function() { //first_name 和 last_name 的组合，这里不能用 Arrows Function
                return '';
            }
        },
        created_time: { //创建时间
            default: () => { //获取当前时间
                return moment().format("YYYY-MM-DD HH:mm:ss")
            },
            readonly: true //只读，添加后不可修改
        }
    }

    getUserList() {

    }


}