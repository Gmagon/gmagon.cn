(function($) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = window.UI.c$;

    function update(){
        var htmlContent = '';

        var ViewConfig = window.RTYData.ViewAbout;

        /** update menuNavs**/
        htmlContent = template('templ_menu_nav', {menuNavs: ViewConfig.menuNavs});
        $('#block-menu-menu-top-menu').html(htmlContent);

        /** update navbar**/
        htmlContent = template('templ_navbar_nav', {navBars: ViewConfig.navBars});
        $('#navbar > div > div.navbar-collapse.collapse > nav').html(htmlContent);

        /** update content **/
        $('.page-header').html(ViewConfig.pageHeaderTitle);
        htmlContent = template('templ_about_content', ViewConfig.content);
        $('#aboutContent').html(htmlContent);


        /** update footer **/
        htmlContent = template('templ_footer', {copyright: window.RTYConfig.copyright});
        $('#footer').html(htmlContent);
        $('#footer .container').css({background: "none"})
        

    }

    c$.MC.add(update);
})(jQuery);
