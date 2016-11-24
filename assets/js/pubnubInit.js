    pubnub = new PubNub({
        publishKey : 'pub-c-238903e0-aaf1-4b18-8ef8-7b8b68dd34ea',
        subscribeKey : 'sub-c-a76e5b36-b25e-11e6-9ab5-0619f8945a4f'
    })
       
    function publishMessage(messageToSend) {
        var publishConfig = {
            channel : "GefenChat",
            message : messageToSend
        }
        pubnub.publish(publishConfig, function(status, response) {
            //console.log(status, response);
        })
    }
       
    pubnub.addListener({
        status: function(statusEvent) {
            if (statusEvent.category === "PNConnectedCategory") {
                //publishMessage('Welcome to Gefen Chat!');
            }
        },
        message: function(message) {
            var username = message.message.username;
            var text = message.message.messageText;
            document.getElementById("chatArea").innerHTML += username + " > " + text + '</br>';
            console.log("New Message!!", message);
        },
        presence: function(presenceEvent) {
            // handle presence
        }
    })      
    pubnub.subscribe({
        channels: ['GefenChat'] 
    });