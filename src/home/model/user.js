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
        username: { //全名
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
                return new Date().getDate()
            },
            readonly: true //只读，添加后不可修改
        },
        del_state: {
            default: () => { //0 存在 1 删除
                return 0
            }
        }
    }

    getUserList() {

    }


}