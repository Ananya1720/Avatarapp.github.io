(function(t,u){typeof exports=="object"&&typeof module!="undefined"?module.exports=u(require("@bedrock-layout/use-stateful-ref"),require("react")):typeof define=="function"&&define.amd?define(["@bedrock-layout/use-stateful-ref","react"],u):(t=typeof globalThis!="undefined"?globalThis:t||self,t["use-forwarded-ref"]=u(t.useStatefulRef,t.React))})(this,function(t,u){"use strict";function n(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var r=n(t),i=n(u);function c(e){const f=r.default(null);return i.default.useEffect(()=>{!e||(typeof e=="function"?e(f.current):e.current=f.current)}),f}return c});
