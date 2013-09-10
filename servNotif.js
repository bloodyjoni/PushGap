var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyBlW_WFq615ZalVxdNhqFy5LFtZ2uRpFbM');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"be careful that's a push");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
message.timeToLive = 3;// Duration in seconds to hold and retry to deliver the message in GCM before timing out. Default 4 weeks if not specified
 
// At least one reg id required
registrationIds.push('APA91bECPwy_F5iOgimiguv785ka8Qh1fgBAIFuoEEBO7FXBTQGIEwlDKmKud-n8g_f-srb255WfHr3H4FBcznWBxEQugbeFfsHVS-4HFAqEf31i0Z3oX1Ly8S8CUU6qjaezVxGYYzSCus8UvCojdp3IDsw6-0S3eg');
					 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});