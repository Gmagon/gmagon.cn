(function($) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = window.UI.c$;

    function update(){
        var htmlContent = '';

        var ViewConfig = window.RTYData.ViewIndex;

        /** update menuNavs**/
        htmlContent = template('templ_menu_nav', {menuNavs: ViewConfig.menuNavs});
        $('#block-menu-menu-top-menu').html(htmlContent);

        /** update navbar**/
        htmlContent = template('templ_navbar_nav', {navBars: ViewConfig.navBars});
        $('#navbar > div > div.navbar-collapse.collapse > nav').html(htmlContent);

        /** update promo**/
        htmlContent = template('templ_slide_promo', ViewConfig.slidePromo);
        $('#block-block-5').html(htmlContent);

        /** update slides show**/
        htmlContent = template('templ_slide_show', {imageList: ViewConfig.slideShow.imageList});
        $('#block-views-slideshow-block > div > div').html(htmlContent);

        /** update about content **/
        $('#main-page-content > h1').html(window.RTYConfig.appName);
        htmlContent = template('templ_about_show', ViewConfig.aboutShow);
        $('#node-1 > div > div').html(htmlContent);


        /** update support os platforms **/
        $('#block-block-6 > div.windows-version.col-right').html(window.RTYConfig.supportPlatforms);


        /** update Lastest News **/
        $('.latest-news-title').html(ViewConfig.newsShow.title);
        htmlContent = template('templ_latestnews_show', ViewConfig.newsShow);
        $('#block-views-latest-news-block > div').html(htmlContent);

        /** update features **/
        $('#features-title').html(ViewConfig.Features.title);
        $('#features-title-descript').html(ViewConfig.Features.description);
        htmlContent = template('templ_features', ViewConfig.Features);
        $('#bot-content > div > div:nth-child(2)').html(htmlContent);


        /** update footer **/
        htmlContent = template('templ_footer', {copyright: window.RTYConfig.copyright});
        $('#footer').html(htmlContent);
        $('#footer .container').css({background: "none"})

        /*** update slideshow **/
        jQuery(document).ready(function() {
          jQuery(".view-slideshow ul").responsiveSlides({
            auto: true,             // Boolean: Animate automatically, true or false
            speed: 500,            // Integer: Speed of the transition, in milliseconds
            timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
            pager: true,           // Boolean: Show pager, true or false
            nav: false,             // Boolean: Show navigation, true or false
            random: false,          // Boolean: Randomize the order of the slides, true or false
            pause: false,           // Boolean: Pause on hover, true or false
            pauseControls: true,    // Boolean: Pause when hovering controls, true or false
            prevText: "Previous",   // String: Text for the "previous" button
            nextText: "Next",       // String: Text for the "next" button
            maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
            navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
            manualControls: "",     // Selector: Declare custom pager navigation
            namespace: "view-slideshow",   // String: Change the default namespace used
            before: function(){},   // Function: Before callback
            after: function(){}     // Function: After callback
          });
        });

    }

    c$.MC.add(update);
})(jQuery);
