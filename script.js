console.log('script.js');

// Load configuration from your extension's environment
const firebaseConfig = {
    apiKey: 'AIzaSyCQLG34McSyK32qYsLAUYhYD9_BUK0QLao',
    authDomain: 'water-reminder-b9aac.firebaseapp.com',
    databaseURL:
        'https://water-reminder-b9aac-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'water-reminder-b9aac',
    storageBucket: 'water-reminder-b9aac.appspot.com',
    messagingSenderId: '628031196131',
    appId: '1:628031196131:web:5009a8342f96ce10882ed6',
    measurementId: 'G-E8SHRJ9ZEB',
};

firebase.initializeApp(firebaseConfig);

// Sign-in with email and password
firebase
    .auth()
    .signInWithEmailAndPassword('drponnawalla@gmail.com', 'System@123')
    .then((userCredential) => {
        console.log(userCredential);
        // Handle successful authentication
    })
    .catch((error) => {
        console.log(error)
;        // Handle authentication error
    });

// Listen for authentication state changes
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        chrome.storage.local.set({ isAuthenticated: true }); // or false
    } else {
        chrome.storage.local.set({ isAuthenticated: false }); // or false
    }
});

// Retrieve authentication state
chrome.storage.local.get('isAuthenticated', (result) => {
    const isAuthenticated = result.isAuthenticated;
    // Use the value as needed
    console.log('background.js', isAuthenticated)
});