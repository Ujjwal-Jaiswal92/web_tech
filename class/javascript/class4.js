// // // // // // // // constant
// // // // // // // document.write(Math.PI);

// // // // // // // max and min
// // // // // // // document.write(Math.max(45,67,78));
// // // // // // // floor,ceil,round, trunc
// // // // // // // document.write(Math.floor(4.5));

// // // // // // // abs and sign
// // // // // // // document.write(Math.abs(-28));
// // // // // // // document.write(Math.sign(78));

// // // // // // let num=Number(prompt("Enter Any number"));
// // // // // // a=Math.sign(num);
// // // // // // if(a==1){
// // // // // //     document.write("positive");

// // // // // // }else if(a==-1){
// // // // // //     document.write("Negative");
// // // // // // }else{
// // // // // //     document.write("zero");
// // // // // // }

// // // // // // pow,sqrt,cbrt
// // // // // document.write(Math.pow(2,3));
// // // // // document.write(Math.sqrt(2,3));
// // // // // // document.write(Math.cbrt(2,3).toFixed(2));

// // // // // random
// // // // // document.write(Math.trunc(Math.random()*999));

// // // // let num=Number(prompt("enter how many digit u want to print"));
// // // // document.write(Math.trunc(Math.random()*10**num));

// // // // array

// let a=[1,4,7,9,0,2,7,4,2,1,8,11,334,4222];
// // // // let a=new Array(1,4,7,9,0,2,7,4,2,1,8)
// // // // document.write(a[1]);

// // // // chaning the value of an array
// // // // a[1]=9;
// // // // document.write(a[1]);

// // // // length
// // // // document.write(a.length);

// // // // array methods
// // // // push, pop
// // // c=a.push(4,5,3);
// // // c=a.pop();

// // // document.write(c,"<br>");
// // // document.write(a,"<br>");

// // // shift and unshift
// // // shift=>opposite of pop
// // // unshift=>oppsite of push
// // // c=a.unshift(2,3);
// // // document.write(c,"<br>");
// // // document.write(a,"<br>");

// // // indexOf and lastIndexOf
// // // document.write(a.indexOf(2),'<br>');
// // // document.write(a.lastIndexOf(2));

// // // join,concat
// // // document.write(a.join('%'));
// // // document.write(a.concat(3,4))

// // // includes
// // // document.write(a.includes(2));
// // // delete
// // // delete a[2];
// // // document.write(a,"<br>");

// // // slice and splice
// // c=a.splice(1,2,5,5);

// // document.write(a,"<br>");

// // sort,reverse
// // function compare(a,b){
// // return a-b;
// // }
// // document.write(a.sort(compare),"<br>");
// // document.write(a.reverse(),"<br>");
// let b=['nepal','china','india','america','China'];
// function cmp(x,y){
//     return x.localeCompare(y);
// }


// document.write(b.sort(cmp));

let arr=[10,20,30,50,100,90];
sum=0;
// for(key of arr){
//     sum+=key;
// }
// document.write(sum);
for(i in arr){
    sum+=arr[i];
}
document.write(sum);