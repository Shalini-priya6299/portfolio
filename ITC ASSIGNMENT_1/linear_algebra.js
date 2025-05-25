document.addEventListener("DOMContentLoaded", function() {
         document.getElementById("calculate").addEventListener("click", function() {
         
             const a11 = parseFloat(document.getElementById("a11").value) || 0;
             const a12 = parseFloat(document.getElementById("a12").value) || 0;
             const a21 = parseFloat(document.getElementById("a21").value) || 0;
             const a22 = parseFloat(document.getElementById("a22").value) || 0;
     
             
             const b11 = parseFloat(document.getElementById("b11").value) || 0;
             const b12 = parseFloat(document.getElementById("b12").value) || 0;
             const b21 = parseFloat(document.getElementById("b21").value) || 0;
             const b22 = parseFloat(document.getElementById("b22").value) || 0;
     
             
             const sum = {
                 a11: a11 + b11,
                 a12: a12 + b12,
                 a21: a21 + b21,
                 a22: a22 + b22
             };
     
             
             document.getElementById("sumA11").value = sum.a11;
             document.getElementById("sumA12").value = sum.a12;
             document.getElementById("sumA21").value = sum.a21;
             document.getElementById("sumA22").value = sum.a22;
         });
     
         document.getElementById("multiply").addEventListener("click", function() {
             
             const a11 = parseFloat(document.getElementById("a11").value) || 0;
             const a12 = parseFloat(document.getElementById("a12").value) || 0;
             const a21 = parseFloat(document.getElementById("a21").value) || 0;
             const a22 = parseFloat(document.getElementById("a22").value) || 0;
     
             
             const b11 = parseFloat(document.getElementById("b11").value) || 0;
             const b12 = parseFloat(document.getElementById("b12").value) || 0;
             const b21 = parseFloat(document.getElementById("b21").value) || 0;
             const b22 = parseFloat(document.getElementById("b22").value) || 0;
     
         
             const product = {
                 a11: a11 * b11 + a12 * b21,
                 a12: a11 * b12 + a12 * b22,
                 a21: a21 * b11 + a22 * b21,
                 a22: a21 * b12 + a22 * b22
             };
     
             
             document.getElementById("productA11").value = product.a11;
             document.getElementById("productA12").value = product.a12;
             document.getElementById("productA21").value = product.a21;
             document.getElementById("productA22").value = product.a22;
         });
     });
     