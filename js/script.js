/**
 * Banana Video 页面功能配置
 *
 * 最常改的地方只有这里：
 * 1. DOWNLOAD_URL：点击“DESCARGAR APK”之后跳转到哪里
 * 2. OPEN_IN_NEW_TAB：true = 新标签页打开，false = 当前页面跳转
 */

const DOWNLOAD_URL = "https://example.com/your-download-link";
const OPEN_IN_NEW_TAB = false;

/**
 * 给页面上所有下载按钮统一设置跳转地址。
 * 页面当前有顶部主按钮和底部悬浮按钮，二者都会使用同一个 DOWNLOAD_URL。
 */
document.querySelectorAll(".js-download").forEach((button) => {
  button.href = DOWNLOAD_URL;

  if (OPEN_IN_NEW_TAB) {
    button.target = "_blank";
    button.rel = "noopener noreferrer";
  } else {
    button.removeAttribute("target");
    button.removeAttribute("rel");
  }
});
