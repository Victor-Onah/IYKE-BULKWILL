(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5728:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9798)}])},9798:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Home}});var l=t(5893),a=t(5675),o=t.n(a),d=t(1664),i=t.n(d),n=t(7294),r=t(2684);function Home(){return(0,n.useEffect)(()=>{let e=document.getElementById("carousel-slider"),s=document.getElementById("right"),t=document.getElementById("left"),l=e.childNodes.length,a=e.scrollWidth,o=a/l,d=1,i=0,n=0,r=0;console.log(o,a),e.addEventListener("mousedown",grabCarousel),e.addEventListener("mouseup",clearEvents),e.addEventListener("touchstart",touchGrabCarousel),e.addEventListener("touchend",clearTouchEvents),e.addEventListener("touchcancel",resumeAutoPlay),e.addEventListener("mouseenter",pauseAutoPlay),e.addEventListener("mouseleave",resumeAutoPlay),s.addEventListener("click",showNextSlide),t.addEventListener("click",showPrevSlide);let c=setInterval(function(){d>=1&&d<l?showNextSlide():(d=1,showPrevSlide())},4e3);function pauseAutoPlay(){clearInterval(c)}function resumeAutoPlay(){c=setInterval(function(){d>=1&&d<l?showNextSlide():(d=1,showPrevSlide())},4e3)}function showNextSlide(){d++,updateCarousel()}function showPrevSlide(){d--,updateCarousel()}function touchGrabCarousel(s){pauseAutoPlay(),n=s.touches[0].clientX,r=e.scrollLeft,e.style.cursor="grabbing",e.addEventListener("touchmove",touchMoveCarousel),e.addEventListener("touchend",clearTouchEvents)}function touchMoveCarousel(s){pauseAutoPlay(),n>s.touches[0].pageX?e.scrollLeft=r+(n-s.touches[0].pageX):e.scrollLeft=r-(s.touches[0].pageX-n),i=s.touches[0].pageX}function clearTouchEvents(s){resumeAutoPlay(),n-i>100&&d++,i-n>100&&d--,e.removeEventListener("touchmove",touchMoveCarousel),updateCarousel()}function updateCarousel(){d<=1&&(d=1),d>=l&&(d=l),e.scrollLeft=o*(d-1)}function grabCarousel(s){n=s.pageX,r=e.scrollLeft,e.style.cursor="grabbing",e.addEventListener("mousemove",moveCarousel)}function clearEvents(s){e.style.cursor="grab",i=s.pageX,n-i>100&&d++,i-n>100&&d--,e.removeEventListener("mousemove",moveCarousel),updateCarousel()}function moveCarousel(s){n>s.pageX?e.scrollLeft=r+(n-s.pageX):e.scrollLeft=r-(s.pageX-n)}return()=>{e.removeEventListener("mouseup",clearEvents),e.removeEventListener("mousedown",grabCarousel),e.removeEventListener("touchstart",touchGrabCarousel),e.removeEventListener("touchend",clearTouchEvents),e.removeEventListener("mouseenter",pauseAutoPlay),e.removeEventListener("mouseleave",resumeAutoPlay),s.removeEventListener("click",showNextSlide),t.removeEventListener("click",showPrevSlide),e.removeEventListener("touchcancel",resumeAutoPlay)}},[]),(0,l.jsxs)("main",{id:"home",children:[(0,l.jsxs)("div",{className:" flex pt-[90px] pb-[50px] px-4 flex-col justify-center gap-4 text-center text-blue-900",id:"legend",children:[(0,l.jsxs)("h1",{style:{fontFamily:"Playfair Display"},className:"text-6xl font-bold capitalize max-md:text-4xl flex justify-center flex-wrap gap-2",children:[(0,l.jsx)(o(),{src:"/images/logo.png",height:70,width:70})," ","Iyke-Bulkwill Intn'l Ltd."]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-semibold",children:"We Deal On"}),(0,l.jsx)("p",{className:"flex justify-center",children:"Solar and CCTV | Installations | Real Estate Agent | Sales of Phones and Laptops | General Merchants"}),(0,l.jsxs)("p",{className:"flex justify-center gap-2 mt-4",children:[(0,l.jsxs)("a",{className:"flex gap-1 items-center",href:"tel:+2348038022220",children:[(0,l.jsx)(r.I7T,{})," 0803 802 2220"]})," ","|",(0,l.jsxs)("a",{className:"flex gap-1 items-center",href:"tel:+2348038022220",children:[(0,l.jsx)(r.I7T,{})," 0803 802 2220"]})]})]}),(0,l.jsx)(i(),{className:"block w-fit mx-auto px-4 py-2 rounded hover:shadow-lg active:scale-95 text-white bg-blue-500",href:"/",children:"Check out our listings"})]}),(0,l.jsxs)("div",{className:"p-4 relative max-w-6xl m-auto",children:[(0,l.jsx)("h2",{className:"text-lg text-slate-600 font-bold",children:"Take a sneak peek at some of our exclusive offers"}),(0,l.jsxs)("div",{id:"carousel-slider",className:"flex gap-4 overflow-hidden cursor-grab py-2 relative",children:[(0,l.jsxs)("div",{className:"carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none",children:[(0,l.jsx)(o(),{height:400,width:400,className:"object-cover aspect-video block align-middle m-auto rounded-sm",src:"/images/product_1.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm capitalize",children:"LED 2500W solar street light - 2500 watts - all in one"}),(0,l.jsx)("h3",{className:"font-semibold font-gray-800",children:"N32, 000"}),(0,l.jsx)("button",{className:"bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50",children:"Add to cart"})]})]}),(0,l.jsxs)("div",{className:"carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none",children:[(0,l.jsx)(o(),{height:400,width:400,className:"object-cover aspect-video block align-middle m-auto rounded-sm",src:"/images/product_2.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm capitalize",children:"duravolt 10 watts 9V mono solar panel (for rechargeable fans)"}),(0,l.jsx)("h3",{className:"font-semibold font-gray-800",children:"N10, 000"}),(0,l.jsx)("button",{className:"bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50",children:"Add to cart"})]})]}),(0,l.jsxs)("div",{className:"carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none",children:[(0,l.jsx)(o(),{height:400,width:400,className:"object-cover aspect-video block align-middle m-auto rounded-sm",src:"/images/product_3.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm capitalize",children:"panel 350 watts crystaline solar panel 24V"}),(0,l.jsx)("h3",{className:"font-semibold font-gray-800",children:"N95, 000"}),(0,l.jsx)("button",{className:"bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50",children:"Add to cart"})]})]}),(0,l.jsxs)("div",{className:"carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none",children:[(0,l.jsx)(o(),{height:400,width:400,className:"object-cover aspect-video block align-middle m-auto rounded-sm",src:"/images/product_4.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm capitalize",children:"4000 watts [24/36/48v] mono solar panels"}),(0,l.jsx)("h3",{className:"font-semibold font-gray-800",children:"N102, 000"}),(0,l.jsx)("button",{className:"bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50",children:"Add to cart"})]})]}),(0,l.jsxs)("div",{className:"carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none",children:[(0,l.jsx)(o(),{height:400,width:400,className:"object-cover aspect-video block align-middle m-auto rounded-sm",src:"/images/product_6.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm capitalize",children:"Qasa 30 watts 120/180V mono solar panel"}),(0,l.jsx)("h3",{className:"font-semibold font-gray-800",children:"N23, 000"}),(0,l.jsx)("button",{className:"bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50",children:"Add to cart"})]})]}),(0,l.jsxs)("div",{className:"carousel-item w-full max-w-[250px] aspect-video flex-shrink-0 p-2 rounded-md shadow-md hover:shadow-xl pointer-events-none",children:[(0,l.jsx)(o(),{height:400,width:400,className:"object-cover aspect-video block align-middle m-auto rounded-sm",src:"/images/product_5.jpg",alt:""}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-sm capitalize",children:"BUC solar panel mono crystalline solar module 300W - 2 units"}),(0,l.jsx)("h3",{className:"font-semibold font-gray-800",children:"N270, 000"}),(0,l.jsx)("button",{className:"bg-blue-500 text-white text-center block w-full rounded active:scale-95 px-4 py-2 pointer-events-auto z-50",children:"Add to cart"})]})]})]}),(0,l.jsx)("span",{className:"absolute w-8 h-8 rounded-full bg-[#ffffffaa] active:bg-white shadow-2xl top-1/2 -translate-x-1/2 flex justify-center items-center right-4",id:"right",children:(0,l.jsx)(r.H_v,{})}),(0,l.jsx)("span",{className:"absolute w-8 h-8 rounded-full bg-[#ffffffaa] active:bg-white shadow-2xl top-1/2 -translate-x-1/2 flex justify-center items-center left-4",id:"left",children:(0,l.jsx)(r._HU,{})}),(0,l.jsxs)(i(),{className:"block w-fit ml-auto mr-0 text-right text-blue-500 flex justify-end items-center font-semibold",href:"/",children:["View more ",(0,l.jsx)(r.H_v,{})]})]}),(0,l.jsxs)("div",{id:"services",className:"py-10",children:[(0,l.jsx)("h2",{className:"mb-6 font-bold text-2xl text-center text-white",children:"Our Services"}),(0,l.jsxs)("div",{className:"flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center",children:[(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)(o(),{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/residual_solar_panel_mounting.jpg"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Residual Solar Panels"}),(0,l.jsx)("p",{children:"We specialize in customizing solar solutions for homes, providing cost effective and eco-friendly energy options for families."})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)(o(),{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/commercial_solar_panels.jpg"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Commercial Solar Panels"}),(0,l.jsx)("p",{children:"Businesses can benefit from solar power too! Discover how we can help you reduce operational costs and enhance sustainability."})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)(o(),{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/mounting_and_maintenance.jpg"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Installation and Maintenance"}),(0,l.jsx)("p",{children:"Our expert team ensures seamless installation and offers regular maintenance to keep your solar system performing at its best."})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)(o(),{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/real_estate.jpg"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Real Estate"}),(0,l.jsx)("p",{children:"We can help you find your dream house. Our real estate agents are experts in providing real estate solutions for our customers"})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)(o(),{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/phones.jpg"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Phones and Mobile Accessories"}),(0,l.jsx)("p",{children:"We also offer quality mobile phones and other mobile accessories for sale at discounted rates."})]})]}),(0,l.jsxs)("div",{className:"bg-blue-50 rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)(o(),{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/laptops.jpg"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Quality Laptops"}),(0,l.jsx)("p",{children:"Check out our listings to find quality laptops that suite your work requirements at affordable rates."})]})]})]})]}),(0,l.jsxs)("div",{className:"py-10",children:[(0,l.jsx)("h2",{className:"mb-6 font-bold text-2xl text-center",children:"Why Choose us?"}),(0,l.jsxs)("div",{className:"flex flex-wrap p-4 gap-x-6 gap-y-8 m-auto justify-center",children:[(0,l.jsxs)("div",{className:"bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)(o(),{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/experienced.avif"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Experience"}),(0,l.jsx)("p",{children:"We have years of experience in the solar industry ensuring top-notch service and reliable products."})]})]}),(0,l.jsxs)("div",{className:"bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)(o(),{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/quality.avif"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Quality Products"}),(0,l.jsx)("p",{children:"We partner with leading manufacturers to provide you with the best panels and components"})]})]}),(0,l.jsxs)("div",{className:"bg-white rounded-md shadow-md hover:shadow-lg flex flex-col gap-4 w-full max-w-sm overflow-hidden text-center p-4",children:[(0,l.jsx)(o(),{height:400,width:400,className:"w-full rounded-md aspect-video object-cover block align-middle m-auto",src:"/images/customer_support.avif"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"font-semibold",children:"Customer Support"}),(0,l.jsx)("p",{children:"Our dedicated support team is here to assist you every step of the way, from the initial consultations to post-installation support."})]})]})]})]})]})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);