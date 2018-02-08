(function () {
    
    //Show / Hide sidebar Menu for Mobile
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $('#navWrapper').toggleClass('show');
        $(this).toggleClass("collapsed")
    });


    // Add slideDown animation to dropdown
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
    });

    // Add slideUp animation to dropdown
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });

    

    
    
    // Add slideDown animation to dropdown
    $('body').on('click','.bootstrap-select', function (e) {
        $(this).find('.dropdown-menu.open').first().stop(true, true).slideToggle(400);
    });
    // Add slideDown animation to dropdown
    $(document).on('click','body', function (e) {
        $(this).find('.dropdown-menu.open').first().stop(true, true).slideUp(400);
    });
    
    
    
})()
