(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2627)}])},2627:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return c},default:function(){return Home}});var l=t(5893),a=t(1664),o=t.n(a),i=t(7294),n=t(2684),r=t(9008),d=t.n(r),c=!0;function Home(e){let{listingsPreview:s}=e;return(0,i.useEffect)(()=>{let e=document.getElementById("carousel-slider"),s=document.getElementById("right"),t=document.getElementById("left"),l=e.childNodes.length,a=e.scrollWidth/l,o=1,i=0,n=0,r=0;e.addEventListener("mousedown",grabCarousel),e.addEventListener("mouseup",clearEvents),e.addEventListener("touchstart",touchGrabCarousel),e.addEventListener("touchend",clearTouchEvents),e.addEventListener("touchcancel",resumeAutoPlay),e.addEventListener("mouseenter",pauseAutoPlay),e.addEventListener("mouseleave",resumeAutoPlay),s.addEventListener("click",showNextSlide),t.addEventListener("click",showPrevSlide);let d=setInterval(function(){o>=1&&o<l?showNextSlide():(o=1,showPrevSlide())},4e3);function pauseAutoPlay(){clearInterval(d)}function resumeAutoPlay(){d=setInterval(function(){o>=1&&o<l?showNextSlide():(o=1,showPrevSlide())},4e3)}function showNextSlide(){o++,updateCarousel()}function showPrevSlide(){o--,updateCarousel()}function touchGrabCarousel(s){pauseAutoPlay(),n=s.touches[0].clientX,r=e.scrollLeft,e.style.cursor="grabbing",e.addEventListener("touchmove",touchMoveCarousel),e.addEventListener("touchend",clearTouchEvents)}function touchMoveCarousel(s){pauseAutoPlay(),n>s.touches[0].pageX?e.scrollLeft=r+(n-s.touches[0].pageX):e.scrollLeft=r-(s.touches[0].pageX-n),i=s.touches[0].pageX}function clearTouchEvents(s){resumeAutoPlay(),n-i>100&&o++,i-n>100&&o--,e.removeEventListener("touchmove",touchMoveCarousel),updateCarousel()}function updateCarousel(){o<=1&&(o=1),o>=l&&(o=l),e.scrollLeft=a*(o-1)}function grabCarousel(s){n=s.pageX,r=e.scrollLeft,e.style.cursor="grabbing",e.addEventListener("mousemove",moveCarousel)}function clearEvents(s){e.style.cursor="grab",i=s.pageX,n-i>100&&o++,i-n>100&&o--,e.removeEventListener("mousemove",moveCarousel),updateCarousel()}function moveCarousel(s){n>s.pageX?e.scrollLeft=r+(n-s.pageX):e.scrollLeft=r-(s.pageX-n)}return()=>{e.removeEventListener("mouseup",clearEvents),e.removeEventListener("mousedown",grabCarousel),e.removeEventListener("touchstart",touchGrabCarousel),e.removeEventListener("touchend",clearTouchEvents),e.removeEventListener("mouseenter",pauseAutoPlay),e.removeEventListener("mouseleave",resumeAutoPlay),s.removeEventListener("click",showNextSlide),t.removeEventListener("click",showPrevSlide),e.removeEventListener("touchcancel",resumeAutoPlay)}},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d(),{children:(0,l.jsx)("title",{children:"Iyke Bulkwill - Dealer on Solar and CCTV, Installations, Real Estate Agent, Sales of Phones and Laptops, General Merchants"})}),(0,l.jsxs)("main",{id:"home",children:[(0,l.jsxs)("div",{className:" flex pt-[90px] pb-[50px] px-4 flex-col justify-center gap-4 text-center text-blue-900",id:"legend",children:[(0,l.jsxs)("h1",{style:{fontFamily:"Playfair Display"},className:"text-6xl font-bold capitalize max-md:text-4xl flex justify-center flex-wrap gap-2",children:[(0,l.jsx)("img",{src:"/images/logo.png",height:70,width:70})," ","Iyke-Bulkwill Intl. Ltd."]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-semibold",children:"We Deal On"}),(0,l.jsx)("p",{className:"flex justify-center",children:"Solar and CCTV | Installations | Real Estate Agent | Sales of Phones and Laptops | General Merchants"}),(0,l.jsxs)("p",{className:"flex justify-center gap-2 mt-4",children:[(0,l.jsxs)("a",{className:"flex gap-1 items-center",href:"tel:+2348038022220",children:[(0,l.jsx)(n.I7T,{})," 0803 802 2220"]})," ","|",(0,l.jsxs)("a",{className:"flex gap-1 items-center",href:"https://wa.me/2348038022220",children:[(0,l.jsx)(n.xpo,{})," 0803 802 2220"]})]})]}),(0,l.jsx)(o(),{className:"block w-fit mx-auto px-4 py-2 rounded hover:shadow-lg active:scale-95 text-white bg-blue-500",href:"/listings",children:"Check out our listings"})]}),(0,l.jsxs)("div",{className:"p-4 relative max-w-6xl m-auto",children:[(0,l.jsx)("h2",{className:"text-lg text-slate-600 font-bold my-8",children:"Take a sneak peek at some of our exclusive offers"}),(0,l.jsx)("div",{id:"carousel-slider",className:"flex gap-4 overflow-hidden cursor-grab py-2 relative",children:s.map(e=>(0,l.jsxs)("div",{className:"carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none",children:[(0,l.jsx)("img",{height:400,width:400,className:"object-cover aspect-video block align-middle m-auto rounded-sm",src:e.imageUrl,alt:e.name}),(0,l.jsx)("p",{className:"text-sm font-semibold capitalize",children:e.name})]},e._id))}),(0,l.jsx)("span",{className:"absolute w-16 h-16 rounded-full bg-white active:scale-95 shadow-2xl top-1/2 -translate-y-1/2 flex justify-center items-center right-4",id:"right",children:(0,l.jsx)(n.H_v,{})}),(0,l.jsx)("span",{className:"absolute w-16 h-16 rounded-full bg-white active:scale-95 shadow-2xl top-1/2 -translate-y-1/2 flex justify-center items-center left-4",id:"left",children:(0,l.jsx)(n._HU,{})}),(0,l.jsxs)(o(),{className:"w-fit ml-auto mt-4 mr-0 text-right text-blue-500 flex justify-end items-center font-semibold",href:"/listings",children:["View more ",(0,l.jsx)(n.H_v,{})]})]}),(0,l.jsxs)("div",{id:"services",className:"py-10",children:[(0,l.jsx)("h2",{className:"mb-6 font-bold text-2xl text-center text-white",children:"Our Services"}),(0,l.jsxs)("div",{className:"flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center",children:[(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/residual_solar_panel_mounting.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Solar Panels"}),(0,l.jsxs)("p",{children:["We specialize in customizing solar solutions for homes, providing cost effective and eco-friendly energy options for families. Businesses can also benefit from solar power too! ",(0,l.jsx)(o(),{className:"text-blue-500",href:"/listings",children:"Discover"})," how we can help you reduce operational costs and enhance sustainability through our commercial solar panels."]})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/mounting_and_maintenance.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Installation and Maintenance"}),(0,l.jsx)("p",{children:"Our expert team ensures seamless installation and offers regular maintenance to keep your solar system performing at its best."})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/real_estate.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Real Estate"}),(0,l.jsxs)("p",{children:["We can help you find your dream house. Our real estate agents are experts in providing real estate solutions for our customers. You can ",(0,l.jsx)(o(),{className:"text-blue-500",href:"/contact",children:"contact us"})," directly for further enquiry"]})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/phones.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Phones and Mobile Accessories"}),(0,l.jsx)("p",{children:"We also offer quality mobile phones and other mobile accessories for sale at discounted rates."})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/laptops.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Quality Laptops"}),(0,l.jsxs)("p",{children:["Check out our ",(0,l.jsx)(o(),{className:"text-blue-500",href:"/listings",children:"listings page"})," to find quality laptops that suite your work requirements at affordable rates."]})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/commercial_solar_panels.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Home Lights"}),(0,l.jsxs)("p",{children:["We offer top-notch lighting for home interior decorations. You can visit our ",(0,l.jsx)(o(),{className:"text-blue-500",href:"/listings",children:"listings page"})," to see the ones that suit your taste."]})]})]})]})]}),(0,l.jsxs)("div",{className:"py-10",children:[(0,l.jsx)("h2",{className:"mb-6 font-bold text-2xl text-center",children:"Why Choose us?"}),(0,l.jsxs)("div",{className:"flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center",children:[(0,l.jsxs)("div",{className:"bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/experienced.avif",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Experience"}),(0,l.jsx)("p",{children:"We have years of experience in the solar industry ensuring top-notch service and reliable products."})]})]}),(0,l.jsxs)("div",{className:"bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/quality.avif",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Quality Products"}),(0,l.jsx)("p",{children:"We partner with leading manufacturers to provide you with the best panels and components"})]})]}),(0,l.jsxs)("div",{className:"bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)("img",{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/customer_support.avif",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Customer Support"}),(0,l.jsx)("p",{children:"Our dedicated support team is here to assist you every step of the way, from the initial consultations to post-installation support."})]})]})]})]})]})]})}},9008:function(e,s,t){e.exports=t(9201)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);