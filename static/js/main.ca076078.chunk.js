(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(15),i=n.n(a),r=n(11),s=n(24),o=n(9),j=n(17),d=n(25),u=n.n(d),l=n(4),b={CART_ADD_ITEM:"CART_ADD_ITEM",CART_REMOVE_ITEM:"CART_REMOVE_ITEM",CART_CLEAR_ITEM:"CART_CLEAR_ITEM"},O=n(27),m=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(O.a)(e),[Object(l.a)(Object(l.a)({},t),{},{quantity:1})])},h=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity-1}):e}))},f={cartItems:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.CART_ADD_ITEM:return Object(l.a)(Object(l.a)({},e),{},{cartItems:m(e.cartItems,t.payload)});case b.CART_CLEAR_ITEM:return Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case b.CART_REMOVE_ITEM:return Object(l.a)(Object(l.a)({},e),{},{cartItems:h(e.cartItems,t.payload)});default:return e}},x={key:"quoality-guest",storage:u.a,whitelist:["cart"]},v=Object(o.b)({cart:p}),g=Object(j.a)(x,v),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,C=Object(o.d)(g,N(Object(o.a)())),_=Object(j.b)(C),I=(n(39),n(26)),E=n(3),y=n(10),A=Object(y.a)([function(e){return e.cart}],(function(e){return e.cartItems})),R=Object(y.a)([A,A],(function(e,t){return e.reduce((function(e,t){return e+t.quantity}),0)})),T=Object(y.a)([A],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),k=(n(40),n(1)),M=Object(y.b)({cartCount:R}),w=Object(r.b)(M)((function(e){var t=e.cartCount,n=Object(E.g)();return Object(k.jsxs)("div",{className:"btnCartCount",onClick:function(){return n.push("/cart")},children:[Object(k.jsx)("div",{className:"count",children:t>=100?"99+":t}),Object(k.jsx)("i",{className:"fas fa-shopping-cart"})]})})),D=(n(46),function(){return Object(k.jsx)("div",{className:"header-content_logo",children:Object(k.jsx)("div",{children:Object(k.jsx)("span",{children:Object(k.jsx)("b",{children:"Mokka Food"})})})})}),q=(n(47),function(){return Object(k.jsxs)("footer",{children:[Object(k.jsxs)("p",{children:[Object(k.jsx)("span",{className:"item-thank-you",children:"Thank You"})," ",Object(k.jsx)("span",{className:"item-heart",children:"\u2764\ufe0f"})," for supporting our new business!"]}),Object(k.jsx)(D,{})]})}),L=(n(48),n.p+"static/media/banner.75527149.png"),S=function(e){var t=e.handleScrollMenu;return Object(k.jsxs)("header",{children:[Object(k.jsxs)("div",{className:"header-content",children:[Object(k.jsx)(D,{}),Object(k.jsxs)("div",{className:"content-main",children:[Object(k.jsx)("h1",{children:"Mokka Food"}),Object(k.jsx)("h2",{children:"Website under construction."}),Object(k.jsx)("p",{children:"Fresh prepared meals for London, soon available for all of the UK!"}),Object(k.jsxs)("button",{onClick:t,children:["View Menu ",Object(k.jsx)("i",{className:"fas fa-long-arrow-alt-right"})]})]})]}),Object(k.jsx)("img",{className:"header-img",src:L,alt:"banner"})]})},V=n(22),P=(n(49),function(e){var t=e.quantity,n=e.handleAddItem,c=e.handleRemoveItem;return Object(k.jsx)("div",{className:"btnAddRemove",children:0!==t?Object(k.jsxs)("div",{className:"btnAddRemove-positive",children:[Object(k.jsx)("i",{className:"fa fa-minus","aria-hidden":"true",onClick:c}),Object(k.jsxs)("span",{children:[" ",t]}),Object(k.jsx)("i",{className:"fa fa-plus","aria-hidden":"true",onClick:n})]}):Object(k.jsxs)("div",{onClick:n,className:"btnAddRemove-negative",children:[Object(k.jsx)("span",{children:"ADD"}),Object(k.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})]})})}),F=(n(50),Object(y.b)({cartCount:R,cartList:A})),B=Object(r.b)(F,(function(e){return{cartAddItem:function(t){return e(function(e){return{type:b.CART_ADD_ITEM,payload:e}}(t))},cartRemoveItem:function(t){return e(function(e){return{type:b.CART_REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.item,n=e.cartCount,a=e.cartList,i=e.cartAddItem,r=e.cartRemoveItem,s=t.id,o=t.img,j=t.name,d=t.options,u=t.info,l=Object(c.useState)(0),b=Object(V.a)(l,2),O=(b[0],b[1]);var m=function(){return null!=d?Object(k.jsxs)("div",{className:"test-div",children:[Object(k.jsx)("p",{children:"Choose one:"}),Object(k.jsx)("select",{onChange:h,className:"select-item-options",children:Object.entries(d.idsAndNames).map((function(e){var n=Object(V.a)(e,2),c=n[0],a=n[1];return t.selectedOption+1==c?Object(k.jsx)("option",{selected:!0,value:c,className:"item-option",children:a},c):Object(k.jsx)("option",{value:c,className:"item-option",children:a},c)}))})]}):null};function h(e){t.selectedOption=e.target.value-1,t.calories=t.options.calories[t.selectedOption],O((function(e){return e+1}))}var f=function(){return null!=t.calories?Object(k.jsx)("div",{className:"item-calories-div",children:Object(k.jsxs)("p",{className:"item-calories",children:["Calories: ",t.calories]})}):null};return Object(k.jsxs)("div",{className:"item",children:[Object(k.jsx)("img",{src:o,alt:"food"}),Object(k.jsxs)("div",{className:"item-head_desc",children:[Object(k.jsx)("p",{className:"head_desc-name",children:j}),Object(k.jsx)("p",{className:"head_desc-info",children:u})]}),Object(k.jsx)(m,{}),Object(k.jsx)(f,{}),Object(k.jsx)("div",{className:"item-add-button-div",children:Object(k.jsx)(P,{quantity:function(){var e=0;if(0!==n){var t=a.find((function(e){return e.id===s}));t&&(e=t.quantity)}return e}(),handleRemoveItem:function(){return r(t)},handleAddItem:function(){return i(t)}})})]})})),G=(n(51),Object(c.forwardRef)((function(e,t){var n=e.list;return Object(k.jsx)("main",{ref:t,children:n.map((function(e){return Object(k.jsx)(B,{item:e},e.id)}))})}))),U=[{id:1,name:"Chia Nutri Garden",info:"Let us take you in a lovely garden this morning!",options:{idsAndNames:{1:"mokka",2:"kiwi",3:"berries"},calories:[1200,1e3,800]},calories:100,img:"/images/chia-nutri-garden-min.jpeg"},{id:2,name:"Picasso Super Breakfast",info:"Picasso Super Breakfast",img:"/images/picasso-super-breakfast-min.jpeg"},{id:3,name:"Good Protein Morning",info:"Good Protein Morning",img:"/images/good-protein-morning-min.jpeg"},{id:4,name:"Eggs Wrap Wake Up",info:"Delicious brunch in a healthy home-made wrap!",img:"/images/eggs-wrap-wake-up-min.jpeg"}],W=(n(52),function(){var e=Object(c.useRef)();return Object(k.jsxs)("div",{className:"test",children:[Object(k.jsx)(S,{handleScrollMenu:function(){e.current.scrollIntoView({behavior:"smooth"})}}),Object(k.jsx)(G,{list:U,ref:e}),Object(k.jsx)(q,{}),Object(k.jsx)(w,{})]})}),Y=(n(53),function(){var e=Object(E.g)();return Object(k.jsxs)("div",{className:"emptyCart",children:[Object(k.jsx)("img",{src:"https://merchlist.co/assets/emptycart.png",alt:""}),Object(k.jsxs)("button",{onClick:function(){return e.push("/")},children:[Object(k.jsx)("i",{className:"fas fa-long-arrow-alt-left"})," Shop Now"]})]})}),J=(n(54),Object(y.b)({cartCount:R,cartList:A,cartTotal:T})),X=Object(r.b)(J)((function(e){var t=e.cartCount,n=e.cartList,c=e.cartTotal;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("div",{className:"cart-header",children:Object(k.jsx)(D,{})}),0===t?Object(k.jsx)(Y,{}):Object(k.jsxs)("div",{className:"orders",children:[Object(k.jsx)("h1",{className:"orders-heading",children:"Your Orders"}),Object(k.jsx)("div",{className:"orders-menu",children:Object(k.jsx)(G,{list:n})}),Object(k.jsxs)("h3",{className:"orders-total",children:["Your Total $",c]})]}),Object(k.jsx)(q,{})]})})),K=function(){return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)(I.a,{children:Object(k.jsxs)(E.d,{children:[Object(k.jsx)(E.b,{exact:!0,path:"/",component:W}),Object(k.jsx)(E.b,{exact:!0,path:"/cart",component:X}),Object(k.jsx)(E.a,{to:"/"})]})})})};i.a.render(Object(k.jsx)(r.a,{store:C,children:Object(k.jsx)(s.a,{persistor:_,children:Object(k.jsx)(K,{})})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.ca076078.chunk.js.map