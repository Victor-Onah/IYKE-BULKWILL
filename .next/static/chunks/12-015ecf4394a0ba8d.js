(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{7700:function(e,t,a){"use strict";a.d(t,{Z:function(){return CartIcon}});var r=a(5893),s=a(7294),l=a(2964),c=a(2684),o=a(1664),n=a.n(o);function CartIcon(){let{state:e,dispatch:t}=(0,s.useContext)(l.I);return(0,s.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("cart"));e&&t({type:"add_to_cart_bulk",payload:e})},[]),(0,s.useEffect)(()=>{localStorage.setItem("cart",JSON.stringify(e.cart))},[e.cart]),e.cart.length>0?(0,r.jsxs)(n(),{href:"/listings/cart",className:"fixed top-1/2 hover:scale-105 right-4 bg-blue-500 text-white w-14 h-14 flex justify-center items-center rounded-full shadow-lg gap-1",children:[(0,r.jsx)(c.rI6,{})," ",e.cart.length]}):""}},2964:function(e,t,a){"use strict";a.d(t,{I:function(){return n},Z:function(){return ListingsLayout}});var r=a(5893),s=a(7294);function ListingsSideNav(){let{state:e,dispatch:t}=(0,s.useContext)(n);function changeCategory(e){let{category:a}=e.target.dataset,r=document.querySelectorAll(".category-btn");t({type:"set_current_category",payload:a}),r.forEach(e=>e.classList.remove("bg-blue-500","text-white")),e.target.classList.add("bg-blue-500","text-white")}return(0,r.jsxs)("aside",{className:"lg:sticky top-[77px] lg:float-left left-4 h-fit bottom-4 shadow-lg p-4 overflow-auto lg:w-[350px] bg-white",children:[(0,r.jsx)("div",{}),(0,r.jsxs)("section",{className:"mt-8",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-slate-700",children:"Categories"}),(0,r.jsxs)("ul",{className:"mt-2 flex flex-wrap lg:flex-col justify-start items-start gap-2 overflow-auto",children:[(0,r.jsx)("button",{onClick:changeCategory,"data-category":"all",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold bg-blue-500 text-white rounded-full border-2 border-blue-500 category-btn",children:"All"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"solar panels",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500 category-btn",children:"Solar Panels"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"cctvs",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500 category-btn",children:"CCTVs"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"security lights",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500 category-btn",children:"Security Lights"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"phones",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500 category-btn",children:"Phones"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"laptops",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500 category-btn",children:"Laptops"}),(0,r.jsx)("button",{onClick:changeCategory,"data-category":"home lights",className:"px-2 text-[12px] py-1 whitespace-nowrap block text-center text-sm font-semibold rounded-full border-2 border-blue-500 category-btn",children:"Home Lights"})]})]})]})}function ListingsBanners(){return(0,s.useEffect)(()=>{let e=document.getElementById("banners"),t=document.querySelectorAll(".banner").length,a=e.scrollWidth/t,r=1,s=setInterval(()=>(r>t&&(r=1),e.scrollTo(a*(r-1),0),r++,()=>{clearInterval(s)}),3e3);return()=>{clearInterval(s)}},[]),(0,r.jsxs)("div",{id:"banners",className:"flex overflow-hidden aspect-[3/1]",children:[(0,r.jsxs)("div",{className:"banner min-w-full h-full w-full flex items-center relative justify-center",children:[(0,r.jsx)("img",{className:"block align-middle object-cover",src:"/images/phones.jpg",alt:"Phones on display",height:350,width:1020}),(0,r.jsx)("h2",{style:{textShadow:"0 0 10px #333333aa"},className:"font-bold text-center text-white text-3xl absolute",children:"Phones and Accessories"})]}),(0,r.jsxs)("div",{className:"banner min-w-full h-full w-full flex items-center relative justify-center",children:[(0,r.jsx)("img",{className:"block align-middle object-cover",src:"/images/laptops.jpg",alt:"Phones on display",height:350,width:1020}),(0,r.jsx)("h2",{style:{textShadow:"0 0 10px #333333aa"},className:"font-bold text-center text-white text-3xl absolute",children:"Laptops"})]}),(0,r.jsxs)("div",{className:"banner min-w-full h-full w-full flex items-center relative justify-center",children:[(0,r.jsx)("img",{className:"block align-middle object-cover",src:"/images/commercial_solar_panels.jpg",alt:"Phones on display",height:350,width:1020}),(0,r.jsx)("h2",{style:{textShadow:"0 0 10px #333333aa"},className:"font-bold text-center text-white text-3xl absolute",children:"Solar Panel"})]})]})}var l=a(1163),c=a(2684);function SearchBar(e){let{appAuthToken:t}=e,[a,o]=(0,s.useState)([]),[n,i]=(0,s.useState)(""),u=(0,l.useRouter)();async function getSuggestions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;try{let a=await fetch("/api/search/suggestions?q=".concat(e.trim().toLowerCase()),{headers:{"X-Application-Authorization-Token":t}}),r=await a.json();o(r)}catch(e){console.log(e)}}return(0,s.useEffect)(()=>{i(u.query.q?u.query.q:"")},[u.query]),(0,r.jsxs)("div",{className:"w-full shadow-lg mb-4 rounded-md relative",children:[(0,r.jsxs)("form",{className:"flex w-full p-4 gap-2",children:[(0,r.jsx)("input",{type:"text",className:"flex-grow border-2 border-black px-2 py-1 rounded focus:outline-none min-w-0",placeholder:"Search for products",value:n,onChange:e=>{let{target:t}=e;i(t.value),getSuggestions(t.value)},onBlur:e=>setTimeout(()=>o([]),300),required:!0,id:"search-input"}),(0,r.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),u.push("/listings/search?q=".concat(n)),document.getElementById("search-input").blur()},className:"bg-blue-500 text-white rounded whitespace-nowrap px-4 py-2 flex justify-center items-center gap-2",children:(0,r.jsx)(c.XPI,{})})]}),a.length>0?(0,r.jsx)("div",{className:"absolute top-20 z-30 rounded shadow-lg bg-white left-0 w-full flex flex-col overflow-x-clip overflow-y-auto max-h-44",children:a.map(e=>(0,r.jsx)("small",{onClick:()=>u.push("/listings/search?q=".concat(e)),className:"flex-grow p-4 hover:bg-slate-200",children:e}))}):""]})}let o={fetchingProducts:!0,productFetchStatus:"pending",products:[],fetchingAutoComplete:!1,autoCompleteFetchStatus:"pending",autoComplete:[],fetchingSearchResults:!1,searchResultsStatus:"pending",searchResults:[],fetchingMoreProducts:["all","pending",!0],moreProducts:[],currentCategory:"all",cart:[]};function reducer(e,t){switch(t.type){case"set_autocomplete":return{...e,autoCompleteFetchStatus:"success",autoComplete:t.payload,fetchingAutoComplete:!1};case"set_current_category":return{...e,currentCategory:t.payload};case"set_autocomplete_fetch_status":return{...e,autoCompleteFetchStatus:t.payload};case"set_more_products":if("failed"===t.payload.status)return{...e,fetchingMoreProducts:[t.payload.category,t.payload.status,!0]};if("pending"===t.payload.status)return{...e,fetchingMoreProducts:[t.payload.category,t.payload.status,!1]};return{...e,products:[...e.products,...t.payload.data],fetchingMoreProducts:[t.payload.category,t.payload.status,t.payload.finished]};case"set_product_fetch_status":return{...e,productFetchStatus:t.payload};case"set_products":return{...e,products:t.payload,productFetchStatus:"success",fetchingProducts:!1};case"set_search_results":return{...e,searchResults:t.payload,searchResultsStatus:"success",fetchingSearchResults:!1};case"set_search_results_fetch_status":return{...e,searchResultsStatus:t.payload};case"add_to_cart":let{payload:a}=t,r=e.cart.findIndex(e=>e._id===a._id);if(-1===r)return{...e,cart:[...e.cart,a]};e.cart[r].quantity++;let s=[...e.cart];return{...e,cart:s};case"add_to_cart_bulk":return{...e,cart:[...t.payload]};case"clear_cart":return localStorage.setItem("cart",JSON.stringify([])),{...e,cart:[]};case"remove_from_cart":let l=e.cart.filter(e=>e._id!=t.payload);return localStorage.setItem("cart",JSON.stringify(l)),{...e,cart:l};case"decrease_quantity_by_1":let c=e.cart.findIndex(e=>e._id==t.payload);return e.cart[c].quantity>1&&e.cart[c].quantity--,localStorage.setItem("cart",JSON.stringify(e.cart)),{...e};case"increase_quantity_by_1":let o=[...e.cart],n=o.findIndex(e=>e._id==t.payload);return e.cart[n].quantity++,localStorage.setItem("cart",JSON.stringify(o)),{...e,cart:o};case"set_product_quantity":let i=e.cart.findIndex(e=>e._id===t.payload.id);if(i>-1){if(Number.isNaN(t.payload.quantity)||0==t.payload.quantity)return e.cart[i].quantity=1,localStorage.setItem("cart",JSON.stringify(e.cart)),{...e};return e.cart[i].quantity=t.payload.quantity,localStorage.setItem("cart",JSON.stringify(e.cart)),{...e}}default:return e}}let n=(0,s.createContext)({state:o,dispatch:e=>{}});function ListingsLayout(e){let{children:t}=e,[a,l]=(0,s.useReducer)(reducer,o);return(0,r.jsx)(n.Provider,{value:{state:a,dispatch:l},children:(0,r.jsxs)("div",{className:"mt-4 lg:mt-[77px] relative max-w-6xl mx-auto pb-4",children:[(0,r.jsx)(ListingsSideNav,{}),(0,r.jsxs)("main",{className:"lg:ml-[370px] p-4 bg-white shadow-lg mb-4",children:[(0,r.jsx)(SearchBar,{}),(0,r.jsx)(ListingsBanners,{}),(0,r.jsx)("div",{children:t})]}),(0,r.jsx)("div",{className:"clear-both"})]})})}},9008:function(e,t,a){e.exports=a(9201)}}]);