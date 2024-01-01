import anime from "./dependices/anime.js";

// Loader anim
setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    preloader.remove();
}, 3000);
// logo anime
anime({
    targets: '.loader #LOGO #BALLS circle',
    opacity: [
        {value: 0},
        {value: 1}
    ],
    translateY: [
        {value: '20px'},
        {value: '0px'}
    ],
    delay: anime.stagger(100, { start: 1000 }),
    loop: true,
    duration: 1000
});

// Dark mode
const colorS = document.querySelector('.colorSett');
colorS.addEventListener('click', e => {
    e.preventDefault();
    const doc = document.querySelector('body');
    doc.classList.toggle('dark');
})

// Nav scroll
window.addEventListener('wheel', e => {
    // console.log(e)
    const navLinks = document.querySelectorAll('nav > ul.nav > li > a');
    if (e.pageY < innerHeight) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        })
        navLinks[0].classList.add('active');
    } else if (e.pageY >= innerHeight && e.pageY < innerHeight * 2) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        })
        navLinks[1].classList.add('active');
    } else if (e.pageY >= innerHeight * 2) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        })
        navLinks[2].classList.add('active');
    }
})

// logo anime
anime({
    targets: '.logo #LOGO #BALLS circle',
    opacity: [
        {value: 0},
        {value: 1}
    ],
    translateY: [
        {value: '20px'},
        {value: '0px'}
    ],
    delay: anime.stagger(100, { start: 3000 }),
    loop: true
});

// Profile tabs
const content = {
    bio: "Highly motivated and detail-oriented individual seeking a frontend development internship to apply and enhance technical skills in a professional setting. Passionate about creating user-friendly and visually appealing web applications to deliver exceptional user experiences.",
    interests: "Something",
    education: "Some school",
}

const tabs = document.querySelectorAll('#profile .tabs .tab');
const tabContent = document.querySelector('#profile .tabs .content span');
tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove('active');
        }
        e.target.classList.add('active');
        console.log(e.target.textContent);
        // tab.textContent.toLowerCase()
        tabContent.textContent = content[e.target.textContent.toLowerCase()];
    })
})

// * Code Section

// Folder opening
const folders = document.querySelectorAll('.folder');
folders.forEach(folder => {
    folder.addEventListener('click', () => {
        folder.nextElementSibling.classList.toggle('open');
        const folderImg = folder.querySelector('img');
        if (folder.nextElementSibling.classList.contains('open')) {
            folderImg.src = './images/icons/folder/folder_open.svg';
        } else {
            folderImg.src = './images/icons/folder/folder_darkPalenight.svg';
        }
    })
})
const link = 'https://github.com/Kingsley_Uchiha';
link;
// Brackets
// GOLD
// PURPLE
// BLUE
const  skills  = [
    "HTML", "CSS", "JavaScript", "React", "UI/UX", "Netlify", "GitHub"
]
skills;
