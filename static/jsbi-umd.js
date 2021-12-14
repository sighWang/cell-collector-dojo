(function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,e.JSBI=t())})(this,function(){'use strict';var e=Math.imul,t=Math.clz32;function i(e){"@babel/helpers - typeof";return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var _,n=0;n<t.length;n++)_=t[n],_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(e,_.key,_)}function l(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function r(){return r=u()?Reflect.construct:function(e,t,i){var _=[null];_.push.apply(_,t);var n=Function.bind.apply(e,_),l=new n;return i&&s(l,i.prototype),l},r.apply(null,arguments)}function d(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function h(e){var t="function"==typeof Map?new Map:void 0;return h=function(e){function i(){return r(e,arguments,a(this).constructor)}if(null===e||!d(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!=typeof t){if(t.has(e))return t.get(e);t.set(e,i)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),s(i,e)},h(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function c(e){var t=u();return function(){var i,_=a(e);if(t){var n=a(this).constructor;i=Reflect.construct(_,arguments,n)}else i=_.apply(this,arguments);return m(this,i)}}function v(e,t){if(e){if("string"==typeof e)return f(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var _=0,n=Array(t);_<t;_++)n[_]=e[_];return n}function y(e,t){var _="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!_){if(Array.isArray(e)||(_=v(e))||t&&e&&"number"==typeof e.length){_&&(e=_);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(t){throw t},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var g,a=!0,s=!1;return{s:function(){_=_.call(e)},n:function(){var e=_.next();return a=e.done,e},e:function(t){s=!0,g=t},f:function(){try{a||null==_.return||_.return()}finally{if(s)throw g}}}}var D=function(e){var t=Math.abs,n=Math.max,o=Math.floor;function a(e,t){var i;if(_(this,a),i=s.call(this,e),i.sign=t,Object.setPrototypeOf(b(i),a.prototype),e>a.__kMaxLength)throw new RangeError("Maximum BigInt size exceeded");return i}g(a,e);var s=c(a);return l(a,[{key:"toDebugString",value:function(){var e,t=["BigInt["],i=y(this);try{for(i.s();!(e=i.n()).done;){var _=e.value;t.push((_?(_>>>0).toString(16):_)+", ")}}catch(e){i.e(e)}finally{i.f()}return t.push("]"),t.join("")}},{key:"toString",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:10;if(2>e||36<e)throw new RangeError("toString() radix argument must be between 2 and 36");return 0===this.length?"0":0==(e&e-1)?a.__toStringBasePowerOfTwo(this,e):a.__toStringGeneric(this,e,!1)}},{key:"valueOf",value:function(){throw new Error("Convert JSBI instances to native numbers using `toNumber`.")}},{key:"__copy",value:function(){for(var e=new a(this.length,this.sign),t=0;t<this.length;t++)e[t]=this[t];return e}},{key:"__trim",value:function(){for(var e=this.length,t=this[e-1];0===t;)e--,t=this[e-1],this.pop();return 0===e&&(this.sign=!1),this}},{key:"__initializeDigits",value:function(){for(var e=0;e<this.length;e++)this[e]=0}},{key:"__clzmsd",value:function(){return a.__clz30(this.__digit(this.length-1))}},{key:"__inplaceMultiplyAdd",value:function(e,t,_){_>this.length&&(_=this.length);for(var n=32767&e,l=e>>>15,g=0,o=t,s=0;s<_;s++){var u=this.__digit(s),r=32767&u,d=u>>>15,h=a.__imul(r,n),b=a.__imul(r,l),m=a.__imul(d,n),c=a.__imul(d,l),v=o+h+g;g=v>>>30,v&=1073741823,v+=((32767&b)<<15)+((32767&m)<<15),g+=v>>>30,o=c+(b>>>15)+(m>>>15),this.__setDigit(s,1073741823&v)}if(0!==g||0!==o)throw new Error("implementation bug")}},{key:"__inplaceAdd",value:function(e,t,_){for(var n,l=0,g=0;g<_;g++)n=this.__halfDigit(t+g)+e.__halfDigit(g)+l,l=n>>>15,this.__setHalfDigit(t+g,32767&n);return l}},{key:"__inplaceSub",value:function(e,t,_){var n=0;if(1&t){t>>=1;for(var l=this.__digit(t),g=32767&l,o=0;o<_-1>>>1;o++){var a=e.__digit(o),s=(l>>>15)-(32767&a)-n;n=1&s>>>15,this.__setDigit(t+o,(32767&s)<<15|32767&g),l=this.__digit(t+o+1),g=(32767&l)-(a>>>15)-n,n=1&g>>>15}var u=e.__digit(o),r=(l>>>15)-(32767&u)-n;n=1&r>>>15,this.__setDigit(t+o,(32767&r)<<15|32767&g);if(t+o+1>=this.length)throw new RangeError("out of bounds");0==(1&_)&&(l=this.__digit(t+o+1),g=(32767&l)-(u>>>15)-n,n=1&g>>>15,this.__setDigit(t+e.length,1073709056&l|32767&g))}else{t>>=1;for(var d=0;d<e.length-1;d++){var h=this.__digit(t+d),b=e.__digit(d),m=(32767&h)-(32767&b)-n;n=1&m>>>15;var c=(h>>>15)-(b>>>15)-n;n=1&c>>>15,this.__setDigit(t+d,(32767&c)<<15|32767&m)}var v=this.__digit(t+d),f=e.__digit(d),y=(32767&v)-(32767&f)-n;n=1&y>>>15;var D=0;0==(1&_)&&(D=(v>>>15)-(f>>>15)-n,n=1&D>>>15),this.__setDigit(t+d,(32767&D)<<15|32767&y)}return n}},{key:"__inplaceRightShift",value:function(e){if(0!==e){for(var t,_=this.__digit(0)>>>e,n=this.length-1,l=0;l<n;l++)t=this.__digit(l+1),this.__setDigit(l,1073741823&t<<30-e|_),_=t>>>e;this.__setDigit(n,_)}}},{key:"__digit",value:function(e){return this[e]}},{key:"__unsignedDigit",value:function(e){return this[e]>>>0}},{key:"__setDigit",value:function(e,t){this[e]=0|t}},{key:"__setDigitGrow",value:function(e,t){this[e]=0|t}},{key:"__halfDigitLength",value:function(){var e=this.length;return 32767>=this.__unsignedDigit(e-1)?2*e-1:2*e}},{key:"__halfDigit",value:function(e){return 32767&this[e>>>1]>>>15*(1&e)}},{key:"__setHalfDigit",value:function(e,t){var i=e>>>1,_=this.__digit(i),n=1&e?32767&_|t<<15:1073709056&_|32767&t;this.__setDigit(i,n)}}],[{key:"BigInt",value:function(e){var t=Number.isFinite;if("number"==typeof e){if(0===e)return a.__zero();if(a.__isOneDigitInt(e))return 0>e?a.__oneDigit(-e,!0):a.__oneDigit(e,!1);if(!t(e)||o(e)!==e)throw new RangeError("The number "+e+" cannot be converted to BigInt because it is not an integer");return a.__fromDouble(e)}if("string"==typeof e){var _=a.__fromString(e);if(null===_)throw new SyntaxError("Cannot convert "+e+" to a BigInt");return _}if("boolean"==typeof e)return!0===e?a.__oneDigit(1,!1):a.__zero();if("object"===i(e)){if(e.constructor===a)return e;var n=a.__toPrimitive(e);return a.BigInt(n)}throw new TypeError("Cannot convert "+e+" to a BigInt")}},{key:"toNumber",value:function(e){var t=e.length;if(0===t)return 0;if(1===t){var i=e.__unsignedDigit(0);return e.sign?-i:i}var _=e.__digit(t-1),n=a.__clz30(_),l=30*t-n;if(1024<l)return e.sign?-Infinity:1/0;var g=l-1,o=_,s=t-1,u=n+3,r=32===u?0:o<<u;r>>>=12;var d=u-12,h=12<=u?0:o<<20+u,b=20+u;for(0<d&&0<s&&(s--,o=e.__digit(s),r|=o>>>30-d,h=o<<d+2,b=d+2);0<b&&0<s;)s--,o=e.__digit(s),h|=30<=b?o<<b-30:o>>>30-b,b-=30;var m=a.__decideRounding(e,b,s,o);if((1===m||0===m&&1==(1&h))&&(h=h+1>>>0,0===h&&(r++,0!=r>>>20&&(r=0,g++,1023<g))))return e.sign?-Infinity:1/0;var c=e.sign?-2147483648:0;return g=g+1023<<20,a.__kBitConversionInts[1]=c|g|r,a.__kBitConversionInts[0]=h,a.__kBitConversionDouble[0]}},{key:"unaryMinus",value:function(e){if(0===e.length)return e;var t=e.__copy();return t.sign=!e.sign,t}},{key:"bitwiseNot",value:function(e){return e.sign?a.__absoluteSubOne(e).__trim():a.__absoluteAddOne(e,!0)}},{key:"exponentiate",value:function(e,t){if(t.sign)throw new RangeError("Exponent must be positive");if(0===t.length)return a.__oneDigit(1,!1);if(0===e.length)return e;if(1===e.length&&1===e.__digit(0))return e.sign&&0==(1&t.__digit(0))?a.unaryMinus(e):e;if(1<t.length)throw new RangeError("BigInt too big");var i=t.__unsignedDigit(0);if(1===i)return e;if(i>=a.__kMaxLengthBits)throw new RangeError("BigInt too big");if(1===e.length&&2===e.__digit(0)){var _=1+(0|i/30),n=e.sign&&0!=(1&i),l=new a(_,n);l.__initializeDigits();var g=1<<i%30;return l.__setDigit(_-1,g),l}var o=null,s=e;for(0!=(1&i)&&(o=e),i>>=1;0!==i;i>>=1)s=a.multiply(s,s),0!=(1&i)&&(null===o?o=s:o=a.multiply(o,s));return o}},{key:"multiply",value:function(e,t){if(0===e.length)return e;if(0===t.length)return t;var _=e.length+t.length;30<=e.__clzmsd()+t.__clzmsd()&&_--;var n=new a(_,e.sign!==t.sign);n.__initializeDigits();for(var l=0;l<e.length;l++)a.__multiplyAccumulate(t,e.__digit(l),n,l);return n.__trim()}},{key:"divide",value:function(e,t){if(0===t.length)throw new RangeError("Division by zero");if(0>a.__absoluteCompare(e,t))return a.__zero();var i,_=e.sign!==t.sign,n=t.__unsignedDigit(0);if(1===t.length&&32767>=n){if(1===n)return _===e.sign?e:a.unaryMinus(e);i=a.__absoluteDivSmall(e,n,null)}else i=a.__absoluteDivLarge(e,t,!0,!1);return i.sign=_,i.__trim()}},{key:"remainder",value:function i(e,t){if(0===t.length)throw new RangeError("Division by zero");if(0>a.__absoluteCompare(e,t))return e;var _=t.__unsignedDigit(0);if(1===t.length&&32767>=_){if(1===_)return a.__zero();var n=a.__absoluteModSmall(e,_);return 0===n?a.__zero():a.__oneDigit(n,e.sign)}var i=a.__absoluteDivLarge(e,t,!1,!0);return i.sign=e.sign,i.__trim()}},{key:"add",value:function(e,t){var i=e.sign;return i===t.sign?a.__absoluteAdd(e,t,i):0<=a.__absoluteCompare(e,t)?a.__absoluteSub(e,t,i):a.__absoluteSub(t,e,!i)}},{key:"subtract",value:function(e,t){var i=e.sign;return i===t.sign?0<=a.__absoluteCompare(e,t)?a.__absoluteSub(e,t,i):a.__absoluteSub(t,e,!i):a.__absoluteAdd(e,t,i)}},{key:"leftShift",value:function(e,t){return 0===t.length||0===e.length?e:t.sign?a.__rightShiftByAbsolute(e,t):a.__leftShiftByAbsolute(e,t)}},{key:"signedRightShift",value:function(e,t){return 0===t.length||0===e.length?e:t.sign?a.__leftShiftByAbsolute(e,t):a.__rightShiftByAbsolute(e,t)}},{key:"unsignedRightShift",value:function(){throw new TypeError("BigInts have no unsigned right shift; use >> instead")}},{key:"lessThan",value:function(e,t){return 0>a.__compareToBigInt(e,t)}},{key:"lessThanOrEqual",value:function(e,t){return 0>=a.__compareToBigInt(e,t)}},{key:"greaterThan",value:function(e,t){return 0<a.__compareToBigInt(e,t)}},{key:"greaterThanOrEqual",value:function(e,t){return 0<=a.__compareToBigInt(e,t)}},{key:"equal",value:function(e,t){if(e.sign!==t.sign)return!1;if(e.length!==t.length)return!1;for(var _=0;_<e.length;_++)if(e.__digit(_)!==t.__digit(_))return!1;return!0}},{key:"notEqual",value:function(e,t){return!a.equal(e,t)}},{key:"bitwiseAnd",value:function(e,t){if(!e.sign&&!t.sign)return a.__absoluteAnd(e,t).__trim();if(e.sign&&t.sign){var i=n(e.length,t.length)+1,_=a.__absoluteSubOne(e,i),l=a.__absoluteSubOne(t);return _=a.__absoluteOr(_,l,_),a.__absoluteAddOne(_,!0,_).__trim()}if(e.sign){var g=[t,e];e=g[0],t=g[1]}return a.__absoluteAndNot(e,a.__absoluteSubOne(t)).__trim()}},{key:"bitwiseXor",value:function(e,t){if(!e.sign&&!t.sign)return a.__absoluteXor(e,t).__trim();if(e.sign&&t.sign){var i=n(e.length,t.length),_=a.__absoluteSubOne(e,i),l=a.__absoluteSubOne(t);return a.__absoluteXor(_,l,_).__trim()}var g=n(e.length,t.length)+1;if(e.sign){var o=[t,e];e=o[0],t=o[1]}var s=a.__absoluteSubOne(t,g);return s=a.__absoluteXor(s,e,s),a.__absoluteAddOne(s,!0,s).__trim()}},{key:"bitwiseOr",value:function(e,t){var i=n(e.length,t.length);if(!e.sign&&!t.sign)return a.__absoluteOr(e,t).__trim();if(e.sign&&t.sign){var _=a.__absoluteSubOne(e,i),l=a.__absoluteSubOne(t);return _=a.__absoluteAnd(_,l,_),a.__absoluteAddOne(_,!0,_).__trim()}if(e.sign){var g=[t,e];e=g[0],t=g[1]}var o=a.__absoluteSubOne(t,i);return o=a.__absoluteAndNot(o,e,o),a.__absoluteAddOne(o,!0,o).__trim()}},{key:"asIntN",value:function(e,t){if(0===t.length)return t;if(e=o(e),0>e)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(0===e)return a.__zero();if(e>=a.__kMaxLengthBits)return t;var _=0|(e+29)/30;if(t.length<_)return t;var l=t.__unsignedDigit(_-1),g=1<<(e-1)%30;if(t.length===_&&l<g)return t;if(!((l&g)===g))return a.__truncateToNBits(e,t);if(!t.sign)return a.__truncateAndSubFromPowerOfTwo(e,t,!0);if(0==(l&g-1)){for(var s=_-2;0<=s;s--)if(0!==t.__digit(s))return a.__truncateAndSubFromPowerOfTwo(e,t,!1);return t.length===_&&l===g?t:a.__truncateToNBits(e,t)}return a.__truncateAndSubFromPowerOfTwo(e,t,!1)}},{key:"asUintN",value:function(e,t){if(0===t.length)return t;if(e=o(e),0>e)throw new RangeError("Invalid value: not (convertible to) a safe integer");if(0===e)return a.__zero();if(t.sign){if(e>a.__kMaxLengthBits)throw new RangeError("BigInt too big");return a.__truncateAndSubFromPowerOfTwo(e,t,!1)}if(e>=a.__kMaxLengthBits)return t;var i=0|(e+29)/30;if(t.length<i)return t;var _=e%30;if(t.length==i){if(0===_)return t;var l=t.__digit(i-1);if(0==l>>>_)return t}return a.__truncateToNBits(e,t)}},{key:"ADD",value:function(e,t){if(e=a.__toPrimitive(e),t=a.__toPrimitive(t),"string"==typeof e)return"string"!=typeof t&&(t=t.toString()),e+t;if("string"==typeof t)return e.toString()+t;if(e=a.__toNumeric(e),t=a.__toNumeric(t),a.__isBigInt(e)&&a.__isBigInt(t))return a.add(e,t);if("number"==typeof e&&"number"==typeof t)return e+t;throw new TypeError("Cannot mix BigInt and other types, use explicit conversions")}},{key:"LT",value:function(e,t){return a.__compare(e,t,0)}},{key:"LE",value:function(e,t){return a.__compare(e,t,1)}},{key:"GT",value:function(e,t){return a.__compare(e,t,2)}},{key:"GE",value:function(e,t){return a.__compare(e,t,3)}},{key:"EQ",value:function(e,t){for(;;){if(a.__isBigInt(e))return a.__isBigInt(t)?a.equal(e,t):a.EQ(t,e);if("number"==typeof e){if(a.__isBigInt(t))return a.__equalToNumber(t,e);if("object"!==i(t))return e==t;t=a.__toPrimitive(t)}else if("string"==typeof e){if(a.__isBigInt(t))return e=a.__fromString(e),null!==e&&a.equal(e,t);if("object"!==i(t))return e==t;t=a.__toPrimitive(t)}else if("boolean"==typeof e){if(a.__isBigInt(t))return a.__equalToNumber(t,+e);if("object"!==i(t))return e==t;t=a.__toPrimitive(t)}else if("symbol"===i(e)){if(a.__isBigInt(t))return!1;if("object"!==i(t))return e==t;t=a.__toPrimitive(t)}else if("object"===i(e)){if("object"===i(t)&&t.constructor!==a)return e==t;e=a.__toPrimitive(e)}else return e==t}}},{key:"NE",value:function(e,t){return!a.EQ(e,t)}},{key:"__zero",value:function(){return new a(0,!1)}},{key:"__oneDigit",value:function(e,t){var i=new a(1,t);return i.__setDigit(0,e),i}},{key:"__decideRounding",value:function(e,t,i,_){if(0<t)return-1;var n;if(0>t)n=-t-1;else{if(0===i)return-1;i--,_=e.__digit(i),n=29}var l=1<<n;if(0==(_&l))return-1;if(l-=1,0!=(_&l))return 1;for(;0<i;)if(i--,0!==e.__digit(i))return 1;return 0}},{key:"__fromDouble",value:function(e){a.__kBitConversionDouble[0]=e;var t,i=2047&a.__kBitConversionInts[1]>>>20,_=i-1023,n=(0|_/30)+1,l=new a(n,0>e),g=1048575&a.__kBitConversionInts[1]|1048576,o=a.__kBitConversionInts[0],s=20,u=_%30,r=0;if(u<s){var d=s-u;r=d+32,t=g>>>d,g=g<<32-d|o>>>d,o<<=32-d}else if(u===s)r=32,t=g,g=o,o=0;else{var h=u-s;r=32-h,t=g<<h|o>>>32-h,g=o<<h,o=0}l.__setDigit(n-1,t);for(var b=n-2;0<=b;b--)0<r?(r-=30,t=g>>>2,g=g<<30|o>>>2,o<<=30):t=0,l.__setDigit(b,t);return l.__trim()}},{key:"__isWhitespace",value:function(e){return!!(13>=e&&9<=e)||(159>=e?32==e:131071>=e?160==e||5760==e:196607>=e?(e&=131071,10>=e||40==e||41==e||47==e||95==e||4096==e):65279==e)}},{key:"__fromString",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,i=0,_=e.length,n=0;if(n===_)return a.__zero();for(var l=e.charCodeAt(n);a.__isWhitespace(l);){if(++n===_)return a.__zero();l=e.charCodeAt(n)}if(43===l){if(++n===_)return null;l=e.charCodeAt(n),i=1}else if(45===l){if(++n===_)return null;l=e.charCodeAt(n),i=-1}if(0===t){if(t=10,48===l){if(++n===_)return a.__zero();if(l=e.charCodeAt(n),88===l||120===l){if(t=16,++n===_)return null;l=e.charCodeAt(n)}else if(79===l||111===l){if(t=8,++n===_)return null;l=e.charCodeAt(n)}else if(66===l||98===l){if(t=2,++n===_)return null;l=e.charCodeAt(n)}}}else if(16===t&&48===l){if(++n===_)return a.__zero();if(l=e.charCodeAt(n),88===l||120===l){if(++n===_)return null;l=e.charCodeAt(n)}}if(0!==i&&10!==t)return null;for(;48===l;){if(++n===_)return a.__zero();l=e.charCodeAt(n)}var g=_-n,o=a.__kMaxBitsPerChar[t],s=a.__kBitsPerCharTableMultiplier-1;if(g>1073741824/o)return null;var u=o*g+s>>>a.__kBitsPerCharTableShift,r=new a(0|(u+29)/30,!1),h=10>t?t:10,b=10<t?t-10:0;if(0==(t&t-1)){o>>=a.__kBitsPerCharTableShift;var c=[],v=[],f=!1;do{for(var y,D=0,k=0;;){if(y=void 0,l-48>>>0<h)y=l-48;else if((32|l)-97>>>0<b)y=(32|l)-87;else{f=!0;break}if(k+=o,D=D<<o|y,++n===_){f=!0;break}if(l=e.charCodeAt(n),30<k+o)break}c.push(D),v.push(k)}while(!f);a.__fillFromParts(r,c,v)}else{r.__initializeDigits();var p=!1,B=0;do{for(var S,C=0,A=1;;){if(S=void 0,l-48>>>0<h)S=l-48;else if((32|l)-97>>>0<b)S=(32|l)-87;else{p=!0;break}var I=A*t;if(1073741823<I)break;if(A=I,C=C*t+S,B++,++n===_){p=!0;break}l=e.charCodeAt(n)}s=30*a.__kBitsPerCharTableMultiplier-1;var m=0|(o*B+s>>>a.__kBitsPerCharTableShift)/30;r.__inplaceMultiplyAdd(A,C,m)}while(!p)}if(n!==_){if(!a.__isWhitespace(l))return null;for(n++;n<_;n++)if(l=e.charCodeAt(n),!a.__isWhitespace(l))return null}return r.sign=-1===i,r.__trim()}},{key:"__fillFromParts",value:function(e,t,_){for(var n=0,l=0,g=0,o=t.length-1;0<=o;o--){var a=t[o],s=_[o];l|=a<<g,g+=s,30===g?(e.__setDigit(n++,l),g=0,l=0):30<g&&(e.__setDigit(n++,1073741823&l),g-=30,l=a>>>s-g)}if(0!==l){if(n>=e.length)throw new Error("implementation bug");e.__setDigit(n++,l)}for(;n<e.length;n++)e.__setDigit(n,0)}},{key:"__toStringBasePowerOfTwo",value:function(e,t){var _=e.length,n=t-1;n=(85&n>>>1)+(85&n),n=(51&n>>>2)+(51&n),n=(15&n>>>4)+(15&n);var l=n,g=t-1,o=e.__digit(_-1),s=a.__clz30(o),u=0|(30*_-s+l-1)/l;if(e.sign&&u++,268435456<u)throw new Error("string too long");for(var r=Array(u),d=u-1,h=0,b=0,m=0;m<_-1;m++){var c=e.__digit(m),v=(h|c<<b)&g;r[d--]=a.__kConversionChars[v];var f=l-b;for(h=c>>>f,b=30-f;b>=l;)r[d--]=a.__kConversionChars[h&g],h>>>=l,b-=l}var y=(h|o<<b)&g;for(r[d--]=a.__kConversionChars[y],h=o>>>l-b;0!==h;)r[d--]=a.__kConversionChars[h&g],h>>>=l;if(e.sign&&(r[d--]="-"),-1!==d)throw new Error("implementation bug");return r.join("")}},{key:"__toStringGeneric",value:function(e,t,_){var n=e.length;if(0===n)return"";if(1===n){var l=e.__unsignedDigit(0).toString(t);return!1===_&&e.sign&&(l="-"+l),l}var g=30*n-a.__clz30(e.__digit(n-1)),o=a.__kMaxBitsPerChar[t],s=o-1,u=g*a.__kBitsPerCharTableMultiplier;u+=s-1,u=0|u/s;var r,d,h=u+1>>1,b=a.exponentiate(a.__oneDigit(t,!1),a.__oneDigit(h,!1)),m=b.__unsignedDigit(0);if(1===b.length&&32767>=m){r=new a(e.length,!1),r.__initializeDigits();for(var c,v=0,f=2*e.length-1;0<=f;f--)c=v<<15|e.__halfDigit(f),r.__setHalfDigit(f,0|c/m),v=0|c%m;d=v.toString(t)}else{var y=a.__absoluteDivLarge(e,b,!0,!0);r=y.quotient;var D=y.remainder.__trim();d=a.__toStringGeneric(D,t,!0)}r.__trim();for(var k=a.__toStringGeneric(r,t,!0);d.length<h;)d="0"+d;return!1===_&&e.sign&&(k="-"+k),k+d}},{key:"__unequalSign",value:function(e){return e?-1:1}},{key:"__absoluteGreater",value:function(e){return e?-1:1}},{key:"__absoluteLess",value:function(e){return e?1:-1}},{key:"__compareToBigInt",value:function(e,t){var i=e.sign;if(i!==t.sign)return a.__unequalSign(i);var _=a.__absoluteCompare(e,t);return 0<_?a.__absoluteGreater(i):0>_?a.__absoluteLess(i):0}},{key:"__compareToNumber",value:function(e,i){if(a.__isOneDigitInt(i)){var _=e.sign,n=0>i;if(_!==n)return a.__unequalSign(_);if(0===e.length){if(n)throw new Error("implementation bug");return 0===i?0:-1}if(1<e.length)return a.__absoluteGreater(_);var l=t(i),g=e.__unsignedDigit(0);return g>l?a.__absoluteGreater(_):g<l?a.__absoluteLess(_):0}return a.__compareToDouble(e,i)}},{key:"__compareToDouble",value:function(e,t){if(t!==t)return t;if(t===1/0)return-1;if(t===-Infinity)return 1;var i=e.sign;if(i!==0>t)return a.__unequalSign(i);if(0===t)throw new Error("implementation bug: should be handled elsewhere");if(0===e.length)return-1;a.__kBitConversionDouble[0]=t;var _=2047&a.__kBitConversionInts[1]>>>20;if(2047==_)throw new Error("implementation bug: handled elsewhere");var n=_-1023;if(0>n)return a.__absoluteGreater(i);var l=e.length,g=e.__digit(l-1),o=a.__clz30(g),s=30*l-o,u=n+1;if(s<u)return a.__absoluteLess(i);if(s>u)return a.__absoluteGreater(i);var r=1048576|1048575&a.__kBitConversionInts[1],d=a.__kBitConversionInts[0],h=20,b=29-o;if(b!==(0|(s-1)%30))throw new Error("implementation bug");var m,c=0;if(b<h){var v=h-b;c=v+32,m=r>>>v,r=r<<32-v|d>>>v,d<<=32-v}else if(b===h)c=32,m=r,r=d,d=0;else{var f=b-h;c=32-f,m=r<<f|d>>>32-f,r=d<<f,d=0}if(g>>>=0,m>>>=0,g>m)return a.__absoluteGreater(i);if(g<m)return a.__absoluteLess(i);for(var y=l-2;0<=y;y--){0<c?(c-=30,m=r>>>2,r=r<<30|d>>>2,d<<=30):m=0;var D=e.__unsignedDigit(y);if(D>m)return a.__absoluteGreater(i);if(D<m)return a.__absoluteLess(i)}if(0!==r||0!==d){if(0===c)throw new Error("implementation bug");return a.__absoluteLess(i)}return 0}},{key:"__equalToNumber",value:function(e,i){return a.__isOneDigitInt(i)?0===i?0===e.length:1===e.length&&e.sign===0>i&&e.__unsignedDigit(0)===t(i):0===a.__compareToDouble(e,i)}},{key:"__comparisonResultToBool",value:function(e,t){return 0===t?0>e:1===t?0>=e:2===t?0<e:3===t?0<=e:void 0}},{key:"__compare",value:function(e,t,i){if(e=a.__toPrimitive(e),t=a.__toPrimitive(t),"string"==typeof e&&"string"==typeof t)switch(i){case 0:return e<t;case 1:return e<=t;case 2:return e>t;case 3:return e>=t;}if(a.__isBigInt(e)&&"string"==typeof t)return t=a.__fromString(t),null!==t&&a.__comparisonResultToBool(a.__compareToBigInt(e,t),i);if("string"==typeof e&&a.__isBigInt(t))return e=a.__fromString(e),null!==e&&a.__comparisonResultToBool(a.__compareToBigInt(e,t),i);if(e=a.__toNumeric(e),t=a.__toNumeric(t),a.__isBigInt(e)){if(a.__isBigInt(t))return a.__comparisonResultToBool(a.__compareToBigInt(e,t),i);if("number"!=typeof t)throw new Error("implementation bug");return a.__comparisonResultToBool(a.__compareToNumber(e,t),i)}if("number"!=typeof e)throw new Error("implementation bug");if(a.__isBigInt(t))return a.__comparisonResultToBool(a.__compareToNumber(t,e),2^i);if("number"!=typeof t)throw new Error("implementation bug");return 0===i?e<t:1===i?e<=t:2===i?e>t:3===i?e>=t:void 0}},{key:"__absoluteAdd",value:function(e,t,_){if(e.length<t.length)return a.__absoluteAdd(t,e,_);if(0===e.length)return e;if(0===t.length)return e.sign===_?e:a.unaryMinus(e);var n=e.length;(0===e.__clzmsd()||t.length===e.length&&0===t.__clzmsd())&&n++;for(var l,g=new a(n,_),o=0,s=0;s<t.length;s++)l=e.__digit(s)+t.__digit(s)+o,o=l>>>30,g.__setDigit(s,1073741823&l);for(;s<e.length;s++){var u=e.__digit(s)+o;o=u>>>30,g.__setDigit(s,1073741823&u)}return s<g.length&&g.__setDigit(s,o),g.__trim()}},{key:"__absoluteSub",value:function(e,t,_){if(0===e.length)return e;if(0===t.length)return e.sign===_?e:a.unaryMinus(e);for(var n,l=new a(e.length,_),g=0,o=0;o<t.length;o++)n=e.__digit(o)-t.__digit(o)-g,g=1&n>>>30,l.__setDigit(o,1073741823&n);for(;o<e.length;o++){var s=e.__digit(o)-g;g=1&s>>>30,l.__setDigit(o,1073741823&s)}return l.__trim()}},{key:"__absoluteAddOne",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length;null===_?_=new a(n,t):_.sign=t;for(var l,g=1,o=0;o<n;o++)l=e.__digit(o)+g,g=l>>>30,_.__setDigit(o,1073741823&l);return 0!==g&&_.__setDigitGrow(n,1),_}},{key:"__absoluteSubOne",value:function(e,t){var _=e.length;t=t||_;for(var n,l=new a(t,!1),g=1,o=0;o<_;o++)n=e.__digit(o)-g,g=1&n>>>30,l.__setDigit(o,1073741823&n);if(0!==g)throw new Error("implementation bug");for(var s=_;s<t;s++)l.__setDigit(s,0);return l}},{key:"__absoluteAnd",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,l=t.length,g=l;if(n<l){g=n;var o=e,s=n;e=t,n=l,t=o,l=s}var u=g;null===_?_=new a(u,!1):u=_.length;for(var r=0;r<g;r++)_.__setDigit(r,e.__digit(r)&t.__digit(r));for(;r<u;r++)_.__setDigit(r,0);return _}},{key:"__absoluteAndNot",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,l=t.length,g=l;n<l&&(g=n);var o=n;null===_?_=new a(o,!1):o=_.length;for(var s=0;s<g;s++)_.__setDigit(s,e.__digit(s)&~t.__digit(s));for(;s<n;s++)_.__setDigit(s,e.__digit(s));for(;s<o;s++)_.__setDigit(s,0);return _}},{key:"__absoluteOr",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,l=t.length,g=l;if(n<l){g=n;var o=e,s=n;e=t,n=l,t=o,l=s}var u=n;null===_?_=new a(u,!1):u=_.length;for(var r=0;r<g;r++)_.__setDigit(r,e.__digit(r)|t.__digit(r));for(;r<n;r++)_.__setDigit(r,e.__digit(r));for(;r<u;r++)_.__setDigit(r,0);return _}},{key:"__absoluteXor",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,n=e.length,l=t.length,g=l;if(n<l){g=n;var o=e,s=n;e=t,n=l,t=o,l=s}var u=n;null===_?_=new a(u,!1):u=_.length;for(var r=0;r<g;r++)_.__setDigit(r,e.__digit(r)^t.__digit(r));for(;r<n;r++)_.__setDigit(r,e.__digit(r));for(;r<u;r++)_.__setDigit(r,0);return _}},{key:"__absoluteCompare",value:function(e,t){var _=e.length-t.length;if(0!=_)return _;for(var n=e.length-1;0<=n&&e.__digit(n)===t.__digit(n);)n--;return 0>n?0:e.__unsignedDigit(n)>t.__unsignedDigit(n)?1:-1}},{key:"__multiplyAccumulate",value:function(e,t,_,n){if(0!==t){for(var l=32767&t,g=t>>>15,o=0,s=0,u=0;u<e.length;u++,n++){var r=_.__digit(n),d=e.__digit(u),h=32767&d,b=d>>>15,m=a.__imul(h,l),c=a.__imul(h,g),v=a.__imul(b,l),f=a.__imul(b,g);r+=s+m+o,o=r>>>30,r&=1073741823,r+=((32767&c)<<15)+((32767&v)<<15),o+=r>>>30,s=f+(c>>>15)+(v>>>15),_.__setDigit(n,1073741823&r)}for(;0!==o||0!==s;n++){var y=_.__digit(n);y+=o+s,s=0,o=y>>>30,_.__setDigit(n,1073741823&y)}}}},{key:"__internalMultiplyAdd",value:function(e,t,_,l,g){for(var o=_,s=0,u=0;u<l;u++){var d=e.__digit(u),h=a.__imul(32767&d,t),b=a.__imul(d>>>15,t),m=h+((32767&b)<<15)+s+o;o=m>>>30,s=b>>>15,g.__setDigit(u,1073741823&m)}if(g.length>l)for(g.__setDigit(l++,o+s);l<g.length;)g.__setDigit(l++,0);else if(0!==o+s)throw new Error("implementation bug")}},{key:"__absoluteDivSmall",value:function(e,t){var _=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;null===_&&(_=new a(e.length,!1));for(var n=0,l=2*e.length-1;0<=l;l-=2){var g=(n<<15|e.__halfDigit(l))>>>0,o=0|g/t;n=0|g%t,g=(n<<15|e.__halfDigit(l-1))>>>0;var s=0|g/t;n=0|g%t,_.__setDigit(l>>>1,o<<15|s)}return _}},{key:"__absoluteModSmall",value:function(e,t){for(var _,n=0,l=2*e.length-1;0<=l;l--)_=(n<<15|e.__halfDigit(l))>>>0,n=0|_%t;return n}},{key:"__absoluteDivLarge",value:function(e,t,i,_){var l=t.__halfDigitLength(),n=t.length,g=e.__halfDigitLength()-l,o=null;i&&(o=new a(g+2>>>1,!1),o.__initializeDigits());var s=new a(l+2>>>1,!1);s.__initializeDigits();var r=a.__clz15(t.__halfDigit(l-1));0<r&&(t=a.__specialLeftShift(t,r,0));for(var d=a.__specialLeftShift(e,r,1),u=t.__halfDigit(l-1),h=0,b=g;0<=b;b--){var m=32767,v=d.__halfDigit(b+l);if(v!==u){var f=(v<<15|d.__halfDigit(b+l-1))>>>0;m=0|f/u;for(var y=0|f%u,D=t.__halfDigit(l-2),k=d.__halfDigit(b+l-2);a.__imul(m,D)>>>0>(y<<16|k)>>>0&&(m--,y+=u,!(32767<y)););}a.__internalMultiplyAdd(t,m,0,n,s);var p=d.__inplaceSub(s,b,l+1);0!==p&&(p=d.__inplaceAdd(t,b,l),d.__setHalfDigit(b+l,32767&d.__halfDigit(b+l)+p),m--),i&&(1&b?h=m<<15:o.__setDigit(b>>>1,h|m))}if(_)return d.__inplaceRightShift(r),i?{quotient:o,remainder:d}:d;if(i)return o;throw new Error("unreachable")}},{key:"__clz15",value:function(e){return a.__clz30(e)-15}},{key:"__specialLeftShift",value:function(e,t,_){var l=e.length,n=new a(l+_,!1);if(0===t){for(var g=0;g<l;g++)n.__setDigit(g,e.__digit(g));return 0<_&&n.__setDigit(l,0),n}for(var o,s=0,u=0;u<l;u++)o=e.__digit(u),n.__setDigit(u,1073741823&o<<t|s),s=o>>>30-t;return 0<_&&n.__setDigit(l,s),n}},{key:"__leftShiftByAbsolute",value:function(e,t){var _=a.__toShiftAmount(t);if(0>_)throw new RangeError("BigInt too big");var n=0|_/30,l=_%30,g=e.length,o=0!==l&&0!=e.__digit(g-1)>>>30-l,s=g+n+(o?1:0),u=new a(s,e.sign);if(0===l){for(var r=0;r<n;r++)u.__setDigit(r,0);for(;r<s;r++)u.__setDigit(r,e.__digit(r-n))}else{for(var h=0,b=0;b<n;b++)u.__setDigit(b,0);for(var m,c=0;c<g;c++)m=e.__digit(c),u.__setDigit(c+n,1073741823&m<<l|h),h=m>>>30-l;if(o)u.__setDigit(g+n,h);else if(0!==h)throw new Error("implementation bug")}return u.__trim()}},{key:"__rightShiftByAbsolute",value:function(e,t){var _=e.length,n=e.sign,l=a.__toShiftAmount(t);if(0>l)return a.__rightShiftByMaximum(n);var g=0|l/30,o=l%30,s=_-g;if(0>=s)return a.__rightShiftByMaximum(n);var u=!1;if(n){if(0!=(e.__digit(g)&(1<<o)-1))u=!0;else for(var r=0;r<g;r++)if(0!==e.__digit(r)){u=!0;break}}if(u&&0===o){var h=e.__digit(_-1);0==~h&&s++}var b=new a(s,n);if(0===o){b.__setDigit(s-1,0);for(var m=g;m<_;m++)b.__setDigit(m-g,e.__digit(m))}else{for(var c,v=e.__digit(g)>>>o,f=_-g-1,y=0;y<f;y++)c=e.__digit(y+g+1),b.__setDigit(y,1073741823&c<<30-o|v),v=c>>>o;b.__setDigit(f,v)}return u&&(b=a.__absoluteAddOne(b,!0,b)),b.__trim()}},{key:"__rightShiftByMaximum",value:function(e){return e?a.__oneDigit(1,!0):a.__zero()}},{key:"__toShiftAmount",value:function(e){if(1<e.length)return-1;var t=e.__unsignedDigit(0);return t>a.__kMaxLengthBits?-1:t}},{key:"__toPrimitive",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"default";if("object"!==i(e))return e;if(e.constructor===a)return e;if("undefined"!=typeof Symbol&&"symbol"===i(Symbol.toPrimitive)){var _=e[Symbol.toPrimitive];if(_){var n=_(t);if("object"!==i(n))return n;throw new TypeError("Cannot convert object to primitive value")}}var l=e.valueOf;if(l){var g=l.call(e);if("object"!==i(g))return g}var o=e.toString;if(o){var s=o.call(e);if("object"!==i(s))return s}throw new TypeError("Cannot convert object to primitive value")}},{key:"__toNumeric",value:function(e){return a.__isBigInt(e)?e:+e}},{key:"__isBigInt",value:function(e){return"object"===i(e)&&null!==e&&e.constructor===a}},{key:"__truncateToNBits",value:function(e,t){for(var _=0|(e+29)/30,n=new a(_,t.sign),l=_-1,g=0;g<l;g++)n.__setDigit(g,t.__digit(g));var o=t.__digit(l);if(0!=e%30){var s=32-e%30;o=o<<s>>>s}return n.__setDigit(l,o),n.__trim()}},{key:"__truncateAndSubFromPowerOfTwo",value:function(e,t,_){for(var n=Math.min,l,g=0|(e+29)/30,o=new a(g,_),s=0,u=g-1,d=0,h=n(u,t.length);s<h;s++)l=0-t.__digit(s)-d,d=1&l>>>30,o.__setDigit(s,1073741823&l);for(;s<u;s++)o.__setDigit(s,0|1073741823&-d);var b,m=u<t.length?t.__digit(u):0,c=e%30;if(0===c)b=0-m-d,b&=1073741823;else{var v=32-c;m=m<<v>>>v;var f=1<<32-v;b=f-m-d,b&=f-1}return o.__setDigit(u,b),o.__trim()}},{key:"__digitPow",value:function(e,t){for(var i=1;0<t;)1&t&&(i*=e),t>>>=1,e*=e;return i}},{key:"__isOneDigitInt",value:function(e){return(1073741823&e)===e}}]),a}(h(Array));return D.__kMaxLength=33554432,D.__kMaxLengthBits=D.__kMaxLength<<5,D.__kMaxBitsPerChar=[0,0,32,51,64,75,83,90,96,102,107,111,115,119,122,126,128,131,134,136,139,141,143,145,147,149,151,153,154,156,158,159,160,162,163,165,166],D.__kBitsPerCharTableShift=5,D.__kBitsPerCharTableMultiplier=1<<D.__kBitsPerCharTableShift,D.__kConversionChars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],D.__kBitConversionBuffer=new ArrayBuffer(8),D.__kBitConversionDouble=new Float64Array(D.__kBitConversionBuffer),D.__kBitConversionInts=new Int32Array(D.__kBitConversionBuffer),D.__clz30=t?function(e){return t(e)-2}:function(e){var t=Math.LN2,i=Math.log;return 0===e?30:0|29-(0|i(e>>>0)/t)},D.__imul=e||function(e,t){return 0|e*t},D});
//# sourceMappingURL=jsbi-umd.js.map
