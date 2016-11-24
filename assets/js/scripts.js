$(document).ready(function() {
    $("#sendButton").click(function() {
        var text = $("#chatMessageText").val();
        if(text != '') {
                var publishConfig = {
                channel : "GefenChat",
                message : {
                    messageText: text,
                    username: $("#usernameText").val()
                }
            }
            pubnub.publish(publishConfig, function(status, response) {
                //console.log(status, response);
                $("#chatMessageText").val('');
            })
        }
    })
})