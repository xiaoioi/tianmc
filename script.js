const $ = mdui.JQ;
$('.banner-ok').on('click', () => mdui.snackbar(`已清理${Math.random()*1024}${['MB', 'KB', 'TB', 'EB', 'PB', 'B', 'ZB', 'NB', 'BB', 'SB'].sort(() => Math.random() -0.5)[0]}垃圾`));
//Too troubled to implement the CSS to hide banners.