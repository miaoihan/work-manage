/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 * 
 * global.fn1 = function(){
 *     
 * }
 */

import moment from 'moment';

global.parseTime = function(timestamp){
    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
}