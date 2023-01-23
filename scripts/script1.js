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
// Source for scrolling animation:
// https://www.w3docs.com/snippets/javascript/how-to-create-smooth-scrolling-when-clicking-an-anchor-link.html