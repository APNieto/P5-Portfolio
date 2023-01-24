// Elements
const _navbar = document.getElementById('_navbar')
const navbarBrand = document.getElementsByClassName('navbar-brand')[0]
const navLink = document.getElementsByClassName('nav-link')



// Event listeners

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