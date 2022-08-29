import React from 'react'
import { View, Button } from 'react-native'
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification, { Importance } from "react-native-push-notification";


const App = () => {


  PushNotification.configure({
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
      vibrate:true
    },
    popInitialNotification: true,
    requestPermissions: true,
  });


  PushNotification.createChannel(
    {
      channelId: "2",
      channelName: "My channel",
      playSound: true,
      importance: Importance.HIGH,
      vibrate: true,
    },
    (created) => console.log(`createChannel returned '${created}'`)
  );



  function sum() {
    PushNotification.localNotification({
      channelId: '2',
      title: 'dd',
      message: 'ddd',
      // date: new Date(Date.now() + 4 * 30),
    })
  }

  return (
    <View>
    <View style={{marginVertical:50}}/>
      <Button title='click' onPress={sum} />
    </View>
  )
}
// PushNotification.abandonPermissions()
export default App