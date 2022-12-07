$(document).ready(function(){
    $(".ocultar").hide();
     

})
function calcularreceta1(){
    var pzpollo=1;

    let numpersona = document.getElementById("numeroPersonas1").value; 
    
      document.getElementById("ingr1").innerHTML = pzpollo*numpersona+" piezas de pollo";
      document.getElementById("ingr2").innerHTML = 1*numpersona+" jitomates";
      document.getElementById("ingr3").innerHTML = 0.25*numpersona+"GRS De piezas de cebolla asada ";
      document.getElementById("ingr4").innerHTML = 1*numpersona+" Chiles guajillo sin semillas y remojados en agua caliente";
      document.getElementById("ingr5").innerHTML = 0.25*numpersona+" De cucharaditas de comino molido";
      document.getElementById("ingr6").innerHTML = 1.50*numpersona+" Tazas de ciruela pasa";
      document.getElementById("ingr7").innerHTML = 2*numpersona+" Tazas de agua";
      document.getElementById("ingr8").innerHTML = 1*numpersona+" Tabletas de Chocolate para Mesa";
      document.getElementById("ingr9").innerHTML = 1*numpersona+" Piezas Papas cocidas y cortadas en cuadros";
      
}
function calcularreceta2(){

    let numpersona1 = document.getElementById("numeroPersona2").value; 
    
      document.getElementById("ingr1R2").innerHTML = 1*numpersona1+" Supremas de pechuga de pollo, cocidas y fritas";
      document.getElementById("ingr2R2").innerHTML = .25*numpersona1+" Lata de Leche Evaporada";
      document.getElementById("ingr3R2").innerHTML = .25*numpersona1+" Lata de Media Crema";
      document.getElementById("ingr4R2").innerHTML = 1*numpersona1+" Paquete de queso crema reducido en grasa a temperatura ambiente (190 g)";
      document.getElementById("ingr5R2").innerHTML = 1*numpersona1+" Taza de agua";
      document.getElementById("ingr6R2").innerHTML = 1*numpersona1+" Cucharadas de consomé de pollo en polvo";
      document.getElementById("ingr7R2").innerHTML = 2*numpersona1+" Cucharaditas de sal con ajo en polvo";
      document.getElementById("ingr8R2").innerHTML = 1*numpersona1+" Chiles chipotle adobados";
      document.getElementById("ingr9R2").innerHTML = 1*numpersona1+" Piezas Papas cocidas y cortadas en cuadros";
      
}
function calcularreceta3(){

  let numpersona2 = document.getElementById("numeroPersona3").value; 
  
    document.getElementById("ingr1R3").innerHTML = .25*numpersona2+"KG costilla de cerdo";
    document.getElementById("ingr2R3").innerHTML = .25*numpersona2+"  Cucharadas de Jugo MAGGI";
    document.getElementById("ingr3R3").innerHTML = .25*numpersona2+" Cucharadas de Salsa Tipo Inglesa CROSSE & BLACKWELL";
    document.getElementById("ingr4R3").innerHTML = 2*numpersona2+" Chiles de árbol secos";
    document.getElementById("ingr5R3").innerHTML = .25*numpersona2+" Taza de agua";
    document.getElementById("ingr6R3").innerHTML = 1*numpersona2+" Jitomates asados";
    document.getElementById("ingr7R3").innerHTML = .25*numpersona2+" De pieza de cebolla asada";
    document.getElementById("ingr8R3").innerHTML = 1*numpersona2+" Cucharadas de Kirkland Signature® Ajo picado";
    document.getElementById("ingr9R3").innerHTML = .25*numpersona2+"  Cucharaditas de Pimienta Negra Molido";
    
}
function calcularreceta4(){

  let numpersona3 = document.getElementById("numeroPersona4").value; 
  
    document.getElementById("ingr1R4").innerHTML = 1*numpersona3+" Supremas de pollo cocidas y fritas";
    document.getElementById("ingr2R4").innerHTML = .25*numpersona3+"  Tazas de Leche Evaporada CARNATION";
    document.getElementById("ingr3R4").innerHTML = 1*numpersona3+"  Lata de Media Crema NESTLÉ";
    document.getElementById("ingr4R4").innerHTML = 1*numpersona3+" Paquete de Queso crema a temperatura ambiente";
    document.getElementById("ingr5R4").innerHTML = 1*numpersona3+" Taza de agua";
    document.getElementById("ingr6R4").innerHTML = .25*numpersona3+" Cucharadas de Consomé de pollo en polvo";
    document.getElementById("ingr7R4").innerHTML = .25*numpersona3+" Cucharaditas de Sal con ajo en polvo";
    document.getElementById("ingr8R4").innerHTML = 1*numpersona3+" Piezas de Chile chipotle adobados";
    document.getElementById("ingr9R4").innerHTML = .75*numpersona3+"  Tazas de Puré de tomate natural";
    
}
function calcularreceta5(){

  let numpersona4 = document.getElementById("numeroPersona5").value; 
  
    document.getElementById("ingr1R5").innerHTML = 1*numpersona4+" Chiles poblanos limpios";
    document.getElementById("ingr2R5").innerHTML = 1*numpersona4+"  Rebanadas de Queso panela asado";
    document.getElementById("ingr3R5").innerHTML = .12*numpersona4+" Tazas de Harina";
    document.getElementById("ingr4R5").innerHTML = 1*numpersona4+" Claras de huevo";
    document.getElementById("ingr5R5").innerHTML = .50*numpersona4+" Yemas de huevo";
    document.getElementById("ingr6R5").innerHTML = 1*numpersona4+"  Jitomates cortados en cuartos";
    document.getElementById("ingr7R5").innerHTML = 1*numpersona4+" Dientes de Ajo";
    document.getElementById("ingr8R5").innerHTML = .25*numpersona4+" Tazas de Agua";
    document.getElementById("ingr9R5").innerHTML = .25*numpersona4+"  Cubos de Concentrado de Tomate con Pollo";
    
}
function calcularreceta6(){

  let numpersona5 = document.getElementById("numeroPersona6").value; 
  
    document.getElementById("ingr1R6").innerHTML = 1*numpersona5+" Supremas de pollo cortadas a la mitad de forma horizontal";
    document.getElementById("ingr2R6").innerHTML = .12*numpersona5+"  Cucharaditas de sal";
    document.getElementById("ingr3R6").innerHTML = .12*numpersona5+" Cucharaditas de pimienta negra molida";
    document.getElementById("ingr4R6").innerHTML = .25*numpersona5+" Tazas de requesón natural";
    document.getElementById("ingr5R6").innerHTML = .50*numpersona5+" Cucharadas de miel";
    document.getElementById("ingr6R6").innerHTML = .12*numpersona5+" De tazas de nuez picada";
    document.getElementById("ingr7R6").innerHTML = .25*numpersona5+" Cucharadas de aceite de maíz";
    document.getElementById("ingr8R6").innerHTML = .25*numpersona5+" Envase de Salsa Base Láctea de Chile Chipotle Adobado CARNATION";
    document.getElementById("ingr9R6").innerHTML = .12*numpersona5+"  Tazas de agua";
    
}
function calcularreceta7(){

  let numpersona6 = document.getElementById("numeroPersona7").value; 
  
    document.getElementById("ingr1R7").innerHTML = .75*numpersona6+" Taza de Azúcar refinada";
    document.getElementById("ingr2R7").innerHTML = 1*numpersona6+"   Lata de Leche Condensada LA LECHERA";
    document.getElementById("ingr3R7").innerHTML = 1*numpersona6+"  Lata de Leche Evaporada CARNATION";
    document.getElementById("ingr4R7").innerHTML = 6*numpersona6+" Huevos";
    document.getElementById("ingr5R7").innerHTML = 1*numpersona6+" Cucharadas de Esencia de vainilla";
   
    
}
function calcularreceta8(){

  let numpersona7 = document.getElementById("numeroPersona8").value; 
  
    document.getElementById("ingr1R8").innerHTML = 7*numpersona7+" Galletas Marías troceadas";
    document.getElementById("ingr2R8").innerHTML = 1*numpersona7+"   Rama de Menta desinfectada";
    document.getElementById("ingr3R8").innerHTML = 1*numpersona7+"  Limón cortado en rodajas";
    document.getElementById("ingr4R8").innerHTML = 15*numpersona7+" Galletas Marías";
    document.getElementById("ingr5R8").innerHTML = .25*numpersona7+"  Tazas de Jugo de limón colado";
   
    
}
function calcularreceta9(){

  let numpersona8 = document.getElementById("numeroPersona9").value; 
  
    document.getElementById("ingr1R9").innerHTML = 1*numpersona8+" Barras de Mantequilla fundida";
    document.getElementById("ingr2R9").innerHTML = .25*numpersona8+"  Taza de Leche Condensada LA LECHERA";
    document.getElementById("ingr3R9").innerHTML = 1*numpersona8+" Huevo";
    document.getElementById("ingr4R9").innerHTML = .75*numpersona8+" Tazas de Alimento en Polvo para Preparar Bebida Sabor a Chocolate MORELIA PRESIDENCIAL";
    document.getElementById("ingr5R9").innerHTML = .75*numpersona8+" Tazas de Harina de trigo pasada por un colador";
    document.getElementById("ingr6R9").innerHTML = .50*numpersona8+" Cucharaditas de Polvo para hornear";
    document.getElementById("ingr7R9").innerHTML = .50*numpersona8+" Tazas de Frambuesas";
    document.getElementById("ingr8R9").innerHTML = .12*numpersona8+" Tazas de Azúcar glass";
    document.getElementById("ingr9R9").innerHTML = 6*numpersona8+"  Hojas de Menta fresca desinfectadas";
    
}
