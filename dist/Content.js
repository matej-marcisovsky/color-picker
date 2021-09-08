(function () {
  'use strict';

  var n,l,u,t,o$1,r,e$1={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n);}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null!=l.vnode&&l.vnode(f),f}function p(){return {current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l;}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o$1)(g);}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)));});}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null;}j(n,_,p=p||e$1,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&null!=_.__k&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&p.__e==s&&s.parentNode!=n&&(s=k(p));}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h]);}function x(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?x(t,l,u):P(u,t,t,n.__k,t.__e,l));return l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else {for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o;}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i);}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px";}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l));}}function I(n){this.l[n.type+!1](l.event?l.event(n):n);}function T(n){this.l[n.type+!0](l.event?l.event(n):n);}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u);}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k);});}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u);}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i);}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l.__e(n,u.__v);}});}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&(s===l||(d?s.localName==d:3==s.nodeType))){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1;}if(null===d)y===p||c&&l.data===p||(l.data=p);else {if(r=r&&n.call(l.childNodes),a=(y=i.props||e$1).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""));}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1));}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u;}catch(n){l.__e(n,i);}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(n){l.__e(n,u);}t.base=t.__P=null;}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0;}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e$1,e$1,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u);}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l;}throw n}},u=0,_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this));},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this));},_.prototype.render=d,t=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0;

  var o=0;function e(_,e,n,t,f){var l$1,s,u={};for(s in e)"ref"==s?l$1=e[s]:u[s]=e[s];var a={type:_,props:u,key:n,ref:l$1,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:t,__self:f};if("function"==typeof _&&(l$1=_.defaultProps))for(s in l$1)void 0===u[s]&&(u[s]=l$1[s]);return l.vnode&&l.vnode(a),a}

  var Action;
  (function (Action) {
      Action[Action["Capture"] = 0] = "Capture";
      Action[Action["Toggle"] = 1] = "Toggle";
  })(Action || (Action = {}));
  var Action$1 = Action;

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  /* eslint-disable no-undefined,no-param-reassign,no-shadow */

  /**
   * Throttle execution of a function. Especially useful for rate limiting
   * execution of handlers on events like resize and scroll.
   *
   * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
   * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
   *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
   *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
   *                                    the internal counter is reset).
   * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
   *                                    to `callback` when the throttled-function is executed.
   * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
   *                                    schedule `callback` to execute after `delay` ms.
   *
   * @returns {Function}  A new, throttled, function.
   */
  function throttle (delay, noTrailing, callback, debounceMode) {
    /*
     * After wrapper has stopped being called, this timeout ensures that
     * `callback` is executed at the proper times in `throttle` and `end`
     * debounce modes.
     */
    var timeoutID;
    var cancelled = false; // Keep track of the last time `callback` was executed.

    var lastExec = 0; // Function to clear existing timeout

    function clearExistingTimeout() {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
    } // Function to cancel next exec


    function cancel() {
      clearExistingTimeout();
      cancelled = true;
    } // `noTrailing` defaults to falsy.


    if (typeof noTrailing !== 'boolean') {
      debounceMode = callback;
      callback = noTrailing;
      noTrailing = undefined;
    }
    /*
     * The `wrapper` function encapsulates all of the throttling / debouncing
     * functionality and when executed will limit the rate at which `callback`
     * is executed.
     */


    function wrapper() {
      for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
        arguments_[_key] = arguments[_key];
      }

      var self = this;
      var elapsed = Date.now() - lastExec;

      if (cancelled) {
        return;
      } // Execute `callback` and update the `lastExec` timestamp.


      function exec() {
        lastExec = Date.now();
        callback.apply(self, arguments_);
      }
      /*
       * If `debounceMode` is true (at begin) this is used to clear the flag
       * to allow future `callback` executions.
       */


      function clear() {
        timeoutID = undefined;
      }

      if (debounceMode && !timeoutID) {
        /*
         * Since `wrapper` is being called for the first time and
         * `debounceMode` is true (at begin), execute `callback`.
         */
        exec();
      }

      clearExistingTimeout();

      if (debounceMode === undefined && elapsed > delay) {
        /*
         * In throttle mode, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      } else if (noTrailing !== true) {
        /*
         * In trailing throttle mode, since `delay` time has not been
         * exceeded, schedule `callback` to execute `delay` ms after most
         * recent execution.
         *
         * If `debounceMode` is true (at begin), schedule `clear` to execute
         * after `delay` ms.
         *
         * If `debounceMode` is false (at end), schedule `callback` to
         * execute after `delay` ms.
         */
        timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
      }
    }

    wrapper.cancel = cancel; // Return the wrapper function.

    return wrapper;
  }

  /* eslint-disable no-undefined */
  /**
   * Debounce execution of a function. Debouncing, unlike throttling,
   * guarantees that a function is only executed a single time, either at the
   * very beginning of a series of calls, or at the very end.
   *
   * @param  {number}   delay -         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
   * @param  {boolean}  [atBegin] -     Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
   *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
   *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
   * @param  {Function} callback -      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
   *                                  to `callback` when the debounced-function is executed.
   *
   * @returns {Function} A new, debounced function.
   */

  function debounce (delay, atBegin, callback) {
    return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
  }

  class Color {
      constructor(r, g, b) {
          this.r = r;
          this.g = g;
          this.b = b;
      }
      toRgb() {
          const { r, g, b } = this;
          return `rgb(${r}, ${g}, ${b})`;
      }
      toHex() {
          const { r, g, b } = this;
          let hex = `#${this.decToHex(r)}${this.decToHex(g)}${this.decToHex(b)}`;
          return hex;
      }
      decToHex(number) {
          return number.toString(16).padStart(2, '0');
      }
  }

  class Canvas {
      constructor(width, height) {
          this.canvas = document.createElement('canvas');
          this.width = width;
          this.height = height;
      }
      get width() {
          return this.canvas.width;
      }
      set width(value) {
          this.canvas.width = value;
      }
      get height() {
          return this.canvas.height;
      }
      set height(value) {
          this.canvas.height = value;
      }
      getColor(x, y) {
          const ctx = this.canvas.getContext('2d');
          const values = [...ctx.getImageData(x, y, 1, 1).data];
          return this.drawPromise.then(() => new Color(values[0], values[1], values[2]));
      }
      setDataUrl(dataUrl) {
          const img = document.createElement('img');
          this.drawPromise = new Promise((resolve) => {
              img.onload = () => {
                  const ctx = this.canvas.getContext('2d');
                  ctx.drawImage(img, 0, 0, this.width, this.height);
                  resolve();
              };
          });
          img.src = dataUrl;
      }
  }

  const BAR_WIDTH = 512;
  const BAR_HEIGHT = 48;
  const PREVIEW_SIZE = BAR_HEIGHT;

  const MARGIN = 16;
  const PADDING = 8;
  class Bar extends _ {
      render() {
          const style = {
              position: 'absolute',
              top: '0',
              left: `calc(50% - (${BAR_WIDTH}px / 2))`,
              display: 'flex',
              borderRadius: '6px',
              padding: `${PADDING}px`,
              width: `${BAR_WIDTH}px`,
              height: `${BAR_HEIGHT}px`,
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'white',
              boxSizing: 'content-box',
              boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px',
              cursor: 'default',
              transform: `translateY(${MARGIN}px)`,
              transition: 'transform 250ms ease'
          };
          if (this.props.isDown) {
              style.transform = `translateY(${window.innerHeight - BAR_HEIGHT - MARGIN - 2 * PADDING}px)`;
          }
          else {
              style.transform = `translateY(${MARGIN}px)`;
          }
          return (e("div", Object.assign({ style: style }, { children: this.props.children }), void 0));
      }
  }

  class Preview$1 extends _ {
      render() {
          return (e("button", Object.assign({ style: Object.assign({
                  color: 'rgb(55, 65, 81)',
                  fontFamily: 'monospace',
                  fontSize: '16px',
                  margin: '0',
                  padding: '0',
                  border: '0',
                  background: 'transparent',
                  cursor: 'pointer'
              }, this.props.style), onClick: (event) => this.props.onClick(event) }, { children: this.props.children }), void 0));
      }
  }

  class Preview extends _ {
      render() {
          return (e("div", { style: {
                  borderRadius: '50%',
                  width: `${PREVIEW_SIZE}px`,
                  height: `${PREVIEW_SIZE}px`,
                  boxShadow: 'rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px',
                  background: this.props.color
              } }, void 0));
      }
  }

  const DEBOUNCE_DELAY = 250;
  class App extends _ {
      constructor(props) {
          super(props);
          this.barRef = p();
          this.isMoving = false;
          this.canvas = new Canvas(window.innerWidth, window.innerHeight);
          this.debouncedOnScroll = debounce(DEBOUNCE_DELAY, () => this.capture());
          this.debouncedOnResize = debounce(DEBOUNCE_DELAY, () => this.onResize());
          this.boundedOnTransitionEnd = this.onTransitionEnd.bind(this);
          this.capture();
          this.state = {
              color: new Color(0, 0, 0),
              isDown: false
          };
      }
      componentDidMount() {
          window.addEventListener('scroll', this.debouncedOnScroll);
          window.addEventListener('resize', this.debouncedOnResize);
      }
      componentWillUnmount() {
          window.removeEventListener('scroll', this.debouncedOnScroll);
          window.removeEventListener('resize', this.debouncedOnResize);
      }
      render() {
          return (e("div", Object.assign({ style: {
                  position: 'fixed',
                  top: '0',
                  left: '0',
                  width: '100vw',
                  height: '100vh',
                  zIndex: '9999',
                  cursor: 'crosshair'
              }, onClick: (event) => this.onClick(event), onMouseDown: (event) => this.onMouseDownOrUp(event, true), onMouseUp: (event) => this.onMouseDownOrUp(event, false), onMouseMove: (event) => this.onMouseMove(event) }, { children: e(Bar, Object.assign({ isDown: this.state.isDown, ref: this.barRef }, { children: [e(Preview, { color: this.state.color.toHex() }, void 0), e(Preview$1, Object.assign({ style: { width: '7ch' }, onClick: (event) => this.onCopyClick(event, this.state.color.toHex()) }, { children: this.state.color.toHex() }), void 0), e(Preview$1, Object.assign({ style: { width: '18ch' }, onClick: (event) => this.onCopyClick(event, this.state.color.toRgb()) }, { children: this.state.color.toRgb() }), void 0), e("div", { children: [e(Preview$1, Object.assign({ style: { fontSize: '24px', marginRight: '8px' }, onClick: (event) => this.onMove(event) }, { children: '\u{021c5}' }), void 0), e(Preview$1, Object.assign({ style: { fontSize: '24px' }, onClick: this.props.onDeactivate }, { children: '\u{02a2f}' }), void 0)] }, void 0)] }), void 0) }), void 0));
      }
      onClick(event) {
          var _a;
          event.preventDefault();
          const { base: barElm } = (_a = this.barRef) === null || _a === void 0 ? void 0 : _a.current;
          if (!barElm || barElm === event.target || barElm.contains(event.target)) {
              return;
          }
          this.getColor(event.clientX, event.clientY);
      }
      onCopyClick(event, text) {
          event.preventDefault();
          navigator.clipboard.writeText(text);
      }
      onMouseDownOrUp(event, isMoving) {
          event.preventDefault();
          this.isMoving = isMoving;
      }
      onMouseMove(event) {
          if (!this.isMoving) {
              return;
          }
          event.preventDefault();
          this.getColor(event.clientX, event.clientY);
      }
      onMove(event) {
          var _a;
          event.preventDefault();
          const { base: barElm } = (_a = this.barRef) === null || _a === void 0 ? void 0 : _a.current;
          if (!barElm) {
              return;
          }
          barElm.addEventListener('transitionend', this.boundedOnTransitionEnd);
          this.setState({
              isDown: !this.state.isDown
          });
      }
      onResize() {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
          this.capture();
      }
      onTransitionEnd() {
          var _a;
          const { base: barElm } = (_a = this.barRef) === null || _a === void 0 ? void 0 : _a.current;
          if (!barElm) {
              return;
          }
          this.capture();
          barElm.removeEventListener('transitionend', this.boundedOnTransitionEnd);
      }
      capture() {
          this.capturePromise = new Promise((resolve) => {
              chrome.runtime.sendMessage({ action: Action$1.Capture }, (dataUrl) => {
                  this.canvas.setDataUrl(dataUrl);
                  resolve();
              });
          });
      }
      getColor(x, y) {
          this.capturePromise.then(() => __awaiter(this, void 0, void 0, function* () {
              this.setState({
                  color: yield this.canvas.getColor(x, y)
              });
          }));
      }
  }

  let active = false;
  let placeholder = null;
  let root = null;
  function activate() {
      active = true;
      placeholder = document.createElement('div');
      document.body.appendChild(placeholder);
      root = S(e(App, { onDeactivate: deactivate }, void 0), placeholder);
  }
  function deactivate() {
      active = false;
      S(null, placeholder, root);
      document.body.removeChild(placeholder);
  }
  activate();
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action === Action$1.Toggle) {
          active ? deactivate() : activate();
      }
      sendResponse(true);
  });

}());
