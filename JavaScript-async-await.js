// You can catch the error by using the try...catch statement, the same way as a regular throw statement:

// async function getUser(userId) {
//     try {
//        const user = await Promise.reject(new Error('Invalid User Id'));
//     } catch(error) {
//        console.log(error);
//     }
// }
// It’s possible to catch errors caused by one or more await promise‘s:

// async function showServiceCost() {
//     try {
//        let user = await getUser(100);
//        let services = await getServices(user);
//        let cost = await getServiceCost(services);
//        console.log(`The service cost is ${cost}`);
//     } catch(error) {
//        console.log(error);
//     }
// }
// In this tutorial, you have learned how to use the JavaScript async / await keyword to write asynchronous code look like synchronous code.