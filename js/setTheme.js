<!doctype html>

<head>

    <title>Tian</title>
    <meta http-equiv="Content-Language" contect="zh-CN">
    <html lang="zh-CN">
    <meta charset="UTF-8"><!-- require APlayer -->
    <link rel="stylesheet" href="//unpkg.com/aplayer/dist/APlayer.min.css">
    <script src="//unpkg.com/aplayer/dist/APlayer.min.js"></script>
    <!-- require MetingJS -->
    <script src="//unpkg.com/meting@2/dist/Meting.min.js"></script>
    <meta name="viewport" id="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <!-- <link rel="icon" href="images/favicon.jpg" type="image/x-icon"> -->
    <script src="//unpkg.com/video.js@7.20.3/dist/lang/zh-CN.js">
    </script>
    <!-- MDUI -->
    <link rel="stylesheet" href="//unpkg.com/mdui@1.0.2/dist/css/mdui.min.css" />
    <script src="//unpkg.com/mdui@1.0.2/dist/js/mdui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="theme.css">
    <link href="//unpkg.com/video.js@7.20.3/dist/video-js.min.css" rel="stylesheet" />
    <!-- Vue -->
    <!-- <script src="//unpkg.com/vue@3/dist/vue.global.js"></script> -->
    <script src="//unpkg.com/vue@3/dist/vue.global.prod.js"></script>
    <style>
        .mdui-shadow-3 {
            border-radius: 8px;
            margin-right: 8px;
            margin-top: 8px;
        }
        
        /* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
        @font-face {
            font-family: "Medium";
            font-weight: 500;
            src: url("//at.alicdn.com/wf/webfont/BeJVsuiNtYbx/fFqR7J05-3WBUX1aZ8xv-.woff2") format("woff2"),
                url("//at.alicdn.com/wf/webfont/BeJVsuiNtYbx/n4GpLSB4evzuTXhmeFjxy.woff") format("woff");
            font-display: swap;
        }

        @font-face {
            font-family: "MiSans";
            font-weight: 400;
            src: url("MiSans.ttf") format("ttf");
            font-display: swap;
        }
        
    </style>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="index.js"></script>
</head>

<body class="mdui-theme-layout-auto padding-top mdui-appbar-inset mdui-appbar-with-toolbar mdui-theme-primary-blue-grey" style="font-family:MiSans;">
    <!-- 这是Vue的 -->
    <div id="app">
        <header class="mdui-appbar mdui-drawer-full-height mdui-appbar-fixed mdui-shadow-0">
            <div class="mdui-toolbar mdui-color-theme-50"> <a class="mdui-btn mdui-btn-icon waves-circle toolbar-btn" mdui-drawer="{target: '#drawer', swipe: true}"> <i class="mdui-icon material-icons">menu</i> </a>
                <span class="mdui-typo-title">Tian</span> <a class="mdui-typo-headline" href="index.html"></a>
                <div class="mdui-toolbar-spacer"></div>
            </div>
            <div class="mdui-color-theme-50" style="border-radius: 0 0 20px 20px;">
                <div class="mdui-container">
                    <div class="mdui-typo-subheading">甜瓜の生存服成立于2021年10月29日，是一个完美的我的世界基岩版养老生存服</div>
                    <p></p>
                    <a href="//xiaoioi.github.io/TcsCraftdocs/start/#ip" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-color-light-blue-300"><i class="mdui-icon material-icons">play_circle_outline</i> 开始游戏</a>
                    <a href="//xiaoioi.github.io/TcsCraftdocs/" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mdui-color-light-blue-300"><i class="mdui-icon material-icons">insert_drive_file</i> 帮助文档</a>
                    <a class="mdui-btn mdui-btn-icon mdui-ripple mdui-color-theme-accent mdui-color-light-blue-300" mdui-dialog="{target: '#bilibili'}"><img class="mdui-icon" src="/video.svg"></a>
                    <p></p>
                </div>
            </div>
            </p>
        </header>
        <div class="mdui-dialog" id="bilibili">
            <div class="mdui-dialog-title">BiliBili 视频</div>
            <div class="mdui-dialog-content">There is nothing here.</div>
            <div class="mdui-dialog-actions">
                <button class="mdui-btn mdui-ripple" onclick="mdui.snackbar({message: 'There really is nothing here!!!'});">有</button>
                <button class="mdui-btn mdui-ripple" mdui-dialog-close><i class="mdui-icon material-icons">close</i></button>
            </div>
        </div>
        <div class="mdui-drawer mdui-drawer-full-height mdui-color-theme-50 mdui-drawer-close mdui-shadow-0" id="drawer">
            <!-- 顶部图片 -->
            </p>
            <div class="chtb">
                <img :src="config?config.drawer.header:null" style="width: 100%;" :style="{opacity: config?1:0}">
            </div>
            </p>
            <ul class="mdui-list" mdui-collapse="{accordion: true}" style="padding: 8px;">
                <!-- 侧滑布局 -->
                <li v-if="config && config.drawer" v-for="item in config.drawer.items" class="mdui-collapse-item mdui-collapse-item">
                    <a :href="item.href" class="mdui-collapse-item-header mdui-list-item mdui-ripple">
                        <i class="mdui-list-item-icon mdui-icon material-icons">{{item.icon}}</i>
                        <div class="mdui-list-item-content">{{item.name}}</div>
                        <i v-if="item.subItems" class="mdui-collapse-item-arrow mdui-icon material-icons">keyboard_arrow_down</i>
                    </a>
                    <ul v-if="item.subItems" class="mdui-collapse-item-body mdui-list mdui-list-dense">
                        <a v-for="subItem in item.subItems" :href="subItem.href" class="waves-block radius">
                            <li class="mdui-list-item mdui-ripple" :mdui-dalog="subItem.dialog">{{subItem.name}}</li>
                        </a>
                    </ul>
                </li>
            </ul>
        </div>
        <p>
        </p>
        <div class="mdui-container" style="padding-top:85px;">
            <div class="mdui-content mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3 mdui-grid-list" align="center">
                <div class="mdui-container mdui-col">
                    <div class="content-text">
                        <h4 class="mdui-text-color-theme-accent detail_tle_1"></h4>
                        <p class="mdui-typo-subheading-opacity mdui-text-color-black-600 detail_dec_1"></p>
                        <img class="mdui-shadow-3 mdui-img-fluid" src="//yun.dlam.top/view.php/1efcd324d1617ee50ffbdc20085062a2.jpg">
                    </div>
                </div>
                <div class="mdui-container mdui-col">
                    <div class="content-text">
                        <p>
                        </p>
                        <h4 class="mdui-text-color-theme-accent detail_tle_2"></h4>
                        <p class="mdui-typo-subheading-opacity mdui-text-color-grey-600 detail_dec_2"></p>
                        <img class="mdui-shadow-3 mdui-img-fluid" src="//yun.dlam.top/view.php/14da737dca7f1de839db10759e419291.jpg">
                    </div>
                </div>
                <div class="mdui-container mdui-col">
                    <div class="content-text">
                        <p>
                        </p>
                        <h4 class="mdui-text-color-theme-accent detail_tle_2"></h4>
                        <p class="mdui-typo-subheading-opacity mdui-text-color-grey-600 detail_dec_2"></p>
                        <video lang="zh-CN" controls class="mdui-shadow-3 video-js vjs-default-skin vjs-styles-default vjs-16-9 vjs-big-play-centered" poster="/video.svg" data-setup="{}">
                            <source class="mdui-video-fluid" src="https://filea.xiaoioi.tk/studio_video_1673591843808.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div class="mdui-row content-text mdui-p-b-2 mdui-p-t-1 mdui-m-a-0">
                    <div class="mdui-col-xs-12 mdui-col-md-6 mdui-center">
                        <h4 class="mdui-text-color-blue" align="center">关于我们</h4>
                        <div class="mdui-row-xs-3 mdui-center content-about">
                            <div class="mdui-col mdui-p-a-0">
                                <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_1" src="//q1.qlogo.cn/g?b=qq&nk=1789055955&s=100">
                                <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_1">甜瓜</h4>
                                <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_1">服主</p>
                            </div>
                            <div class="mdui-col mdui-p-a-0">
                                <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_3" src="//q1.qlogo.cn/g?b=qq&nk=3467109261&s=100">
                                <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_3">୧( ⁼̴̶̤̀ω⁼̴̶̤́ )૭</h4>
                                <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_3">互通服服竹</p>
                            </div>
                            <div class="mdui-col mdui-p-a-0">
                                <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_2" src="//q1.qlogo.cn/g?b=qq&nk=2872385395&s=100">
                                <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_2">ㅤ</h4>
                                <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_2">维护</p>
                            </div>
                            <div class="mdui-col mdui-p-a-0">
                                <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_2" src="//q1.qlogo.cn/g?b=qq&nk=2672516588&s=100">
                                <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_2">qweemm</h4>
                                <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_2">维护</p>
                            </div>
                            <div class="mdui-col mdui-p-a-0">
                                <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_3" src="//q1.qlogo.cn/g?b=qq&nk=2854196320&s=100">
                                <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_3">乔晓啸</h4>
                                <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_3">官网制作</p>
                            </div>
                            <div class="mdui-col mdui-p-a-0">
                                <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_3" src="//q1.qlogo.cn/g?b=qq&nk=2803118348&s=100">
                                <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_3">飞羊</h4>
                                <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_3">创造服腐竹</p>
                            </div>
                            <div class="mdui-col mdui-p-a-0">
                                <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_3" src="//q1.qlogo.cn/g?b=qq&nk=3294145480&s=100">
                                <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_3">一桶桶装水⁧⁧</h4>
                                <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_3">OP</p>
                            </div>
                            <div class="mdui-col mdui-p-a-0">
                                <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_3" src="//q1.qlogo.cn/g?b=qq&nk=3081636005&s=100">
                                <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_3">猫猫盒</h4>
                                <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_3">OP</p>
                            </div>
                            <div class="mdui-col mdui-p-a-0">
                                <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_3" src="//q1.qlogo.cn/g?b=qq&nk=2668055805&s=100">
                                <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_3">。</h4>
                                <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_3">OP</p>
                            </div>
                            <a href="//fabu.mcmzw.ml">
                                <div class="mdui-col mdui-p-a-0">
                                    <img class="mdui-img-circle mdui-center mdui-shadow-3 content-about-img auth_ico_3" src="//q1.qlogo.cn/g?b=qq&nk=2928633076&s=100">
                                    <h4 class="mdui-text-center content-about-h4 mdui-text-color-grey-700 auth_name_3">土豆整合包</h4>
                                    <p class="mdui-text-center content-about-p mdui-text-color-grey-600 auth_info_3">点我</p>
                                </div>
                            </a>
                        </div>
                        <a href="//www.mzwbbs.com">
                            <img class="mdui-img-fluid mdui-shadow-3 mdui-color-green-a700" src="mzwbbs.svg" /></a>
                    </div>
                </div>
                <div class="mdui-col-md-6 mdui-center">
                    <div class="mdui-p-b-1 mdui-hidden-sm-down">
                        <h4 class="mdui-text-color-blue" align="center">数据</h4>
                    </div>
                    <div class="mdui-row-xs-2">
                        <div class="mdui-row mdui-center" align="center">
                            <div class="mdui-p-t-1 mdui-col-xs-6 mdui-chol-md-12">
                                <div class="mdui-typo-title">玩家总数</div>
                                <div class="mdui-typo-subheading">1000+</div>
                                <div class="mdui-typo-caption">* 三周目 424人 (22-1-14)</div>
                            </div>
                            <div class="mdui-p-t-1 mdui-col-xs-6 mdui-cobl-md-12">
                                <div class="mdui-hidden-sm-down"></div>
                                <div class="mdui-typo-title">收到的捐款</div>
                                <div class="mdui-typo-subheading">350</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="padding-bottom:10px;" class="mdui-col-xs-12 mdui-col-md-6 mdui-center">
                    <div class="mdui-p-b-1 mdui-hidden-sm-down">
                        <h4 class="mdui-text-color-blue" align="center">联系我们</h4>
                    </div>
                    <div class="mdui-row-xs-2">
                        <div class="mdui-row mdui-center">
                            <div class="mdui-col-xs-6 mdui-chol-md-12">
                                <a class="mdui-ripple mdui-btn mdui-color-theme-50 mdui-theme-accent-blue mdui-theme-primary-blue-grey mdui-btn-block mdui-center mdui-shadow-1 content-border-radiu-btn down-btn mdui-text-color-grey-600 email" href="/cdn-cgi/l/email-protection#b5c4d2d2c4d2d2c4d2d2848786f58483869bd6dad8"><i class="mdui-icon mdui-icon-left material-icons mdui-text-color-blue">mail</i> 联系邮箱</a>
                                <div class="mdui-hidden-sm-down"></div>
                            </div>
                            <div class="mdui-col-xs-6 mdui-cobl-md-12">
                                <div class="mdui-hidden-sm-down"></div>
                                <a class="mdui-ripple mdui-btn mdui-color-theme-50 mdui-theme-accent-blue mdui-theme-primary-blue-grey mdui-btn-block mdui-center mdui-shadow-1 content-border-radiu-btn down-btn mdui-text-color-grey-600 qq_group" href="//jq.qq.com/?_wv=1027&k=tSlOEt0U" target="_blank"><i class="mdui-icon mdui-icon-left material-icons mdui-text-color-blue">group</i> 交流Q群</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="mdui-fab mdui-fab-fixed fab-up fab-up-btn mdui-m-b-4 mdui-color-theme-accent go-top mdui-fab-hide" style="display: none;"> <i class="mdui-icon material-icons">expand_less</i> </button>

            <!--<meting-js fixed="true" server="netease" type="album" id="405493">
                </meting-js>-->
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script></body>
<script src="setTheme.js"></script>
<script src="//unpkg.com/video.js@7.20.3/dist/video.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/meting@1.1.0/dist/Meting.min.js"></script>

</html>