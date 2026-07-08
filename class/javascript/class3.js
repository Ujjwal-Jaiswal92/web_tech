// // // // // let color=prompt("Enter Any color");
// // // // // b=document.getElementById("a");
// // // // // switch(color){
// // // // //     case 'red':
// // // // //         b.style.backgroundColor='red'
// // // // //         break;
// // // // //     case 'yellow':
// // // // //         b.style.backgroundColor='yellow'
// // // // //         break;
// // // // //     case 'blue':
// // // // //         b.style.backgroundColor='blue'
// // // // //         break;
// // // // //     case 'aqua':
// // // // //         b.style.backgroundColor='aqua'
// // // // //         break;
// // // // //     default:
// // // // //         b.style.backgroundColor='black'
// // // // //         break;

// // // // // }

// // // // // let name=prompt("Enter Your Name");

// // // // // for(let i=0;i<10;i++){
// // // // //     document.write(name,'<br>');
// // // // // }
// // // // // document.write('<br>');
// // // // // let i=0
// // // // // do{
// // // // //     document.write(name);
// // // // //     document.write('<br>');
// // // // //     i++;
// // // // // }while(i<10)

// // // let num=Number(prompt("Enter Any Number"));
// // // let count=0;
// // // let sum=0;

// // // do{
// // // num=num%10;
// // // sum+=num;
// // // num=Math.floor(num/10);
// // // count++;
// // // }while(num!=0)

// // // document.write("Count:",count,"<br>");
// // // document.write("Sum:",sum);

// // let a=Number(prompt("Enter Any Number"));
// // let c=Number(prompt("enter number of steps to go"));

// // for(let i=1;i<=c;i++){
// //     document.write(a,"*",i,"=",a*i,"<br>");
// // }
// let a= new Date();
// m=a.getTime();
// document.write(m);

function watch(){
    let time= new Date();
    hr=time.getHours();
    min=time.getMinutes();
    sec=time.getSeconds();
    ms=time.getMilliseconds();
    meri="AM";
    if(hr>=12){
        meri="PM";
        hr=hr-12;
    }
    if(hr==0){
        hr=12;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    if(hr<10){
        hr="0"+hr;
    }
    let ghadi=hr+":"+min+':'+sec+":"+meri;
    document.getElementById('clock').innerText=ghadi;
}
setInterval(watch,1000);