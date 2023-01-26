// ELEMENTS
const _navbar = document.getElementById('_navbar')
const navbarBrand = document.getElementsByClassName('navbar-brand')[0]
const navLink = document.getElementsByClassName('nav-link')
const projectsContainer = document.getElementById('_projects-container')
const projectBoxes = document.getElementsByClassName('_project-boxes')
const copyright = document.getElementById('_copyright')     //TEST



// EVENT LISTENERS
// Diminishes/re-establishes navbar size on scroll
window.onscroll = function(event) {
    if(document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
        _navbar.style.padding = '0'
        navbarBrand.style.fontSize = '1.4rem'        
        for (let ele of navLink) {ele.style.fontSize = '1.2rem'}
    } else {
        _navbar.style.padding = '20px 0'
        navbarBrand.style.fontSize = '1.8rem'
        for (let ele of navLink) {ele.style.fontSize = '1.4rem'}
    }    
}

// Translates and fades in project boxes from the left side; responsive
const observerLargeScreen = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('_project-boxes-invisible')
        } else {
            entry.target.classList.add('_project-boxes-invisible')
        }})    
}, {root: null, rootMargin: '0px', threshold: 1.0})

const observerNarrowScreen = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            for (let i = 0; i < projectBoxes.length; i++) {
                console.log('Narrow screen intersecting projects container');
                projectBoxes[i].classList.remove('_project-boxes-invisible')
            }            
        } else {
            for (let i = 0; i < projectBoxes.length; i++) {
                projectBoxes[i].classList.add('_project-boxes-invisible')
            }            
        }})     
}, {root: null, rootMargin: '0px', threshold: 0.20})

if (window.innerWidth <= 575) {
    observerNarrowScreen.observe(projectsContainer)
} else {
    for (let box of projectBoxes) {observerLargeScreen.observe(box)}
}




// jQuery: Navbar buttons scroll to destination.
// Source: https://www.w3docs.com/snippets/javascript/how-to-create-smooth-scrolling-when-clicking-an-anchor-link.html
$(document).ready(function() {
    let viewportWidth = window.innerWidth;
    if (viewportWidth >= 992) {
        $("a").click(function(event) {
            $("html, body").animate({            
                    scrollTop: $($(this).attr("href")).offset().top - 58
                }, 300);
            });           
    } else {
        $("a").click(function(event) {
            $("html, body").animate({            
                    scrollTop: $($(this).attr("href")).offset().top - 186
                }, 180, "linear");
            });    
    }    
});   