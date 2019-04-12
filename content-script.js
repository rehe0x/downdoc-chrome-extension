(function() {
    console.log('>>>>>>>>>>>>>>>>>插件加载success!')
    setTimeout(function(){
        $("#ziyuan").after("<a href='javascript:void(0)' onclick='downdoc()' class='wydp'>我要下载</a>")
        injectCustomJs();
    },5000)
})();

window.addEventListener("message", function(e)
{
    if(e.data.docid == undefined || e.data.docid == ''){
        return;
    }
    console.log(e.data.title)
    console.log(e.data.docid);
    $("body").mLoading();
    chrome.runtime.sendMessage(
        {
            did:e.data.docid,
            title:e.data.title
        }, 
        function(response) {
            console.log('收到来自后台的回复：' + response.responseText);
            $("body").mLoading("hide");
            if(response.responseText == undefined){
                alert("下载失败")
                return;
            }else{
                alert("下载成功")
                window.location.href=response.responseText;
            }
        }
    );
}, false);

function injectCustomJs()
{
    jsPath = 'inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function()
    {
        // 放在页面不好看，执行完后移除掉
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
}