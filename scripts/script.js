// Elements
const _navbar = document.getElementById('_navbar')
const navbarBrand = document.getElementsByClassName('navbar-brand')[0]
const navLink = document.getElementsByClassName('nav-link')
const projectsContainer = document.getElementById('_projects-container')
const projectBoxes = document.getElementsByClassName('_project-boxes-invisible')
const copyright = document.getElementById('_copyright')     //TEST


// Event listeners

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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('_project-boxes-invisible')
            console.log('in');
        } else {
            entry.target.classList.add('_project-boxes-invisible')
            console.log('out');
        }})    
}, {root: null, rootMargin: '0px', threshold: 1.0})
for (let box of projectBoxes) {observer.observe(box)}


//TEST
// document.getElementById('test-button').onclick = function() {
//     projectBoxes.forEach((element, index, array) => {
//         array[index].classList.toggle('_project-boxes-invisible')
//         console.log(array[index]);
//     })
//     // for (box of projectBoxes) {
//     //     box.classList.toggle('_project-boxes-invisible')
//     // }
// }



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