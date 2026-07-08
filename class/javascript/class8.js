// let btn=document.querySelector('button');

// btn.onclick=()=>{
//     alert('hello');

// }
// btn.onclick=()=>{
//     alert('ujjwal');

// }
// btn.onclick=()=>{
//     alert('hiii');

// }

// addListener
// removeListner

// Node.EventListner("event",function);
// let btn=document.querySelector('button');
// btn.addEventListener("click",()=>{
//     alert("hello");
// })
// btn.addEventListener("click",()=>{
//     alert("Ujjwal");
// })
// let div=document.querySelector("div");
// div.addEventListener("mouseup",()=>{
// // let div=document.getElementById("a");
// div.style="background-color: blue;"
// div.innerHTML="Mouse is inside"
// })
// div.addEventListener("mousedown",()=>{
// // let div=document.getElementById("a");
// div.style="background-color: yellow;"
// div.innerHTML="Mouse is outside"
// })

// let inp=document.querySelector("input");
// inp.addEventListener("keypress",()=>{
//     i=inp.value;
//     document.body.style.background=i;
// })


// let att=document.querySelector('p');
// // att.setAttribute('class','a');
// att.classList.add('a')

let btn=document.querySelector("button");
let b=document.querySelector('body');
btn.addEventListener("click",()=>{
    // b.classList.toggle("dark");
    if(localStorage.getItem("theme")=="dark"){
        b.classList.add(dark);
    }
    if(b.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    }else{
        localStorage.setItem("theme","light");
    }
})