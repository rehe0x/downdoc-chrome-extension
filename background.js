// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{

    var docid = request.did
    var title = request.title
    $.ajax({  
        type: "GET",  
        url: 'http://127.0.0.1:8000/downdoc?docid='+docid+'&title='+title,
        dataType: "json",  
        async: false,
        success: function(data){
            sendResponse(data);
        },
        error:function(e){
            sendResponse(e);
        }  
    });  


});