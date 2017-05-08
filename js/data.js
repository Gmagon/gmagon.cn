(function (window) {
    var $ = window.jQuery || window.$ || {};

    var appName = "漫软软件技术有限公司",
        githome =  "https://github.com/LabsRS-Dev";

    var cg = window.RTYConfig = {
        appName: appName,
        appVersion: '1.0 (build 170222)',
        appID:"com.romanysoft.app.macos.pGmagon",
        documentTitle:appName,
        supportPlatforms: appName + " works on MacOSX 10.7, MacOSX 10.8, MacOSX10.9, MacOSX10.10, MacOSX10.11," +
        " MacOSX10.12",
        googleUA:"UA-76676167-1",
        gitHome:githome,
        reportIssueUrl: githome + "/issues",
        changeLogUrl: githome + "/wiki/Changelog",
        wikiUrl: githome + "/wiki",
        macAppStoreUrl: "https://itunes.apple.com/us/app/Gmagon/id1208338536?l=zh&ls=1&mt=8",
        romanysoftHome:"//www.romanysoft.com",
        mailto:"mailto:Iansun@gmagon.com",
        copyright:"Copyright © " + (new Date()).getFullYear() + " Gmagon.cn"
    };

   var u = {};

   //////////////////////////////////////////////////////////////////////////////////////////
   // common
   var common = {};
   common.navBars = [
       {key:'index', class:'first leaf', href:'index.htm', aClass:'', title:'首页'},
       //{key:'zhaopin', class:'leaf', href:'zhaopin.htm', aClass:'', title:'招贤纳士'},
       //{key:'apps', class:'leaf', href:'apps.htm', aClass:'', title:'产品介绍'},
       //{key:'privacy', class:'leaf', href:'privacy.htm', aClass:'', title:'隐私保护'},
       //{key:'legal', class:'leaf', href:'legal.htm', aClass:'', title:'法律声明'},
       {key:'about', class:'last leaf', href:'about.htm', aClass:'', title:'联系我们'}
   ];
   common.fncNavBars = function(key){
       var list = [];
       for (var i=0; i <common.navBars.length; ++i) {
           var ele = common.navBars[i];
           if (ele.key === key){
               var newEle =  jQuery.extend({}, ele);
               newEle.class += ' active';
               newEle.aClass = 'active';

               list.push(newEle)
           }else {
               list.push(ele)
           }
       }
       return list
   };

   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   /// index.html
   var ViewIndex = u.ViewIndex = {};
   if (1) {
     ViewIndex.menuNavs = [
         //{class:'first leaf', href:'donate.htm', title:'Donate'},
         {class:'leaf', href:cg.gitHome, title:'Developer'},
         {class:'leaf', href:cg.mailto, title:'Contact'},
         //{class:'last leaf', href:'about.htm', title:'About'}
     ];

     ViewIndex.navBars = common.fncNavBars('index');
     ViewIndex.slidePromo = {
         caption: 'Gmagon',
         version: cg.appVersion,
         releaseInfoHref: '',
         screenshotsHref: ''
     };
     ViewIndex.slideShow = {
         imageList:[
             {src: 'images/res/c1.jpg'},
             {src: 'images/res/c2.jpg'},
             {src: 'images/res/c3.jpg'},
             {src: 'images/res/c4.jpg'},
             {src: 'images/res/c5.jpg'}

         ]
     }
     ViewIndex.aboutShow = {
         p1Content:"漫软软件技术有限公司是一家专注软件开发及销售的科技公司，成立于2016年3月。",
         p2Content:"我公司现有的主要产品涉及Windows、Linux、macOS系统平台，凭借多年积累的软件开发技术，我公司的产品和服务在业内有着独特的竞争力！",
         p3Content:"公司属于创业团队，27岁的平均年龄，正是青春年华的岁月，勇于创新的年龄。在这里，您将拥有广阔的发展前景！这里有优秀的管理团队、这里有良师益友、这里有并肩作战的伙伴、这里有为年轻事业而奋斗的勃勃生机……这里的一切将为您提供宽阔的发展平台！ 我们将为您提供舒适的工作环境，轻松的工作氛围，并将为您提供保障性基本薪酬、健全的五险一金等福利保障、更具竞争性绩效奖励，只要您勇于挑战自我必将有所收获！ 欢迎志同道合的您加入我们！"
     }
     ViewIndex.newsShow = {
         title: "最近消息",
         newsList:[
             {date: "2017-04-25", caption: '公司注册资金及地址工商局变更', href:""},
             {date: "2017-04-18", caption: '新办公环境装修完毕', href:""},
             {date: "2016-03-14", caption: '公司注册成立', href:""}
         ]
     }
     ViewIndex.Features = {
       title: "概述",
       description: "",
        left:[
          {caption:"理念", img:"images/res/base_64px.png", features:[
            "大道至简",
            "专注设计",
            "从头开始",
            "坚信创新",
            "聆听批评",
            "永不服输",
            "关注细节",
            "不可替代",
            "保密至高无上",
            "主导市场",
            "发扬特色",
            "开拓销售渠道",
            "结盟力量",
          ]}
        ],
        right:[
          {caption:"文化", img:"images/res/advance_64px.png", features:[
            "有一个梦想不容易，坚持梦想更不容易。",
            "外因总是通过内因起作用的，要找到自我原因。",
            "创业永远没有终点，我们永远在路上。",
            "一个团队，战略不正确，靠战术调整是很困难的。",
            "巨大的成功不是来自力量，而是来自韧性。",
            "创新在于成为你自己。",
          ]}
        ]
     }
   }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// about.html
    var ViewAbout = u.ViewAbout = {};
    ViewAbout.menuNavs = ViewIndex.menuNavs;
    ViewAbout.navBars = common.fncNavBars('about');

    ViewAbout.pageHeaderTitle = "联系我们";
    ViewAbout.content = {
        h2Content: "",
        contentItems:[
            "公司地址：昆山市珠江南路501号 二楼",
            "公司电话：0512-36867396",
            "HR邮箱: hr@gmagon.com"
        ]
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// downloads.html
    var ViewDownloads = u.ViewDownloads = {};
    ViewDownloads.menuNavs = ViewIndex.menuNavs;
    ViewDownloads.navBars = [
        {class:'first leaf', href:'index.htm', aClass:'', title:'Home'},
        {class:'leaf active', href:'downloads.htm', aClass:'active', title:'Downloads'},
        {class:'leaf', href:'features.htm', aClass:'', title:'Features'},
        {class:'last leaf', href:cg.reportIssueUrl, aClass:'', title:'Support'}
    ];
    ViewDownloads.slidePromo = {
        caption: ViewIndex.slidePromo.caption
    };
    ViewDownloads.download = {
        description:"",
        list:[
            {
                caption:"Download from <b>Mac App Store</b>", files:[
                     {class:"download-box-32", title: appName + " (mac app store)", href: cg.macAppStoreUrl, img:"../../common/img/download.png"}
                ],
                date: "2017-02-22",
                releaseNoteUrl: cg.changeLogUrl
            }
        ]
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// features.html
    var ViewFeatures = u.ViewFeatures = {};
    ViewFeatures.menuNavs = ViewIndex.menuNavs;
    ViewFeatures.navBars = [
        {class:'first leaf', href:'index.htm', aClass:'', title:'Home'},
        {class:'leaf', href:'downloads.htm', aClass:'', title:'Downloads'},
        {class:'leaf active', href:'features.htm', aClass:'active', title:'Features'},
        {class:'last leaf', href:cg.reportIssueUrl, aClass:'', title:'Support'}
    ];
    ViewFeatures.slidePromo = {
        caption: ViewIndex.slidePromo.caption
    };
    ViewFeatures.features = {
        description:"",
        list:[
            {caption:"Base", list:[
              "Support classical detection algorithm",
              "Support fast basic AI calculation",
              "Support visual interaction"
            ]},
            {caption:"Advanced", list:[
              "Support advanced AI interface reserved for later upgrade maintenance"
            ]},

        ]
    };














  window.RTYData = u;

})(window);
