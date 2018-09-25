import * as firebase from 'firebase';

import moment from 'moment';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBieZebABhPDLMD8Jh20dksRnwLlNVK33Y",
    authDomain: "expensify-clone.firebaseapp.com",
    databaseURL: "https://expensify-clone.firebaseio.com",
    projectId: "expensify-clone",
    storageBucket: "expensify-clone.appspot.com",
    messagingSenderId: "478709446783"
  };

firebase.initializeApp(config);

const database = firebase.database()

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// firebase.database().ref('expenses').push({
//     description: 'blah',
//     amount: 40000,
//     note: "not important",
//     createdAt: moment(0).toString()
// });

// firebase.database().ref('expenses').push({
//     description: 'e2',
//     amount: 3043123,
//     note: "not important",
//     createdAt: moment(0).add(17, 'years').toString()
// });

database.ref('expenses').push({
    description: 'future expense',
    amount: 4112313,
    note: "not important",
    createdAt: moment(0).add(900, 'years').toString()
});

// firebase.database().ref('expenses').push({
//     description: 'future expense',
//     amount: 4112313,
//     note: "not important",
//     createdAt: moment(0).add(900, 'years').toString()
// });

// Generate array out of data
// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// });


// const onChange = firebase.database().ref().on('value', (snapshot)=> {
//     const val = snapshot.val()
//     const name = val.name
//     const job = val.job.title
//     const company = val.job.company
//     console.log(`${name} is a ${job} at ${company}.`)
// }, (e) => {
//     console.log('Error with the change', e)
// });

// setTimeout(() => {
//     firebase.database().ref().update({
//         stress: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Chicago'
//     });
// }, 3500);

// setTimeout(() => {
//     firebase.database().ref().update({
//         stress: 8,
//         'job/company': 'Whatever',
//         'location/city': 'Philly Philly'
//     });
// }, 6500)

// setTimeout(() => {
//     firebase.database().ref().off(onChange)
// }, 9500)

// firebase.database().ref().set({
//     name: "Devin",
//     age: 29,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     stress: 10,
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((e) => {
//     console.log("There's an error - ", e)
// });

// firebase.database().ref().update({
//     stress: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Chicago'
// });

// firebase.database().ref().once('value').then((snapshot)=> {
//     const val = snapshot.val()
//     console.log(val)
// }).catch((e)=> {
//     console.log('error fetching data', e)
// });

// firebase.database().ref('isSingle').remove().then(() => {
//     console.log('it worked')
// }).catch(() => {
//     console.log("it didn't work idiot")
// });