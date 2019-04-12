function downdoc(){
   var docid = $("#morenId").val()
   var title = $(".youkexx-title > h1:first-child").text()
   window.postMessage({"docid": docid,"title":title}, '*');
   //alert(docid)
}