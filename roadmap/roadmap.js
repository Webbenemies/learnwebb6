let coursecon = document.getElementById("coursecon")
let navbarbox = document.getElementById("navbarbox")
let navbar = document.getElementById("navbar")

let outerbox = document.getElementById("outerbox")
let navbox = document.createElement("nav")


let courslist = [
    {
        photourl:"../pho/2150378594.jpg",
        topich3: "The first step to becoming a web developer is to learn HTML, the fundamental language for structuring web content.",
        subtopicp:"HTML is like the rocket's skeleton, forming the structure and basic framework.",
        buttonurl:"../CHTML/homehtml.html",
        buttontext:"learn html",
        copywrite: "freepik.com",
        copywriteurl: "https://freepik.com"
    },
    {
        photourl:"../pho/18775971_5937304.jpg",
        topich3: "After learning HTML, the next logical step is typically to learn CSS.",
        subtopicp:"CSS adds the paint and finishing touches, making the car look appealing with color, style, and design.",
        buttonurl:"../CCSS/home-css.html",
        buttontext:"learn css",
        copywrite: "freepik.com",
        copywriteurl: "https://freepik.com"
    },
    {
        photourl:"../pho/24592.jpg",
        topich3: "After mastering CSS, the next step in your web development journey is to delve into JavaScript.",
        subtopicp:"JavaScript can be compared to the rocket's engines, navigation systems, and controls. It provides the interactive and dynamic aspects of your webpage.",
        buttonurl:"#",
        buttontext:"learn js",
        copywrite: "freepik.com",
        copywriteurl: "https://freepik.com"
    },

]

courslist.forEach((e)=>{
        let cours = document.createElement("div");
        let thum = document.createElement("div");
        let dis = document.createElement("div");
        let topic = document.createElement("h3");
        let subtopic = document.createElement("p");
        let copy = document.createElement("a");
        let btn = document.createElement("button");
        let atag = document.createElement("a");

        cours.className = "cours";
        dis.className = "dis";
        thum.style.backgroundImage=`url(${e.photourl})`;
        thum.className = "thum";
        copy.innerText = e.copywrite;
        copy.href = e.copywriteurl;
        copy.className = "copywrite";
        topic.innerText = e.topich3;
        topic.className = "topic";
        subtopic.textContent = e.subtopicp;
        subtopic.className = "subtopic";
        btn.className  = "btn";
        atag.href = e.buttonurl;
        atag.innerText = e.buttontext;
        
        thum.appendChild(copy)
        btn.appendChild(atag);
        cours.appendChild(thum);
        dis.appendChild(topic);
        dis.appendChild(subtopic);
        dis.appendChild(btn);
        cours.appendChild(dis);
        coursecon.appendChild(cours);
    })


let respolinks = [
    {
        text:"home",
        url: "../index.html"
    },
    {
        text:"html",
        url:"../CHTML/homehtml.html"
    },
    {
        text:"css",
        url: "../CCSS/home-css.html"
    },
    {
        text:"js",
        url: "#"
    },
    {
        text:"react js",
        url: "#"
    },
]

respolinks.forEach((e)=>{
    let alink = document.createElement("a")
    alink.href = e.url
    alink.innerText = e.text
    outerbox.className = "outerbox"
    navbox.appendChild(alink)
    outerbox.append(navbox)
})

navbarbox.addEventListener("click",()=>{
    outerbox.classList.toggle("show")
})

