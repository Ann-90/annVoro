!function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=46)}([function(t,r,e){(function(r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r&&r)||function(){return this}()||Function("return this")()}).call(this,e(20))},function(t,r,e){var n=e(3);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r){var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,e){var n=e(1),o=e(7),i=e(12);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},function(t,r,e){var n=e(22),o=e(24);t.exports=function(t){return n(o(t))}},function(t,r,e){var n=e(1),o=e(14),i=e(15),u=e(13),a=Object.defineProperty;r.f=n?a:function(t,r,e){if(i(t),r=u(r,!0),i(e),o)try{return a(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},function(t,r,e){var n=e(0),o=e(5);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},function(t,r,e){var n=e(0),o=e(8),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,e){var n=e(19),o=e(1);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:e(7).f})},function(t,r,e){var n=e(1),o=e(21),i=e(12),u=e(6),a=e(13),c=e(2),f=e(14),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(t,r){if(t=u(t),r=a(r,!0),f)try{return s(t,r)}catch(t){}if(c(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,e){var n=e(4);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r,e){var n=e(1),o=e(3),i=e(25);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,e){var n=e(4);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,e){var n=e(9),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,r){t.exports={}},function(t,r){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},function(t,r,e){var n=e(0),o=e(11).f,i=e(5),u=e(26),a=e(8),c=e(33),f=e(44);t.exports=function(t,r){var e,s,l,p,h,v=t.target,y=t.global,d=t.stat;if(e=y?n:d?n[v]||a(v,{}):(n[v]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(h=o(e,s))&&h.value:e[s],!f(y?s:v+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,r,e){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:n},function(t,r,e){var n=e(3),o=e(23),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,e){var n=e(0),o=e(4),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,r,e){var n=e(0),o=e(5),i=e(2),u=e(8),a=e(16),c=e(27),f=c.get,s=c.enforce,l=String(String).split("String");(t.exports=function(t,r,e,a){var c,f=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(c=s(e)).source||(c.source=l.join("string"==typeof r?r:""))),t!==n?(f?!h&&t[r]&&(p=!0):delete t[r],p?t[r]=e:o(t,r,e)):p?t[r]=e:u(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},function(t,r,e){var n,o,i,u=e(28),a=e(0),c=e(4),f=e(5),s=e(2),l=e(9),p=e(29),h=e(17),v=a.WeakMap;if(u){var y=l.state||(l.state=new v),d=y.get,g=y.has,m=y.set;n=function(t,r){return r.facade=t,m.call(y,t,r),r},o=function(t){return d.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var w=p("state");h[w]=!0,n=function(t,r){return r.facade=t,f(t,w,r),r},o=function(t){return s(t,w)?t[w]:{}},i=function(t){return s(t,w)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!c(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,r,e){var n=e(0),o=e(16),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,r,e){var n=e(30),o=e(32),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r,e){var n=e(31),o=e(9);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.8.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,r){t.exports=!1},function(t,r){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},function(t,r,e){var n=e(2),o=e(34),i=e(11),u=e(7);t.exports=function(t,r){for(var e=o(r),a=u.f,c=i.f,f=0;f<e.length;f++){var s=e[f];n(t,s)||a(t,s,c(r,s))}}},function(t,r,e){var n=e(35),o=e(37),i=e(43),u=e(15);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(u(t)),e=i.f;return e?r.concat(e(t)):r}},function(t,r,e){var n=e(36),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},function(t,r,e){var n=e(0);t.exports=n},function(t,r,e){var n=e(38),o=e(42).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,r,e){var n=e(2),o=e(6),i=e(39).indexOf,u=e(17);t.exports=function(t,r){var e,a=o(t),c=0,f=[];for(e in a)!n(u,e)&&n(a,e)&&f.push(e);for(;r.length>c;)n(a,e=r[c++])&&(~i(f,e)||f.push(e));return f}},function(t,r,e){var n=e(6),o=e(40),i=e(41),u=function(t){return function(r,e,u){var a,c=n(r),f=o(c.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,r,e){var n=e(18),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,r,e){var n=e(18),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,e){var n=e(3),o=/#|\.prototype\./,i=function(t,r){var e=a[u(t)];return e==f||e!=c&&("function"==typeof r?n(r):!!r)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,r,e){var n=function(t){"use strict";var r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",u=n.toStringTag||"@@toStringTag";function a(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{a({},"")}catch(t){a=function(t,r,e){return t[r]=e}}function c(t,r,e,n){var o=r&&r.prototype instanceof l?r:l,i=Object.create(o.prototype),u=new j(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var u=e.delegate;if(u){var a=b(u,e);if(a){if(a===s)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=f(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,u),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function l(){}function p(){}function h(){}var v={};v[o]=function(){return this};var y=Object.getPrototypeOf,d=y&&y(y(E([])));d&&d!==r&&e.call(d,o)&&(v=d);var g=h.prototype=l.prototype=Object.create(v);function m(t){["next","throw","return"].forEach((function(r){a(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){var n;this._invoke=function(o,i){function u(){return new r((function(n,u){!function n(o,i,u,a){var c=f(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,u,a)}),(function(t){n("throw",t,u,a)})):r.resolve(l).then((function(t){s.value=t,u(s)}),(function(t){return n("throw",t,u,a)}))}a(c.arg)}(o,i,n,u)}))}return n=n?n.then(u,u):u()}}function b(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,b(t,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function x(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=g.constructor=h,h.constructor=p,p.displayName=a(h,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var u=new w(c(r,e,n,o),i);return t.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},m(g),a(g,u,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return u.type="throw",u.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(a&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,r,e){"use strict";e.r(r);e(10),e(45);var n,o=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"==typeof t&&u.test(t)},c=[],f=0;f<256;++f)c.push((f+256).toString(16).substr(1));var s=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=(c[t[r+0]]+c[t[r+1]]+c[t[r+2]]+c[t[r+3]]+"-"+c[t[r+4]]+c[t[r+5]]+"-"+c[t[r+6]]+c[t[r+7]]+"-"+c[t[r+8]]+c[t[r+9]]+"-"+c[t[r+10]]+c[t[r+11]]+c[t[r+12]]+c[t[r+13]]+c[t[r+14]]+c[t[r+15]]).toLowerCase();if(!a(e))throw TypeError("Stringified UUID is invalid");return e};var l=function(t,r,e){var n=(t=t||{}).random||(t.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,r){e=e||0;for(var o=0;o<16;++o)r[e+o]=n[o];return r}return s(n)};function p(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}var v=function(){function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,"userId",null)}var r,e,n;return r=t,(e=[{key:"generateUserId",value:function(){var r=localStorage.getItem(t.STORAGE_USER_ID);if(!r){var e=l();localStorage.setItem(t.STORAGE_USER_ID,e),r=e}this.userId=r}}])&&p(r.prototype,e),n&&p(r,n),t}();function y(t,r,e,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?r(c):Promise.resolve(c).then(n,o)}function d(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function u(t){y(i,n,o,u,a,"next",t)}function a(t){y(i,n,o,u,a,"throw",t)}u(void 0)}))}}function g(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}h(v,"STORAGE_USER_ID","agents_user_id");var m=function t(r){var e=this,n=r.sourceType;!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"sourceType",void 0),g(this,"userCredentials",void 0),g(this,"save",d(regeneratorRuntime.mark((function t(){var r,n,o,i=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=i.length>0&&void 0!==i[0]?i[0]:{},n=r.userId,o=r.extra,void 0===o?{}:o,n?e.userCredentials.userId=n:e.userCredentials.generateUserId();case 2:case"end":return t.stop()}}),t)})))),this.sourceType=n,this.userCredentials=new v};window.MetaAgent=m}]);