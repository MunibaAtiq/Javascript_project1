// console.log("hello");
// document.write("hello");
// Variable store different type of data
// let var const keywords used to declare variable
//Data types int string float decimal boolean char

var id = 101;
var namee = 'Ali';

// console.log(id);
// console.log(namee);
// document.write("Student Id : "+id);
// document.write("<br>");
// document.write("Student Name : "+name);
// console.log("student Id : "+id);

// document.write("Student Id : "+id + "<br> student Name : "+namee);

var emp1 = 101;
var emp2 = 102;
var emp3 = 103;
//array
// var id = [101,102,103];
// document.write("ID 1 : "+id[0]+"<br>");
// document.write("ID 2 : "+id[2]);

//object  key value pairs
let obj1 = {
    eng : 30,
    urdu : 50,
    math : 70
};
document.write("English Marks : "+ obj1.eng);
let info ={
 //key :value
    id : 101,
    std_name : 'ali',
    age : 21
};
document.write("ID : "+info.id + "<br>");
document.write("ID : "+info.std_name + "<br>");
document.write("ID : "+info.age + "<br>"); 

//Functions definition
//built-in functions alert(),prompt(),write(),log()
//user-define function/custom function 
function msg(){
    // document.write("Hello");//statement
}
//function calling
msg();
//perimeter (x,y)
function addition(x,y){
    document.write("Addition result is : "+(x+y));
}
//argument (5,10)
addition(5,10);

function subtraction(x,y){
    document.write("<br> Subtraction result is : "+(x-y));
}
subtraction(5,3);