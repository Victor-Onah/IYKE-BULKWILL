(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[963],{4082:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listings/cart",function(){return a(2243)}])},2964:function(e,t,a){"use strict";a.d(t,{I:function(){return n},Z:function(){return ListingsLayout}});var r=a(5893),l=a(7294);function ListingsSideNav(){let{state:e,dispatch:t}=(0,l.useContext)(n);function changeCategory(e){var a;let{category:r}=null===(a=e.target)||void 0===a?void 0:a.dataset,l=document.querySelectorAll(".category-btn");t({type:"set_current_category",payload:r}),l.forEach(e=>e.classList.remove("bg-blue-700","text-white")),e.target.classList.add("bg-blue-700","text-white")}return(0,r.jsxs)("aside",{className:"lg:sticky top-[77px] lg:float-left left-4 h-fit bottom-4 shadow-lg p-4 overflow-auto lg:w-[350px] bg-white",children:[(0,r.jsx)("div",{}),(0,r.jsxs)("section",{className:"mt-8",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-slate-700",children:"Categories"}),(0,r.jsxs)("div",{className:"mt-2 flex flex-wrap lg:flex-col justify-start items-start gap-2 overflow-auto",children:[(0,r.jsx)("button",{onClick:changeCategory,"data-category":"all",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold bg-blue-700 text-white rounded-full border-2 border-blue-700 category-btn",children:"All"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"solar panels",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn",children:"Solar Panels"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"cctvs",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn",children:"CCTVs"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"security lights",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn",children:"Security Lights"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"phones",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn",children:"Phones"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"laptops",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn",children:"Laptops"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"home lights",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn",children:"Home Lights"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"real estate",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-700 category-btn",children:"Real Estate"})]})]})]})}function ListingsBanners(){return(0,l.useEffect)(()=>{let e=document.getElementById("banners"),t=document.querySelectorAll(".banner").length,a=e.scrollWidth/t,r=1,l=setInterval(()=>(r>t&&(r=1),e.scrollTo(a*(r-1),0),r++,()=>{clearInterval(l)}),3e3);return()=>{clearInterval(l)}},[]),(0,r.jsxs)("div",{id:"banners",className:"flex overflow-hidden aspect-[3/1]",children:[(0,r.jsxs)("div",{className:"banner min-w-full h-full w-full flex items-center relative justify-center",children:[(0,r.jsx)("img",{className:"block align-middle object-cover",src:"/images/phones.jpg",alt:"Phones on display",height:350,width:1020}),(0,r.jsx)("h2",{style:{textShadow:"0 0 10px #333333aa"},className:"font-bold text-center text-white text-3xl absolute",children:"Phones and Accessories"})]}),(0,r.jsxs)("div",{className:"banner min-w-full h-full w-full flex items-center relative justify-center",children:[(0,r.jsx)("img",{className:"block align-middle object-cover",src:"/images/laptops.jpg",alt:"Phones on display",height:350,width:1020}),(0,r.jsx)("h2",{style:{textShadow:"0 0 10px #333333aa"},className:"font-bold text-center text-white text-3xl absolute",children:"Laptops"})]}),(0,r.jsxs)("div",{className:"banner min-w-full h-full w-full flex items-center relative justify-center",children:[(0,r.jsx)("img",{className:"block align-middle object-cover",src:"/images/commercial_solar_panels.jpg",alt:"Phones on display",height:350,width:1020}),(0,r.jsx)("h2",{style:{textShadow:"0 0 10px #333333aa"},className:"font-bold text-center text-white text-3xl absolute",children:"Solar Panel"})]})]})}var s=a(1163),o=a(2684);function SearchBar(e){let{appAuthToken:t}=e,[a,c]=(0,l.useState)([]),[n,i]=(0,l.useState)(""),d=(0,s.useRouter)();async function getSuggestions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;try{let a=await fetch("/api/search/suggestions?q=".concat(e.trim().toLowerCase()),{headers:{"X-Application-Authorization-Token":t}}),r=await a.json();c(r)}catch(e){console.log(e)}}return(0,l.useEffect)(()=>{i(d.query.q?d.query.q:"")},[d.query]),(0,r.jsxs)("div",{className:"w-full shadow-lg mb-4 rounded-md relative",children:[(0,r.jsxs)("form",{className:"flex w-full p-4 gap-2",children:[(0,r.jsx)("input",{type:"text",className:"flex-grow border-2 border-black px-2 py-1 rounded focus:outline-none min-w-0",placeholder:"Search for products",value:n,onChange:e=>{let{target:t}=e;i(t.value),getSuggestions(t.value)},onBlur:e=>setTimeout(()=>c([]),300),required:!0,id:"search-input"}),(0,r.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),d.push("/listings/search?q=".concat(n)),document.getElementById("search-input").blur()},"aria-label":"Search button",className:"bg-blue-700 text-white rounded whitespace-nowrap px-4 py-2 flex justify-center items-center gap-2",children:(0,r.jsx)(o.XPI,{})})]}),a.length>0?(0,r.jsx)("div",{className:"absolute top-20 z-30 rounded shadow-lg bg-white left-0 w-full flex flex-col overflow-x-clip overflow-y-auto max-h-44",children:a.map(e=>(0,r.jsx)("small",{onClick:()=>d.push("/listings/search?q=".concat(e)),className:"flex-grow p-4 hover:bg-slate-200",children:e}))}):""]})}let c={fetchingProducts:!0,productFetchStatus:"pending",products:[],fetchingAutoComplete:!1,autoCompleteFetchStatus:"pending",autoComplete:[],fetchingSearchResults:!1,searchResultsStatus:"pending",searchResults:[],fetchingMoreProducts:["all","pending",!0],moreProducts:[],currentCategory:"all",cart:[]};function reducer(e,t){switch(t.type){case"set_autocomplete":return{...e,autoCompleteFetchStatus:"success",autoComplete:t.payload,fetchingAutoComplete:!1};case"set_current_category":return{...e,currentCategory:t.payload};case"set_autocomplete_fetch_status":return{...e,autoCompleteFetchStatus:t.payload};case"set_more_products":if("failed"===t.payload.status)return{...e,fetchingMoreProducts:[t.payload.category,t.payload.status,!0]};if("pending"===t.payload.status)return{...e,fetchingMoreProducts:[t.payload.category,t.payload.status,!1]};return{...e,products:[...e.products,...t.payload.data],fetchingMoreProducts:[t.payload.category,t.payload.status,t.payload.finished]};case"set_product_fetch_status":return{...e,productFetchStatus:t.payload};case"set_products":return{...e,products:t.payload,productFetchStatus:"success",fetchingProducts:!1};case"set_search_results":return{...e,searchResults:t.payload,searchResultsStatus:"success",fetchingSearchResults:!1};case"set_search_results_fetch_status":return{...e,searchResultsStatus:t.payload};case"add_to_cart":let{payload:a}=t,r=e.cart.findIndex(e=>e._id===a._id);if(-1===r)return{...e,cart:[...e.cart,a]};e.cart[r].quantity++;let l=[...e.cart];return{...e,cart:l};case"add_to_cart_bulk":return{...e,cart:[...t.payload]};case"clear_cart":return localStorage.setItem("cart",JSON.stringify([])),{...e,cart:[]};case"remove_from_cart":let s=e.cart.filter(e=>e._id!=t.payload);return localStorage.setItem("cart",JSON.stringify(s)),{...e,cart:s};case"decrease_quantity_by_1":let o=e.cart.findIndex(e=>e._id==t.payload);return e.cart[o].quantity>1&&e.cart[o].quantity--,localStorage.setItem("cart",JSON.stringify(e.cart)),{...e};case"increase_quantity_by_1":let c=[...e.cart],n=c.findIndex(e=>e._id==t.payload);return e.cart[n].quantity++,localStorage.setItem("cart",JSON.stringify(c)),{...e,cart:c};case"set_product_quantity":let i=e.cart.findIndex(e=>e._id===t.payload.id);if(i>-1){if(Number.isNaN(t.payload.quantity)||0==t.payload.quantity)return e.cart[i].quantity=1,localStorage.setItem("cart",JSON.stringify(e.cart)),{...e};return e.cart[i].quantity=t.payload.quantity,localStorage.setItem("cart",JSON.stringify(e.cart)),{...e}}default:return e}}let n=(0,l.createContext)({state:c,dispatch:e=>{}});function ListingsLayout(e){let{children:t}=e,[a,s]=(0,l.useReducer)(reducer,c);return(0,r.jsx)(n.Provider,{value:{state:a,dispatch:s},children:(0,r.jsxs)("div",{className:"mt-4 lg:mt-[77px] relative max-w-6xl mx-auto pb-4",children:[(0,r.jsx)(ListingsSideNav,{}),(0,r.jsxs)("main",{className:"lg:ml-[370px] p-4 bg-white shadow-lg mb-4",children:[(0,r.jsx)(SearchBar,{}),(0,r.jsx)(ListingsBanners,{}),(0,r.jsx)("div",{children:t})]}),(0,r.jsx)("div",{className:"clear-both"})]})})}},2243:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return p},default:function(){return Cart}});var r=a(5893),l=a(7294),s=a(2964),o=a(9008),c=a.n(o),n=a(1664),i=a.n(n),d=a(2684),u=a(5675),m=a.n(u),p=!0;function Cart(e){let{appAuthToken:t}=e,{state:a,dispatch:o}=(0,l.useContext)(s.I),[c,n]=(0,l.useState)(!1);function removeItemFromCart(e){let{currentTarget:t}=e,{id:a}=null==t?void 0:t.dataset;o({type:"remove_from_cart",payload:a})}function increaseQuantity(e){let{currentTarget:t}=e,{id:a}=null==t?void 0:t.dataset;o({type:"increase_quantity_by_1",payload:a})}function decreaseQuantity(e){let{currentTarget:t}=e,{id:a}=null==t?void 0:t.dataset;o({type:"decrease_quantity_by_1",payload:a})}async function placeOrder(e){e.preventDefault();let r=document.querySelectorAll(".form-input"),l={customerContact:[],products:[...a.cart],dateCreated:new Date().getTime(),totalItems:0,totalUniqueItems:a.cart.length},s=document.querySelector("#submit-btn");for(let e of(s.setAttribute("disabled","true"),s.textContent="Please wait...",r))switch(e.name){case"name":if(!e.value.match(/^[a-zA-Z'_-]{4,}/))return alert("Please make sure to enter a valid name.");l.customerContact[0]=e.value.trim();break;case"email":if(!e.value.match(/^[a-z0-9.]{4,}@[a-z0-9.]{3,}.[a-z]{2,}/))return alert("Please make sure to enter a valid email.");l.customerContact[1]=e.value.trim();break;case"phone-number":if(!e.value.match(/^(0|\+234)[0-9]{10}/))return alert("Please make sure to enter a valid phone number.");l.customerContact[2]=e.value.trim()}for(let e of a.cart)l.totalItems+=e.quantity;try{let e=await fetch("/api/order",{method:"POST",headers:{"X-Application-Authorization-Token":t,"Content-Type":"application/json"},body:JSON.stringify(l)});if(!(await e.json()).success)return alert("Unable to complete request at this time. Please try again later.");alert("Your order was placed successfully, and you will be contacted via the media handles you provided."),o({type:"clear_cart"}),n(!1)}catch(e){console.error(e),alert("Unable to complete request at this time. Please try again later."),s.removeAttribute("disabled")}}return(0,l.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("cart"));e&&o({type:"add_to_cart_bulk",payload:e})},[]),(0,r.jsxs)("div",{className:"",children:[0===a.cart.length?"":(0,r.jsx)("h1",{className:"text-center font-semibold text-2xl my-4 text-gray-600",children:"Cart"}),(0,r.jsx)("div",{children:0===a.cart.length?(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-center font-semibold text-lg text-gray-600 mt-2",children:"No items in cart"}),(0,r.jsx)(i(),{className:"text-blue-700 text-center w-fit block my-2 mx-auto",href:"/listings",children:"Go to Listings"})]}):a.cart.map(e=>(0,r.jsxs)("div",{className:"flex gap-2 mb-4 hover:shadow-lg items-start rounded-lg p-2",children:[(0,r.jsx)(m(),{className:"max-w-[100px] object-cover flex justify-center items-center aspect-square rounded",src:e.imageUrl,height:100,width:100,alt:e.name}),(0,r.jsxs)("div",{className:"flex-grow",children:[(0,r.jsx)("p",{className:"font-semibold capitalize",children:e.name}),(0,r.jsxs)("div",{className:"flex gap-1 my-2 w-full max-w-[300px]",children:[(0,r.jsx)("button",{onClick:increaseQuantity,"data-id":e._id,className:"bg-green-500 py-1 px-2 font-bold flex justify-center items-center hover:scale-105 active:scale-95 rounded",children:"+"}),(0,r.jsx)("input",{"data-id":e._id,onChange:e=>{o({type:"set_product_quantity",payload:{id:e.target.dataset.id,quantity:"NaN"==e.target.value?1:Number(e.target.value)}})},className:"w-[70%] hover:outline-none border-black border-2 rounded px-2 py-1",value:e.quantity,type:"text"}),(0,r.jsx)("button",{onClick:decreaseQuantity,"data-id":e._id,className:"bg-yellow-500 py-1 px-2 font-bold flex justify-center items-center hover:scale-105 active:scale-95 rounded",children:"-"})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("button",{onClick:removeItemFromCart,"data-id":e._id,className:"bg-red-500 text-white py-1 px-2 text-sm font-semibold flex gap-1 items-center justify-center rounded-sm w-fit mr-0 ml-auto hover:scale-105 active:scale-95",children:[(0,r.jsx)(d.Xm5,{})," Remove"]})})]})]},e._id))}),a.cart.length>0?(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:()=>n(!0),className:"bg-blue-700 text-white px-4 py-2 rounded-md w-full max-w-[400px] m-auto block mb-4 hover:scale-105 active:scale-95",children:"Place order"}),(0,r.jsx)("button",{onClick:()=>{confirm("You're about to clear your cart. Do you wish to continue?")&&(o({type:"clear_cart"}),localStorage.removeItem("cart"))},className:"bg-red-100 text-red-500 px-4 py-2 rounded-md w-full max-w-[400px] m-auto block mb-4 hover:scale-105 active:scale-95",children:"Clear cart"})]}):"",c&&(0,r.jsx)("div",{className:"fixed top-0 left-0 w-full p-4 bottom-0 z-[100] flex justify-center items-center",style:{backdropFilter:"blur(10px)"},children:(0,r.jsxs)("div",{className:"p-4 rounded h-fit bg-white w-full max-w-[600px] relative shadow-lg",children:[(0,r.jsx)("h2",{className:"text-center text-lg text-gray-600 text-bold",children:"Complete Order"}),(0,r.jsx)("button",{onClick:()=>n(!1),className:"text-sm bg-slate-100 absolute flex justify-center items-center w-8 h-8 rounded-full top-2 right-2 hover:bg-slate-300 active:scale-95",children:(0,r.jsx)(d.JqX,{})}),(0,r.jsxs)("form",{onSubmit:placeOrder,className:"w-full my-8 flex flex-col gap-2 max-w-[400px] mx-auto",children:[(0,r.jsx)("input",{className:"form-input border-2 border-black rounded px-4 py-2",name:"name",placeholder:"Name",type:"text"}),(0,r.jsx)("input",{className:"form-input border-2 border-black rounded px-4 py-2",name:"email",type:"email",placeholder:"Email"}),(0,r.jsx)("input",{className:"form-input border-2 border-black rounded px-4 py-2",name:"phone-number",placeholder:"Phone number",type:"tel"}),(0,r.jsx)("button",{id:"submit-btn",className:"bg-blue-700 text-white px-4 py-2 rounded-md w-full max-w-[400px] m-auto block mb-4 hover:scale-105 active:scale-95 disabled:opacity-75",children:"Complete your order"})]})]})})]})}Cart.getLayout=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("meta",{name:"robots",content:"no index, no follow"}),(0,r.jsx)("title",{children:"Cart"})]}),(0,r.jsx)(s.Z,{children:e})]})}}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=4082)}),_N_E=e.O()}]);