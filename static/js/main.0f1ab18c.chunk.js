(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{64:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n.n(r),c=n(43),i=n.n(c),s=n(14),u=n(30),o=n(16),j=n(0),b=n.n(j),l=n(1),d=n(31);n(53),n(66),n(65);d.a.initializeApp({apiKey:"AIzaSyBnV3QFLyFN_aDRh14KjCZq2UlosIfyyQU",authDomain:"nwitter-6242d.firebaseapp.com",projectId:"nwitter-6242d",storageBucket:"nwitter-6242d.appspot.com",messagingSenderId:"245121462629",appId:"1:245121462629:web:8e9acb49cc6cd3ecdaf18c"});var p=d.a,h=d.a.auth(),O=d.a.firestore(),f=d.a.storage(),x=n(8),m=function(){var e=Object(r.useState)(!0),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),u=i[0],o=i[1],j=Object(r.useState)(""),d=Object(s.a)(j,2),p=d[0],O=d[1],f=Object(r.useState)(""),m=Object(s.a)(f,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?o(r):"password"===n&&O(r)},y=function(){var e=Object(l.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!n){e.next=7;break}return e.next=5,h.createUserWithEmailAndPassword(u,p);case 5:e.next=9;break;case 7:return e.next=9,h.signInWithEmailAndPassword(u,p);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),g(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:u,onChange:w}),Object(x.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:p,onChange:w}),Object(x.jsx)("input",{type:"submit",value:n?"Create Account":"Log In",onClick:y}),v]}),Object(x.jsx)("span",{onClick:function(){return a((function(e){return!e}))},children:n?"Sign In":"Create Account"})]})},v=function(){var e=function(){var e=Object(l.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new p.auth.GoogleAuthProvider:"github"===n&&(r=new p.auth.GithubAuthProvider),e.next=4,h.signInWithPopup(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(m,{}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:e,name:"google",children:"Continue with Google"}),Object(x.jsx)("button",{onClick:e,name:"github",children:"Continue with Github"})]})]})},g=n(44),w=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(r.useState)(!1),c=Object(s.a)(a,2),i=c[0],u=c[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),d=j[0],p=j[1],h=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,O.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentURL){e.next=7;break}return e.next=7,f.refFromURL(t.attachmentURL).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},v=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,O.doc("nweets/".concat(t.id)).update({text:d});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{children:i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:v,children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;p(t)},value:d,required:!0}),Object(x.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(x.jsx)("button",{onClick:m,children:"Cancel"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h4",{children:t.text}),t.attachmentURL&&Object(x.jsx)("img",{src:t.attachmentURL,width:"50px",height:"50px",alt:"hihi"}),n&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{onClick:h,children:"Delete Nweet"}),Object(x.jsx)("button",{onClick:m,children:"Edit Nweet"})]})]})})},y=n(68),k=function(e){var t=e.userObj,n=Object(r.useState)(""),a=Object(s.a)(n,2),c=a[0],i=a[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),j=o[0],d=o[1],p=function(){var e=Object(l.a)(b.a.mark((function e(n){var r,a,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===j){e.next=10;break}return a=f.ref().child("".concat(t.uid,"/").concat(Object(y.a)())),e.next=6,a.putString(j,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:return e.next=12,O.collection("nweets").add({text:c,createdAt:Date.now(),creatorId:t.uid,attachmentURL:r});case 12:i(""),d("");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("form",{onSubmit:p,children:[Object(x.jsx)("input",{value:c,onChange:function(e){e.preventDefault();var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(x.jsx)("input",{type:"file",accep:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},n.readAsDataURL(t)}}),Object(x.jsx)("input",{type:"submit",value:"Nweet"}),j&&Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{src:j,width:"50px",height:"50px",alt:"hihi"}),Object(x.jsx)("button",{onClick:function(){return d("")},children:"Clear"})]})]})},C=function(e){var t=e.userObj,n=Object(r.useState)([]),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){O.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(g.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{userObj:t}),Object(x.jsx)("div",{children:c.map((function(e){return Object(x.jsx)(w,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},S=function(e){var t=e.userObj,n=e.refreshUser,a=Object(o.f)(),c=Object(r.useState)(t.displayName),i=Object(s.a)(c,2),u=i[0],j=i[1],d=function(){var e=Object(l.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("form",{onSubmit:d,children:[Object(x.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",placeholder:"Display name",value:u}),Object(x.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(x.jsx)("button",{onClick:function(){h.signOut(),a.push("/")},children:"Log Out"})]})},U=function(e){var t=e.userObj;return Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(u.b,{to:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsxs)(u.b,{to:"/profile",children:[t.displayName,"\uc758 Profile"]})})]})})},I=function(e){var t=e.isLoggedIn,n=e.userObj,r=e.refreshUser;return Object(x.jsxs)(u.a,{children:[t&&Object(x.jsx)(U,{userObj:n}),Object(x.jsx)(o.c,{children:t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(C,{userObj:n})}),Object(x.jsx)(o.a,{exact:!0,path:"/profile",children:Object(x.jsx)(S,{userObj:n,refreshUser:r})})]}):Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(v,{})})})]})};var L=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),i=Object(s.a)(c,2),u=i[0],o=i[1];return Object(r.useEffect)((function(){h.onAuthStateChanged((function(e){o(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),a(!0)}))}),[]),Object(x.jsx)(x.Fragment,{children:n?Object(x.jsx)(I,{isLoggedIn:Boolean(u),userObj:u,refreshUser:function(){o(h.currentUser);var e=h.currentUser;o({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})}}):"initializing..."})};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.0f1ab18c.chunk.js.map