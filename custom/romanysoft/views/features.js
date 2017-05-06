(function($) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = window.UI.c$;

    function update(){
        var htmlContent = '';

        var ViewFeatures = window.RTYData.ViewFeatures;

        /** update menuNavs**/
        htmlContent = template('templ_menu_nav', {menuNavs: ViewFeatures.menuNavs});
        $('#block-menu-menu-top-menu').html(htmlContent);

        /** update navbar**/
        htmlContent = template('templ_navbar_nav', {navBars: ViewFeatures.navBars});
        $('#navbar > div > div.navbar-collapse.collapse > nav').html(htmlContent);

        /** update promo**/
        htmlContent = template('templ_slide_promo', ViewFeatures.slidePromo);
        $('#block-block-12').html(htmlContent);

        /** update downloads **/
        htmlContent = template('templ_features', ViewFeatures.features);
        $('#node-4 > div > div').html(htmlContent);



        /** update footer **/
        htmlContent = template('templ_footer', {copyright: window.RTYConfig.copyright});
        $('#footer').html(htmlContent);
        $('#footer .container').css({background: "none"})



    }

    c$.MC.add(update);
})(jQuery);
