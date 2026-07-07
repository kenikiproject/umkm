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

/* ==========================================
PROGRAM MODAL
========================================== */

const programInfo={

tahfidz:{

title:"Tahfidz Al Qur'an",

image:"assets/img/program-tahfidz.jpg",

text:"Assalamu'alaikum. Saya Ari. Program Tahfidz Al Qur'an bertujuan membiasakan peserta didik mencintai Al-Qur'an sejak usia dini. Pembelajaran dilakukan secara bertahap dengan metode yang menyenangkan sehingga setiap anak dapat berkembang sesuai kemampuannya.",

list:[

"Target hafalan sesuai jenjang",

"Metode murojaah setiap hari",

"Guru pembimbing berpengalaman",

"Evaluasi hafalan berkala"

]

},

arab:{

title:"Bahasa Arab",

image:"assets/img/program-arab.jpg",

text:"Assalamu'alaikum. Saya Ari. Bahasa Arab dikenalkan melalui percakapan sederhana, kosakata harian, lagu, permainan edukatif, dan aktivitas kelas sehingga siswa lebih mudah memahami bahasa Al-Qur'an.",

list:[

"Percakapan sederhana",

"Kosakata harian",

"Game edukatif",

"Pembelajaran interaktif"

]

},

english:{

title:"English Class",

image:"assets/img/program-english.jpg",

text:"Assalamu'alaikum. Saya Ari. English Class membantu siswa mengenal bahasa Inggris dengan pendekatan yang menyenangkan melalui lagu, cerita, permainan, dan praktik berbicara sederhana.",

list:[

"Speaking dasar",

"Vocabulary",

"Learning by Playing",

"Interactive Class"

]

},

digital:{

title:"Digital Learning",

image:"assets/img/program-digital.jpg",

text:"Assalamu'alaikum. Saya Ari. Digital Learning memperkenalkan teknologi secara positif dan bertanggung jawab melalui penggunaan komputer, multimedia, dan media pembelajaran digital.",

list:[

"Pengenalan komputer",

"Media pembelajaran digital",

"Internet sehat",

"Kreativitas berbasis teknologi"

]

}

};

const modal=document.getElementById("programModal");

document.querySelectorAll(".program-card").forEach(card=>{

card.onclick=()=>{

const p=programInfo[card.dataset.program];

document.getElementById("modalTitle").innerHTML=p.title;

document.getElementById("modalImage").src=p.image;

document.getElementById("modalText").innerHTML=p.text;

const ul=document.getElementById("modalList");

ul.innerHTML="";

p.list.forEach(i=>{

ul.innerHTML+=`<li>${i}</li>`;

});

modal.classList.add("show");

};

});

document.querySelector(".modal-close").onclick=()=>{

modal.classList.remove("show");

};

modal.onclick=(e)=>{

if(e.target===modal){

modal.classList.remove("show");

}

};

/* ===================================================
ARI LAUNCHER
=================================================== */

const launcher = document.getElementById("ariLauncher");

const bubbleBox = document.querySelector(".ari-bubble");

const chatWindow = document.getElementById("ariChat");

const closeChat = document.getElementById("closeChat");


/* =======================================
Bubble Message
======================================= */

const bubbleMessages=[

"😊 Saya Ari. Klik saya jika ingin bertanya.",

"📚 Saya bisa menjelaskan Program Unggulan.",

"📝 Tanya seputar PPDB juga bisa.",

"🏫 Ingin tahu fasilitas sekolah?",

"💚 Silakan klik saya kapan saja."

];

let bubbleIndex=0;


/* =======================================
Show Bubble
======================================= */

function showBubble(){

bubbleBox.style.display="block";

bubbleBox.style.opacity="0";

bubbleBox.style.transform="translateY(20px)";

setTimeout(()=>{

bubbleBox.style.transition=".35s";

bubbleBox.style.opacity="1";

bubbleBox.style.transform="translateY(0)";

},30);

bubbleBox.querySelector(".bubble-text").innerHTML=bubbleMessages[bubbleIndex];

bubbleIndex++;

if(bubbleIndex>=bubbleMessages.length){

bubbleIndex=0;

}

setTimeout(hideBubble,5000);

}


/* =======================================
Hide Bubble
======================================= */

function hideBubble(){

bubbleBox.style.opacity="0";

bubbleBox.style.transform="translateY(15px)";

setTimeout(()=>{

bubbleBox.style.display="none";

},400);

}


/* =======================================
Show Chat
======================================= */

function openChat(){

launcher.style.transform="scale(.85)";

launcher.style.opacity="0";

setTimeout(()=>{

launcher.style.display="none";

chatWindow.classList.add("show");

},250);

}


/* =======================================
Close Chat
======================================= */

function closeChatWindow(){

chatWindow.classList.remove("show");

setTimeout(()=>{

launcher.style.display="flex";

launcher.style.opacity="1";

launcher.style.transform="scale(1)";

showBubble();

},250);

}


/* =======================================
Event
======================================= */

launcher.addEventListener("click",openChat);

closeChat.addEventListener("click",closeChatWindow);


/* =======================================
Start
======================================= */

window.addEventListener("load",()=>{

showBubble();

});
