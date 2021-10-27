
let img=document.getElementById("img");



function myFnction(){
    const selectElement = document.getElementById("mySelect").value;

console.log(selectElement);

if(selectElement==="Jordan")
    document.getElementById("img").src="jordan.jfif";

else if(selectElement==="KSA")
    img.src="KSA.jpg";

else if(selectElement==="Egypt")
    document.getElementById("img").src="Egypt.png";

  else 
    document.getElementById("img").src="img2.png";

}




