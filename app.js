let btns=document.querySelectorAll(".btn")
let display=document.querySelector(".display")
let string="";

for(btn of btns){
    btn.addEventListener("click",function(){
        if(this.innerText == "=")
        {
            string = eval(string);
            display.innerText = string;
            
        }else if(this.innerText==="AC"){
            string="";
            display.innerText = string;
        }else if(this.innerText=="DEL"){
            string=string.substring(0,string.length-1);
            display.innerText = string;
        }else{
            string+=this.innerText;
            display.innerText = string;
        }
       
    });
}

