(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(19),s=n.n(a),i=n(10),r=n(38),o=n(12),l=n(21),j=n(39),u=n.n(j),d=n(4),m={CART_ADD_ITEM:"CART_ADD_ITEM",CART_REMOVE_ITEM:"CART_REMOVE_ITEM",CART_CLEAR_ITEM:"CART_CLEAR_ITEM"},b=n(44),O=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(b.a)(e),[Object(d.a)(Object(d.a)({},t),{},{quantity:1})])},f=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity-1}):e}))},h={cartItems:[]},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.CART_ADD_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:O(e.cartItems,t.payload)});case m.CART_CLEAR_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case m.CART_REMOVE_ITEM:return Object(d.a)(Object(d.a)({},e),{},{cartItems:f(e.cartItems,t.payload)});default:return e}},x={key:"quoality-guest",storage:u.a,whitelist:["cart"]},g=Object(o.b)({cart:p}),v=Object(l.a)(x,g),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,C=Object(o.d)(v,N(Object(o.a)())),y=Object(l.b)(C),I=(n(56),n(43)),k=n(3),E=n(13),R=n(6),_=Object(R.a)([function(e){return e.cart}],(function(e){return e.cartItems})),M=Object(R.a)([_,_],(function(e,t){return e.reduce((function(e,t){return e+t.quantity}),0)})),T=Object(R.a)([_],(function(e){return e.filter((function(e){return null!=e.price})).reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2)})),A=(n(57),n(0)),w=Object(R.b)({cartCount:M}),D=Object(i.b)(w)((function(e){var t=e.cartCount,n=Object(k.g)();return Object(A.jsxs)("div",{className:"btnCartCount",onClick:function(){return n.push("/cart")},children:[Object(A.jsx)("div",{className:"count",children:t>=100?"99+":t}),Object(A.jsx)("i",{className:"fas fa-shopping-cart"})]})})),S=(n(63),function(){return Object(A.jsx)("div",{className:"header-content_logo",children:Object(A.jsx)("div",{children:Object(A.jsx)("span",{children:Object(A.jsx)("b",{children:"Mokka Food"})})})})}),P=(n(64),function(){return Object(A.jsxs)("footer",{children:[Object(A.jsxs)("p",{children:[Object(A.jsx)("span",{className:"item-thank-you",children:"Thank You"})," ",Object(A.jsx)("span",{className:"item-heart",children:"\u2764\ufe0f"})," for supporting our new business!"]}),Object(A.jsx)(S,{})]})}),q=(n(65),n.p+"static/media/banner.75527149.png"),L=function(e){var t=e.handleScrollMealPlans;return Object(A.jsxs)("header",{children:[Object(A.jsxs)("div",{className:"header-content",children:[Object(A.jsx)(S,{}),Object(A.jsxs)("div",{className:"content-main",children:[Object(A.jsx)("h1",{children:"Mokka Food"}),Object(A.jsx)("h2",{children:"Website under construction."}),Object(A.jsx)("p",{children:"Fresh prepared meals for London, soon available for all of the UK!"}),Object(A.jsxs)("button",{onClick:t,children:["View Menu ",Object(A.jsx)("i",{className:"fas fa-long-arrow-alt-right"})]})]})]}),Object(A.jsx)("img",{className:"header-img",src:q,alt:"banner"})]})},F=(n(66),function(e){var t=e.quantity,n=e.getClass,c=e.handleAddItem,a=e.handleRemoveItem;return"meal-plan"==n()?Object(A.jsx)("div",{className:"btnAddRemove",children:0!==t?Object(A.jsxs)("div",{className:"btnAddRemove-positive",children:[Object(A.jsx)("i",{className:"fa fa-minus","aria-hidden":"true",onClick:a}),Object(A.jsxs)("span",{children:[" ",t]}),Object(A.jsx)("i",{className:"fa fa-plus","aria-hidden":"true",onClick:c})]}):Object(A.jsxs)("div",{onClick:c,className:"btnAddRemove-negative",children:[Object(A.jsx)("span",{children:"ADD"}),Object(A.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})]})}):null}),V=(n(67),Object(R.b)({cartCount:M,cartList:_})),W=Object(i.b)(V,(function(e){return{cartAddItem:function(t){return e(function(e){return{type:m.CART_ADD_ITEM,payload:e}}(t))},cartRemoveItem:function(t){return e(function(e){return{type:m.CART_REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.openItemDetails,n=e.item,a=e.cartCount,s=e.cartList,i=e.cartAddItem,r=e.cartRemoveItem,o=n.id,l=n.img,j=n.name,u=n.options,d=n.info,m=n.price,b=Object(c.useState)(0),O=Object(E.a)(b,2),f=(O[0],O[1]);var h=function(){return null!=u?Object(A.jsxs)("div",{className:"option-list-root-div",children:[Object(A.jsx)("p",{className:"option-list-desc",children:"Choose one:"}),Object(A.jsx)("div",{className:"option-list-div",children:Object(A.jsx)("select",{onChange:p,className:"select-item-options",children:Object.entries(u.idsAndNames).map((function(e){var t=Object(E.a)(e,2),c=t[0],a=t[1];return n.selectedOption+1==c?Object(A.jsx)("option",{selected:!0,value:c,className:"item-option",children:a},c):Object(A.jsx)("option",{value:c,className:"item-option",children:a},c)}))})})]}):null};function p(e){n.selectedOption=e.target.value-1,n.calories=n.options.calories[n.selectedOption],f((function(e){return e+1}))}var x=function(){return null!=n.calories?Object(A.jsx)("div",{className:"item-calories-div",children:Object(A.jsxs)("p",{className:"item-calories",children:[Object(A.jsx)("b",{children:n.calories})," Calories"]})}):null},g=function(){return null!=d?Object(A.jsx)("p",{className:"head_desc-info",children:d.map((function(e,t){return Object(A.jsxs)("span",{children:[e,Object(A.jsx)("br",{})]},t)}))}):null},v=function(){return null!=m?Object(A.jsxs)("p",{className:"price",children:["\xa3",m]}):Object(A.jsx)("p",{})};return Object(A.jsxs)("div",{className:8==String(o)[0]?"item-meal-plan":"item",children:[Object(A.jsx)("img",{onClick:function(){return t(o)},className:"item-image",src:l,alt:"food"}),Object(A.jsxs)("div",{onClick:function(){return t(o)},className:"item-head_desc",children:[Object(A.jsx)("p",{className:"head_desc-name",children:j}),Object(A.jsx)(g,{})]}),Object(A.jsx)(h,{}),Object(A.jsx)(x,{}),Object(A.jsxs)("div",{className:"item-add-button-div",children:[Object(A.jsx)(v,{}),Object(A.jsx)(F,{quantity:function(){var e=0;if(0!==a){var t=s.find((function(e){return e.id===o}));t&&(e=t.quantity)}return e}(),getClass:function(){return 8==String(o)[0]?"meal-plan":"menu-item"},handleRemoveItem:function(){return r(n)},handleAddItem:function(){return i(n)}})]})]})})),G=(n(68),Object(c.forwardRef)((function(e,t){var n=e.cartItems,c=e.cartCount,a=e.openItemDetails,s=e.list;return 0!==c&&n.find((function(e){return 8==String(e.id)[0]}))?Object(A.jsxs)("main",{className:"menu-main",ref:t,children:[Object(A.jsx)("h1",{className:"menu-meal-time-title",children:"Breakfast"}),Object(A.jsx)("h1",{className:"menu-meal-time-title",children:"Lunch"}),Object(A.jsx)("h1",{className:"menu-meal-time-title",children:"Dinner"}),s.map((function(e){return Object(A.jsx)(W,{openItemDetails:a,item:e},e.id)}))]}):null}))),J=Object(R.b)({cartItems:_,cartCount:M}),U=Object(i.b)(J)(G),B=(n(69),Object(c.forwardRef)((function(e,t){var n=e.list;return Object(A.jsx)("main",{className:"meal-plans-main",ref:t,children:n.map((function(e){return Object(A.jsx)(W,{openItemDetails:function(){return function(){}},item:e},e.id)}))})}))),Y=[{id:101,name:"Chia Nutri Garden",info:["Let us take you in a lovely garden this morning!"],options:{idsAndNames:{1:"mokka",2:"kiwi",3:"berries"},calories:[1200,1e3,800]},calories:1200,img:"/images/chia-nutri-garden-min.jpeg"},{id:102,name:"Picasso Super Breakfast",info:["Picasso Super Breakfast"],img:"/images/picasso-super-breakfast-min.jpeg"},{id:103,name:"Good Protein Morning",info:["Good Protein Morning"],img:"/images/good-protein-morning-min.jpeg"},{id:104,name:"Eggs Wrap Wake Up",info:["Delicious brunch in a healthy home-made wrap!"],img:"/images/eggs-wrap-wake-up-min.jpeg"}],z=[{id:801,name:"Low Calorie Plan",info:["1200 - 1800 Calories.","Choose 15 meals!"],img:"/images/meal-plan-temp-min.jpeg",price:64.99,priceInCents:6499},{id:802,name:"Mid Calorie Plan",info:["Balanced Plan.","1800 - 2400 Calories.","Choose 15 meals!"],img:"/images/meal-plan-temp-min.jpeg",price:74.99,priceInCents:7499},{id:803,name:"High Calorie Plan",info:["Muscle Gain Plan.","2400 - 3200 Calories.","Choose 15 meals!"],img:"/images/meal-plan-temp-min.jpeg",price:84.99,priceInCents:8499}],X=(n(70),function(e){var t=e.closeItemDetails,n=e.item;return null!=n?Object(A.jsx)("div",{className:"modal",children:Object(A.jsxs)("div",{className:"modal-content",children:[Object(A.jsx)("button",{className:"modal-close-button",onClick:t,children:Object(A.jsx)("i",{class:"fas fa-times"})}),Object(A.jsx)("h1",{children:n.id}),Object(A.jsx)("p",{children:n.name}),Object(A.jsx)("p",{children:n.info})]})}):null}),K=(n(71),Object(R.b)({cartItems:_,cartCount:M})),H=Object(i.b)(K)((function(e){e.cartItems,e.cartCount;var t=Object(c.useState)(null),n=Object(E.a)(t,2),a=n[0],s=n[1],i=Object(c.useRef)(),r=Object(c.useRef)();return Object(A.jsxs)("div",{children:[Object(A.jsx)(L,{handleScrollMealPlans:function(){i.current.scrollIntoView({behavior:"smooth"})}}),Object(A.jsx)(B,{list:z,ref:i}),Object(A.jsx)(U,{openItemDetails:function(e){var t=Y.find((function(t){return t.id===e}));s(t)},list:Y,ref:r}),Object(A.jsx)(P,{}),Object(A.jsx)(D,{}),Object(A.jsx)(X,{closeItemDetails:function(){s(null)},item:a})]})})),Q=(n(72),function(){var e=Object(k.g)();return Object(A.jsxs)("div",{className:"emptyCart",children:[Object(A.jsx)("img",{src:"https://merchlist.co/assets/emptycart.png",alt:""}),Object(A.jsxs)("button",{onClick:function(){return e.push("/")},children:[Object(A.jsx)("i",{className:"fas fa-long-arrow-alt-left"})," Shop Now"]})]})}),Z=(n(73),Object(R.b)({cartCount:M,cartList:_,cartTotal:T})),$=Object(i.b)(Z)((function(e){var t=e.cartCount,n=e.cartList,c=e.cartTotal,a=Object(k.g)();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"cart-header",children:Object(A.jsx)(S,{})}),0===t?Object(A.jsx)(Q,{}):Object(A.jsxs)("div",{className:"orders",children:[Object(A.jsx)("h1",{className:"orders-heading",children:"Your Orders"}),Object(A.jsx)("div",{className:"orders-menu",children:Object(A.jsx)(U,{list:n})}),Object(A.jsxs)("h3",{className:"orders-total",children:["Your Total \xa3",c]}),Object(A.jsxs)("button",{className:"payment-button",onClick:function(){return a.push("/payment")},children:["Proceed to payment ",Object(A.jsx)("i",{className:"fas fa-long-arrow-alt-right"})]})]}),Object(A.jsx)(P,{})]})})),ee=(n(74),n(14)),te=n(40),ne=n(27),ce=n.n(ne),ae=n(41),se=(n(76),n(42)),ie=n.n(se),re={iconStyle:"solid",style:{base:{iconColor:"#c4f0ff",color:"#fff",fontWeight:500,fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"16px",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#fce883"},"::placeholder":{color:"#87bbfd"}},invalid:{iconColor:"#ffc7ee",color:"ffc7ee"}}},oe=function(){var e=Object(c.useState)(!1),t=Object(E.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(E.a)(s,2),r=i[0],o=i[1],l=Object(ee.useStripe)(),j=Object(ee.useElements)(),u=function(){var e=Object(ae.a)(ce.a.mark((function e(t){var n,c,s,i,r;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o("Processing payment..."),t.preventDefault(),e.next=4,l.createPaymentMethod({type:"card",card:j.getElement(ee.CardElement)});case 4:if(n=e.sent,c=n.error,s=n.paymentMethod,c){e.next=23;break}return e.prev=8,i=s.id,e.next=12,ie.a.post("https://mokkafoodapi.co.uk:8443/payment",{amount:1e3,id:i});case 12:r=e.sent,o(r.data.message),r.data.success&&(console.log("Payment successful."),a(!0)),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(8),console.log("Payment error: ",e.t0.message),o(e.t0.message);case 21:e.next=25;break;case 23:console.log("Payment error: ",c.message),o(c.message);case 25:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsx)(A.Fragment,{children:n?Object(A.jsx)("div",{children:Object(A.jsx)("h3",{children:r})}):Object(A.jsxs)("form",{onSubmit:u,children:[Object(A.jsx)("fieldset",{className:"FormGroup",children:Object(A.jsx)("div",{className:"FormRow",children:Object(A.jsx)(ee.CardElement,{options:re})})}),Object(A.jsx)("button",{className:"payment-button",children:"Pay"}),Object(A.jsx)("h3",{children:r})]})})},le=Object(te.a)("pk_test_51KiNNxIJsRU3NrL6hjk2WsS42Ww3vbUepszzMxRtkJ8eEGMOd35bIosepRO0RMdYo0iVDq6wDfqNE24lvJQZeyJ500WqdFX1Pu"),je=function(){return Object(A.jsxs)(ee.Elements,{stripe:le,children:[Object(A.jsx)("h1",{children:"Test Payment"}),Object(A.jsx)(oe,{})]})},ue=function(){return Object(A.jsx)("div",{className:"container",children:Object(A.jsx)(I.a,{children:Object(A.jsxs)(k.d,{children:[Object(A.jsx)(k.b,{exact:!0,path:"/",component:H}),Object(A.jsx)(k.b,{exact:!0,path:"/cart",component:$}),Object(A.jsx)(k.b,{exact:!0,path:"/payment",component:je}),Object(A.jsx)(k.a,{to:"/"})]})})})};s.a.render(Object(A.jsx)(i.a,{store:C,children:Object(A.jsx)(r.a,{persistor:y,children:Object(A.jsx)(ue,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.de94ef98.chunk.js.map