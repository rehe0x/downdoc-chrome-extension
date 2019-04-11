// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{

    var docid = request.did

    $.ajax({  
        type: "GET",  
        url: 'http://140.143.208.158:8000/downdoc?docid='+docid,
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