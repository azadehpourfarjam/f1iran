let flag=true;
let mobile=document.querySelector('.barBox button.mobile');
mobile.addEventListener('click',()=>{
    let nav=document.querySelector('.navBox .nav');
   if (flag===true){
       nav.style.display='block';
       flag=false;
   }else {
       nav.style.display='none';
       flag=true;
   }
})