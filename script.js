const typeofconversion=document.getElementById("conversiontype")
const inputconversion=document.querySelector(".conversion")
const outputconversion=document.getElementById("convertedresult")
  
typeofconversion.addEventListener('change',createconversionsinputs)

const createconversionsinputs=()=>{
    const selectedtype=typeofconversion.value
    inputconversion.innerHTML=""
    if(selectedtype=="length"){
       createlengthinputs();
    }
    if(selectedtype=="mass"){
       createmassinputs();
    }
    if(selectedtype=="temperature"){
       createtemperatureinputs();
    }
    if(selectedtype=="time"){
       createtimeinputs();
    }

}
