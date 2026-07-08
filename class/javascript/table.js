let isRed=true;
function a()
        {
            let table=document.getElementById("a");
            
            if(isRed){
                table.style.borderColor='black';
            }else{
                table.style.borderColor='red';
            }
            isRed=!isRed;
        }