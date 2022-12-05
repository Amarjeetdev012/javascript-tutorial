# javascript-tutorial

* What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.

Alone, this refers to the global object.

In a function, this refers to the global object.

In a function, in strict mode, this is undefined.

In an event, this refers to the element that received the event.

example:==>
var myVar = 100;
    
function SomeFunction(callback)
{
    var myVar = 200;

    callback();
};
      
var obj = {
            myVar: 300,
            WhoIsThis : function() {
            
                console.log("'this' points to " + this + ", myVar = " + this.myVar);
            }
      };
      
SomeFunction(obj.WhoIsThis); 
SomeFunction(obj.WhoIsThis.call(obj)); 
