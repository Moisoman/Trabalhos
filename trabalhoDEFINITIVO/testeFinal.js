const array1 = [false,false,true,true];
const array2 =[false,true,false,true];
function logicalAnd(){
      document.getElementById("output_00").innerText = array1[0] && array2[0] ? 1 : 0;
      document.getElementById("output_01").innerText = array1[1] && array2[1] ? 1 : 0;
      document.getElementById("output_10").innerText = array1[2] && array2[2] ? 1 : 0;
      document.getElementById("output_11").innerText = array1[3] && array2[3] ? 1 : 0;

      if(!document.getElementById("portaNot").checked){
            document.querySelectorAll(".colB").forEach(cell => cell.style.display = '');
            colunaB.style.display = '';
      }
    
}
function logicalOr(){
            document.getElementById("output_00").innerText= array1[0] || array2[0] ? 1 : 0;
            document.getElementById("output_01").innerText= array1[1] || array2[1] ? 1 : 0;
            document.getElementById("output_10").innerText= array1[2] || array2[2] ? 1 : 0;
            document.getElementById("output_11").innerText= array1[3] || array2[3] ? 1 : 0;
             
            if(!document.getElementById("portaNot").checked){
                  document.querySelectorAll(".colB").forEach(cell => cell.style.display = '');
                  colunaB.style.display = '';
            }
      }
 function not_A(){
      document.getElementById("output_00").innerText= array1[0] ? 0 : 1;
      document.getElementById("output_01").innerText= array1[1] ? 0 : 1;
      document.getElementById("output_10").innerText= array1[2] ? 0 : 1;
      document.getElementById("output_11").innerText= array1[3] ? 0 : 1;
 }
 if(document.getElementById("portaNot").addEventListener("change", function(){
      if(this.checked){
            document.querySelectorAll(".colB").forEach(cell => cell.style.display = 'none');
      colunaB.style.display = 'none';
      }
 }));
   function logicalXor(){
      document.getElementById("output_00").innerText= ((array1[0] && !array2[0]) || (!array1[0] && array2[0]) ? 1 : 0);
      document.getElementById("output_01").innerText= ((array1[1] && !array2[1]) || (!array1[1] && array2[1]) ? 1 : 0);
      document.getElementById("output_10").innerText= ((array1[2] && !array2[2]) || (!array1[2] && array2[2]) ? 1 : 0);
      document.getElementById("output_11").innerText= ((array1[3] && !array2[3]) || (!array1[3] && array2[3]) ? 1 : 0);
       
      if(!document.getElementById("portaNot").checked){
            document.querySelectorAll(".colB").forEach(cell => cell.style.display = '');
            colunaB.style.display = '';
      }
   }
     function logicalNand(){
      document.getElementById("output_00").innerText= !(array1[0] && array2[0]) ? 1 : 0;
      document.getElementById("output_01").innerText= !(array1[1] && array2[1]) ? 1 : 0;
      document.getElementById("output_10").innerText= !(array1[2] && array2[2]) ? 1 : 0;
      document.getElementById("output_11").innerText= !(array1[3] && array2[3]) ? 1 : 0;
       if(!document.getElementById("portaNot").checked){
            document.querySelectorAll(".colB").forEach(cell => cell.style.display = '');
            colunaB.style.display = '';
      }

     }
function logicalNor(){
      document.getElementById("output_00").innerText= !(array1[0] || array2[0]) ? 1 : 0;
      document.getElementById("output_01").innerText= !(array1[1] || array2[1]) ? 1 : 0;
      document.getElementById("output_10").innerText= !(array1[2] || array2[2]) ? 1 : 0;
      document.getElementById("output_11").innerText= !(array1[3] || array2[3]) ? 1 : 0;
      if(!document.getElementById("portaNot").checked){
            document.querySelectorAll(".colB").forEach(cell => cell.style.display = '');
            colunaB.style.display = '';
      }

}
function logicalXnor(){
      document.getElementById("output_00").innerText= ((array1[0] && array2[0]) || (!array1[0] && !array2[0]) ? 1 : 0);
      document.getElementById("output_01").innerText= ((array1[1] && array2[1]) || (!array1[1] && !array2[1]) ? 1 : 0);
      document.getElementById("output_10").innerText= ((array1[2] && array2[2]) || (!array1[2] && !array2[2]) ? 1 : 0);
      document.getElementById("output_11").innerText= ((array1[3] && array2[3]) || (!array1[3] && !array2[3]) ? 1 : 0);
      if(!document.getElementById("portaNot").checked){
            document.querySelectorAll(".colB").forEach(cell => cell.style.display = '');
            colunaB.style.display = '';
      }
}

function updateColor() {
      const checkbox1 = document.getElementById("checkbox1");
      const checkbox2 = document.getElementById("checkbox2");
      const saida = document.getElementById("saida"); 
      const portaAndRadio = document.getElementById("portaAnd");
      const portaOrRadio = document.getElementById("portaOr");
      const portaNorRadio = document.getElementById("portaNor");
      const portaNotRadio = document.getElementById("portaNot");
      const portaNandRadio = document.getElementById("portaNand");
      const portaXorRadio  = document.getElementById("portaXor");
      const portaXnorRadio  = document.getElementById("portaXnor");
      const img_and = document.getElementById("img_and");
      const img_or = document.getElementById("img_or");
      const img_nor = document.getElementById("img_nor");
      const img_nand = document.getElementById("img_nand");
      const img_xor = document.getElementById("img_xor");
      const img_not = document.getElementById("img_not");
      const img_xnor = document.getElementById("img_xnor");

  
      if (portaAndRadio.checked) {
          
          if (checkbox1.checked && checkbox2.checked) {
              saida.style.backgroundColor = "green";
               
          } else {    
              saida.style.backgroundColor = "black";
              
          }
      } else if(portaOrRadio.checked) {
            if(checkbox1.checked || checkbox2.checked ){
                  saida.style.backgroundColor = "green"
                  
            }
            else{
                  saida.style.backgroundColor= "black"
                  
            }

      }  else if(portaNorRadio.checked) {
            if(!(checkbox1.checked || checkbox2.checked )){
                  saida.style.backgroundColor = "green"
                  
            }
            else{
                  saida.style.backgroundColor= "black"
                 
            }

      } else if(portaNotRadio.checked) {
            if(!checkbox1.checked ){
                  saida.style.backgroundColor = "green"
                  
            }
            else{
                  saida.style.backgroundColor= "black"
                  
            }

      } else if(portaNandRadio.checked) {
            if(!(checkbox1.checked && checkbox2.checked) ){
                  saida.style.backgroundColor = "green"
                  
            }
            else{
                  saida.style.backgroundColor= "black"
                  
            }

      } else if(portaXorRadio.checked) {
            if(((checkbox1.checked && !checkbox2.checked || (!checkbox1.checked && checkbox2.checked))) ){
                  saida.style.backgroundColor = "green"
                  
            }
            else{
                  saida.style.backgroundColor= "black"
                  
            }

      } else if(portaXnorRadio.checked) {
            if(((checkbox1.checked && checkbox2.checked) || (!checkbox1.checked && !checkbox2.checked)) ){
                  saida.style.backgroundColor = "green"
                  
            }
            else{
                  saida.style.backgroundColor= "black"
                  
            }

      } 
      else{
      
      }
      
        
  }

 function updateImage(){
      const portaAndRadio = document.getElementById("portaAnd");
      const portaOrRadio = document.getElementById("portaOr");
      const portaNorRadio = document.getElementById("portaNor");
      const portaNotRadio = document.getElementById("portaNot");
      const portaNandRadio = document.getElementById("portaNand");
      const portaXorRadio  = document.getElementById("portaXor");
      const portaXnorRadio  = document.getElementById("portaXnor");
      const img_and = document.getElementById("img_and");
      const img_or = document.getElementById("img_or");
      const img_nor = document.getElementById("img_nor");
      const img_nand = document.getElementById("img_nand");
      const img_xor = document.getElementById("img_xor");
      const img_not = document.getElementById("img_not");
      const img_xnor = document.getElementById("img_xnor");
   
      if (portaAndRadio.checked) {
            img_and.style.display = "block";
        } else {
            img_and.style.display = "none";
        }
    
        if (portaOrRadio.checked) {
            img_or.style.display = "block";
        } else {
            img_or.style.display = "none";
        }
    
        if (portaNorRadio.checked) {
            img_nor.style.display = "block";
        } else {
            img_nor.style.display = "none";
        }
    
        if (portaNotRadio.checked) {
            img_not.style.display = "block";
        } else {
            img_not.style.display = "none";
        }
    
        if (portaNandRadio.checked) {
            img_nand.style.display = "block";
        } else {
            img_nand.style.display = "none";
        }
    
        if (portaXorRadio.checked) {
            img_xor.style.display = "block";
        } else {
            img_xor.style.display = "none";
        }
    
        if (portaXnorRadio.checked) {
            img_xnor.style.display = "block";
        } else {
            img_xnor.style.display = "none";
        }
        document.getElementById("saida").style.backgroundColor = "";
  }