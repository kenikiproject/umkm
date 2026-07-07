/* ======================================================
   EDULITE v1.0
   app.js
====================================================== */


/* ======================================================
Sticky Header
====================================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.style.background="rgba(255,255,255,.92)";

header.style.boxShadow="0 15px 40px rgba(0,0,0,.08)";

}else{

header.style.background="rgba(255,255,255,.82)";

header.style.boxShadow="none";

}

});


/* ======================================================
Fade Up Animation
====================================================== */

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(".section").forEach(sec=>{

sec.classList.add("fade-up");

observer.observe(sec);

});


/* ======================================================
Program Hover Ripple
====================================================== */

document.querySelectorAll(".program-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transition=".35s";

});

});


/* ======================================================
Gallery Light Hover
====================================================== */

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.draggable=false;

});


/* ======================================================
Hero Button Smooth Scroll
====================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ======================================================
Floating Ari
====================================================== */

const bubble=document.querySelector(".bubble");

setTimeout(()=>{

bubble.style.opacity=1;

bubble.style.transform="translateY(0px)";

},4000);


setTimeout(()=>{

bubble.style.opacity=0;

},9000);


/* ======================================================
Auto Hero Animation
====================================================== */

const heroTitle=document.querySelector(".hero h1");

heroTitle.animate([

{

transform:"translateY(30px)",

opacity:0

},

{

transform:"translateY(0)",

opacity:1

}

],{

duration:900,

fill:"forwards"

});


/* ======================================================
Principal Card Float
====================================================== */

const principal=document.querySelector(".principal-card");

let angle=0;

setInterval(()=>{

angle+=0.02;

principal.style.transform=`translateY(${Math.sin(angle)*5}px)`;

},30);


/* ======================================================
Gallery Click
====================================================== */

document.querySelectorAll(".gallery-item").forEach(item=>{

item.addEventListener("click",()=>{

item.style.transform="scale(.98)";

setTimeout(()=>{

item.style.transform="scale(1)";

},150);

});

});


/* ======================================================
Console
====================================================== */

console.log("EduLite v1 Loaded");

console.log("MI Ar Risalah Ngawi");

console.log("Ready.");

/* ======================================================
ACTIVE MENU
====================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* ======================================================
LIGHTBOX GALERI
====================================================== */

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `
<div class="lightbox-content">

<img id="lightbox-img">

<span id="lightbox-close">&times;</span>

</div>
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src = img.src;

});

});

document.getElementById("lightbox-close").onclick = ()=>{

lightbox.classList.remove("show");

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

};


/* ======================================================
ARI MESSAGE
====================================================== */

const ariMessages=[

"👋 Assalamu'alaikum.",

"😊 Ada yang bisa saya bantu?",

"📖 Yuk lihat Program Unggulan kami.",

"🏫 Jangan lupa lihat fasilitas sekolah.",

"📷 Galeri kegiatan juga menarik lho.",

"📝 PPDB sudah dibuka."

];

let ariIndex=0;

setInterval(()=>{

bubble.innerHTML=ariMessages[ariIndex];

bubble.style.opacity=1;

bubble.style.transform="translateY(0px)";

ariIndex++;

if(ariIndex>=ariMessages.length){

ariIndex=0;

}

},7000);


/* ======================================================
BUTTON CLICK EFFECT
====================================================== */

document.querySelectorAll(".btn-primary,.btn-outline").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.animate([

{transform:"scale(1)"},

{transform:"scale(.96)"},

{transform:"scale(1)"}

],{

duration:220

});

});

});


/* ======================================================
PRELOAD IMAGE
====================================================== */

const preload=[];

document.querySelectorAll("img").forEach(img=>{

const image=new Image();

image.src=img.src;

preload.push(image);

});


/* ======================================================
END
====================================================== */

console.log("EduLite Interactive Loaded");

/* ======================================================
JSON LOADER
====================================================== */

let schoolData = {};

async function loadSchoolData(){

try{

const response = await fetch("data/school.json");

schoolData = await response.json();

console.log("School Loaded");

}catch(e){

console.log("school.json not found");

}

}

loadSchoolData();



/* ======================================================
FAQ
====================================================== */

let faqData=[];

async function loadFAQ(){

try{

const response=await fetch("data/faq.json");

faqData=await response.json();

console.log("FAQ Loaded");

}catch(e){

console.log("faq.json not found");

}

}

loadFAQ();



/* ======================================================
PROGRAM
====================================================== */

let programData=[];

async function loadProgram(){

try{

const response=await fetch("data/program.json");

programData=await response.json();

}catch(e){

console.log("program.json not found");

}

}

loadProgram();



/* ======================================================
FACILITY
====================================================== */

let facilityData=[];

async function loadFacility(){

try{

const response=await fetch("data/facility.json");

facilityData=await response.json();

}catch(e){

console.log("facility.json not found");

}

}

loadFacility();



console.log("Data Engine Ready");
