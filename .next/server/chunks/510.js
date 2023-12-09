"use strict";exports.id=510,exports.ids=[510],exports.modules={1323:(e,t)=>{function hoist(e,t){return t in e?e[t]:"then"in e&&"function"==typeof e.then?e.then(e=>hoist(e,t)):"function"==typeof e&&"default"===t?e:void 0}Object.defineProperty(t,"l",{enumerable:!0,get:function(){return hoist}})},7543:(e,t)=>{function isInAmpMode(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return isInAmpMode}})},9201:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return defaultHead},default:function(){return c}});let r=n(167),a=n(8760),u=a._(n(6689)),o=r._(n(8955)),d=n(8039),l=n(1988),i=n(7543);function defaultHead(e){void 0===e&&(e=!1);let t=[u.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function onlyReactElement(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(1905);let f=["name","httpEquiv","charSet","itemProp"];function unique(){let e=new Set,t=new Set,n=new Set,r={};return a=>{let u=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?u=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?u=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?u=!1:n.add(t);else{let e=a.props[t],n=r[t]||new Set;("name"!==t||!o)&&n.has(e)?u=!1:(n.add(e),r[t]=n)}}}}return u}}function reduceComponents(e,t){let{inAmpMode:n}=t;return e.reduce(onlyReactElement,[]).reverse().concat(defaultHead(n).reverse()).filter(unique()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:r})})}function Head(e){let{children:t}=e,n=(0,u.useContext)(d.AmpStateContext),r=(0,u.useContext)(l.HeadManagerContext);return u.default.createElement(o.default,{reduceComponentsToState:reduceComponents,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},t)}let c=Head;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8955:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return SideEffect}});let r=n(6689),useClientOnlyLayoutEffect=()=>{},useClientOnlyEffect=()=>{};function SideEffect(e){var t;let{headManager:n,reduceComponentsToState:a}=e;function emitChange(){if(n&&n.mountedInstances){let t=r.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(a(t,e))}}return null==n||null==(t=n.mountedInstances)||t.add(e.children),emitChange(),useClientOnlyLayoutEffect(()=>{var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),()=>{var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),useClientOnlyLayoutEffect(()=>(n&&(n._pendingUpdate=emitChange),()=>{n&&(n._pendingUpdate=emitChange)})),useClientOnlyEffect(()=>(n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),()=>{n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)})),null}},1905:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return warnOnce}});let warnOnce=e=>{}},5244:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},8039:(e,t,n)=>{e.exports=n(7093).vendored.contexts.AmpContext}};