(function () {
    window['UI'] = window['UI'] || {};
    window.UI.c$ = window.UI.c$ || {};
})();

(function($){
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var c$ = {};
    c$ = $.extend(window.UI.c$, {});
    c$.MC = $.Callbacks();

    c$.initTitleAndVersion = function () {
        document.title = window.RTYConfig.documentTitle;
    };
    
    c$.launch = function(){
        c$.initTitleAndVersion();
        c$.MC.fire();
    }
    
    window.UI.c$ = $.extend(window.UI.c$, c$);
})(jQuery);

// 默认启动
(function($){
    $(document).ready(function(){
        window.UI.c$.launch();
    })
})(jQuery);