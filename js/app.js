


// Selected Index

let chk_index = document.querySelectorAll('.chk_index');
let title_index = document.querySelectorAll('.title_index');
let img_index = document.querySelectorAll('.img_index');
let checkeable = document.querySelectorAll('.checkeable');
let a_smooth = document.querySelectorAll('.a_smooth');
let btn_mitad = document.querySelectorAll('.btn_mitad');






let index = 0;

for (let i = 0; i < chk_index.length; i++) {
    chk_index[i].addEventListener('click',(e)=>{
        deselect(i)
        index = i;
        console.log(i);
    });

    img_index[i].addEventListener('mouseover',(e)=>{
        mostrarImg(i)
    });

    img_index[i].addEventListener('mouseout',(e)=>{
        goIndex(index)
    });

    btn_mitad[i].addEventListener('click',(e)=>{
      if(i<chk_index.length-1){
            deselect(i+1)
        }else{
           let k=0;
            deselect(k)
            
        }
        
    });
}

var x = window.matchMedia("(max-width: 992px)")
myFunction(x) 
x.addListener(myFunction)
function myFunction(e){
    if (x.matches) {
        setTimeout(() => {
            chk_index[1].click();
            setTimeout(() => {
                chk_index[0].click();
            },1000);
        },300);
    }
}



for (let i = 0; i < chk_index.length; i++) {
    chk_index[i].checked = false;
    title_index[i].style.filter ="opacity(0)";
    title_index[i].style.transformDuration ="2s";
    img_index[i].style.filter ="opacity(0)";
    checkeable[i].style.background = "white";
}

chk_index[0].checked = true;
title_index[0].style.filter ="opacity(1)";
title_index[0].style.transformDuration ="2s";
img_index[0].style.filter ="opacity(1)";
checkeable[0].style.background = "none";

function mostrarImg(e) {
    for (let i = 0; i < chk_index.length; i++) {
        chk_index[i].checked = false;
        title_index[i].style.filter ="opacity(0)";
        title_index[i].style.transformDuration ="2s";
        img_index[i].style.filter ="opacity(0)";
        checkeable[i].style.background = "white";
    }
    chk_index[e].checked = true;
    title_index[e].style.filter ="opacity(1)";
    title_index[e].style.transformDuration ="2s";
    img_index[e].style.filter ="opacity(1)";
    checkeable[e].style.background = "none";
}


function goIndex(e) {
    for (let i = 0; i < chk_index.length; i++) {
        chk_index[i].checked = false;
        title_index[i].style.filter ="opacity(0)";
        title_index[i].style.transformDuration ="2s";
        img_index[i].style.filter ="opacity(0)";
        checkeable[i].style.background = "white";
    }
    chk_index[e].checked = true;
    img_index[e].style.filter ="opacity(1)";
    checkeable[e].style.background = "none";
   

}

function deselect(e) {
    for (let i = 0; i < chk_index.length; i++) {
        chk_index[i].checked = false;
        title_index[i].style.filter ="opacity(0)";
        title_index[i].style.transformDuration ="2s";
        img_index[i].style.filter ="opacity(0)";
        checkeable[i].style.background = "white";
    }
    chk_index[e].checked = true;
    title_index[e].style.filter ="opacity(1)";
    title_index[e].style.transformDuration ="2s";
    img_index[e].style.filter ="opacity(1)";
    checkeable[e].style.background = "none";
    a_smooth[e].click();
   
    setTimeout(() => {
        for (let i = 0; i < chk_index.length; i++) {
            title_index[i].style.filter ="opacity(0)";
            title_index[i].style.transformDuration ="2s";
        }
    }, 1000);

}

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let c6 = document.getElementById('c6');
let c7 = document.getElementById('c7');
let btn1 = document.getElementById('btn1');
let pevent = document.getElementById('pevent');
let pcom = document.getElementById('pcom');
let btn_black = document.getElementById('btn_black');
let pfilms = document.getElementById('pfilms');
let btn_blue = document.getElementById('btn_blue');
let btn_green = document.getElementById('btn_green');
let pdevelopment = document.getElementById('pdevelopment');
let pacademy = document.getElementById('pacademy');
let pmarketing = document.getElementById('pmarketing');


let numeroCambio = 0;

const cambio = (entradas,obsevador)=>{
    // console.log(entradas);
    // console.log(obsevador);
    
    for (let l = 0; l < entradas.length; l++) {
        if(entradas[l].isIntersecting){
            // console.log(entradas[l]);
            // console.log(obsevador);
            // console.log(l);

            if(entradas[l].target.id=="c1"){
                numeroCambio = 0;
               for (let i = 0; i < chk_index.length; i++) {
                chk_index[i].checked = false;
                title_index[i].style.filter ="opacity(0)";
                title_index[i].style.transformDuration ="2s";
                img_index[i].style.filter ="opacity(0)";
                checkeable[i].style.background = "white";
            }
            chk_index[numeroCambio].checked = true;
            title_index[numeroCambio].style.filter ="opacity(1)";
            title_index[numeroCambio].style.transformDuration ="2s";
            img_index[numeroCambio].style.filter ="opacity(1)";
            checkeable[numeroCambio].style.background = "none";

            setTimeout(() => {
                for (let i = 0; i < chk_index.length; i++) {
                    title_index[i].style.filter ="opacity(0)";
                    title_index[i].style.transformDuration ="2s";
                }
            }, 1000);

            // btn1.classList.remove('olas');             
            // pevent.classList.remove('olas');       
            // btn1.style.width = "0"; 

            }

            if(entradas[l].target.id=="c2"){
                numeroCambio = 1;
               for (let i = 0; i < chk_index.length; i++) {
                chk_index[i].checked = false;
                title_index[i].style.filter ="opacity(0)";
                title_index[i].style.transformDuration ="2s";
                img_index[i].style.filter ="opacity(0)";
                checkeable[i].style.background = "white";
            }
            chk_index[numeroCambio].checked = true;
            title_index[numeroCambio].style.filter ="opacity(1)";
            title_index[numeroCambio].style.transformDuration ="2s";
            img_index[numeroCambio].style.filter ="opacity(1)";
            checkeable[numeroCambio].style.background = "none";

            setTimeout(() => {
                for (let i = 0; i < chk_index.length; i++) {
                    title_index[i].style.filter ="opacity(0)";
                    title_index[i].style.transformDuration ="2s";
                }
            }, 1000);

            // añadir
            // btn1.classList.add('olas'); 
            btn1.style.width = "20vw"; 
            pevent.classList.add('olas');       
           
            // eliminar

            pcom.classList.remove('olas');  
            // btn_black.classList.remove('olas');
            btn_black.style.width = "0vw"; 

            }

            if(entradas[l].target.id=="c3"){
                numeroCambio = 2;
               for (let i = 0; i < chk_index.length; i++) {
                chk_index[i].checked = false;
                title_index[i].style.filter ="opacity(0)";
                title_index[i].style.transformDuration ="2s";
                img_index[i].style.filter ="opacity(0)";
                checkeable[i].style.background = "white";
            }
            chk_index[numeroCambio].checked = true;
            title_index[numeroCambio].style.filter ="opacity(1)";
            title_index[numeroCambio].style.transformDuration ="2s";
            img_index[numeroCambio].style.filter ="opacity(1)";
            checkeable[numeroCambio].style.background = "none";      

            setTimeout(() => {
                for (let i = 0; i < chk_index.length; i++) {
                    title_index[i].style.filter ="opacity(0)";
                    title_index[i].style.transformDuration ="2s";
                }
            }, 1000);

            // añadir
            pcom.classList.add('olas');  
            // btn_black.classList.add('olas'); 
            btn_black.style.width = "20vw"; 

            // eliminar
            pfilms.classList.remove('olas');  
            btn_blue.style.width = "0vw"; 
            // btn_blue.classList.remove('olas'); 

            }

            if(entradas[l].target.id=="c4"){
                numeroCambio = 3;
               for (let i = 0; i < chk_index.length; i++) {
                chk_index[i].checked = false;
                title_index[i].style.filter ="opacity(0)";
                title_index[i].style.transformDuration ="2s";
                img_index[i].style.filter ="opacity(0)";
                checkeable[i].style.background = "white";
            }
            chk_index[numeroCambio].checked = true;
            title_index[numeroCambio].style.filter ="opacity(1)";
            title_index[numeroCambio].style.transformDuration ="2s";
            img_index[numeroCambio].style.filter ="opacity(1)";
            checkeable[numeroCambio].style.background = "none";   

            setTimeout(() => {
                for (let i = 0; i < chk_index.length; i++) {
                    title_index[i].style.filter ="opacity(0)";
                    title_index[i].style.transformDuration ="2s";
                }
            }, 1000);
            
            pfilms.classList.add('olas');
            btn_blue.style.width = "20vw";
            // btn_blue.classList.add('olas'); 
            // remove
            btn_green.style.width = "0vw";
            pdevelopment.classList.remove('olas');
            // btn_green.classList.remove('olas');

            }

            if(entradas[l].target.id=="c5"){
                numeroCambio = 4;
               for (let i = 0; i < chk_index.length; i++) {
                chk_index[i].checked = false;
                title_index[i].style.filter ="opacity(0)";
                title_index[i].style.transformDuration ="2s";
                img_index[i].style.filter ="opacity(0)";
                checkeable[i].style.background = "white";
            }
            chk_index[numeroCambio].checked = true;
            title_index[numeroCambio].style.filter ="opacity(1)";
            title_index[numeroCambio].style.transformDuration ="2s";
            img_index[numeroCambio].style.filter ="opacity(1)";
            checkeable[numeroCambio].style.background = "none";

            setTimeout(() => {
                for (let i = 0; i < chk_index.length; i++) {
                    title_index[i].style.filter ="opacity(0)";
                    title_index[i].style.transformDuration ="2s";
                }
            }, 1000);
            
            btn_green.style.width = "20vw";
            pdevelopment.classList.add('olas');
            // btn_green.classList.add('olas');

            
            pacademy.classList.remove('olas');
            btn_yellow.style.width = "0vw";
            // btn_yellow.classList.remove('olas');

            }

            if(entradas[l].target.id=="c6"){
                numeroCambio = 5;
               for (let i = 0; i < chk_index.length; i++) {
                chk_index[i].checked = false;
                title_index[i].style.filter ="opacity(0)";
                title_index[i].style.transformDuration ="2s";
                img_index[i].style.filter ="opacity(0)";
                checkeable[i].style.background = "white";
            }
            chk_index[numeroCambio].checked = true;
            title_index[numeroCambio].style.filter ="opacity(1)";
            title_index[numeroCambio].style.transformDuration ="2s";
            img_index[numeroCambio].style.filter ="opacity(1)";
            checkeable[numeroCambio].style.background = "none";

            setTimeout(() => {
                for (let i = 0; i < chk_index.length; i++) {
                    title_index[i].style.filter ="opacity(0)";
                    title_index[i].style.transformDuration ="2s";
                }
            }, 1000);
            
            // btn_yellow.classList.add('olas');
            btn_yellow.style.width = "20vw";
            pacademy.classList.add('olas');

            // remove
            // btn_black2.classList.remove('olas');
            btn_black2.style.width = "0vw"; 
            pmarketing.classList.remove('olas');


            }

            if(entradas[l].target.id=="c7"){
                numeroCambio = 6;
               for (let i = 0; i < chk_index.length; i++) {
                chk_index[i].checked = false;
                title_index[i].style.filter ="opacity(0)";
                title_index[i].style.transformDuration ="2s";
                img_index[i].style.filter ="opacity(0)";
                checkeable[i].style.background = "white";
            }
            chk_index[numeroCambio].checked = true;
            title_index[numeroCambio].style.filter ="opacity(1)";
            title_index[numeroCambio].style.transformDuration ="2s";
            img_index[numeroCambio].style.filter ="opacity(1)";
            checkeable[numeroCambio].style.background = "none";

            setTimeout(() => {
                for (let i = 0; i < chk_index.length; i++) {
                    title_index[i].style.filter ="opacity(0)";
                    title_index[i].style.transformDuration ="2s";
                }
            }, 1000);

            // btn_black2.classList.add('olas');
            btn_black2.style.width = "20vw";
            pmarketing.classList.add('olas');
            
            }
            
    }  
    }

}

const obsevador = new IntersectionObserver(cambio,{
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    once:false
});

obsevador.observe(c1);
obsevador.observe(c2);
obsevador.observe(c3);
obsevador.observe(c4);
obsevador.observe(c5);
obsevador.observe(c6);
obsevador.observe(c7);


let c2p1 = document.getElementById('c2p1');
let c2p2 = document.getElementById('c2p2');
let c2gota2 = document.querySelectorAll('.c2gota2');
let c3_abajo = document.getElementById('c3_abajo');
// let c3p2 = document.getElementById('c3p2');
let c3gota1 = document.getElementById('c3gota1');
let c4p1 = document.getElementById('c4p1');
let c4_derecha = document.getElementById('c4_derecha');
let c5p1 = document.getElementById('c5p1');
let c6p1 = document.getElementById('c6p1');
let c7p1 = document.getElementById('c7p1');
let c7_derecha = document.getElementById('c7_derecha');


 

// console.log(c3gota1);



window.addEventListener("scroll",(e)=>{
    let value = window.scrollY;

    c2p1.style.marginTop = (value*-0.5+400) + "px"; 
    c2p2.style.marginTop = (value*-0.5+500) + "px"; 
    c2gota2[0].style.marginTop =  (value*-1.5+1100) + "px"; 
    c2gota2[1].style.marginTop =  (value*-1.5+1450) + "px"; 
    c3gota1.style.marginTop = (value*-0.8+1200) + "px"; 
    // c3
// 
    c3_abajo.style.marginTop =  (value*-0.15) + "px"; 
    // c4
    c4_derecha.style.marginTop = (value*-0.11+270) + "px"; 
    // C5

    c5p1.style.marginTop = (value*-0.5) + "px"; 
    c6p1.style.marginTop = (value*-0.5) + "px"; 

    // c7

    c7p1.style.marginTop = (value*-0.5) + "px"; 


});

