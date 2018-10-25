import {documentApp} from '../services/globalService';
// Helprers

const APP = documentApp || document;
// New element

function attr(el, at, value){
	at = {'for': 'htmlFor', 'class': 'class'}[at] || at;
  if(!value){
    return el[at] || el.getAttribute(at) || '';
  }else{
    if(at == 'style'){el.style.cssText = value; return;}
    el[at] = value;
    if (el.setAttribute)	el.setAttribute(at, value);
	}
}

export function newElement(tag = "div", params) {
  params = params || {};
  var elem = APP.createElementNS
    ? APP.createElementNS('http://www.w3.org/1999/xhtml', tag)
    : APP.createElement(tag);

  for (var pr in params) {
    attr(elem, pr, params[pr]);
  }

  return elem;
}

// Append element

export function appendElement(el, where){
	(where || APP.body).appendChild(el);
  // where.appendChild(el);
}

// get Element

export function getEl(id) {
	return APP.getElementById(id);
}

// Fluent interface | $('div').text('div').css({color: "red"});
const $ = function(selector) {
  if(this.$) {
    return new $(selector);
  }
  if(typeof selector == "string") {
    this.init = document.getElementById(selector);
  }
};

$.prototype = {
  text: function(text) {
    if(!text){
      this.init.innerHTML;
    }
    this.init.innerHTML = text;
    return this;
  },
  css: function(style) {
    for(var i in style){
      this.init.style[i] = style[i];
    }
    return this;
  }
};
