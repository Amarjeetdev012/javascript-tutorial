// Some practical use cases of JavaScript import()
// The import() has the following practical use cases:

// 1) Loading module on demand
// Some functionality may not need to be available when applications start. To decrease the loading time, you can place such functionality in modules and use the import() to load them on demand like this:

// function eventHandler() {
//     import('./module1.js')
//         .then((ns) => {
//              use the module 
//             ns.func();
//         })
//         .catch((error) => {
//             handle error
//         });
// }
// Code language: JavaScript (javascript)
// 2) Loading modules based on conditions
// When placing the import() inside the conditional statement such as if-else, you can load modules based on a specific condition. The following example loads a module that targets a specific platform:

// if( isSpecificPlatform() ) {
//     import('./platform.js')
//     .then((ns) => {
//         ns=>f();
//     });
// }
// Code language: JavaScript (javascript)
// 3) Computed module specifiers
// The module specifier is an expression that allows you to decide which module to load at runtime.

// For example, you can load a module based on the user’s locale to show the message in the user’s specific language:

// let lang = `message_${getUserLocale()}.js`;

// import(lang)
//     .then(...);
// Code language: JavaScript (javascript)
// More on the JavaScript import()
// Using object destructuring
// If a module has multiple exports, you can use the object destructuring to receive the exporting objects. Suppose the dialog.js has two functions:

// export function show(message) {
//     alert(message);

// }

// export function hide(message) {
//     console.log('Hide it...');
// }
// Code language: JavaScript (javascript)
// In the app.js, you can use the object destructuring as follows:

// let btn = document.querySelector('#show');

// btn.addEventListener('click', function () {
//     (async () => {
//         try {
//              use object destructuring
//             let {
//                 show,
//                 hide
//             } = await import('./dialog.js');

//              use the functions
//             show('Hi');
//             hide();
//         } catch (err) {
//             console.log(err);
//         }
//     })();

// });
// Code language: JavaScript (javascript)
// Dynamically loading multiple modules
// To load multiple modules dynamically, you can use the Promise.all() method:

// Promise.all([
//     import(module1), 
//     import(module2),
//      ...])
//     .then(([module1,module2,module3]) => {
//          use the modules
//     });
// Code language: JavaScript (javascript)
// Accessing the default export
// If a module has a default export, you can access it using the default keyword. For example:

// import(moduleSpecifier)
//     .then((module) => {
//          access the default export
//         console.log(module.default);
//     });


//! Summary
// we can use javascript import dynamically
// Use JavaScript import() to dynamically load a module. The import() returns a Promise that will be fulfilled once the module is loaded completely.
// Use the async / await to handle the result of the import().
// Use the Promise.all() method to load multiple modules at once.
// Use the object destructuring to assign variables to the exporting objects of a module.
// Use the default keyword to access the default export.


//* for using top level await 
//todo first we have to change the file name js to mjs and then after we can use top level await javascript ecma script module 
// in this module we can use await without using async keyword