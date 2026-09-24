Banana Video 静态部署版

目录结构：
index.html
css/style.css
js/script.js
images/

【修改下载跳转】
打开 js/script.js，修改最上面的：

const DOWNLOAD_URL = "https://example.com/your-download-link";

把引号里的地址换成你的 APK 下载地址、下载中转页或其他跳转链接即可。
页面上的两个下载按钮会一起更新，不用分别修改。

如果希望点击后新标签页打开：
const OPEN_IN_NEW_TAB = true;

【加入统计代码】
打开 index.html，拉到最底部 </body> 前面。
已经预留“统计代码区域”。
以后统计平台给你类似下面的代码：

<script
  src="https://你的统计域名/tracking.js"
  data-api-base="https://你的统计域名"
></script>

直接粘贴到“统计代码区域”即可。

【部署】
把 index.html、css、js、images 保持当前目录结构一起上传到网站根目录。
不要只上传 index.html，否则 CSS、JS 和图片会丢失。
