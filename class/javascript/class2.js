// // // // // variable
// // // // // loosely typed language

// // // // // var:reinitialize, functional
// // // // // let :no reinitialize, block

// // // // var a=10;
// // // // var b=20;

// // // // console.log(a);
// // // // console.log(b);
// // // // document.writeln(a);
// // // // document.write("<br>")

// // // // let c=12;
// // // // c=23;
// // // // {
// // // //     let c=12;

// // // // }
// // // // document.write(c);
// // // // document.write("<br>")

// // // // const d=10;
// // // // document.write(d);
// // // // document.write("<br>")
// // // // // number, null, undefined, string, symbol, object, undefined

// // // // var a=10;
// // // // document.write(typeof(a));
// // // // document.write("<br>");

// // // // var a=10.23;
// // // // document.write(typeof(a));
// // // // document.write("<br>");

// // // // var a=true;
// // // // document.write(typeof(a));
// // // // document.write("<br>");

// // // // var a="Ujjwal";
// // // // document.write(typeof(a));
// // // // document.write("<br>");

// // // // var a=undefined;
// // // // document.write(typeof(a));
// // // // document.write("<br>");

// // // // var a=null;
// // // // document.write(typeof(a));
// // // // document.write("<br>");

// // // // var a=Symbol(10);
// // // // var b=Symbol(10);
// // // // document.write(a==b);
// // // // document.write("<br>");

// // // // var a=1022222222n;
// // // // document.write(typeof(a));
// // // // document.write("<br>");

// // // // // object
// // // // var a={
// // // //     Name:'Ram',
// // // //     Age:20,
// // // //     LastName:'Karki'
// // // // }
// // // // document.write(typeof(a));
// // // // document.write("<br>");

// // // // var a=[1,'simanta',10.2,true];
// // // // document.write(a[1]);
// // // // document.write("<br>");

// // // // // operators
// // // // // Arithmetic operators
// // // // // +,-,/,%,**,++,--,*
// // // // a=3;
// // // // b=2;
// // // // document.write("sum=",a+b);
// // // // document.write("<br>");
// // // // document.write("minus=",a-b);
// // // // document.write("<br>");
// // // // document.write("Exponential=",a**b);
// // // // document.write("<br>")
// // // // // assignment operator
// // // // // +=,-=,/=,*=,=

// // // // var a=10;
// // // // b=20
// // // // document.write(a+=b);
// // // // document.write("<br>");

// // // // // comparision operator
// // // // // <,>,<=,>=,==,===,!=

// // // // a=1;
// // // // b=true;
// // // // if(a==b){
// // // //     document.write("hye");
// // // // }else{
// // // //     document.write("bye");
// // // // }
// // // // document.write("<br>");

// // // // // logical operator
// // // // // &&,||,!
// // // // a=1;
// // // // b=2;
// // // // if(a<b && a==b){
// // // //     document.write("hye");
// // // // }else{
// // // //     document.write("bye");
// // // // }
// // // // document.write("<br>");

// // // // // bitwise operator
// // // // // &,|,^

// // // // a=prompt("Enter Your Name","RAm");
// // // // alert("hello"+a);

// // // var a=Number(prompt("Enter Any number"));
// // // var b=Number(prompt("Enter one more number"));

// // // document.write("The sum is ",a+b);
// // // document.write("<br>");

// // // document.write("The sub is ",a-b);
// // // document.write("<br>");

// // // document.write("The mul is ",a*b);
// // // document.write("<br>");

// // // document.write("The div is ",a/b);
// // // document.write("<br>");

// // num=Number(prompt("Enter a number"));

// // if(num%2==0){
// //     document.write("Even number");

// // }
// // else{
// //     document.write("Odd number")
// // }
// marks=Number(prompt("Enter your marks"));
// if(marks>90){
//     document.write("A");
// }
// else if(marks>80){
//     document.write("A-");
// }

color=prompt("Enter any color");
switch(color){
    case 'red':
        document.write("Color is red");
        break;
    case 'white':
        document.write("Color is white");
        break;
    case 'Yellow':
        document.write("Color is Yellow");
        break;
    default:
        alert("!!!!Wrong input!!!!");

}