function downdoc(){
   var docid = $("#morenId").val()
   window.postMessage({"docid": docid}, '*');
   //alert(docid)
}