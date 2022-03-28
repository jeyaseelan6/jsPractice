//for all regular functions, this points to window object

console.log(this);

var user = {
    firstName: "Hitesh",
    courseCount : 4,
    getCourseCount : function(){
        console.log("LINE 7", this);
        function sayHello(){
            console.log("hello");
            console.log("LINE 10 ",this);
        }
        sayHello();
    },
};

user.getCourseCount(); // this is not a regular function


