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
ARI LAUNCHER + JSON ASSISTANT
=================================================== */

const launcher = document.getElementById("ariLauncher");
const bubbleBox = document.querySelector(".ari-bubble");
const chatWindow = document.getElementById("ariChat");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendMessage = document.getElementById("sendMessage");
const ARI_ICON = "assets/mascot/icon-ari.png";

const bubbleMessages = [
    "Saya Ari. Klik saya jika ingin bertanya.",
    "Saya bisa menjelaskan program unggulan.",
    "Tanya seputar PPDB juga bisa.",
    "Ingin tahu fasilitas sekolah?",
    "Silakan klik saya kapan saja."
];

const assistantData = {
    school: null,
    program: [],
    facility: [],
    faq: [],
    ppdb: null,
    teachers: [],
    extracurricular: []
};

let bubbleIndex = 0;
let bubbleHideTimer = null;
let bubbleDisplayTimer = null;
let assistantReady = false;

function injectAssistantStyle() {
    if (document.getElementById("ariAssistantStyle")) return;

    const style = document.createElement("style");
    style.id = "ariAssistantStyle";
    style.textContent = `
        .ari-user-message{justify-content:flex-end;}
        .ari-user-message .chat-bubble{background:#138A36;color:#fff;margin-left:auto;}
        .typing-bubble{display:flex;gap:5px;align-items:center;padding:14px 16px;min-width:58px;}
        .typing-bubble span{width:7px;height:7px;border-radius:50%;background:#9ca3af;animation:typingDot 1s infinite ease-in-out;}
        .typing-bubble span:nth-child(2){animation-delay:.15s;}
        .typing-bubble span:nth-child(3){animation-delay:.3s;}
        .chat-bubble ul{margin:8px 0 0 18px;list-style:disc;}
        .chat-bubble li{margin:4px 0;}
        .chat-bubble a{color:#138A36;font-weight:700;}
        @keyframes typingDot{0%,80%,100%{opacity:.35;transform:translateY(0);}40%{opacity:1;transform:translateY(-4px);}}
    `;
    document.head.appendChild(style);
}

function escapeHtml(value) {
    return String(value || "").replace(/[&<>"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[char]));
}

async function loadJson(path, fallback) {
    try {
        const response = await fetch(path, { cache: "no-store" });
        if (!response.ok) throw new Error(path);
        return await response.json();
    } catch (error) {
        return fallback;
    }
}

async function loadAssistantData() {
    const [school, program, facility, faq, ppdb, teachers, extracurricular] = await Promise.all([
        loadJson("data/school.json", null),
        loadJson("data/program.json", []),
        loadJson("data/facility.json", []),
        loadJson("data/faq.json", []),
        loadJson("data/ppdb.json", null),
        loadJson("data/teachers.json", []),
        loadJson("data/extracurricular.json", [])
    ]);

    assistantData.school = school;
    assistantData.program = Array.isArray(program) ? program : [];
    assistantData.facility = Array.isArray(facility) ? facility : [];
    assistantData.faq = Array.isArray(faq) ? faq : [];
    assistantData.ppdb = ppdb;
    assistantData.teachers = Array.isArray(teachers) ? teachers : [];
    assistantData.extracurricular = Array.isArray(extracurricular) ? extracurricular : [];
    assistantReady = true;
}

function listItems(items, titleKey = "title") {
    if (!items || !items.length) return "Datanya belum tersedia.";
    return `<ul>${items.map(item => `<li><strong>${escapeHtml(item[titleKey] || item.name || item.question)}</strong>${item.summary ? `<br>${escapeHtml(item.summary)}` : ""}</li>`).join("")}</ul>`;
}

function formatSchool() {
    const school = assistantData.school;
    if (!school) return "Info sekolah belum tersedia di database.";
    return `<strong>${escapeHtml(school.name)}</strong><br>${escapeHtml(school.tagline)}<br><br><strong>Kontak:</strong><br>${escapeHtml(school.phone)}<br>${escapeHtml(school.email)}<br>${escapeHtml(school.address)}`;
}

function formatPPDB() {
    const ppdb = assistantData.ppdb;
    if (!ppdb) return "Info PPDB belum tersedia di database.";
    return `<strong>PPDB Tahun Ajaran ${escapeHtml(ppdb.academic_year)}</strong><br>Status: ${escapeHtml(ppdb.status)}<br><br><strong>Alur:</strong><ul>${(ppdb.steps || []).map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ul><strong>Dokumen:</strong><ul>${(ppdb.documents || []).map(doc => `<li>${escapeHtml(doc)}</li>`).join("")}</ul>`;
}

function formatItem(item, type) {
    if (type === "faq") return `<strong>${escapeHtml(item.question)}</strong><br>${escapeHtml(item.answer)}`;
    if (type === "teacher") return `<strong>${escapeHtml(item.name)}</strong><br>${escapeHtml(item.role)}${item.subject ? ` - ${escapeHtml(item.subject)}` : ""}<br>${escapeHtml(item.summary)}`;
    if (type === "extracurricular") return `<strong>${escapeHtml(item.name)}</strong><br>Jadwal: ${escapeHtml(item.schedule || "Menyesuaikan")}.<br>${escapeHtml(item.summary)}`;
    return `<strong>${escapeHtml(item.title || item.name)}</strong><br>${escapeHtml(item.summary)}${item.details ? `<ul>${item.details.map(detail => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>` : ""}`;
}

function answerTopic(topic) {
    const key = String(topic || "").toLowerCase();
    if (key.includes("program")) return `<strong>Program unggulan kami:</strong>${listItems(assistantData.program, "title")}`;
    if (key.includes("fasilitas") || key.includes("facility")) return `<strong>Fasilitas sekolah:</strong>${listItems(assistantData.facility, "name")}`;
    if (key.includes("ppdb") || key.includes("daftar") || key.includes("dokumen") || key.includes("verifikasi")) return formatPPDB();
    if (key.includes("guru") || key.includes("teacher")) return `<strong>Data guru sementara:</strong>${listItems(assistantData.teachers, "name")}`;
    if (key.includes("ekskul") || key.includes("extra")) return `<strong>Ekstrakurikuler:</strong>${listItems(assistantData.extracurricular, "name")}`;
    if (key.includes("kontak") || key.includes("alamat")) return formatSchool();
    return "Silakan pilih menu atau ketik pertanyaan tentang program, PPDB, fasilitas, guru, ekstrakurikuler, atau kontak sekolah.";
}

function scoreText(query, values) {
    const source = values.filter(Boolean).join(" ").toLowerCase();
    const words = query.split(/\s+/).filter(word => word.length > 2);
    return words.reduce((score, word) => score + (source.includes(word) ? 1 : 0), 0);
}

function findAnswer(question) {
    const query = question.toLowerCase().trim();
    if (!query) return "Silakan tulis pertanyaan dulu ya.";

    if (/ppdb|daftar|pendaftaran|dokumen|syarat|verifikasi/.test(query)) return formatPPDB();
    if (/kontak|telepon|whatsapp|wa|email|alamat|lokasi/.test(query)) return formatSchool();
    if (/program|unggulan/.test(query)) return answerTopic("program");
    if (/fasilitas|lab|perpus|mushola|uks|kantin|lapangan/.test(query)) return answerTopic("fasilitas");
    if (/guru|ustadz|ustadzah|wali kelas|kepala/.test(query)) return answerTopic("guru");
    if (/ekskul|ekstrakurikuler|pramuka|hadrah|olahraga|komputer/.test(query)) return answerTopic("ekskul");

    const collections = [
        ["program", assistantData.program],
        ["facility", assistantData.facility],
        ["faq", assistantData.faq],
        ["teacher", assistantData.teachers],
        ["extracurricular", assistantData.extracurricular]
    ];

    let best = null;
    collections.forEach(([type, items]) => {
        items.forEach(item => {
            const score = scoreText(query, [item.title, item.name, item.question, item.summary, item.answer, item.role, item.subject, ...(item.keywords || [])]);
            if (score > 0 && (!best || score > best.score)) best = { type, item, score };
        });
    });

    if (best) return formatItem(best.item, best.type);
    return "Maaf, saya belum menemukan jawaban yang pas di database. Coba tanyakan dengan kata kunci seperti tahfidz, PPDB, dokumen, fasilitas, guru, ekstrakurikuler, atau kontak.";
}

function addChatMessage(text, fromUser = false, asHtml = false) {
    if (!chatBody) return;
    const row = document.createElement("div");
    row.className = fromUser ? "ari-message-left ari-user-message" : "ari-message-left";
    row.innerHTML = fromUser
        ? `<div class="chat-bubble">${escapeHtml(text)}</div>`
        : `<img src="${ARI_ICON}" alt="Ari"><div class="chat-bubble">${asHtml ? text : escapeHtml(text)}</div>`;
    chatBody.appendChild(row);
    row.scrollIntoView({ behavior: "smooth", block: "end" });
}

function showTyping() {
    const row = document.createElement("div");
    row.className = "ari-message-left ari-typing";
    row.innerHTML = `<img src="${ARI_ICON}" alt="Ari"><div class="chat-bubble typing-bubble"><span></span><span></span><span></span></div>`;
    chatBody.appendChild(row);
    row.scrollIntoView({ behavior: "smooth", block: "end" });
    return row;
}

function replyWithTyping(answer) {
    const typing = showTyping();
    setTimeout(() => {
        typing.remove();
        addChatMessage(answer, false, true);
    }, 700 + Math.min(String(answer).length * 4, 500));
}

async function respondToQuestion(question) {
    if (!assistantReady) {
        await loadAssistantData();
    }
    replyWithTyping(findAnswer(question));
}

function setBubbleText() {
    const bubbleText = bubbleBox.querySelector(".bubble-text");
    if (!bubbleText) return;
    bubbleText.textContent = bubbleMessages[bubbleIndex];
    bubbleIndex = (bubbleIndex + 1) % bubbleMessages.length;
}

function showBubble() {
    if (!bubbleBox || chatWindow.classList.contains("show")) return;
    clearTimeout(bubbleHideTimer);
    clearTimeout(bubbleDisplayTimer);
    setBubbleText();
    bubbleBox.style.display = "block";
    bubbleBox.style.opacity = "0";
    bubbleBox.style.transform = "translateY(20px)";
    bubbleDisplayTimer = setTimeout(() => {
        bubbleBox.style.opacity = "1";
        bubbleBox.style.transform = "translateY(0)";
    }, 30);
    bubbleHideTimer = setTimeout(hideBubble, 5000);
}

function hideBubble() {
    if (!bubbleBox) return;
    clearTimeout(bubbleHideTimer);
    bubbleBox.style.opacity = "0";
    bubbleBox.style.transform = "translateY(15px)";
    bubbleDisplayTimer = setTimeout(() => {
        bubbleBox.style.display = "none";
    }, 400);
}

function openChat() {
    if (!launcher || !chatWindow) return;
    clearTimeout(bubbleHideTimer);
    clearTimeout(bubbleDisplayTimer);
    if (bubbleBox) bubbleBox.style.display = "none";
    launcher.style.transform = "scale(.85)";
    launcher.style.opacity = "0";
    setTimeout(() => {
        launcher.style.display = "none";
        chatWindow.classList.add("show");
    }, 250);
}

function closeChatWindow() {
    if (!launcher || !chatWindow) return;
    chatWindow.classList.remove("show");
    setTimeout(() => {
        launcher.style.display = "flex";
        launcher.style.opacity = "1";
        launcher.style.transform = "scale(1)";
        showBubble();
    }, 250);
}

function sendUserMessage() {
    const value = chatInput.value.trim();
    if (!value) return;
    addChatMessage(value, true);
    chatInput.value = "";
    respondToQuestion(value);
}

if (launcher && bubbleBox && chatWindow && closeChat) {
    injectAssistantStyle();
    loadAssistantData();

    launcher.addEventListener("click", openChat);
    closeChat.addEventListener("click", closeChatWindow);

    document.querySelectorAll(".ari-quick button").forEach(button => {
        button.addEventListener("click", () => {
            const topic = button.dataset.topic || button.dataset.reply || button.textContent;
            respondToQuestion(topic);
        });
    });

    if (sendMessage && chatInput) {
        sendMessage.addEventListener("click", sendUserMessage);
        chatInput.addEventListener("keydown", event => {
            if (event.key === "Enter") sendUserMessage();
        });
    }

    window.addEventListener("load", showBubble);
    if (document.readyState !== "loading") showBubble();
}
