(function(){"use strict";var t={7633:function(t,n,e){var o=e(9242),r=e(3396),i=e(7139);const u={class:"container"},c={class:"counter"},s={key:0,class:"alert alert-dismissible alert-warning"},a=(0,r._)("button",{type:"button",class:"close","data-dismiss":"alert"},"×",-1),f=[a],l=(0,r._)("button",{type:"submit",class:"btn btn-primary"},"Increment",-1);function d(t,n,e,a,d,p){return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("div",c,(0,i.zw)(t.count.message),1),(0,r._)("form",{onSubmit:n[1]||(n[1]=(0,o.iM)(((...t)=>p.addCount&&p.addCount(...t)),["prevent"])),class:"mb-3"},[t.error?((0,r.wg)(),(0,r.iD)("div",s,f)):(0,r.kq)("",!0),l,(0,r._)("button",{type:"button",class:"btn btn-primary",onClick:n[0]||(n[0]=t=>p.resetCount())}," Reset ")],32)])}const p="http://localhost:3000/count";var h={name:"App",data:()=>({error:"",count:""}),mounted(){fetch(p).then((t=>t.json())).then((t=>{this.count=t}))},methods:{addCount(){this.count.message+=1,fetch(p,{method:"POST",body:JSON.stringify(this.count),headers:{"content-type":"application/json"}})},resetCount(){this.count.message=0,fetch(p,{method:"POST",body:JSON.stringify(this.count),headers:{"content-type":"application/json"}})}}},b=e(89);const v=(0,b.Z)(h,[["render",d]]);var m=v;(0,o.ri)(m).mount("#app")}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,r,i){if(!o){var u=1/0;for(f=0;f<t.length;f++){o=t[f][0],r=t[f][1],i=t[f][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||u>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[s])}))?o.splice(s--,1):(c=!1,i<u&&(u=i));if(c){t.splice(f--,1);var a=r();void 0!==a&&(n=a)}}return n}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[o,r,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var r,i,u=o[0],c=o[1],s=o[2],a=0;if(u.some((function(n){return 0!==t[n]}))){for(r in c)e.o(c,r)&&(e.m[r]=c[r]);if(s)var f=s(e)}for(n&&n(o);a<u.length;a++)i=u[a],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(f)},o=self["webpackChunkcounter_ui"]=self["webpackChunkcounter_ui"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(7633)}));o=e.O(o)})();
//# sourceMappingURL=app.9270359c.js.map