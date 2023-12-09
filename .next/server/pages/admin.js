"use strict";(()=>{var e={};e.id=964,e.ids=[964,888,660],e.modules={7585:(e,t,s)=>{s.r(t),s.d(t,{config:()=>y,default:()=>f,getServerSideProps:()=>w,getStaticPaths:()=>v,getStaticProps:()=>j,reportWebVitals:()=>N,routeModule:()=>C,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>z,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>A,unstable_getStaticProps:()=>k});var a={};s.r(a),s.d(a,{default:()=>AdminDashboard,getStaticProps:()=>getStaticProps});var l=s(7093),i=s(5244),r=s(1323),n=s(1207),d=s(8234),c=s(997),o=s(6689),x=s(1664),u=s.n(x),m=s(231),p=s(5675),h=s.n(p),g=s(968),b=s.n(g);let getStaticProps=async function(){return{props:{authToken:"x0atvbWX74ghIJsd120lMQaplQ",apiAuthToken:"$2b$10$DwcQnmA7g6FbBTzDnL9IfOQqafDd7Ka7SIDuAzbMMUskoGCO0206G"}}};function AdminDashboard({authToken:e,apiAuthToken:t}){let[s,a]=(0,o.useState)(!1),[l,i]=(0,o.useState)(null),[r,n]=(0,o.useState)(null),[d,x]=(0,o.useState)(),[p,g]=(0,o.useState)("pending"),[f,j]=(0,o.useState)([]),[v,w]=(0,o.useState)(),[y,N]=(0,o.useState)("pending"),[k,A]=(0,o.useState)(),[S,P]=(0,o.useState)("pending"),[z,C]=(0,o.useState)(!1);async function uploadProduct(s){s.preventDefault();let l=document.getElementById("product-name"),r=document.getElementById("product-category"),d=document.getElementById("product-image"),c=document.getElementById("submit-btn"),o=l.value.trim(),x=r.value.trim(),u=d.files?d.files[0]:null;if(!u)return alert("Please select an image");c.setAttribute("disabled","true"),c.textContent="Please wait...";let m=new FormData;m.append("productName",o),m.append("productImage",u),m.append("productCategory",x);try{let s=await fetch("/api/admin/upload",{method:"POST",body:m,headers:{"X-Admin-Authorization-Token":e,"X-Application-Authorization-Token":t}});if(!(s=await s.json()).success)return c.removeAttribute("disabled"),c.textContent="Finish",alert("Failed to complete request.");alert("Product upload was successful!"),i(void 0),a(!1),n(null)}catch(e){console.error(e),alert("Failed to complete request."),c.removeAttribute("disabled"),c.textContent="Finish"}}async function loadProducts(){g("pending");try{let e=await fetch("/api/listings?page=1&all=true",{headers:{"x-application-authorization-token":t}});return e=await e.json(),g("success"),e.reverse()}catch(e){return g("failed"),[]}}async function selectItem(e){e.target.checked?j(t=>(console.log(e.target.id),[...t,e.target.id])):j(t=>t.filter(t=>t!==e.target.id))}async function deleteProducts(s){if(s.preventDefault(),confirm(`You are about to delete ${f.length} products, do you wish to continue?`)){let s=document.getElementById("submit-btn");try{s?.setAttribute("disabled","true"),s.textContent="Please wait...";let l=await fetch("/api/admin/delete",{method:"DELETE",body:JSON.stringify(f),headers:{"X-Admin-Authorization-Token":e,"X-Application-Authorization-Token":t,"Content-Type":"application/json"}});if(!(l=await l.json()).success)return s?.removeAttribute("disabled"),s.textContent="Delete all",alert("Failed to complete request. Please try again.");alert("Products deleted successfully!"),j([]),i(void 0),a(!1)}catch(e){console.error(e),alert("Failed to complete request. Please try again."),s?.removeAttribute("disabled"),s.textContent="Delete all"}}}async function loadMessages(){N("pending");try{let s=await fetch("/api/admin/messages",{headers:{"X-Admin-Authorization-Token":e,"x-application-authorization-token":t}});return s=await s.json(),N("success"),s.reverse()}catch(e){return console.error(e),N("failed"),[]}}async function markMessageAsReplied(s){s.target.setAttribute("disabled","true"),s.target.textContent="Please wait...";try{let a=await fetch(`/api/admin/messages/mark/${s.target.dataset.id}`,{method:"PATCH",headers:{"X-Admin-Authorization-Token":e,"x-application-authorization-token":t}});if((a=await a.json()).success){let e=[...v];e[v.findIndex(e=>e._id===s.target.dataset.id)].replied="yes",w(e)}else alert("Failed to complete request"),s.target.removeAttribute("disabled"),s.target.textContent="Mark as replied"}catch(e){console.error(e),alert("Failed to complete request"),s.target.removeAttribute("disabled"),s.target.textContent="Mark as replied"}}async function loadOrders(){P("pending");try{let s=await fetch("/api/admin/orders",{headers:{"X-Admin-Authorization-Token":e,"x-application-authorization-token":t}});return s=await s.json(),P("success"),s.reverse()}catch(e){return console.error(e),P("failed"),[]}}async function markOrderAsCompleted(s){s.target.setAttribute("disabled","true"),s.target.textContent="Please wait...";try{let a=await fetch(`/api/admin/orders/mark/${s.target.dataset.id}`,{method:"PATCH",headers:{"X-Admin-Authorization-Token":e,"x-application-authorization-token":t}});if((a=await a.json()).success){let e=[...k];e[k.findIndex(e=>e._id===s.target.dataset.id)].completed="yes",A(e)}else alert("Failed to complete request"),s.target.removeAttribute("disabled"),s.target.textContent="Mark as completed"}catch(e){console.error(e),alert("Failed to complete request"),s.target.removeAttribute("disabled"),s.target.textContent="Mark as completed"}}async function authorizeAdmin(s){s.preventDefault();let a=document.getElementById("username"),l=document.getElementById("password"),i=document.getElementById("submit-btn");try{i?.setAttribute("disabled","true"),i.textContent="Please wait...";let s=await fetch("/api/admin/authorize",{method:"POST",headers:{"X-Admin-Authorization-Token":e,"x-application-authorization-token":t,"Content-Type":"application/json"},body:JSON.stringify({username:a?.value.trim(),password:l?.value.trim()})});(s=await s.json()).success?C(!0):(alert("Incorrect login credentials. Please check the values and try again"),i?.removeAttribute("disabled"),i.textContent="Submit")}catch(e){console.error(e),alert("Failed to complete request due unknown error."),i?.removeAttribute("disabled"),i.textContent="Submit"}}return z?(0,c.jsxs)(c.Fragment,{children:[c.jsx(b(),{children:c.jsx("title",{children:"Admin Dashboard"})}),(0,c.jsxs)("div",{className:"max-w-5xl mx-auto p-4 my-16",children:[c.jsx("h1",{className:"font-bold text-2xl text-zinc-500 mb-8",children:c.jsx(u(),{href:"/admin",children:"Admin Dashboard"})}),(0,c.jsxs)("div",{children:[c.jsx("h2",{className:"font-semibold text-lg text-zinc-500 mb-4",children:"Welcome sir Iyke, what would you like to do?"}),(0,c.jsxs)("div",{className:"grid grid-cols-4 max-[1020px]:grid-cols-4 max-[768px]:grid-cols-3 max-[480px]:grid-cols-2 max-[250px]:grid-cols-1 gap-4",children:[(0,c.jsxs)("div",{onClick:()=>{a(!0),i("upload a product")},className:"bg-blue-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95",children:[c.jsx(m.DUB,{}),c.jsx("h3",{className:"text-center",children:"Upload a product"})]}),(0,c.jsxs)("div",{onClick:async()=>{a(!0),x(await loadProducts()),i("delete products")},className:"bg-red-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95",children:[c.jsx(m.Z2m,{}),c.jsx("h3",{className:"text-center",children:"Delete products"})]}),(0,c.jsxs)("div",{onClick:async()=>{a(!0),w(await loadMessages()),i("view messages")},className:"bg-green-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95",children:[c.jsx(m.TpC,{}),c.jsx("h3",{className:"text-center",children:"View messages"})]}),(0,c.jsxs)("div",{onClick:async()=>{a(!0),A(await loadOrders()),i("view orders")},className:"bg-yellow-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95",children:[c.jsx(m.rI6,{}),c.jsx("h3",{className:"text-center",children:"View orders"})]}),(0,c.jsxs)("div",{onClick:async()=>{a(!0),i(void 0),x(await loadProducts())},className:"bg-purple-700 text-white p-4 flex flex-col justify-center items-center gap-2 hover:shadow-2xl active:scale-95",children:[c.jsx(m.rI6,{}),c.jsx("h3",{className:"text-center",children:"View all products"})]})]})]}),s&&c.jsx("div",{className:"fixed top-0 bottom-0 z-[1000] h-full left-0 w-full flex justify-center items-center p-4",style:{backdropFilter:"blur(15px)"},children:(0,c.jsxs)("div",{className:"relative min-h-[250px] max-h-full w-full max-w-[600px] bg-white will-change overflow-hidden",children:[c.jsx("span",{onClick:()=>{a(!1),j([]),i(void 0),n(null)},className:"absolute top-2 right-2 w-8 h-8 flex justify-center items-center rounded-full bg-slate-200 active:bg-slate-400 shadow-lg",children:c.jsx(m.JqX,{})}),"upload a product"===l?c.jsx("div",{children:(0,c.jsxs)("form",{onSubmit:uploadProduct,className:"p-4 flex flex-col gap-2 w-full max-w-[400px] mx-auto",children:[c.jsx("h4",{className:"text-lg text-zinc-600 text-center mb-4 font-semibold",children:"Upload Product"}),(0,c.jsxs)("div",{children:[c.jsx("label",{className:"text-sm text-zinc-700 block",htmlFor:"product-name",children:"Product name"}),c.jsx("input",{required:!0,className:"outline-none focus:outline-none focus:border-blue-700 border-2 min-w-0 rounded border-zinc-500 w-full px-2 py-1",id:"product-name",placeholder:"Product name",type:"text"})]}),(0,c.jsxs)("div",{children:[c.jsx("label",{className:"text-sm text-zinc-700 block",htmlFor:"product-category",children:"Category"}),(0,c.jsxs)("select",{defaultValue:"",required:!0,className:"w-full px-2 py-1 bg-slate-100 active:bg-slate-200 rounded",name:"product-category",id:"product-category",children:[c.jsx("option",{value:"solar panels",children:"Solar Panels"}),c.jsx("option",{value:"cctvs",children:"CCTVs"}),c.jsx("option",{value:"security lights",children:"Security Lights"}),c.jsx("option",{value:"phones",children:"Phones"}),c.jsx("option",{value:"laptops",children:"Laptops"}),c.jsx("option",{value:"home lights",children:"Home Lights"}),c.jsx("option",{value:"real estate",children:"Real Estate"})]})]}),(0,c.jsxs)("div",{onClick:e=>{e.currentTarget.querySelector("input")?.click()},className:"relative p-4 bg-blue-700 text-white flex text-center gap-2 justify-center items-center max-w-[250px] active:scale-95",children:[c.jsx("input",{required:!0,id:"product-image",onChange:e=>n(e.target.files?e.target.files[0].name:null),type:"file",accept:"image/*",className:"w-0 h-0 absolute"}),c.jsx(m.DUB,{}),c.jsx("p",{children:"Upload product image"})]}),r&&(0,c.jsxs)("div",{className:"flex gap-2 items-center",children:[c.jsx(m.H3h,{})," ",r]}),c.jsx("button",{id:"submit-btn",className:"border-2 border-blue-700 rounded-full px-4 py-2 text-blue-700 hover:bg-blue-700 hover:text-white active:scale-95 font-bold disabled:bg-blue-700 disabled:text-white disabled:opacity-70",type:"submit",children:"Finish"})]})}):"delete products"===l?(0,c.jsxs)("div",{className:"p-4",children:[c.jsx("h4",{className:"text-lg text-center mb-4 font-semibold text-zinc-600",children:"Delete Products"}),c.jsx("div",{className:"pt-8 flex flex-col gap-2 relative",children:"pending"===p?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"Loading products..."}):"failed"===p?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"Failed to load products"}):d.length<1?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"No products to show"}):(0,c.jsxs)("form",{className:"overflow-hidden grid relative",onSubmit:deleteProducts,children:[c.jsx("div",{className:"max-h-[55vh] overflow-auto mb-16 flex flex-col gap-2",children:d.map(e=>(0,c.jsxs)("div",{className:"flex gap-2 justify-start items-center bg-slate-100 rounded p-2 active:scale-95",children:[c.jsx("input",{onChange:selectItem,type:"checkbox",id:e._id}),c.jsx(h(),{className:"h-50 aspect-square rounded-full",src:e.imageUrl,alt:e.name,height:50,width:50}),c.jsx("label",{className:"flex-grow flex-shrink text-sm",htmlFor:e._id,children:e.name})]},e._id))}),f.length>0&&c.jsx("button",{id:"submit-btn",className:"bg-red-700 text-white px-4 py-2 rounded w-full absolute bottom-4 disabled:opacity-75",type:"submit",children:"Delete all"})]})})]}):"view messages"===l?(0,c.jsxs)("div",{className:"p-4 overflow-hidden",children:[c.jsx("h4",{className:"text-lg text-center mb-4 font-semibold text-zinc-600",children:"Messages"}),c.jsx("div",{className:"flex flex-col gap-2 max-h-[70vh] overflow-scroll",children:"pending"===y?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"Loading messages..."}):"failed"===y?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"Failed to load messages"}):v.length<1?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"No messages to show"}):c.jsx("div",{className:"flex flex-col gap-2",children:v.map(e=>(0,c.jsxs)("div",{className:"bg-slate-50 rounded-lg p-2 flex flex-col gap-2 hover:shadow-lg",children:[c.jsx("h5",{className:"text-sm font-bold",children:e.name}),c.jsx("p",{children:e.message}),(0,c.jsxs)("div",{className:"text-sm flex justify-center items-center",children:[(0,c.jsxs)("a",{className:"flex gap-2 bg-blue-50 text-blue-700 rounded-full px-2 py-1 items-center active:scale-95",href:`mailto:${e.email}`,children:[c.jsx(m.SRX,{})," Email"]}),(0,c.jsxs)("a",{className:"flex gap-2 bg-blue-50 text-blue-700 rounded-full px-2 py-1 items-center active:scale-95",href:`tel:${e.phoneNumber}`,children:[c.jsx(m.I7T,{})," Call"]})]}),"yes"===e.replied?(0,c.jsxs)("p",{className:"text-[10px] flex justify-end items-center gap-2 text-blue-700",children:[c.jsx(m.W_7,{})," Replied"]}):c.jsx("button",{onClick:markMessageAsReplied,"data-id":e._id,className:"px-2 py-1 text-sm bg-blue-700 text-white rounded full w-full active:scale-95 disabled:opacity-75",children:"Mark as replied"})]},e._id))})})]}):"view orders"===l?(0,c.jsxs)("div",{className:"p-4 overflow-hidden",children:[c.jsx("h4",{className:"text-lg text-center mb-4 font-semibold text-zinc-600",children:"Orders"}),c.jsx("div",{className:"flex flex-col gap-2 max-h-[70vh] overflow-scroll",children:"pending"===S?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"Loading orders..."}):"failed"===S?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"Failed to orders"}):k.length<1?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"No orders to show"}):c.jsx("div",{className:"flex flex-col gap-2",children:k.map(e=>(0,c.jsxs)("div",{className:"bg-slate-50 rounded-lg p-2 flex flex-col gap-2 hover:shadow-lg",children:[c.jsx("h5",{className:"text-lg font-bold",children:e.customerContact[0]}),c.jsx("p",{className:"text-sm",children:new Date(e.dateCreated).toDateString()}),(0,c.jsxs)("div",{className:"text-sm flex flex-col gap-2",children:[c.jsx("h6",{className:"text-center font-bold text-zinc-600",children:"Order Summary"}),c.jsx("div",{className:"flex flex-col gap-2",children:e.products.map(e=>(0,c.jsxs)("div",{className:"flex gap-2",children:[c.jsx(h(),{className:"aspect-square rounded-full h-50 w-50",height:50,width:50,src:e.imageUrl,alt:e.name}),c.jsx("p",{className:"font-semibold",children:e.name}),(0,c.jsxs)("small",{className:"font-bold",children:["(",e.quantity,")"]})]}))}),(0,c.jsxs)("div",{className:"text-sm flex justify-center items-center",children:[(0,c.jsxs)("a",{className:"flex gap-2 bg-blue-50 text-blue-700 rounded-full px-2 py-1 items-center active:scale-95",href:`mailto:${e.customerContact[0]}`,children:[c.jsx(m.SRX,{})," Email"]}),(0,c.jsxs)("a",{className:"flex gap-2 bg-blue-50 text-blue-700 rounded-full px-2 py-1 items-center active:scale-95",href:`tel:${e.customerContact[2]}`,children:[c.jsx(m.I7T,{})," Call"]})]})]}),"yes"===e.completed?(0,c.jsxs)("p",{className:"text-[10px] flex justify-end items-center gap-2 text-blue-700",children:[c.jsx(m.W_7,{})," Completed"]}):c.jsx("button",{onClick:markOrderAsCompleted,"data-id":e._id,className:"px-2 py-1 text-sm bg-blue-700 text-white rounded full w-full active:scale-95 disabled:opacity-75",children:"Mark as completed"})]},e._id))})})]}):(0,c.jsxs)("div",{className:"p-4",children:[c.jsx("h4",{className:"text-lg text-center mb-4 font-semibold text-zinc-600",children:"Products"}),c.jsx("div",{className:"pt-8 flex flex-col gap-2 relative",children:"pending"===p?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"Loading products..."}):"failed"===p?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"Failed to load products"}):d.length<1?c.jsx("h5",{className:"text-zinc-400 text-center text-semibold",children:"No products to show"}):c.jsx("div",{className:"overflow-hidden grid relative",children:c.jsx("div",{className:"max-h-[55vh] overflow-auto mb-16 flex flex-col gap-2",children:d.map(e=>(0,c.jsxs)("div",{className:"flex gap-2 justify-start items-center bg-slate-100 rounded p-2 active:scale-95",children:[c.jsx(h(),{className:"h-50 aspect-square rounded-full",src:e.imageUrl,alt:e.name,height:50,width:50}),c.jsx("p",{className:"flex-grow flex-shrink text-sm",htmlFor:e._id,children:e.name})]},e._id))})})})]})]})})]})]}):(0,c.jsxs)(c.Fragment,{children:[c.jsx(b(),{children:c.jsx("title",{children:"Admin Login"})}),c.jsx("div",{className:"min-h-[100vh] flex justify-center items-center p-4",children:(0,c.jsxs)("form",{onSubmit:authorizeAdmin,className:"flex flex-col gap-2 p-4 rounded shadow-lg",children:[c.jsx("h2",{className:"font-2xl text-center font-bold text-zinc-600",children:"Authorization Form"}),c.jsx("p",{className:"font-lg font-semibold text-center text-zinc-600",children:"Please enter the correct information to continue"}),c.jsx("input",{id:"username",className:"p-2 rounded border-2 border-zinc-700",placeholder:"Admin username",required:!0,type:"text"}),(0,c.jsxs)("div",{className:"relative",children:[c.jsx("input",{id:"password",className:"p-2 rounded border-2 border-zinc-700 w-full",placeholder:"Admin password",required:!0,type:"password"}),c.jsx("small",{onClick:e=>{let{currentTarget:t}=e,s=t.previousElementSibling;"password"===s.type?(s.setAttribute("type","text"),t.textContent="Hide"):(s.setAttribute("type","password"),t.textContent="Show")},className:"text-[8px] absolute right-2 top-1/2 -translate-y-1/2 font-extrabold cursor-pointer",children:"Show"})]}),c.jsx("button",{id:"submit-btn",className:"bg-blue-700 text-white disabled:opacity-75 active:scale-95 px-4 py-2 rounded",type:"submit",children:"Submit"})]})})]})}let f=(0,r.l)(a,"default"),j=(0,r.l)(a,"getStaticProps"),v=(0,r.l)(a,"getStaticPaths"),w=(0,r.l)(a,"getServerSideProps"),y=(0,r.l)(a,"config"),N=(0,r.l)(a,"reportWebVitals"),k=(0,r.l)(a,"unstable_getStaticProps"),A=(0,r.l)(a,"unstable_getStaticPaths"),S=(0,r.l)(a,"unstable_getStaticParams"),P=(0,r.l)(a,"unstable_getServerProps"),z=(0,r.l)(a,"unstable_getServerSideProps"),C=new l.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/admin",pathname:"/admin",bundlePath:"",filename:""},components:{App:d.default,Document:n.default},userland:a})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[761,432,859,510,675,234,207],()=>__webpack_exec__(7585));module.exports=s})();