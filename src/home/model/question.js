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
        u_id: { //全名
            default: function() { //first_name 和 last_name 的组合，这里不能用 Arrows Function
                return null
            }
        },
        title: { //全名
            default: function() { //first_name 和 last_name 的组合，这里不能用 Arrows Function
                return null
            }
        },
        content: { //全名
            default: function() { //first_name 和 last_name 的组合，这里不能用 Arrows Function
                return null
            }
        },
        a_id: { //全名
            default: function() { //first_name 和 last_name 的组合，这里不能用 Arrows Function
                return null
            }
        },
        del_state: { //全名
            default: function() { //first_name 和 last_name 的组合，这里不能用 Arrows Function
                return 1
            }
        },
        created_time: { //创建时间
            default: () => { //获取当前时间
                return moment().format("YYYY-MM-DD HH:mm:ss")
            },
            readonly: true //只读，添加后不可修改
        }
    }


}