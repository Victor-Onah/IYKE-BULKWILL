"use strict";(()=>{var e={};e.id=405,e.ids=[405,660,888],e.modules={3107:(e,s,t)=>{t.r(s),t.d(s,{config:()=>P,default:()=>j,getServerSideProps:()=>N,getStaticPaths:()=>y,getStaticProps:()=>b,reportWebVitals:()=>S,routeModule:()=>A,unstable_getServerProps:()=>L,unstable_getServerSideProps:()=>C,unstable_getStaticParams:()=>k,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>E});var l={};t.r(l),t.d(l,{default:()=>Home,getServerSideProps:()=>getServerSideProps});var a=t(7093),o=t(5244),r=t(1323),i=t(1207),n=t(8234),d=t(997),c=t(1664),u=t.n(c),m=t(6689),h=t(231),p=t(968),x=t.n(p);let f=require("node-fetch");var g=t.n(f);let v=require("dotenv");var w=t.n(v);let getServerSideProps=async function({req:e}){try{w().config();let e=await g()("https://iyke-bulkwill.com/api/listings",{headers:{"X-Application-Authorization-Token":"$2b$10$DwcQnmA7g6FbBTzDnL9IfOQqafDd7Ka7SIDuAzbMMUskoGCO0206G"}});return{props:{listingsPreview:(await e.json()).slice(0,6)}}}catch(e){return console.log(e),{props:{listingsPreview:[]}}}};function Home({listingsPreview:e}){return(0,m.useEffect)(()=>{let e=document.getElementById("carousel-slider"),s=document.getElementById("right"),t=document.getElementById("left"),l=e.childNodes.length,a=e.scrollWidth/l,o=1,r=0,i=0,n=0;e.addEventListener("mousedown",grabCarousel),e.addEventListener("mouseup",clearEvents),e.addEventListener("touchstart",touchGrabCarousel),e.addEventListener("touchend",clearTouchEvents),e.addEventListener("touchcancel",resumeAutoPlay),e.addEventListener("mouseenter",pauseAutoPlay),e.addEventListener("mouseleave",resumeAutoPlay),s.addEventListener("click",showNextSlide),t.addEventListener("click",showPrevSlide);let d=setInterval(function(){o>=1&&o<l?showNextSlide():(o=1,showPrevSlide())},4e3);function pauseAutoPlay(){clearInterval(d)}function resumeAutoPlay(){d=setInterval(function(){o>=1&&o<l?showNextSlide():(o=1,showPrevSlide())},4e3)}function showNextSlide(){o++,updateCarousel()}function showPrevSlide(){o--,updateCarousel()}function touchGrabCarousel(s){pauseAutoPlay(),i=s.touches[0].clientX,n=e.scrollLeft,e.style.cursor="grabbing",e.addEventListener("touchmove",touchMoveCarousel),e.addEventListener("touchend",clearTouchEvents)}function touchMoveCarousel(s){pauseAutoPlay(),i>s.touches[0].pageX?e.scrollLeft=n+(i-s.touches[0].pageX):e.scrollLeft=n-(s.touches[0].pageX-i),r=s.touches[0].pageX}function clearTouchEvents(s){resumeAutoPlay(),i-r>100&&o++,r-i>100&&o--,e.removeEventListener("touchmove",touchMoveCarousel),updateCarousel()}function updateCarousel(){o<=1&&(o=1),o>=l&&(o=l),e.scrollLeft=a*(o-1)}function grabCarousel(s){i=s.pageX,n=e.scrollLeft,e.style.cursor="grabbing",e.addEventListener("mousemove",moveCarousel)}function clearEvents(s){e.style.cursor="grab",r=s.pageX,i-r>100&&o++,r-i>100&&o--,e.removeEventListener("mousemove",moveCarousel),updateCarousel()}function moveCarousel(s){i>s.pageX?e.scrollLeft=n+(i-s.pageX):e.scrollLeft=n-(s.pageX-i)}return()=>{e.removeEventListener("mouseup",clearEvents),e.removeEventListener("mousedown",grabCarousel),e.removeEventListener("touchstart",touchGrabCarousel),e.removeEventListener("touchend",clearTouchEvents),e.removeEventListener("mouseenter",pauseAutoPlay),e.removeEventListener("mouseleave",resumeAutoPlay),s.removeEventListener("click",showNextSlide),t.removeEventListener("click",showPrevSlide),e.removeEventListener("touchcancel",resumeAutoPlay)}},[]),(0,d.jsxs)(d.Fragment,{children:[d.jsx(x(),{children:d.jsx("title",{children:"Iyke Bulkwill - Dealer on Solar and CCTV, Installations, Real Estate Agent, Sales of Phones and Laptops, General Merchants"})}),(0,d.jsxs)("main",{id:"home",children:[(0,d.jsxs)("div",{className:" flex pt-[90px] pb-[50px] px-4 flex-col justify-center gap-4 text-center text-blue-900",id:"legend",children:[(0,d.jsxs)("h1",{style:{fontFamily:"Playfair Display"},className:"text-6xl font-bold capitalize max-md:text-4xl flex justify-center flex-wrap gap-2",children:[d.jsx("img",{src:"/images/logo.png",height:70,width:70})," ","Iyke-Bulkwill Intl. Ltd."]}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"text-lg font-semibold",children:"We Deal On"}),d.jsx("p",{className:"flex justify-center",children:"Solar and CCTV | Installations | Real Estate Agent | Sales of Phones and Laptops | General Merchants"}),(0,d.jsxs)("p",{className:"flex justify-center gap-2 mt-4",children:[(0,d.jsxs)("a",{className:"flex gap-1 items-center",href:"tel:+2348038022220",children:[d.jsx(h.I7T,{})," 0803 802 2220"]})," ","|",(0,d.jsxs)("a",{className:"flex gap-1 items-center",href:"https://wa.me/2348038022220",children:[d.jsx(h.xpo,{})," 0803 802 2220"]})]})]}),d.jsx(u(),{className:"block w-fit mx-auto px-4 py-2 rounded hover:shadow-lg active:scale-95 text-white bg-blue-500",href:"/listings",children:"Check out our listings"})]}),(0,d.jsxs)("div",{className:"p-4 relative max-w-6xl m-auto",children:[d.jsx("h2",{className:"text-lg text-slate-600 font-bold my-8",children:"Take a sneak peek at some of our exclusive offers"}),d.jsx("div",{id:"carousel-slider",className:"flex gap-4 overflow-hidden cursor-grab py-2 relative",children:e.map(e=>(0,d.jsxs)("div",{className:"carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none",children:[d.jsx("img",{height:400,width:400,className:"object-cover aspect-video block align-middle m-auto rounded-sm",src:e.imageUrl,alt:e.name}),d.jsx("p",{className:"text-sm font-semibold capitalize",children:e.name})]},e._id))}),d.jsx("span",{className:"absolute w-16 h-16 rounded-full bg-white active:scale-95 shadow-2xl top-1/2 -translate-y-1/2 flex justify-center items-center right-4",id:"right",children:d.jsx(h.H_v,{})}),d.jsx("span",{className:"absolute w-16 h-16 rounded-full bg-white active:scale-95 shadow-2xl top-1/2 -translate-y-1/2 flex justify-center items-center left-4",id:"left",children:d.jsx(h._HU,{})}),(0,d.jsxs)(u(),{className:"w-fit ml-auto mt-4 mr-0 text-right text-blue-500 flex justify-end items-center font-semibold",href:"/listings",children:["View more ",d.jsx(h.H_v,{})]})]}),(0,d.jsxs)("div",{id:"services",className:"py-10",children:[d.jsx("h2",{className:"mb-6 font-bold text-2xl text-center text-white",children:"Our Services"}),(0,d.jsxs)("div",{className:"flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center",children:[(0,d.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[d.jsx("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/residual_solar_panel_mounting.jpg",alt:""}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"font-semibold",children:"Solar Panels"}),(0,d.jsxs)("p",{children:["We specialize in customizing solar solutions for homes, providing cost effective and eco-friendly energy options for families. Businesses can also benefit from solar power too! ",d.jsx(u(),{className:"text-blue-500",href:"/listings",children:"Discover"})," how we can help you reduce operational costs and enhance sustainability through our commercial solar panels."]})]})]}),(0,d.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[d.jsx("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/mounting_and_maintenance.jpg",alt:""}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"font-semibold",children:"Installation and Maintenance"}),d.jsx("p",{children:"Our expert team ensures seamless installation and offers regular maintenance to keep your solar system performing at its best."})]})]}),(0,d.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[d.jsx("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/real_estate.jpg",alt:""}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"font-semibold",children:"Real Estate"}),(0,d.jsxs)("p",{children:["We can help you find your dream house. Our real estate agents are experts in providing real estate solutions for our customers. You can ",d.jsx(u(),{className:"text-blue-500",href:"/contact",children:"contact us"})," directly for further enquiry"]})]})]}),(0,d.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[d.jsx("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/phones.jpg",alt:""}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"font-semibold",children:"Phones and Mobile Accessories"}),d.jsx("p",{children:"We also offer quality mobile phones and other mobile accessories for sale at discounted rates."})]})]}),(0,d.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[d.jsx("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/laptops.jpg",alt:""}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"font-semibold",children:"Quality Laptops"}),(0,d.jsxs)("p",{children:["Check out our ",d.jsx(u(),{className:"text-blue-500",href:"/listings",children:"listings page"})," to find quality laptops that suite your work requirements at affordable rates."]})]})]}),(0,d.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[d.jsx("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"https://www-konga-com-res.cloudinary.com/w_850,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/Z/200674_1664086461.jpg",alt:""}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"font-semibold",children:"Home Lights"}),(0,d.jsxs)("p",{children:["We offer top-notch lighting for home interior decorations. You can visit our ",d.jsx(u(),{className:"text-blue-500",href:"/listings",children:"listings page"})," to see the ones that suit your taste."]})]})]})]})]}),(0,d.jsxs)("div",{className:"py-10",children:[d.jsx("h2",{className:"mb-6 font-bold text-2xl text-center",children:"Why Choose us?"}),(0,d.jsxs)("div",{className:"flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center",children:[(0,d.jsxs)("div",{className:"bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[d.jsx("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/experienced.avif",alt:""}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"font-semibold",children:"Experience"}),d.jsx("p",{children:"We have years of experience in the solar industry ensuring top-notch service and reliable products."})]})]}),(0,d.jsxs)("div",{className:"bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[d.jsx("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/quality.avif",alt:""}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"font-semibold",children:"Quality Products"}),d.jsx("p",{children:"We partner with leading manufacturers to provide you with the best panels and components"})]})]}),(0,d.jsxs)("div",{className:"bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[d.jsx("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/customer_support.avif",alt:""}),(0,d.jsxs)("div",{children:[d.jsx("h3",{className:"font-semibold",children:"Customer Support"}),d.jsx("p",{children:"Our dedicated support team is here to assist you every step of the way, from the initial consultations to post-installation support."})]})]})]})]})]})]})}let j=(0,r.l)(l,"default"),b=(0,r.l)(l,"getStaticProps"),y=(0,r.l)(l,"getStaticPaths"),N=(0,r.l)(l,"getServerSideProps"),P=(0,r.l)(l,"config"),S=(0,r.l)(l,"reportWebVitals"),E=(0,r.l)(l,"unstable_getStaticProps"),_=(0,r.l)(l,"unstable_getStaticPaths"),k=(0,r.l)(l,"unstable_getStaticParams"),L=(0,r.l)(l,"unstable_getServerProps"),C=(0,r.l)(l,"unstable_getServerSideProps"),A=new a.PagesRouteModule({definition:{kind:o.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:n.default,Document:i.default},userland:l})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},7147:e=>{e.exports=require("fs")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},9796:e=>{e.exports=require("zlib")}};var s=require("../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),t=s.X(0,[761,432,859,450,234,207],()=>__webpack_exec__(3107));module.exports=t})();