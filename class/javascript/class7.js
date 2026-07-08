// function a(){
//     let num=document.querySelectorAll('input');
//     a=Number(num[0].value);
//     b=Number(num[1].value);
//     sum=a+b;
//     num[3].value=sum;
// }

// function b(){
// let c=document.getElementById('change').value;
// document.body.style.backgroundColor=c;

// }
// setInterval(b);

function sum(){
    let num=document.querySelectorAll('input');
    let num2=document.querySelectorAll('.a');
    a=Number(num[0].value);
    b=Number(num[1].value);
    c=Number(num[2].value);
    a1=Number(num1[0].innerText);
    b1=Number(num1[1].innerText);
    c1=Number(num1[2].innerText);
total=a*a1+b*b1+c*c1;
num[3].value=total;
}

ab=()=>{
    let t=document.getElementById('a');
    if(t.type="password"){
        t.type='text';
    }else{
        t.type='password';
    }
}
