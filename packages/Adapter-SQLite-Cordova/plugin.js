!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";(function(t){function n(t,n,i){e.setFast(function(){var e;try{e=n.apply(null,i)}catch(e){return b._reject(t,e)}return e===t?b._reject(t,new TypeError):b._resolve(t,e),null})}function i(t){var e=t&&t.then;return!t||"object"!=typeof t&&"function"!=typeof t||"function"!=typeof e?null:function(){e.apply(t,arguments)}}function r(t,e){function n(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];s||(s=!0,b._reject(t,e))}function i(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];s||(s=!0,b._resolve(t,e))}function r(){e(i,n)}var s=!1,a=o(r);"error"===a._status&&n(a._value)}function o(t,e){var n={_status:null,_value:null};try{n._value=t(e),n._status="success"}catch(t){n._status="error",n._value=t}return n}Object.defineProperty(e,"__esModule",{value:!0});var s=0,a={},u=Array.prototype.slice,c="undefined"!=typeof window&&window.postMessage&&window.addEventListener,f=function(t){return t[0].apply(null,u.call(t,1))},l=function(t){var e,n=t.data;"string"==typeof n&&0===n.indexOf("setMsg")&&(e=a[n])&&(delete a[n],f(e))};c&&window.addEventListener("message",l);var d=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=s++,i="setMsg"+n;return a[i]=t,window.postMessage(i,"*"),n};e.setFast=function(){return c?d:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];setTimeout(function(){f(t)},0)}}();var h=function(){},p=["R"],_=["F"],g=["P"],y=function(){function e(t){this._state=g,this._queue=[],this._outcome=void 0,t!==h&&r(this,t)}return e.doPolyFill=function(){void 0!==t&&(t.Promise||(t.Promise=this)),"undefined"!=typeof window&&(window.Promise||(window.Promise=this))},e.prototype.catch=function(t){return this.then(function(){},t)},e.prototype.then=function(t,i){if("function"!=typeof t&&this._state===_||"function"!=typeof i&&this._state===p)return this;var r=new e(h);if(this._state!==g){n(r,this._state===_?t:i,this._outcome)}else this._queue.push(new v(r,t,i));return r},e.resolve=function(t){return t instanceof this?t:b._resolve(new e(h),t)},e.reject=function(t){return b._reject(new e(h),t)},e.all=function(t){return new e(function(e,n){var i=[];if(!t.length)return void e([]);for(var r=function(n,r,o){void 0!==o?i.push(o):i.push(r),i.length==t.length&&e(i)},o=0;o<t.length;o++)!function(e){t[e].then(function(t){r(0,t,void 0)}).catch(function(t){r(0,void 0,t)})}(o)})},e.race=function(t){var n=this,i=t.length,r=!1,o=-1,s=new e(h);if(!1!==Array.isArray(t))return this.reject(new TypeError);if(!i)return this.resolve([]);for(;++o<i;)!function(t){n.resolve(t).then(function(t){r||(r=!0,b._resolve(s,t))},function(t){r||(r=!0,b._reject(s,t))})}(t[o]);return s},e}();e.Promise=y;var v=function(){function t(t,e,n){this._promise=t,"function"==typeof e&&(this._onFulfilled=e,this._callFulfilled=this._otherCallFulfilled),"function"==typeof n&&(this._onRejected=n,this._callRejected=this._otherCallRejected)}return t.prototype._callFulfilled=function(t){b._resolve(this._promise,t)},t.prototype._otherCallFulfilled=function(t){n(this._promise,this._onFulfilled,t)},t.prototype._callRejected=function(t){b._reject(this._promise,t)},t.prototype._otherCallRejected=function(t){n(this._promise,this._onRejected,t)},t}();e._QueueItem=v;var b=function(){function t(){}return t._resolve=function(e,n){var s=o(i,n),a=s._value,u=-1,c=e._queue.length;if("error"===s._status)return t._reject(e,s._value);if(a)r(e,a);else for(e._state=_,e._outcome=n;++u<c;)e._queue[u]._callFulfilled(n);return e},t._reject=function(t,e){t._state=p,t._outcome=e;for(var n=-1,i=t._queue.length;++n<i;)t._queue[n]._callRejected(e);return t},t}()}).call(e,n(1))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),r=n(6);n(0).Promise.doPolyFill(),e.stopWords=["a","about","after","all","also","am","an","and","andor","another","any","are","as","at","be","because","been","before","being","between","both","but","by","came","can","come","could","did","do","each","for","from","get","got","had","has","have","he","her","here","him","himself","his","how","i","if","in","into","is","it","like","make","many","me","might","more","most","much","must","my","never","now","of","on","only","or","other","our","out","over","said","same","see","should","since","some","still","such","take","than","that","the","their","them","then","there","these","they","this","those","through","to","too","under","up","very","was","way","we","well","were","what","where","which","while","who","with","would","you","your"],e._assign=function(t){return t?JSON.parse(JSON.stringify(t)):null},e.splitArr=function(t,e){for(var n=t.length%e,i=n,r=Math.floor(t.length/e),o=[],s=0;s<t.length;s+=r){var a=r+s,u=!1;0!==n&&i&&(a++,i--,u=!0),o.push(t.slice(s,a)),u&&s++}return o},e.fastCHAIN=function(t,n){return new Promise(function(i,r){if(!t||!t.length)return void i([]);var o=[],s=!1,a=function(){if(o.length<t.length)n(t[o.length],o.length,function(t){o.push(t),o.length%100==0?e.setFast(a):a()},function(t){s=!0,r(t)});else{if(s)return;i(o)}};a()})},e.fastRACE=function(t,e){return new Promise(function(n,i){if(!t||!t.length)return void n([]);var r=!1,o=0,s=function(){o<t.length&&(e(t[o],o,function(t){r||(r=!0,n([t]))},function(t){r||(r=!0,i(t))}),o++,s())};s()})},e.fastALL=function(t,e){return Promise.all((t||[]).map(function(t,n){return new Promise(function(i,r){e(t,n,i,r)})}))};var o="undefined"==typeof window?"":navigator.userAgent||"";e.isSafari=0!==o.length&&(/^((?!chrome|android).)*safari/i.test(o)||/iPad|iPhone|iPod/.test(o)&&!window.MSStream),e.isMSBrowser=0!==o.length&&(o.indexOf("MSIE ")>0||o.indexOf("Trident/")>0||o.indexOf("Edge/")>0),e.isAndroid=/Android/.test(o),e.random16Bits=function(){if("undefined"==typeof crypto)return Math.round(Math.random()*Math.pow(2,16));if(crypto.getRandomValues){var e=new Uint16Array(1);return crypto.getRandomValues(e),e[0]}return void 0!==t&&t._crypto.randomBytes?t._crypto.randomBytes(2).reduce(function(t,e){return e*t}):Math.round(Math.random()*Math.pow(2,16))},e.tokenizer=function(t,n,o,s,a){var u=function(t){return!t||(1===String(t).length||-1!==e.stopWords.indexOf(t))},c=(s||"").toLowerCase().replace(/(\d+)\/(\d+)|(?:\d+(?:,\d+)*|\d+)(?:\.\d+)?/gim,function(t,e,n){return e||n?(parseInt(e)/parseInt(n)).toFixed(a||4):parseFloat(t.replace(/\,/gim,"")).toFixed(a||4)}).replace(/\-|\_|\[|\]|\(|\)|\{|\}|\r?\n|\r|\t/gim," ").replace(/[^\w\s]|(\d\.)/gim,"$1").replace(/\s+/g," ").split(" ");switch(o[1]){case"english":return c.map(function(t,e){return{i:e,o:t,w:isNaN(t)?u(t)?"":i(r(t)):t}});case"english-stem":return c.map(function(t,e){return{i:e,o:t,w:isNaN(t)?u(t)?"":r(t):t}});case"english-meta":return c.map(function(t,e){return{i:e,o:t,w:isNaN(t)?u(t)?"":i(t):t}})}return c.map(function(t,e){return{o:t,w:t,i:e}})},e.timeid=function(t){for(var n=Math.round((new Date).getTime()/(t?1:1e3)).toString();n.length<(t?13:10);)n="0"+n;return n+"-"+(e.random16Bits()+e.random16Bits()).toString(16)},e.intersect=function(t,e){return!(!t||!e)&&(!(!t.length||!e.length)&&(t||[]).filter(function(t){return-1!==(e||[]).indexOf(t)}).length>0)},e.uuid=function(){var t,n,i="";return[i,i,i,i,i,i,i,i].reduce(function(r,o,s){for(t=e.random16Bits(),n=3===s?4:4===s?(t%16&3|8).toString(16):i,t=t.toString(16);t.length<4;)t="0"+t;return r+([2,3,4,5].indexOf(s)>-1?"-":i)+(n+t).slice(0,4)},i)},e.hash=function(t){for(var e=5381,n=t.length;n;)e=33*e^t.charCodeAt(--n);return(e>>>0).toString(16)};var s={int:function(t){return t},uuid:e.uuid,timeId:function(){return e.timeid()},timeIdms:function(){return e.timeid(!0)}};e.generateID=function(t,e){return s[t]?s[t](e||1):""},e.cleanArgs=function(t,n){for(var i={},r=t.length;r--;){var o=t[r].split(":");o.length>1?i[o[0]]=e.cast(o[1],n[o[0]]||void 0):i[o[0]]=n[o[0]]||void 0}return i},e.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},e.cast=function(t,n){if("any"===t||"blob"===t)return n;var i=typeof n;if("undefined"===i||null===n)return n;var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},o=function(t,n){switch(t){case"safestr":return o("string",n).replace(/[&<>"'`=\/]/gim,function(t){return r[t]});case"int":return"number"!==i||n%1!=0?parseInt(n||0):n;case"number":case"float":return"number"!==i?parseFloat(n||0):n;case"any[]":case"array":return Array.isArray(n)?n:[];case"uuid":case"timeId":case"timeIdms":case"string":return"string"!==i?String(n):n;case"object":case"obj":case"map":return e.isObject(n)?n:{};case"boolean":case"bool":return!0===n}return n},s=o(String(t||"").toLowerCase(),n);if(-1!==t.indexOf("[]")){var a=t.slice(0,t.lastIndexOf("[]"));return(n||[]).map(function(t){return e.cast(a,t)})}return void 0!==s?["int","float","number"].indexOf(t)>-1&&isNaN(s)?0:s:void 0},e.binarySearch=function(t,n,i,r){var o=i||0,s=r||t.length;if(t[o]>n)return o;if(t[s]<n)return s+1;var a=Math.floor((o+s)/2);return n===t[a]?a:s-1===o?s:n>t[a]?e.binarySearch(t,n,a,s):n<t[a]?e.binarySearch(t,n,o,a):s},e.deepFreeze=function(t){return Object.getOwnPropertyNames(t||{}).forEach(function(n){var i=t[n];"object"==typeof i&&null!==i&&(t[n]=e.deepFreeze(i))}),Object.freeze(t)},e.crowDistance=function(t,e,n,i,r){void 0===r&&(r=6371);var o=function(t){return t*(Math.PI/180)},s=o(n-t),a=o(i-e),u=Math.sin(s/2)*Math.sin(s/2)+Math.cos(o(t))*Math.cos(o(n))*Math.sin(a/2)*Math.sin(a/2);return r*(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)))};var a={};e.objQuery=function(t,e,n){var i=function(t,e,n){return t[e]&&n?i(t,e+1,n[t[e]]):n},r=t+(n?"1":"0");if(a[r])return i(a[r],0,e);var o=[];if(o=t.indexOf("[")>-1?[].concat.apply([],t.split(".").map(function(t){return t.match(/([^\[]+)|\[([^\]]+)\]\[/gim)||t})).map(function(t){return t.replace(/\[|\]/gim,"")}):t.split("."),n){var s=o.shift()+"."+o.shift();o.unshift(s)}return a[r]=o,i(a[r],0,e)};var u=0,c={},f=Array.prototype.slice,l="undefined"!=typeof window&&window.postMessage&&window.addEventListener,d=function(t){return t[0].apply(null,f.call(t,1))},h=function(t){var e,n=t.data;"string"==typeof n&&0===n.indexOf("setMsg")&&(e=c[n])&&(delete c[n],d(e))};l&&window.addEventListener("message",h);var p=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=u++,i="setMsg"+n;return c[i]=t,window.postMessage(i,"*"),n};e.setFast=function(){return l?p:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];setTimeout(function(){d(t)},0)}}()}).call(e,n(1))},function(t,e,n){t.exports=n(4)},function(t,e,n){var i=this&&this.__assign||Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n(2),s=n(7);e.getMode=function(){return"undefined"!=typeof cordova&&window.sqlitePlugin?new a:"PERM"};var a=function(){function t(){this._pkKey={},this._dbIndex={}}return t.prototype.setID=function(t){this._id=t},t.prototype.connect=function(t){var e=this;if(!window.sqlitePlugin)throw Error("SQLite plugin not installed or nanoSQL plugin called before device ready!");console.log('NanoSQL "'+this._id+'" using SQLite.'),this._db=window.sqlitePlugin.openDatabase({name:this._id+"_db",location:"default"}),o.fastALL(Object.keys(this._pkKey),function(t,n,i){e._sql(!0,'CREATE TABLE IF NOT EXISTS "'+t+'" (id BLOB PRIMARY KEY UNIQUE, data TEXT)',[],function(){e._sql(!1,'SELECT id FROM "'+t+'"',[],function(n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o).id);r=r.sort(),e._dbIndex[t].set(r),i()})})}).then(t)},t.prototype._chkTable=function(t){if(-1===Object.keys(this._dbIndex).indexOf(t))throw Error("No table "+t+" found!");return'"'+t+'"'},t.prototype.makeTable=function(t,e){var n=this;this._dbIndex[t]=new s.DatabaseIndex,e.forEach(function(e){e.props&&o.intersect(["pk","pk()"],e.props)&&(n._dbIndex[t].pkType=e.type,n._pkKey[t]=e.key,e.props&&o.intersect(["ai","ai()"],e.props)&&("int"===e.type||"number"===e.type)&&(n._dbIndex[t].doAI=!0),(e.props&&o.intersect(["ns","ns()"],e.props)||-1!==["uuid","timeId","timeIdms"].indexOf(n._dbIndex[t].pkType))&&(n._dbIndex[t].sortIndex=!1))})},t.prototype._sql=function(t,e,n,i){this._db.executeSql(e,n,function(t){i(t)},function(t){return console.error(e,n,t),!1})},t.prototype.write=function(t,e,n,r){if(!(e=e||o.generateID(this._dbIndex[t].pkType,this._dbIndex[t].ai)))throw new Error("Can't add a row without a primary key!");var s=!1;if(-1===this._dbIndex[t].indexOf(e)&&(s=!0,this._dbIndex[t].add(e)),s){var a=i({},n,(c={},c[this._pkKey[t]]=e,c));this._sql(!0,"INSERT into "+this._chkTable(t)+" (id, data) VALUES (?, ?)",[e,JSON.stringify(a)],function(t){r(a)})}else{var u=i({},n,(f={},f[this._pkKey[t]]=e,f));this._sql(!0,"UPDATE "+this._chkTable(t)+" SET data = ? WHERE id = ?",[JSON.stringify(u),e],function(){r(u)})}var c,f},t.prototype.delete=function(t,e,n){-1!==this._dbIndex[t].indexOf(e)&&this._dbIndex[t].remove(e),this._sql(!0,"DELETE FROM "+this._chkTable(t)+" WHERE id = ?",[e],function(){n()})},t.prototype.read=function(t,e,n){this._sql(!1,"SELECT data FROM "+this._chkTable(t)+" WHERE id = ?",[e],function(t){n(t.rows.length?JSON.parse(t.rows.item(0).data):void 0)})},t.prototype.rangeRead=function(t,e,n,i,o,s){var a=this,u=this._dbIndex[t].keys(),c=-1===[typeof i,typeof o].indexOf("undefined"),f=c?[i,o]:[];if(!u.length)return void n();s&&c||!1!==this._dbIndex[t].sortIndex||(u=u.sort()),s&&c&&(f=f.map(function(e){return a._dbIndex[t].getLocation(e)}));var l=f[0]||0,d=[],h=f[0],p="SELECT data from "+this._chkTable(t);if(f.length){for(var _="number"==typeof u[h];h<=f[1];)d.push(_?u[h]:'"'+u[h]+'"'),h++;p+=" WHERE id IN ("+d.map(function(t){return"?"}).join(", ")+")"}p+=" ORDER BY id",d.length?this.batchRead(this._chkTable(t),d,function(t){var i=0,o=function(){t.length>i?e(t[i],l,function(){l++,i++,i%500==0?r.setFast(o):o()}):n()};o()}):this._sql(!1,p,[],function(t){var i=0,o=function(){t.rows.length>i?e(JSON.parse(t.rows.item(i).data),l,function(){l++,i++,i%500==0?r.setFast(o):o()}):n()};o()})},t.prototype.batchRead=function(t,e,n){var i=this,r=o.splitArr(e,500),s=[];o.fastCHAIN(r,function(e,n,r){i._sql(!1,"SELECT data from "+i._chkTable(t)+" WHERE id IN ("+e.map(function(t){return"?"}).join(", ")+") ORDER BY id",e.map(function(t){return"string"==typeof t?"'"+t+"'":t}),function(t){for(var e=t.rows.length;e--;)s.push(JSON.parse(t.rows.item(e).data));r()})}).then(function(){n(s)})},t.prototype.drop=function(t,e){var n=new s.DatabaseIndex;n.doAI=this._dbIndex[t].doAI,this._dbIndex[t]=n,this._sql(!0,"DELETE FROM "+this._chkTable(t),[],function(t){e()})},t.prototype.getIndex=function(t,e,n){n(e?this._dbIndex[t].keys().length:this._dbIndex[t].keys())},t.prototype.destroy=function(t){var e=this;o.fastALL(Object.keys(this._dbIndex),function(t,n,i){e.drop(t,i)}).then(t)},t}();e.SQLiteStore=a},function(t,e,n){"use strict";function i(t){function e(t){_+=t}function n(e){return t.charAt(g+e).toUpperCase()}function i(t){return function(){return n(t)}}var c,f,h,p,_="",g=0;if(!(t=String(t||"")))return"";for(f=i(1),h=i(0),p=i(-1);!u(h());){if(!h())return"";g++}switch(h()){case"A":"E"===f()?(e("E"),g+=2):(e("A"),g++);break;case"G":case"K":case"P":"N"===f()&&(e("N"),g+=2);break;case"W":"R"===f()?(e(f()),g+=2):"H"===f()?(e(h()),g+=2):s(f())&&(e("W"),g+=2);break;case"X":e("S"),g++;break;case"E":case"I":case"O":case"U":e(h()),g++}for(;h();)if(c=1,!u(h())||h()===p()&&"C"!==h())g+=c;else{switch(h()){case"B":"M"!==p()&&e("B");break;case"C":o(f())?"I"===f()&&"A"===n(2)?e(l):"S"!==p()&&e("S"):"H"===f()?(e(l),c++):e("K");break;case"D":"G"===f()&&o(n(2))?(e("J"),c++):e("T");break;case"G":"H"===f()?r(n(-3))||"H"===n(-4)||(e("F"),c++):"N"===f()?!u(n(2))||"E"===n(2)&&"D"===n(3)||e("K"):e(o(f())&&"G"!==p()?"J":"K");break;case"H":s(f())&&!a(p())&&e("H");break;case"K":"C"!==p()&&e("K");break;case"P":e("H"===f()?"F":"P");break;case"Q":e("K");break;case"S":"I"!==f()||"O"!==n(2)&&"A"!==n(2)?"H"===f()?(e(l),c++):e("S"):e(l);break;case"T":"I"!==f()||"O"!==n(2)&&"A"!==n(2)?"H"===f()?(e(d),c++):"C"===f()&&"H"===n(2)||e("T"):e(l);break;case"V":e("F");break;case"W":s(f())&&e("W");break;case"X":e("KS");break;case"Y":s(f())&&e("Y");break;case"Z":e("S");break;case"F":case"J":case"L":case"M":case"N":case"R":e(h())}g+=c}return _}function r(t){return"B"===(t=f(t))||"D"===t||"H"===t}function o(t){return"E"===(t=f(t))||"I"===t||"Y"===t}function s(t){return"A"===(t=f(t))||"E"===t||"I"===t||"O"===t||"U"===t}function a(t){return"C"===(t=f(t))||"G"===t||"P"===t||"S"===t||"T"===t}function u(t){var e=c(t);return e>=65&&e<=90}function c(t){return f(t).charCodeAt(0)}function f(t){return String(t).charAt(0).toUpperCase()}t.exports=i;var l="X",d="0"},function(t,e,n){"use strict";function i(t){var e,n;return t=String(t).toLowerCase(),t.length<3?t:(121===t.charCodeAt(0)&&(e=!0,t="Y"+t.substr(1)),w.test(t)?t=t.substr(0,t.length-2):m.test(t)&&(t=t.substr(0,t.length-1)),(n=b.exec(t))?u.test(n[1])&&(t=t.substr(0,t.length-1)):(n=y.exec(t))&&l.test(n[1])&&(t=n[1],v.test(t)?t+="e":x.test(t)?t=t.substr(0,t.length-1):d.test(t)&&(t+="e")),(n=_.exec(t))&&l.test(n[1])&&(t=n[1]+"i"),(n=I.exec(t))&&u.test(n[1])&&(t=n[1]+r[n[2]]),(n=E.exec(t))&&u.test(n[1])&&(t=n[1]+o[n[2]]),(n=S.exec(t))?f.test(n[1])&&(t=n[1]):(n=g.exec(t))&&f.test(n[1])&&(t=n[1]),(n=p.exec(t))&&(f.test(n[1])||c.test(n[1])&&!d.test(n[1]))&&(t=n[1]),h.test(t)&&f.test(t)&&(t=t.substr(0,t.length-1)),e&&(t="y"+t.substr(1)),t)}t.exports=i;var r={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},o={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},s="([^aeiou][^aeiouy]*)",a="([aeiouy][aeiou]*)",u=new RegExp("^"+s+"?"+a+s),c=new RegExp("^"+s+"?"+a+s+a+"?$"),f=new RegExp("^"+s+"?("+a+s+"){2,}"),l=new RegExp("^"+s+"?[aeiouy]"),d=new RegExp("^"+s+"[aeiouy][^aeiouwxy]$"),h=/ll$/,p=/^(.+?)e$/,_=/^(.+?)y$/,g=/^(.+?(s|t))(ion)$/,y=/^(.+?)(ed|ing)$/,v=/(at|bl|iz)$/,b=/^(.+?)eed$/,m=/^.+?[^s]s$/,w=/^.+?(ss|i)es$/,x=/([^aeiouylsz])\1$/,I=new RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),E=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,S=new RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=function(){function t(){this._sorted=[],this._exists={},this.ai=1,this.sortIndex=!0,this.doAI=!1}return t.prototype.clone=function(e){this._changeCB&&!e&&this._changeCB(this._ta,"drop",null);var n=new t;return n.doAI=this.doAI,n.ai=this.ai,n.sortIndex=this.sortIndex,n._changeCB=this._changeCB,n._ta=this._ta,n.pkType=this.pkType,e&&this.set([]),n},t.prototype.onChange=function(t,e){this._ta=t,this._changeCB=e},t.prototype.set=function(t){var e=this;this._sorted=t||[],this._exists={},this._sorted.forEach(function(t,n){e._exists[String(t)]=!0}),this.doAI&&this._sorted.length&&(this.ai=this._sorted[this._sorted.length-1]+1)},t.prototype.getLocation=function(t,e){var n=this.indexOf(t);return-1!==n?n:this.sortIndex?i.binarySearch(this._sorted,t,e):i.binarySearch(this._sorted.sort(function(t,e){return t>e?1:-1}),t,e)},t.prototype.add=function(t,e){if(!this._exists[String(t)])if(this._changeCB&&!e&&this._changeCB(this._ta,"add",t),this._exists[String(t)]=!0,e&&-1!==["number","int","float"].indexOf(this.pkType)&&(t=parseFloat(t)),this.doAI)this.ai++,this._sorted.push(t);else if(this.sortIndex){var n=i.binarySearch(this._sorted,t);this._sorted.splice(n,0,t)}else this._sorted.push(t)},t.prototype.keys=function(){return this._sorted},t.prototype.exists=function(t){return!!this._exists[String(t)]},t.prototype.indexOf=function(t){return this._exists[String(t)]?this.sortIndex?i.binarySearch(this._sorted,t):this._sorted.indexOf(t):-1},t.prototype.remove=function(t,e){if(this._changeCB&&!e&&this._changeCB(this._ta,"rm",t),e&&-1!==["number","int","float"].indexOf(this.pkType)&&(t=parseFloat(t)),this._exists[String(t)]){var n=this.indexOf(t);this._exists[String(t)]=!1,this._sorted.splice(n,1)}},t}();e.DatabaseIndex=r,e.syncPeerIndex=function(t,e){t.peerMode&&(Object.keys(e).forEach(function(n){e[n].onChange(n,function(e,n,r){t.peers.filter(function(e){return e!==t.pid}).forEach(function(t){localStorage.setItem(t+"::"+i.random16Bits().toString(16),n+","+e+","+(r||""))})})}),window.addEventListener("storage",function(n){if(n.key&&-1!==n.key.indexOf(t.pid+"::")){var i=(n.newValue||"").split(",");switch(localStorage.removeItem(n.key),i[0]){case"rm":e[i[1]].remove(i[2],!0);break;case"add":e[i[1]].add(i[2],!0);break;case"drop":e[i[1]].clone(!0)}}}))}}])});