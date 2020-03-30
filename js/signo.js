function validaFechaMenor(campo){
  var bRet = false;
  var dHoy = new Date();
  var dCapt = null;
  if (campo.value == "")
    alert("Faltan datos");
  else{
    dCapt = validaFecha(campo.value);
    if (dCapt != null && dCapt < dHoy)
      bRet = true;
    else
      alert("La fecha debe ser menor a la fecha actual");
  }
  return bRet;
}

  function validaFecha(valor){
      var dConvertida = null;
      var sAnio = "";
      var sMes = "";
      var sDia = "";
      var nAnio=0, nMes=0, nDia = 0;

      if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
        nDia = parseInt(valor.substring(8,10), 10);
        nMes = parseInt(valor.substring(6,7), 10);
        nAnio = parseInt(valor.substring(0,4), 10);


        if (nDia <1 || nDia>31)
          alert("El día no es válido")
        else{
          if (nMes <1 || nMes>12)
            alert("El mes no es válido");
          else{
            if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
               nMes==8 || nMes==10 || nMes==12) && nDia > 31)
               alert("El mes tiene máximo 31 días");
            else if ((nMes==4 || nMes==6 || nMes==9 ||
                  nMes==11) && nDia > 30)
               alert("El mes tiene máximo 30 días");
            else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
               alert("Febrero tiene 28 días o 29 en bisiesto");
            else{
              dConvertida = new Date();
              dConvertida.setFullYear(nAnio, nMes-1, nDia);
            }//fin validaci�n día-mes
          }//mes válido
        }//día válido
        creasigno(nDia,nMes);
      }//formato válido

      else{
        alert("No tiene formato de fecha");
      }
      return dConvertida;
  }


  function creasigno(nDia,nMes){

  var newDiv = document.createElement("div");
  var color;
  if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
  var newContent = document.createTextNode("SIGNO ARIES\n\nNúmero de la Suerte: 5");
 color = "rgb(29, 111, 242)";
  }else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
    var newContent = document.createTextNode("SIGNO TAURO\n\nNúmero de la Suerte: 12");
color = "rgb(224, 178, 151)";
  }else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
      var newContent = document.createTextNode("SIGNO GEMINIS\n\nNúmero de la Suerte: 3");
       color = "rgb(74, 33, 60)";
    }else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
        var newContent = document.createTextNode("SIGNO CANCER\n\nNúmero de la Suerte: 2");
         color = "rgb(230, 148, 196)";
      }else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
          var newContent = document.createTextNode("SIGNO LEO\n\nNúmero de la Suerte: 9");
           color = "rgb(44, 141, 161) ";
        }else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
            var newContent = document.createTextNode("SIGNO VIRGO\n\nNúmero de la Suerte: 17");
             color = "rgb(44, 102, 184)";
          }else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
              var newContent = document.createTextNode("SIGNO LIBRA\n\nNúmero de la Suerte: 6");
               color = "rgb(31, 77, 61)";
            }else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                var newContent = document.createTextNode("SIGNO ESCORPIO\n\nNúmero de la Suerte: 8");
                 color = "rgb(57, 167, 2)";
              }else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                  var newContent = document.createTextNode("SIGNO SAGITARIO\n\nNúmero de la Suerte: 4");
                   color = "rgb(23, 70, 80)";
                }else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                    var newContent = document.createTextNode("SIGNO CAPRICORNIO\n\nNúmero de la Suerte: 23");
                     color = "rgb(252, 69, 91)"; var fontcolor="#fff";
                  }else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                      var newContent = document.createTextNode("SIGNO ACUARIO\n\nNúmero de la Suerte: 0");
                       color = "rgb(164, 138, 9)";
                    }else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
                        var newContent = document.createTextNode("SIGNO PICIS\n\nNúmero de la Suerte: 7");
                         color = "rgb(241, 161, 86)";
                      }

  //var newContent = document.createTextNode("SIGNO");
  newDiv.appendChild(newContent); //añade texto al div creado.

   // añade el elemento creado y su contenido al DOM
   var currentDiv = document.getElementById("div");
   document.body.insertBefore(newDiv, currentDiv);
  newDiv.style="border: 3px solid #999999; background-color:"+color+"; color:"+fontcolor+"; width: 200px ;height:150px ";
}
