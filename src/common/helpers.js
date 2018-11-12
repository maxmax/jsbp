import {documentApp} from '../services/globalService';

// const APP = documentApp || global.document;
const APP = documentApp;

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
    this.init = global.document.getElementById(selector);
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

/**
 * Returns changed content from a HTML string by selector
 *
 * @param {html} String The html string
 * selectorUpdate({
 *   selector: document.querySelector('[data-app-feed]'),
 *   state: '<div>innerHTML</div>'
 * })
 */

export const selectorUpdate = (props) => {
  const {selector, state} = props;
  return selector.innerHTML = state;
}

/**
 * Returns the text from a HTML string
 *
 * @param {html} String The html string
 * const htmlString= "<div><h1>Hello World</h1>\n<p>It's me</p></div>";
 * console.log('stripHtml====================stripHtml', stripHtml(htmlString));
 */

export function stripHtml(html){
  // Create a new div element
  const temporalDivElement = document.createElement("div");
  // Set the HTML content with the providen
  temporalDivElement.innerHTML = html;
  // Retrieve the text property of the element (cross-browser support)
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

/**
 * Returns the obj from a HTML string
 *
 * @param {html} String The html string
 * https://w3c.github.io/DOM-Parsing/
 * ConvertHtmlToDom(bhtml).getElementsByTagName('ul')
 */

export const ConvertHtmlToDom = (html) => {
  const parser = new DOMParser();
  const result = parser.parseFromString(html, "text/html");
  return result;
}
