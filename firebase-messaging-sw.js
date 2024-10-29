// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "952003307164" // Replace with your actual messaging sender ID
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Message received. ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
