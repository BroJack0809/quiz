function change() {
 var header = document.getElementById("button1");
 header.innerHTML = "CSIE@CGU";

 var para = document.getElementById("button2");
 para.innerHTML = "怎麼那麼棒！！.";

 } 
 var counter=0;
 function myFunction() {
 
 if(counter==0)
 {
 var btn = document.createElement("BUTTON");
 btn.innerHTML = "Change this document.";
 }
 document.body.appendChild(btn).addEventListener("click", change);
 counter++;
}