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
        content: { //回复内容
            default: function() { 
                return null
            }
        },
        q_id: { //问题的id
            default: function() { 
                return null
            }
        },
        a_id: { //回复的回复
            default: function() { 
                return null
            }
        },
        del_state: { 
            default: function() { 
                return 0
            }
        },
        created_time: { //创建时间
            default: () => { //获取当前时间
                // return moment().format("YYYY-MM-DD HH:mm:ss")
                return Date.parse(new Date())
            },
            readonly: true //只读，添加后不可修改
        }
    }

    getUserList() {

    }


}