importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');
 
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTm_AzNMM_Y77-tJlFM5bE8lJv7S_EhFM",
            authDomain: "testmessagingweb-ebddf.firebaseapp.com",
            projectId: "testmessagingweb-ebddf",
            storageBucket: "testmessagingweb-ebddf.appspot.com",
            messagingSenderId: "952003307164",
            appId: "1:952003307164:web:c1bb27ac12446afcffaf59",
            measurementId: "G-Z976JB80PP"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const messaging = firebase.messaging();
 
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };
 
  self.registration.showNotification(notificationTitle, notificationOptions);
});
