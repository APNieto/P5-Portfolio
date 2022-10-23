$(document).ready(function() {
    $("a").click(function(event) {
        $("html, body").animate({            
                scrollTop: $($(this).attr("href")).offset().top
            }, 650);
        });
    });   
// Source for scrolling animation:
// https://www.w3docs.com/snippets/javascript/how-to-create-smooth-scrolling-when-clicking-an-anchor-link.html

