//optimized compared to array
var user = {
    firstName : "Jeyaseelan",
    lastName : "Subramaniam",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
};

console.log(user.firstName);
//accessing an object

console.log(user["lastName"]); // ithila double quotation poddaddi error varum
console.log(user.loginCount); // before modification
user.loginCount = 44; // modified outside
console.log(user.loginCount);

console.table(user);

console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());
user.buyCourse("Angular JS course");
console.log(user.getCourseCount());