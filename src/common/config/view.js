'use strict';
/**
 * template config
 */
export default {
  type: 'nunjucks',
  content_type: 'text/html',
  file_ext: '.html',
  file_depr: '_',
  root_path: think.ROOT_PATH + '/view',
  adapter: {
    ejs: {},
    nunjucks: {
      trimBlocks: false, //不转义
      prerender: function(nunjucks, env){} //针对nunjucks模板的过滤器
    }
  }
};