
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="./css/mdui.min.css" />
        <link rel="stylesheet" href="./css/main.css" />
        <script src="./js/mdui.min.js"></script>
        <title>${_AFDIAN['pageTitle']}</title>
    </head>
    <body class="mdui-appbar-with-toolbar mdui-theme-primary-blue-grey mdui-theme-accent-red mdui-theme-layout-auto">

        <main class="mdui-container mdui-typo">
            <div class="mdui-divider"></div>
            <h2 class="mdui-text-center">感谢以下小伙伴的发电支持！</h2>
            
            <div class="mdui-m-b-2" id="afdian_sponsors">
                <div class="mdui-row">
                    ${donatorsHTML}
                </div>
                ${pageControlHTML}
            </div>
        </main>

        <script src="./js/main.js"></script>
    </body>
</html>