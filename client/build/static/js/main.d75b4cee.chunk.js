(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(53),i=n.n(a),s=(n(91),n(7)),o=n(19),l=n(6),d=n(83),j=n(113),u=n(115),b=n(112),O=n(81);function h(e,t){return 1===t?e:e+"s"}function p(e,t,n){return new Promise((function(c,r){var a,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(r){switch(a=o.result,i=a.transaction(e,"readwrite"),s=i.objectStore(e),a.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){a.close()}}}))}var m=n(18),f="UPDATE_PRODUCTS",x="ADD_TO_CART",g="ADD_MULTIPLE_TO_CART",v="REMOVE_FROM_CART",y="CLEAR_CART",w="UPDATE_CART_QUANTITY",_="TOGGLE_CART",k="UPDATE_CATEGORIES",N="UPDATE_CURRENT_CATEGORY",C=n(2);var S,T,E,A,$,I=function(e){var t=Object(m.b)(),n=Object(m.c)((function(e){return e})),c=e.image,r=e.name,a=e._id,i=e.price,l=e.quantity,d=n.cart;return Object(C.jsxs)("div",{className:"card px-1 py-1",children:[Object(C.jsxs)(o.b,{to:"/products/".concat(a),children:[Object(C.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object(C.jsx)("p",{children:r})]}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{children:[l," ",h("item",l)," in stock"]}),Object(C.jsxs)("span",{children:["$",i]})]}),Object(C.jsx)("button",{onClick:function(){var n=d.find((function(e){return e._id===a}));n?(t({type:w,_id:a,purchaseQuantity:parseInt(n.purchaseQuantity)+1}),p("cart","put",Object(s.a)(Object(s.a)({},n),{},{purchaseQuantity:parseInt(n.purchaseQuantity)+1}))):(t({type:x,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),p("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},D=n(84),Q=n(32),P=n(114),R=Object(P.a)(S||(S=Object(Q.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),F=Object(P.a)(T||(T=Object(Q.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),U=(Object(P.a)(E||(E=Object(Q.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(P.a)(A||(A=Object(Q.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),L=Object(P.a)($||($=Object(Q.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),q=n.p+"static/media/spinner.7e729fec.gif";var W=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),n=t.currentCategory,r=Object(D.b)(R),a=r.loading,i=r.data;return Object(c.useEffect)((function(){i?(e({type:f,products:i.products}),i.products.forEach((function(e){p("products","put",e)}))):a||p("products","get").then((function(t){e({type:f,products:t})}))}),[i,a,e]),Object(C.jsxs)("div",{className:"my-2",children:[Object(C.jsx)("h2",{children:"Our Products:"}),t.products.length?Object(C.jsx)("div",{className:"flex-row",children:(n?t.products.filter((function(e){return e.category._id===n})):t.products).map((function(e){return Object(C.jsx)(I,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(C.jsx)("h3",{children:"You haven't added any products yet!"}),a?Object(C.jsx)("img",{src:q,alt:"loading"}):null]})};var B=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})).categories,n=Object(D.b)(U),r=n.loading,a=n.data;return Object(c.useEffect)((function(){a?(e({type:k,categories:a.categories}),a.categories.forEach((function(e){p("categories","put",e)}))):r||p("categories","get").then((function(t){e({type:k,categories:t})}))}),[a,r,e]),Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Choose a Category:"}),t.map((function(t){return Object(C.jsx)("button",{onClick:function(){var n;n=t._id,e({type:N,currentCategory:n})},children:t.name},t._id)}))]})},G=n(8),Y=n(16),M=n(15),H=n(10),J=n(79),z=n(108),V=function(e){var t=e.item,n=Object(m.b)();return Object(C.jsxs)("div",{className:"flex-row",children:[Object(C.jsx)("div",{children:Object(C.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{children:[t.name,", $",t.price]}),Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{children:"Qty:"}),Object(C.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:v,_id:t._id}),p("cart","delete",Object(s.a)({},t))):(n({type:w,_id:t._id,purchaseQuantity:parseInt(c)}),p("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object(C.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:v,_id:e._id}),p("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},K=n(28),X=n(27),Z=n(68),ee=n.n(Z),te=new(function(){function e(){Object(K.a)(this,e)}return Object(X.a)(e,[{key:"getProfile",value:function(){return ee()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ee()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),ne=(n(101),Object(J.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),ce=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),n=Object(z.a)(F),r=Object(H.a)(n,2),a=r[0],i=r[1].data;function s(){e({type:_})}return Object(c.useEffect)((function(){i&&ne.then((function(e){e.redirectToCheckout({sessionId:i.checkout.session})}))}),[i]),Object(c.useEffect)((function(){function n(){return(n=Object(M.a)(Object(G.a)().mark((function t(){var n;return Object(G.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p("cart","get");case 2:n=t.sent,e({type:g,products:Object(Y.a)(n)});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.cart.length||function(){n.apply(this,arguments)}()}),[t.cart.length,e]),t.cartOpen?Object(C.jsxs)("div",{className:"cart",children:[Object(C.jsx)("div",{className:"close",onClick:s,children:"[close]"}),Object(C.jsx)("h2",{children:"Shopping Cart"}),t.cart.length?Object(C.jsxs)("div",{children:[t.cart.map((function(e){return Object(C.jsx)(V,{item:e},e._id)})),Object(C.jsxs)("div",{className:"flex-row space-between",children:[Object(C.jsxs)("strong",{children:["Total: $",function(){var e=0;return t.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),te.loggedIn()?Object(C.jsx)("button",{onClick:function(){var e=[];t.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),a({variables:{products:e}})},children:"Checkout"}):Object(C.jsx)("span",{children:"(log in to check out)"})]})]}):Object(C.jsxs)("h3",{children:[Object(C.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(C.jsx)("div",{className:"cart-closed",onClick:s,children:Object(C.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},re=function(){return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)(B,{}),Object(C.jsx)(W,{}),Object(C.jsx)(ce,{})]})};var ae=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),n=Object(l.p)().id,r=Object(c.useState)({}),a=Object(H.a)(r,2),i=a[0],d=a[1],j=Object(D.b)(R),u=j.loading,b=j.data,O=t.products,h=t.cart;return Object(c.useEffect)((function(){O.length?d(O.find((function(e){return e._id===n}))):b?(e({type:f,products:b.products}),b.products.forEach((function(e){p("products","put",e)}))):u||p("products","get").then((function(t){e({type:f,products:t})}))}),[O,b,u,e,n]),Object(C.jsxs)(C.Fragment,{children:[i&&h?Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(C.jsx)("h2",{children:i.name}),Object(C.jsx)("p",{children:i.description}),Object(C.jsxs)("p",{children:[Object(C.jsx)("strong",{children:"Price:"}),"$",i.price," ",Object(C.jsx)("button",{onClick:function(){var t=h.find((function(e){return e._id===n}));t?(e({type:w,_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),p("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(e({type:x,product:Object(s.a)(Object(s.a)({},i),{},{purchaseQuantity:1})}),p("cart","put",Object(s.a)(Object(s.a)({},i),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(C.jsx)("button",{disabled:!h.find((function(e){return e._id===i._id})),onClick:function(){e({type:v,_id:i._id}),p("cart","delete",Object(s.a)({},i))},children:"Remove from Cart"})]}),Object(C.jsx)("img",{src:"/images/".concat(i.image),alt:i.name})]}):null,u?Object(C.jsx)("img",{src:q,alt:"loading"}):null,Object(C.jsx)(ce,{})]})};var ie,se,oe,le=function(e){var t=e.children;return Object(C.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},de=function(){return Object(C.jsx)("div",{children:Object(C.jsxs)(le,{children:[Object(C.jsx)("h1",{children:"404 Page Not Found"}),Object(C.jsx)("h1",{children:Object(C.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},je=n(13),ue=n(109),be=Object(P.a)(ie||(ie=Object(Q.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Oe=Object(P.a)(se||(se=Object(Q.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),he=Object(P.a)(oe||(oe=Object(Q.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var pe=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(H.a)(t,2),r=n[0],a=n[1],i=Object(ue.a)(be),l=Object(H.a)(i,2),d=l[0],j=l[1].error,u=function(){var e=Object(M.a)(Object(G.a)().mark((function e(t){var n,c;return Object(G.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:r.email,password:r.password}});case 4:n=e.sent,c=n.data.login.token,te.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;a(Object(s.a)(Object(s.a)({},r),{},Object(je.a)({},n,c)))};return Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(C.jsx)("h2",{children:"Login"}),Object(C.jsxs)("form",{onSubmit:u,children:[Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(C.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(C.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),j?Object(C.jsx)("div",{children:Object(C.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(C.jsx)("div",{className:"flex-row flex-end",children:Object(C.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var me=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(H.a)(t,2),r=n[0],a=n[1],i=Object(ue.a)(he),l=Object(H.a)(i,1)[0],d=function(){var e=Object(M.a)(Object(G.a)().mark((function e(t){var n,c;return Object(G.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:r.email,password:r.password,firstName:r.firstName,lastName:r.lastName}});case 3:n=e.sent,c=n.data.addUser.token,te.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,c=t.value;a(Object(s.a)(Object(s.a)({},r),{},Object(je.a)({},n,c)))};return Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(C.jsx)("h2",{children:"Signup"}),Object(C.jsxs)("form",{onSubmit:d,children:[Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(C.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(C.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(C.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(C.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(C.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(C.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(C.jsx)("div",{className:"flex-row flex-end",children:Object(C.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var fe=function(){return Object(C.jsxs)("header",{className:"flex-row px-1",children:[Object(C.jsx)("h1",{children:Object(C.jsxs)(o.b,{to:"/",children:[Object(C.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(C.jsx)("nav",{children:te.loggedIn()?Object(C.jsxs)("ul",{className:"flex-row",children:[Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)("a",{href:"/",onClick:function(){return te.logout()},children:"Logout"})})]}):Object(C.jsxs)("ul",{className:"flex-row",children:[Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(C.jsx)("li",{className:"mx-1",children:Object(C.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})},xe=n(80),ge={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""};function ve(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(s.a)(Object(s.a)({},e),{},{products:Object(Y.a)(t.products)});case x:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(Y.a)(e.cart),[t.product])});case g:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(Y.a)(e.cart),Object(Y.a)(t.products))});case w:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case v:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case y:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case _:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case k:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(Y.a)(t.categories)});case N:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}}var ye=Object(xe.a)(ve);function we(e){return Object(C.jsx)(m.a,Object(s.a)({store:ye},e))}var _e=function(){var e=Object(ue.a)(Oe),t=Object(H.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(M.a)(Object(G.a)().mark((function e(){var n,c,r,a;return Object(G.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:r=e.sent,a=r.data,a.addOrder.products.forEach((function(e){p("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(C.jsx)("div",{children:Object(C.jsxs)(le,{children:[Object(C.jsx)("h1",{children:"Success!"}),Object(C.jsx)("h2",{children:"Thank you for your purchase!"}),Object(C.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var ke=function(){var e,t=Object(D.b)(L).data;return t&&(e=t.user),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"container my-1",children:[Object(C.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(C.jsxs)("div",{className:"my-2",children:[Object(C.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(C.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,r=e.name,a=e.price;return Object(C.jsxs)("div",{className:"card px-1 py-1",children:[Object(C.jsxs)(o.b,{to:"/products/".concat(n),children:[Object(C.jsx)("img",{alt:r,src:"/images/".concat(c)}),Object(C.jsx)("p",{children:r})]}),Object(C.jsx)("div",{children:Object(C.jsxs)("span",{children:["$",a]})})]},t)}))})]},e._id)}))]}):null]})})},Ne=Object(d.a)({uri:"/graphql"}),Ce=Object(O.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Se=new j.a({link:Ce.concat(Ne),cache:new u.a});var Te=function(){return Object(C.jsx)(b.a,{client:Se,children:Object(C.jsx)(o.a,{children:Object(C.jsx)("div",{children:Object(C.jsxs)(we,{children:[Object(C.jsx)(fe,{}),Object(C.jsxs)(l.c,{children:[Object(C.jsx)(l.a,{path:"/",element:Object(C.jsx)(re,{})}),Object(C.jsx)(l.a,{path:"/login",element:Object(C.jsx)(pe,{})}),Object(C.jsx)(l.a,{path:"/signup",element:Object(C.jsx)(me,{})}),Object(C.jsx)(l.a,{path:"/success",element:Object(C.jsx)(_e,{})}),Object(C.jsx)(l.a,{path:"/orderHistory",element:Object(C.jsx)(ke,{})}),Object(C.jsx)(l.a,{path:"/products/:id",element:Object(C.jsx)(ae,{})}),Object(C.jsx)(l.a,{path:"*",element:Object(C.jsx)(de,{})})]})]})})})})},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(Te,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()},91:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.d75b4cee.chunk.js.map