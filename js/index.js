let mouseList =document.querySelectorAll('section img');
let p=document.querySelector('p');
let sroce=0;


mouseList.forEach(function(item,index,it){
    item.onclick=function(){
        if(item.style.height!=0){
            item.style.height='0px';
            sroce++;
            calSroce();
        }
        
    }
})

setInterval(growMouse,2000);

function growMouse(){
    mouseList.forEach(function(item,index,it){
        item.style.height='0px';
    })
    mouseList[getRandom()].style.height='70%';
    mouseList[getRandom()].style.height='70%';
    mouseList[getRandom()].style.height='70%';
}

function getRandom(){
    return Math.round(Math.random()*12)
}

function calSroce(){
    p.textContent=`得分：${sroce}`
}