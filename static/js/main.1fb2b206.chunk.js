(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(19),c=n.n(s),i=n(11),r=n(40),l=n(13),o=n(22),d=n(41),j=n.n(d),u=n(5),m={CART_ADD_ITEM:"CART_ADD_ITEM",CART_REMOVE_ITEM:"CART_REMOVE_ITEM",CART_CLEAR_ITEM:"CART_CLEAR_ITEM"},b=n(46),h=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(b.a)(e),[Object(u.a)(Object(u.a)({},t),{},{quantity:1})])},O=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{quantity:e.quantity-1}):e}))},p={cartItems:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.CART_ADD_ITEM:return Object(u.a)(Object(u.a)({},e),{},{cartItems:h(e.cartItems,t.payload)});case m.CART_CLEAR_ITEM:return Object(u.a)(Object(u.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case m.CART_REMOVE_ITEM:return Object(u.a)(Object(u.a)({},e),{},{cartItems:O(e.cartItems,t.payload)});default:return e}},x={key:"quoality-guest",storage:j.a,whitelist:["cart"]},g=Object(l.b)({cart:f}),v=Object(o.a)(x,g),N=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,y=Object(l.d)(v,N(Object(l.a)())),C=Object(o.b)(y),k=(n(58),n(45)),I=n(2),w=n(4),D=n(7),_=[{id:801,name:"Low Calorie Plan",info:["1200 - 1800 Calories"],img:"/images/meal-plans/low-calorie.jpeg",mealIDs:[101,102,103,104],price:64.99,priceInCents:6499},{id:802,name:"Balanced Plan",info:["1800 - 2400 Calories"],img:"/images/meal-plans/mid-calorie.jpeg",mealIDs:[101,102,103,106,107],price:74.99,priceInCents:7499},{id:803,name:"Muscle Gain Plan",info:["2400 - 3200 Calories"],img:"/images/meal-plans/high-calorie.jpeg",mealIDs:[101,104,108],price:84.99,priceInCents:8499}],M=Object(D.a)([function(e){return e.cart}],(function(e){return e.cartItems})),E=Object(D.a)([M,M],(function(e,t){return e.reduce((function(e,t){return e+t.quantity}),0)})),R=Object(D.a)([M],(function(e){return e.filter((function(e){return null!=e.price})).reduce((function(e,t){return e+t.quantity*t.price}),0).toFixed(2)})),A=(n(59),n(0)),P=Object(D.b)({cartCount:E}),T=Object(i.b)(P)((function(e){var t=e.cartCount,n=e.handleOpenCart;Object(I.g)();return Object(A.jsxs)("div",{className:"btnCartCount",onClick:n,children:[Object(A.jsx)("div",{className:"count",children:t>=100?"99+":t}),Object(A.jsx)("i",{className:"fas fa-shopping-cart"})]})})),S=n(23),q=n.n(S),L=(n(65),function(e){var t=e.mealPlanItem,n=e.closePostCodePopUp,s=e.handleOpenMealPlan,c=e.postCodePopUp,i=Object(a.useState)(null),r=Object(w.a)(i,2),l=r[0],o=r[1],d=Object(a.useState)(null),j=Object(w.a)(d,2),u=j[0],m=j[1];function b(){var e="";null!=u&&(e=u),window.open("mailto:catering@mokkafood.co.uk?subject=No delivery for post code "+e)}q.a.setApiKey("AIzaSyDqhSQVRkV4GwtDANDDAMqXIZfD39zqIQ4"),q.a.setRegion("UK");var h=function(){return null==l?null:"error"==l?Object(A.jsxs)("div",{children:[Object(A.jsx)("p",{className:"post-code-sorry",children:"Oops! Unfortunately, we don't deliver here yet. Please double-check that the post code is correct. You could send us an e-mail to request delivery for your location at catering@mokkafood.co.uk!"}),Object(A.jsxs)("button",{className:"post-code-sorry-button",onClick:b,children:[Object(A.jsx)("i",{className:"post-code-icon fa-solid fa-envelope"})," Send us an e-mail"]})]}):Object(A.jsxs)("div",{children:[Object(A.jsxs)("p",{className:"post-code-success",children:["Good news!",Object(A.jsx)("br",{}),"We deliver to this post code!"]}),Object(A.jsxs)("button",{className:"post-code-success-button",onClick:function(){return s(t)},children:[Object(A.jsx)("i",{class:"post-code-icon fa-solid fa-basket-shopping"})," Customize your plan now!"]})]})};return 1==c?Object(A.jsx)("div",{className:"modal-post-code",children:Object(A.jsxs)("div",{className:"modal-content-post-code",children:[Object(A.jsx)("button",{className:"modal-close-button-post-code",onClick:function(){o(null),n()},children:Object(A.jsx)("i",{class:"fas fa-times"})}),Object(A.jsx)("p",{className:"post-code-question",children:"Could you please enter your post code so we can check if we deliver to you?"}),Object(A.jsx)("form",{className:"post-code-form",children:Object(A.jsx)("input",{className:"post-code-text-field",type:"text",onChange:function(e){null!=e.target.value&&null!=e.target.value[0]&&null!=e.target.value[1]&&q.a.fromAddress(e.target.value).then((function(t){var n=null!=t.results[0].address_components.find((function(e){return e.short_name.includes("London")}));null!=t.results[0].address_components.find((function(e){return"Essex"===e.short_name}))||n&&("N"===e.target.value[0].toUpperCase()||"E"===e.target.value[0].toUpperCase()||"I"===e.target.value[0].toUpperCase()&&"G"===e.target.value[1].toUpperCase()||"R"===e.target.value[0].toUpperCase()&&"M"===e.target.value[1].toUpperCase())?o(e.target.value):(o("error"),m(e.target.value))}),(function(t){console.error(t),o("error"),m(e.target.value)}))},placeholder:null==l||"error"==l?"Enter Post Code Here":l})}),Object(A.jsx)(h,{})]})}):null}),U=(n(66),function(e){var t=e.item,n=e.handleOpenMealPlan,a=(Object(I.g)(),t.id),s=t.img,c=t.name,i=t.info,r=(t.mealIDs,t.price,t.priceInCents,function(){return null!=i?Object(A.jsx)("p",{className:"meal-plan-info",children:i.map((function(e,t){return Object(A.jsxs)("span",{children:[e,Object(A.jsx)("br",{})]},t)}))}):null});return Object(A.jsxs)("div",{className:"item-meal-plan",children:[Object(A.jsx)("img",{className:"item-image",src:s,alt:"food"}),Object(A.jsxs)("div",{className:"item-head_desc",children:[Object(A.jsx)("p",{className:"meal-plan-name",children:c}),Object(A.jsx)(r,{})]}),Object(A.jsx)("div",{className:"item-add-button-div",children:Object(A.jsxs)("button",{className:"meal-plan-button",onClick:function(){return n(a)},children:["Add Me",Object(A.jsx)("i",{class:"fa-solid fa-utensils"})]})})]})}),W=(n(67),Object(a.forwardRef)((function(e,t){var n=e.list,a=e.handleOpenMealPlan;return Object(A.jsx)("main",{className:"meal-plans-main",ref:t,children:n.map((function(e){return Object(A.jsx)(U,{item:e,handleOpenMealPlan:function(){return a(e)}},e.id)}))})}))),V=(n(68),function(){return Object(A.jsx)("div",{className:"header-content_logo",children:Object(A.jsx)("div",{children:Object(A.jsx)("span",{children:Object(A.jsx)("b",{children:"\xa9 2022 Mokka Food"})})})})}),F=(n(69),function(){return Object(A.jsxs)("footer",{children:[Object(A.jsxs)("div",{className:"recyclable-div",children:[Object(A.jsx)("p",{children:"We use only recyclable trays."}),Object(A.jsx)("img",{src:"/images/about-us/recyclable-trays.png"})]}),Object(A.jsxs)("div",{className:"mokka-footer",children:[Object(A.jsxs)("p",{children:[Object(A.jsx)("span",{className:"item-thank-you",children:"Thank You"})," ",Object(A.jsx)("span",{className:"item-heart",children:"\u2764\ufe0f"})," for supporting our new business!"]}),Object(A.jsx)(V,{})]}),Object(A.jsx)("div",{className:"credits-footer",children:Object(A.jsx)("a",{href:"https://storyset.com/work",children:"Illustrations by Storyset"})})]})}),G=(n(70),n.p,Object(a.forwardRef)((function(e,t){var n=e.handleScrollMealPlans;return Object(A.jsx)("main",{ref:t,children:Object(A.jsxs)("header",{children:[Object(A.jsx)("div",{className:"header-content",children:Object(A.jsxs)("div",{className:"content-main",children:[Object(A.jsx)("h1",{className:"company-name",children:"Mokka Food"}),Object(A.jsxs)("p",{children:["Fresh prepared 5days weekly meals for North East London ",Object(A.jsx)("span",{className:"including-essex",children:"(including Essex)"}),Object(A.jsx)("br",{}),"Soon available for all of the UK"]}),Object(A.jsx)("img",{className:"header-mobile-img",src:"/images/banner.png",alt:"banner"}),Object(A.jsxs)("button",{onClick:n,children:["View Meal Plans ",Object(A.jsx)("i",{className:"fas fa-long-arrow-alt-right"})]})]})}),Object(A.jsx)("img",{className:"header-img",src:"/images/banner.png",alt:"banner"})]})})}))),B=(n(71),function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"what-we-serve-div-about-us",children:Object(A.jsx)("h1",{children:"Why should you choose us?"})}),Object(A.jsxs)("div",{className:"what-we-serve-images-div-about-us",children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("img",{src:"/images/about-us/easy-to-order.png"}),Object(A.jsx)("p",{children:"Easy To Order"}),Object(A.jsx)("span",{className:"small",children:"Personlized Menus"})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("img",{src:"/images/about-us/fastest-delivery.png"}),Object(A.jsx)("p",{children:"Fast Delivery"}),Object(A.jsx)("span",{className:"small",children:"Every Tuesday and Sunday"})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("img",{src:"/images/about-us/best-quality.png"}),Object(A.jsx)("p",{children:"Premium Quality"}),Object(A.jsx)("span",{className:"small",children:"Fresh and Delicious"})]})]}),Object(A.jsxs)("div",{className:"delivery-info-div",children:[Object(A.jsx)("div",{className:"info-icon",children:Object(A.jsx)("i",{class:"fa fa-info"})}),Object(A.jsxs)("span",{className:"delivery-info",children:["We will deliver your Monday and Tuesday meals on Sunday evening,",Object(A.jsx)("br",{}),"and your Wednesday, Thursday and Friday meals on Tuesday evening.",Object(A.jsx)("br",{}),"(Soon available option for extra meals for the weekend!)"]})]}),Object(A.jsxs)("div",{className:"main-div-about-us",children:[Object(A.jsxs)("div",{className:"about-us-item",children:[Object(A.jsxs)("div",{className:"left-item",children:[Object(A.jsx)("p",{children:"You can change your meals to your preference and taste."}),Object(A.jsxs)("p",{className:"small-left",children:["Choose between ",Object(A.jsx)("b",{children:"low"}),", ",Object(A.jsx)("b",{children:"balanced"})," and ",Object(A.jsx)("b",{children:"high calorie menus."})]}),Object(A.jsx)("p",{className:"small-left",children:"We believe every meal you like has a healthy way to be prepared!"})]}),Object(A.jsxs)("div",{className:"image-with-text",children:[Object(A.jsx)("img",{className:"right-item",src:"/images/about-us/change-meals-to-preference.gif"}),Object(A.jsxs)("div",{className:"text-under-image",children:[Object(A.jsx)("p",{className:"text-image-left",children:"Caesar with chicken"}),Object(A.jsx)("p",{className:"text-image",children:"/"}),Object(A.jsx)("p",{className:"text-image-right",children:"Caesar with shripms"})]})]})]}),Object(A.jsxs)("div",{className:"mobile-div",children:[Object(A.jsxs)("span",{className:"mobile-small",children:["Choose between ",Object(A.jsx)("b",{children:"low"}),", ",Object(A.jsx)("b",{children:"balanced"})," and ",Object(A.jsx)("b",{children:"high calorie menus."})]}),Object(A.jsx)("span",{className:"mobile-small",children:"We believe every meal you like has a healthy way to be prepared!"})]}),Object(A.jsxs)("div",{className:"about-us-item",children:[Object(A.jsx)("img",{className:"left-item",src:"/images/about-us/fresh-products.png"}),Object(A.jsxs)("div",{className:"right-item",children:[Object(A.jsx)("p",{children:"We use local farm products and fresh ingriedients."}),Object(A.jsxs)("p",{className:"small-right",children:["Our bread, pasta and noodles are ",Object(A.jsx)("b",{children:"homemade"}),"!"]})]})]}),Object(A.jsx)("div",{className:"mobile-div",children:Object(A.jsxs)("span",{className:"mobile-small",children:["Our bread, pasta and noodles are ",Object(A.jsx)("b",{children:"homemade"}),"!"]})}),Object(A.jsxs)("div",{className:"about-us-item",children:[Object(A.jsxs)("div",{className:"left-item",children:[Object(A.jsx)("p",{children:"We are a new small local business with experienced chefs, ready to save your time and prepare healthy delicious meals."}),Object(A.jsxs)("p",{className:"small-left",children:["Leave it all to us - we cook and deliver to your door, ",Object(A.jsx)("br",{}),"just ",Object(A.jsx)("b",{children:"warm it up"})," and ",Object(A.jsx)("b",{children:"enjoy"}),"!"]})]}),Object(A.jsx)("img",{className:"right-item",src:"/images/about-us/experienced-chefs.gif"})]}),Object(A.jsx)("div",{className:"mobile-div",children:Object(A.jsxs)("span",{className:"mobile-small",children:["Leave it all to us - we cook and deliver to your door, just ",Object(A.jsx)("b",{children:"warm it up"})," and ",Object(A.jsx)("b",{children:"enjoy"}),"!"]})}),Object(A.jsx)("div",{className:"lets-get-started",children:Object(A.jsx)("h1",{children:"Let's get started!"})})]})]})}),z=(n(72),Object(D.b)({cartItems:M,cartCount:E})),J=Object(i.b)(z)((function(e){e.cartItems,e.cartCount;var t=Object(a.useState)(!1),n=Object(w.a)(t,2),s=n[0],c=n[1],i=Object(a.useState)(null),r=Object(w.a)(i,2),l=r[0],o=r[1],d=Object(I.g)(),j=Object(a.useRef)(),u=Object(a.useRef)();function m(){c(!1)}return window.onbeforeunload=function(){return window.location.href.includes("meal-plan")||window.location.href.includes("cart")?"Are you sure? You have unsaved changes!":null},Object(A.jsxs)("div",{children:[Object(A.jsx)(G,{handleScrollMealPlans:function(){j.current.scrollIntoView({behavior:"smooth"})},ref:u}),Object(A.jsx)(B,{}),Object(A.jsx)(W,{list:_,handleOpenMealPlan:function(e){o(e),c(!0)},ref:j}),Object(A.jsx)(F,{}),Object(A.jsx)(T,{handleOpenCart:function(){u.current.scrollIntoView(),d.push("/cart")}}),Object(A.jsx)(L,{mealPlanItem:l,closePostCodePopUp:m,handleOpenMealPlan:function(e){m(),u.current.scrollIntoView(),d.push("/meal-plan",[e])},postCodePopUp:s})]})})),Y=(n(73),function(){Object(I.g)();return Object(A.jsx)("div",{className:"emptyCart",children:Object(A.jsxs)("p",{children:["Your cart is empty ",Object(A.jsx)("i",{class:"fa-regular fa-frown"})]})})}),K=(n(74),function(e){var t=e.item,n=t.id,a=t.img,s=t.name,c=(t.options,t.info),i=(t.price,function(){return null!=c?Object(A.jsx)("p",{className:"head_desc-info",children:c.map((function(e,t){return Object(A.jsxs)("span",{children:[e,Object(A.jsx)("br",{})]},t)}))}):null});return Object(A.jsxs)("div",{className:8==String(n)[0]?"item-meal-plan":"item",children:[Object(A.jsx)("img",{className:"item-image",src:a,alt:"food"}),Object(A.jsxs)("div",{className:"item-head_desc",children:[Object(A.jsx)("p",{className:"head_desc-name",children:s}),Object(A.jsx)(i,{})]})]})}),Q=(n(75),Object(a.forwardRef)((function(e,t){var n=e.cartItems,a=e.cartCount,s=(e.openItemDetails,e.list);return 0!==a&&n.find((function(e){return 8==String(e.id)[0]}))?Object(A.jsx)("main",{className:"menu-main",ref:t,children:s.map((function(e){return Object(A.jsx)(K,{item:e},e.id)}))}):null}))),X=Object(D.b)({cartItems:M,cartCount:E}),Z=(Object(i.b)(X)(Q),n(76),n(14),n(42)),H=(n(21),n(43),n(77),n(44),Object(Z.a)("pk_test_51KiNNxIJsRU3NrL6hjk2WsS42Ww3vbUepszzMxRtkJ8eEGMOd35bIosepRO0RMdYo0iVDq6wDfqNE24lvJQZeyJ500WqdFX1Pu"),n(96),Object(D.b)({cartCount:E,cartList:M,cartTotal:R})),$=Object(i.b)(H)((function(e){e.cartCount,e.cartList,e.cartTotal;var t=Object(I.g)();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"cart-header",children:Object(A.jsxs)("button",{className:"back-button",onClick:function(){return t.push("/")},children:[Object(A.jsx)("i",{class:"fa fa-arrow-left"}),"Go Back"]})}),Object(A.jsx)(Y,{}),Object(A.jsx)(F,{})]})})),ee=[{id:101,name:"Chia Nutri Garden",info:["Let us take you in a lovely garden this morning!"],category:"breakfast",options:{idsAndNames:{1:"mokka",2:"kiwi",3:"berries"},calories:[1200,1e3,800]},calories:1200,img:"/images/breakfast/chia-nutri-garden-min.jpeg"},{id:102,name:"Picasso Super Breakfast",info:["Picasso Super Breakfast"],category:"breakfast",img:"/images/breakfast/picasso-super-breakfast-min.jpeg"},{id:103,name:"Good Protein Morning",info:["Good Protein Morning"],category:"breakfast",img:"/images/breakfast/good-protein-morning-min.jpeg"},{id:104,name:"Eggs Wrap Wake Up",info:["Delicious brunch in a healthy home-made wrap!"],category:"breakfast",img:"/images/breakfast/eggs-wrap-wake-up-min.jpeg"},{id:105,name:"Lunch Meal",info:["Delicious lunch meal!"],category:"lunch",img:"/images/meal-plans/high-calorie.jpeg"},{id:106,name:"Lunch Meal",info:["Delicious lunch meal!"],category:"lunch",img:"/images/meal-plans/high-calorie.jpeg"},{id:107,name:"Dinner Meal",info:["Delicious dinner meal!"],category:"dinner",img:"/images/meal-plans/low-calorie.jpeg"},{id:108,name:"Dinner Meal",info:["Delicious dinner meal!"],category:"dinner",img:"/images/meal-plans/low-calorie.jpeg"}],te=(n(97),function(e){var t=e.quantity,n=e.getClass,a=e.handleAddItem,s=e.handleRemoveItem;return"meal-plan"==n()?Object(A.jsx)("div",{className:"btnAddRemove",children:0!==t?Object(A.jsxs)("div",{className:"btnAddRemove-positive",children:[Object(A.jsx)("i",{className:"fa fa-minus","aria-hidden":"true",onClick:s}),Object(A.jsxs)("span",{children:[" ",t]}),Object(A.jsx)("i",{className:"fa fa-plus","aria-hidden":"true",onClick:a})]}):Object(A.jsxs)("div",{onClick:a,className:"btnAddRemove-negative",children:[Object(A.jsx)("span",{children:"ADD"}),Object(A.jsx)("i",{className:"fa fa-plus","aria-hidden":"true"})]})}):null}),ne=(n(98),Object(D.b)({cartCount:E,cartList:M})),ae=Object(i.b)(ne,(function(e){return{cartAddItem:function(t){return e(function(e){return{type:m.CART_ADD_ITEM,payload:e}}(t))},cartRemoveItem:function(t){return e(function(e){return{type:m.CART_REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.openItemDetails,n=e.item,s=e.cartCount,c=e.cartList,i=e.cartAddItem,r=e.cartRemoveItem,l=n.id,o=n.img,d=n.name,j=n.options,u=n.info,m=(n.price,Object(a.useState)(0)),b=Object(w.a)(m,2),h=(b[0],b[1]);var O=function(){return null!=j?Object(A.jsxs)("div",{className:"option-list-root-div",children:[Object(A.jsx)("p",{className:"option-list-desc",children:"Choose one:"}),Object(A.jsx)("div",{className:"option-list-div",children:Object(A.jsx)("select",{onChange:p,className:"select-item-options",children:Object.entries(j.idsAndNames).map((function(e){var t=Object(w.a)(e,2),a=t[0],s=t[1];return n.selectedOption+1==a?Object(A.jsx)("option",{selected:!0,value:a,className:"item-option",children:s},a):Object(A.jsx)("option",{value:a,className:"item-option",children:s},a)}))})})]}):null};function p(e){n.selectedOption=e.target.value-1,n.calories=n.options.calories[n.selectedOption],h((function(e){return e+1}))}var f=function(){return null!=n.calories?Object(A.jsx)("div",{className:"item-calories-div",children:Object(A.jsxs)("p",{className:"item-calories",children:[Object(A.jsx)("b",{children:n.calories})," Calories"]})}):null},x=function(){return null!=u?Object(A.jsx)("p",{className:"head_desc-info",children:u.map((function(e,t){return Object(A.jsxs)("span",{children:[e,Object(A.jsx)("br",{})]},t)}))}):null};return Object(A.jsxs)("div",{className:8==String(l)[0]?"item-meal-plan":"item",children:[Object(A.jsx)("img",{onClick:function(){return t(l)},className:"item-image",src:o,alt:"food"}),Object(A.jsxs)("div",{onClick:function(){return t(l)},className:"item-head_desc",children:[Object(A.jsx)("p",{className:"head_desc-name",children:d}),Object(A.jsx)(x,{})]}),Object(A.jsx)(O,{}),Object(A.jsx)(f,{}),Object(A.jsx)("div",{className:"item-add-button-div",children:Object(A.jsx)(te,{quantity:function(){var e=0;if(0!==s){var t=c.find((function(e){return e.id===l}));t&&(e=t.quantity)}return e}(),getClass:function(){return 8==String(l)[0]?"meal-plan":"menu-item"},handleRemoveItem:function(){return r(n)},handleAddItem:function(){return i(n)}})})]})})),se=(n(99),function(e){var t=e.openItemDetails,n=e.mealPlanItem,a=e.list;return Object(A.jsxs)("main",{className:"menu-main",children:[Object(A.jsxs)("div",{className:"breakfast-div",children:[Object(A.jsx)("h1",{className:"menu-meal-time-title",children:"Breakfast"}),a.filter((function(e){return"breakfast"==e.category})).filter((function(e){return n.mealIDs.includes(e.id)})).map((function(e){return Object(A.jsx)(ae,{openItemDetails:t,item:e},e.id)}))]}),Object(A.jsxs)("div",{className:"lunch-div",children:[Object(A.jsx)("h1",{className:"menu-meal-time-title",children:"Lunch"}),a.filter((function(e){return"lunch"==e.category})).filter((function(e){return n.mealIDs.includes(e.id)})).map((function(e){return Object(A.jsx)(ae,{openItemDetails:t,item:e},e.id)}))]}),Object(A.jsxs)("div",{className:"dinner-div",children:[Object(A.jsx)("h1",{className:"menu-meal-time-title",children:"Dinner"}),a.filter((function(e){return"dinner"==e.category})).filter((function(e){return n.mealIDs.includes(e.id)})).map((function(e){return Object(A.jsx)(ae,{openItemDetails:t,item:e},e.id)}))]})]})}),ce=(n(100),function(e){var t=e.closeItemDetails,n=e.item;return null!=n?Object(A.jsx)("div",{className:"modal",children:Object(A.jsxs)("div",{className:"modal-content",children:[Object(A.jsx)("button",{className:"modal-close-button",onClick:t,children:Object(A.jsx)("i",{class:"fas fa-times"})}),Object(A.jsx)("h1",{children:n.id}),Object(A.jsx)("p",{children:n.name}),Object(A.jsx)("p",{children:n.info})]})}):null}),ie=(n(101),function(e){var t=Object(a.useState)(null),n=Object(w.a)(t,2),s=n[0],c=n[1],i=_[0],r=Object(I.g)();return Object(A.jsxs)("main",{children:[Object(A.jsxs)("button",{className:"back-button",onClick:function(){return r.push("/")},children:[Object(A.jsx)("i",{class:"fa fa-arrow-left"}),"Go Back"]}),Object(A.jsx)(se,{openItemDetails:function(e){var t=ee.find((function(t){return t.id===e}));c(t)},mealPlanItem:null!=e.location.state[0]?e.location.state[0]:i,list:ee}),Object(A.jsx)(ce,{closeItemDetails:function(){c(null)},item:s})]})}),re=function(){return Object(A.jsx)("div",{className:"container",children:Object(A.jsx)(k.a,{children:Object(A.jsxs)(I.d,{children:[Object(A.jsx)(I.b,{exact:!0,path:"/",component:J}),Object(A.jsx)(I.b,{exact:!0,path:"/cart",component:$}),Object(A.jsx)(I.b,{exact:!0,path:"/meal-plan",component:ie}),Object(A.jsx)(I.a,{to:"/"})]})})})};c.a.render(Object(A.jsx)(i.a,{store:y,children:Object(A.jsx)(r.a,{persistor:C,children:Object(A.jsx)(re,{})})}),document.getElementById("root"))},58:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.1fb2b206.chunk.js.map