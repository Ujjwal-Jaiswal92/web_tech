// // // // ab=(n,s)=>
// // // // {
// // // //     for(let i=1;i<=s;i++){
// // // //         document.write(n,"*",i,"=",n*i,"<br>");
// // // //     }
// // // // }
// // // // num=Number(prompt("Enter any number"));
// // // // steps=Number(prompt("Enter steps to print"));
// // // // ab(num,steps);

// // // function name(n){
// // //     document.write(n);
// // // }
// // // nam=prompt("emter ur name");
// // // name(nam);

// // const a={
// //     Name:'ram',
// //     show:function(){
// //         alert(this.Name);
// //     }
// // }
// // a.show();

// let str='hello! my name is Ujjwal jaiswal. You are so good person .Person is very good. Person is sometimes not person';
// // document.write(str.length,'<br>');
// // a=str.slice(18,24);
// // document.write(a);

// // a=str.toUpperCase();
// // document.write(a);

// // document.write(str.charCodeAt(0))
// // document.write(str.padEnd(150,"*"))
// // a=str.replace("Ujjwal","Uttam");
// // a=str.replace(/person/ig,"Uttam");

// // document.write(a.padEnd(150,"*"))
// name=prompt("Enter your name")
// document.write(name.split(" ")[0][0].toUpperCase());

// document.write(name.slice(0,1).toUpperCase()+name.slice(1).toLowerCase());

let a='simanta is mortal';
// startsWith(),endsWith(), indexOf(), lastIndexOf(), search(),match()
// document.write(a.lastIndexOf('a'));
// document.write(a.search("mortal"));

document.write(a.match('simam'))