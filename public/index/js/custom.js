
/*
$(document).ready(function () {
    setup.firebase();
    let database = firebase.database();
    let ref = database.ref('books');
    ref.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            console.log(childKey, childData);
        });
    });
})

let setup = {
    firebase: function () {
        var firebaseConfig = {
            apiKey: "AIzaSyCr-JyLcPLAsWMtVbbNT0c5jYyqMfL9CwA",
            authDomain: "book-store-25333.firebaseapp.com",
            databaseURL: "https://book-store-25333.firebaseio.com",
            projectId: "book-store-25333",
            storageBucket: "book-store-25333.appspot.com",
            messagingSenderId: "156105229112",
            appId: "1:156105229112:web:3b064e0cc6d0b34eb977cd"
        };
        firebase.initializeApp(firebaseConfig);
    }
}
*/