<script runat="server">
Platform.Load("Core","1");
try{
    var jsonpost = Platform.Request.GetPostData(0);
    var json = Platform.Function.ParseJSON(jsonpost);
	var Message = "Call back";
    var insertResponse = Platform.Function.InsertData("Transactional_Event_Notification_CallBack_Verification",["Message","Body"],[Message,jsonpost]);
} catch (e) {
  Write("<br>" + Stringify(e))
}
</script>