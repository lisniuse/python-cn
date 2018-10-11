'use strict';

const Controller = require('egg').Controller;
const fs = require('fs-extra');
const path = require('path');

const replacePath = function(html) {
  html = html.replace(/"_static/g, '"/public/_static');
  html = html.replace(/"..\/_static/g, '"/public/_static');
  return html;
}

class HomeController extends Controller {
  async index() {
    const { ctx, service, config } = this;
    let path = "/index.html";
    if ( ctx.path === "/" || ctx.path === "\\" ) {
      path = "/index.html";
    } else {
      path = ctx.path;
    }
    let fileContent = fs.readFileSync("html-document/python-3.7.1rc1-docs-html" + path, 'utf-8');
    fileContent = replacePath(fileContent);
    ctx.body = fileContent;
  }
}

module.exports = HomeController;
