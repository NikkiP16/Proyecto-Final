document.querySelector("#btnsumar").addEventListener("click",sumarUno);
document.querySelector("#btnrestar").addEventListener("click",restarUno);
document.querySelector("#btnsumar1").addEventListener("click",sumarUno1);
document.querySelector("#btnrestar1").addEventListener("click",restarUno1);
document.querySelector("#btnsumar2").addEventListener("click",sumarUno2);
document.querySelector("#btnrestar2").addEventListener("click",restarUno2);
document.querySelector("#btnsumar3").addEventListener("click",sumarUno3);
document.querySelector("#btnrestar3").addEventListener("click",restarUno3);
document.querySelector("#btnsumar4").addEventListener("click",sumarUno4);
document.querySelector("#btnrestar4").addEventListener("click",restarUno4);
document.querySelector("#btnsumar5").addEventListener("click",sumarUno5);
document.querySelector("#btnrestar5").addEventListener("click",restarUno5);
document.querySelector("#btnsumar6").addEventListener("click",sumarUno6);
document.querySelector("#btnrestar6").addEventListener("click",restarUno6);
document.querySelector("#btnsumar7").addEventListener("click",sumarUno7);
document.querySelector("#btnrestar7").addEventListener("click",restarUno7);
document.querySelector("#btnsumar8").addEventListener("click",sumarUno8);
document.querySelector("#btnrestar8").addEventListener("click",restarUno8);
document.querySelector("#btnsumar9").addEventListener("click",sumarUno9);
document.querySelector("#btnrestar9").addEventListener("click",restarUno9);
document.querySelector("#btnsumar10").addEventListener("click",sumarUno10);
document.querySelector("#btnrestar10").addEventListener("click",restarUno10);
document.querySelector("#btnsumar11").addEventListener("click",sumarUno11);
document.querySelector("#btnrestar11").addEventListener("click",restarUno11);
document.querySelector("#btnsumar12").addEventListener("click",sumarUno12);
document.querySelector("#btnrestar12").addEventListener("click",restarUno12);
document.querySelector("#btnsumar13").addEventListener("click",sumarUno13);
document.querySelector("#btnrestar13").addEventListener("click",restarUno13);
document.querySelector("#btnsumar14").addEventListener("click",sumarUno14);
document.querySelector("#btnrestar14").addEventListener("click",restarUno14);
document.querySelector("#btnsumar15").addEventListener("click",sumarUno15);
document.querySelector("#btnrestar15").addEventListener("click",restarUno15);
document.querySelector("#btnsumar16").addEventListener("click",sumarUno16);
document.querySelector("#btnrestar16").addEventListener("click",restarUno16);
document.querySelector("#btnsumar17").addEventListener("click",sumarUno17);
document.querySelector("#btnrestar17").addEventListener("click",restarUno17);
document.querySelector("#btnsumar18").addEventListener("click",sumarUno18);
document.querySelector("#btnrestar18").addEventListener("click",restarUno18);
document.querySelector("#btnsumar19").addEventListener("click",sumarUno19);
document.querySelector("#btnrestar19").addEventListener("click",restarUno19);
document.querySelector("#btnsumar20").addEventListener("click",sumarUno20);
document.querySelector("#btnrestar20").addEventListener("click",restarUno20);
document.querySelector("#btnsumar21").addEventListener("click",sumarUno21);
document.querySelector("#btnrestar21").addEventListener("click",restarUno21);
document.querySelector("#btnsumar22").addEventListener("click",sumarUno22);
document.querySelector("#btnrestar22").addEventListener("click",restarUno22);
document.querySelector("#btnsumar23").addEventListener("click",sumarUno23);
document.querySelector("#btnrestar23").addEventListener("click",restarUno23);
document.querySelector("#btnsumar24").addEventListener("click",sumarUno24);
document.querySelector("#btnrestar24").addEventListener("click",restarUno24);
document.querySelector("#btnsumar25").addEventListener("click",sumarUno25);
document.querySelector("#btnrestar25").addEventListener("click",restarUno25);
document.querySelector("#btnsumar26").addEventListener("click",sumarUno26);
document.querySelector("#btnrestar26").addEventListener("click",restarUno26);
document.querySelector("#btnsumar27").addEventListener("click",sumarUno27);
document.querySelector("#btnrestar27").addEventListener("click",restarUno27);
document.querySelector("#btnsumar28").addEventListener("click",sumarUno28);
document.querySelector("#btnrestar28").addEventListener("click",restarUno28);
document.querySelector("#btnsumar29").addEventListener("click",sumarUno29);
document.querySelector("#btnrestar29").addEventListener("click",restarUno29);
document.querySelector("#btnsumar30").addEventListener("click",sumarUno30);
document.querySelector("#btnrestar30").addEventListener("click",restarUno30);
document.querySelector("#btnsumar31").addEventListener("click",sumarUno31);
document.querySelector("#btnrestar31").addEventListener("click",restarUno31);
document.querySelector("#btnsumar32").addEventListener("click",sumarUno32);
document.querySelector("#btnrestar32").addEventListener("click",restarUno32);
document.querySelector("#btnsumar33").addEventListener("click",sumarUno33);
document.querySelector("#btnrestar33").addEventListener("click",restarUno33);
document.querySelector("#btnsumar34").addEventListener("click",sumarUno34);
document.querySelector("#btnrestar34").addEventListener("click",restarUno34);
document.querySelector("#btnsumar35").addEventListener("click",sumarUno35);
document.querySelector("#btnrestar35").addEventListener("click",restarUno35);
document.querySelector("#btnsumar36").addEventListener("click",sumarUno36);
document.querySelector("#btnrestar36").addEventListener("click",restarUno36);
document.querySelector("#btnsumar37").addEventListener("click",sumarUno37);
document.querySelector("#btnrestar37").addEventListener("click",restarUno37);
document.querySelector("#btnsumar38").addEventListener("click",sumarUno38);
document.querySelector("#btnrestar38").addEventListener("click",restarUno38);
document.querySelector("#btnsumar39").addEventListener("click",sumarUno39);
document.querySelector("#btnrestar39").addEventListener("click",restarUno39);
document.querySelector("#btnsumar40").addEventListener("click",sumarUno40);
document.querySelector("#btnrestar40").addEventListener("click",restarUno40);
document.querySelector("#btnsumar41").addEventListener("click",sumarUno41);
document.querySelector("#btnrestar41").addEventListener("click",restarUno41);
document.querySelector("#btnsumar42").addEventListener("click",sumarUno42);
document.querySelector("#btnrestar42").addEventListener("click",restarUno42);
document.querySelector("#btnsumar43").addEventListener("click",sumarUno43);
document.querySelector("#btnrestar43").addEventListener("click",restarUno43);
document.querySelector("#btnsumar44").addEventListener("click",sumarUno44);
document.querySelector("#btnrestar44").addEventListener("click",restarUno44);
document.querySelector("#btnsumar45").addEventListener("click",sumarUno45);
document.querySelector("#btnrestar45").addEventListener("click",restarUno45);
document.querySelector("#btnsumar46").addEventListener("click",sumarUno46);
document.querySelector("#btnrestar46").addEventListener("click",restarUno46);
document.querySelector("#btnsumar47").addEventListener("click",sumarUno47);
document.querySelector("#btnrestar47").addEventListener("click",restarUno47);



let contador=1


function sumarUno(){
    contador= contador+1;
    document.querySelector("#msgcontador").value=contador
}

function restarUno(){
    if (contador > 1){
    contador= contador-1;
    document.querySelector("#msgcontador").value=contador
    }
}

function sumarUno1(){
    contador= contador+1;
    document.querySelector("#msgcontador1").value=contador
}

function restarUno1(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador1").value=contador
    }
}
function sumarUno2(){
    contador= contador+1;
    document.querySelector("#msgcontador2").value=contador
}

function restarUno2(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador2").value=contador
    }
}
function sumarUno3(){
    contador= contador+1;
    document.querySelector("#msgcontador3").value=contador
}

function restarUno3(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador3").value=contador
    }
}
function sumarUno4(){
    contador= contador+1;
    document.querySelector("#msgcontador4").value=contador
}

function restarUno4(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador4").value=contador
    }
}
function sumarUno5(){
    contador= contador+1;
    document.querySelector("#msgcontador5").value=contador
}

function restarUno5(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador5").value=contador
    }
}
function sumarUno6(){
    contador= contador+1;
    document.querySelector("#msgcontador6").value=contador
}

function restarUno6(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador6").value=contador
    }
}
function sumarUno7(){
    contador= contador+1;
    document.querySelector("#msgcontador7").value=contador
}

function restarUno7(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador7").value=contador
    }
}
function sumarUno8(){
    contador= contador+1;
    document.querySelector("#msgcontador8").value=contador
}

function restarUno8(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador8").value=contador
    }
}
function sumarUno9(){
    contador= contador+1;
    document.querySelector("#msgcontador9").value=contador
}

function restarUno9(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador9").value=contador
    }
}
function sumarUno10(){
    contador= contador+1;
    document.querySelector("#msgcontador10").value=contador
}

function restarUno10(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador10").value=contador
    }
}
function sumarUno11(){
    contador= contador+1;
    document.querySelector("#msgcontador11").value=contador
}

function restarUno11(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador11").value=contador
    }
}
function sumarUno12(){
    contador= contador+1;
    document.querySelector("#msgcontador12").value=contador
}

function restarUno12(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador12").value=contador
    }
}
function sumarUno13(){
    contador= contador+1;
    document.querySelector("#msgcontador13").value=contador
}

function restarUno13(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador13").value=contador
    }
}
function sumarUno14(){
    contador= contador+1;
    document.querySelector("#msgcontador14").value=contador
}

function restarUno14(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador14").value=contador
    }
}
function sumarUno15(){
    contador= contador+1;
    document.querySelector("#msgcontador15").value=contador
}

function restarUno15(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador15").value=contador
    }
}
function sumarUno16(){
    contador= contador+1;
    document.querySelector("#msgcontador16").value=contador
}

function restarUno16(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador16").value=contador
    }
}
function sumarUno17(){
    contador= contador+1;
    document.querySelector("#msgcontador17").value=contador
}

function restarUno17(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador17").value=contador
    }
}
function sumarUno18(){
    contador= contador+1;
    document.querySelector("#msgcontador18").value=contador
}

function restarUno18(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador18").value=contador
    }
}
function sumarUno19(){
    contador= contador+1;
    document.querySelector("#msgcontador19").value=contador
}

function restarUno19(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador19").value=contador
    }
}
function sumarUno20(){
    contador= contador+1;
    document.querySelector("#msgcontador20").value=contador
}

function restarUno20(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador20").value=contador
    }
}
function sumarUno21(){
    contador= contador+1;
    document.querySelector("#msgcontador21").value=contador
}

function restarUno21(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador21").value=contador
    }
}
function sumarUno22(){
    contador= contador+1;
    document.querySelector("#msgcontador22").value=contador
}

function restarUno22(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador22").value=contador
    }
}
function sumarUno23(){
    contador= contador+1;
    document.querySelector("#msgcontador23").value=contador
}

function restarUno23(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador23").value=contador
    }
}
function sumarUno24(){
    contador= contador+1;
    document.querySelector("#msgcontador24").value=contador
}

function restarUno24(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador24").value=contador
    }
}
function sumarUno25(){
    contador= contador+1;
    document.querySelector("#msgcontador25").value=contador
}

function restarUno25(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador25").value=contador
    }
}
function sumarUno26(){
    contador= contador+1;
    document.querySelector("#msgcontador26").value=contador
}

function restarUno26(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador26").value=contador
    }
}
function sumarUno27(){
    contador= contador+1;
    document.querySelector("#msgcontador27").value=contador
}

function restarUno27(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador27").value=contador
    }
}
function sumarUno28(){
    contador= contador+1;
    document.querySelector("#msgcontador28").value=contador
}

function restarUno28(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador28").value=contador
    }
}
function sumarUno29(){
    contador= contador+1;
    document.querySelector("#msgcontador29").value=contador
}

function restarUno29(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador29").value=contador
    }
}
function sumarUno30(){
    contador= contador+1;
    document.querySelector("#msgcontador30").value=contador
}

function restarUno30(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador30").value=contador
    }
}
function sumarUno31(){
    contador= contador+1;
    document.querySelector("#msgcontador31").value=contador
}

function restarUno31(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador31").value=contador
    }
}
function sumarUno32(){
    contador= contador+1;
    document.querySelector("#msgcontador32").value=contador
}

function restarUno32(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador32").value=contador
    }
}
function sumarUno33(){
    contador= contador+1;
    document.querySelector("#msgcontador33").value=contador
}

function restarUno33(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador33").value=contador
    }
}
function sumarUno34(){
    contador= contador+1;
    document.querySelector("#msgcontador34").value=contador
}

function restarUno34(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador34").value=contador
    }
}
function sumarUno35(){
    contador= contador+1;
    document.querySelector("#msgcontador35").value=contador
}

function restarUno35(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador35").value=contador
    }
}
function sumarUno36(){
    contador= contador+1;
    document.querySelector("#msgcontador36").value=contador
}

function restarUno36(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador36").value=contador
    }
}
function sumarUno37(){
    contador= contador+1;
    document.querySelector("#msgcontador37").value=contador
}

function restarUno37(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador37").value=contador
    }
}
function sumarUno38(){
    contador= contador+1;
    document.querySelector("#msgcontador38").value=contador
}

function restarUno38(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador38").value=contador
    }
}
function sumarUno39(){
    contador= contador+1;
    document.querySelector("#msgcontador39").value=contador
}

function restarUno39(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador39").value=contador
    }
}
function sumarUno40(){
    contador= contador+1;
    document.querySelector("#msgcontador40").value=contador
}

function restarUno40(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador40").value=contador
    }
}
function sumarUno41(){
    contador= contador+1;
    document.querySelector("#msgcontador41").value=contador
}

function restarUno41(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador41").value=contador
    }
}
function sumarUno42(){
    contador= contador+1;
    document.querySelector("#msgcontador42").value=contador
}

function restarUno42(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador42").value=contador
    }
}
function sumarUno43(){
    contador= contador+1;
    document.querySelector("#msgcontador43").value=contador
}

function restarUno43(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador43").value=contador
    }
}
function sumarUno44(){
    contador= contador+1;
    document.querySelector("#msgcontador44").value=contador
}

function restarUno44(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador44").value=contador
    }
}
function sumarUno45(){
    contador= contador+1;
    document.querySelector("#msgcontador45").value=contador
}

function restarUno45(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador45").value=contador
    }
}
function sumarUno46(){
    contador= contador+1;
    document.querySelector("#msgcontador46").value=contador
}

function restarUno46(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador46").value=contador
    }
}
function sumarUno47(){
    contador= contador+1;
    document.querySelector("#msgcontador47").value=contador
}

function restarUno47(){
    if (contador > 1){
        contador= contador-1;
    document.querySelector("#msgcontador47").value=contador
    }
}
