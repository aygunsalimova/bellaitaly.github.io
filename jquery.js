$(document).ready(function(){
    //adding and removing active class from navbar

    $('nav li a').click(function(){
        $('nav li a').removeClass("active");
        $(this).addClass("active");

    });

    // Sidebar

    $("fa-bars").click(function(){
        $("nav").addClass("nav-visible");
        $(this).removeClass("nav-visible");
    });
    
    $("#nav-menu-icon").click(function(){
        $("#nav-menu-icon").toggleClass("fa-xmark");
        $("nav ul").toggleClass("d-flex");
    })

})
