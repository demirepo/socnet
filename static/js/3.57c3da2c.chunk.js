(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[3],{264:function(t,e,n){t.exports={bigpic:"Profile_bigpic__3o2kF",statusBox:"Profile_statusBox__duzRg",statusInput:"Profile_statusInput__3VvqU"}},293:function(t,e,n){t.exports={post:"Post_post__36ZwT",image:"Post_image__C6w7D",message:"Post_message__2d9H-"}},294:function(t,e,n){t.exports={avatar:"UserInfo_avatar__1y-Mv"}},295:function(t,e,n){t.exports={newPost:"NewPost_newPost__OU5Dp",newpostBtn:"NewPost_newpostBtn__RjG0n"}},296:function(t,e,n){"use strict";n.r(e);var r=n(87),a=n(88),s=n(90),o=n(89),u=n(0),i=n.n(u),c=n(9),l=n(8),p=n(10),f=n(120),j=n(293),d=n.n(j),v=n(1);function b(t){return Object(v.jsxs)("div",{className:d.a.post,children:[Object(v.jsx)("img",{className:d.a.image,src:"img/ava-blue.jpg",alt:"avatar"}),Object(v.jsxs)("div",{className:d.a.message,children:[t.text,Object(v.jsx)("br",{}),"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c: ",t.likes," \u043b\u044e\u0434\u044f\u043c"]})]})}function h(t){var e=t.posts.map((function(t){return Object(v.jsx)(b,{text:t.text,likes:t.likes},t.id)}));return Object(v.jsx)("div",{children:e})}var O=n(294),m=n.n(O);function x(t){var e,n=(t.data.contacts?Object.keys(t.data.contacts):[]).map((function(e){return Object(v.jsxs)("div",{children:[e," :"," ",t.data.contacts["".concat(e)]?t.data.contacts["".concat(e)]:"\u043d\u0435 \u0437\u0430\u0434\u0430\u043d\u043e"," "]},e)}));return Object(v.jsxs)("div",{className:m.a.userinfo,children:[Object(v.jsx)("img",{className:m.a.avatar,src:(null===(e=t.data.photos)||void 0===e?void 0:e.large)||"img/ava-blue.jpg",alt:"avatar"}),Object(v.jsxs)("div",{className:m.a.text,children:["\u0418\u043c\u044f: ",t.data.fullName]}),Object(v.jsxs)("div",{className:m.a.text,children:["\u041e \u0441\u0435\u0431\u0435: ",t.data.aboutMe]}),Object(v.jsx)("div",{className:m.a.text,children:n}),Object(v.jsx)("div",{className:m.a.text,children:t.data.lookingForAJob?"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443":"\u0420\u0430\u0431\u043e\u0442\u0443 \u043d\u0435 \u0438\u0449\u0443"}),Object(v.jsxs)("div",{className:m.a.text,children:["\u041a\u0430\u043a\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0438\u0449\u0443:",t.data.lookingForAJobDescription]})]})}var g=n(260),y=n(261),_=n(295),S=n.n(_);var k=Object(y.a)({form:"newPost"})((function(t){var e=t.handleSubmit;return Object(v.jsx)("div",{className:S.a.newPost,children:Object(v.jsx)("form",{onSubmit:e,children:Object(v.jsx)("div",{children:Object(v.jsxs)("fieldset",{children:[Object(v.jsx)("legend",{children:"\xa0\u041d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442\xa0"}),Object(v.jsx)(g.a,{component:"textarea",name:"newMessage",cols:"30",rows:"10",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),Object(v.jsx)("button",{className:S.a.newpostBtn,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u043e\u0441\u0442"})]})})})})})),w=n(264),N=n.n(w),P=n(79);function D(t){var e=t.updateStatusOnServer,n=t.statusText,r=Object(u.useState)(!1),a=Object(P.a)(r,2),s=a[0],o=a[1],i=Object(u.useState)(n),c=Object(P.a)(i,2),l=c[0],p=c[1],f=function(){o(!1),e(l)};return Object(v.jsx)("div",{className:N.a.statusBox,children:s?Object(v.jsx)("input",{onChange:function(t){p(t.target.value)},onKeyDown:function(t){"Enter"===t.key&&f()},className:N.a.statusInput,autoFocus:!0,type:"text",value:l,onBlur:f}):Object(v.jsx)("span",{onDoubleClick:function(){o(!0),p(n)},children:n||" "})})}function A(t){var e=t.profileData,n=t.onSubmit,r=t.posts,a=t.updateStatusOnServer,s=t.statusText;return Object(v.jsxs)("section",{className:N.a.content,children:[Object(v.jsx)(D,{updateStatusOnServer:a,statusText:s}),Object(v.jsx)(x,{data:e}),Object(v.jsx)(k,{onSubmit:n}),Object(v.jsx)(h,{posts:r})]})}var C=n(4),T="NOT_FOUND";var F=function(t,e){return t===e};function z(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?F:r,s=n.maxSize,o=void 0===s?1:s,u=n.resultEqualityCheck,i=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),c=1===o?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:T},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(i):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return T}return{get:r,put:function(e,a){r(e)===T&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(o,i);function l(){var e=c.get(arguments);if(e===T){if(e=t.apply(null,arguments),u){var n=c.getEntries(),r=n.find((function(t){return u(t.value,e)}));if(r)return r.value}c.put(arguments,e)}return e}return l.clearCache=function(){return c.clear()},l}function I(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function B(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var s,o=0,u={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(u=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var c=u,l=c.memoizeOptions,p=void 0===l?n:l,f=Array.isArray(p)?p:[p],j=I(r),d=t.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(f)),v=t((function(){for(var t=[],e=j.length,n=0;n<e;n++)t.push(j[n].apply(null,arguments));return s=d.apply(null,t)}));return Object.assign(v,{resultFunc:i,memoizedResultFunc:d,dependencies:j,lastResult:function(){return s},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),v};return a}var E=B(z),U=E([function(t){return t.profilePage.posts}],(function(t){return t.filter((function(t){return!0}))})),M=function(t){return t.profilePage.profileData},R=function(t){return t.profilePage.statusText},q=function(t){return t.auth.isAuthorized},J=function(t){return t.auth.id},G=function(t){Object(s.a)(n,t);var e=Object(o.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId||this.props.authorizedUserId;this.props.getStatusFromServer(t),this.props.setProfileThunkCreator(t)}},{key:"onSubmit",value:function(t,e){e(Object(f.a)(t.newMessage))}},{key:"render",value:function(){return Object(v.jsx)(A,{onSubmit:this.onSubmit,updateStatusOnServer:f.e,statusText:this.props.statusText,profileData:this.props.profileData,posts:this.props.posts})}}]),n}(i.a.Component);e.default=Object(p.d)(Object(c.b)((function(t){return{posts:U(t),profileData:M(t),statusText:R(t),isAuthed:q(t),authorizedUserId:J(t)}}),{addPost:f.a,setProfileThunkCreator:f.d,getStatusFromServer:f.c,updateStatusOnServer:f.e}),l.f,(function(t){return function(e){Object(s.a)(u,e);var n=Object(o.a)(u);function u(){return Object(r.a)(this,u),n.apply(this,arguments)}return Object(a.a)(u,[{key:"render",value:function(){return this.props.isAuthed?Object(v.jsx)(t,Object(C.a)({},this.props)):Object(v.jsx)(l.a,{to:"/login"})}}]),u}(i.a.Component)}))(G)}}]);
//# sourceMappingURL=3.57c3da2c.chunk.js.map