const typeofconversion = document.getElementById("conversiontype");
const inputconversion = document.querySelector(".conversion");
const outputconversion = document.getElementById("convertedresult");

typeofconversion.addEventListener("change", createconversioninputs);

function createconversioninputs() {
  console.log("inside createconversion");
  const selectedtype = typeofconversion.value;
  inputconversion.innerHTML = "";
  if (selectedtype === 'length') {
    console.log("length selected")
    createlengthinputs();
  }
  if (selectedtype === "mass") {
    createmassinputs();
  }
  if (selectedtype === "temperature") {
    createtemperatureinputs();
  }
  if (selectedtype === "time") {
    createtimeinputs();
  }
}
const fromunitselect = document.createElement("select");
  const tounitselect = document.createElement("select");
  const inputfield = document.createElement("input");
  const convertbutton = document.createElement("button");
function createlengthinputs() {
  
  const units = ["meter", "kilometer", "mile", "yard", "foot", "inch"];
  units.forEach((unit) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.textContent = unit;
    option2.textContent = unit;
    fromunitselect.appendChild(option1);
    tounitselect.appendChild(option2);
  });

  convertbutton.textContent = "convert";
  inputconversion.appendChild(fromunitselect);
  inputconversion.appendChild(tounitselect);

  convertbutton.addEventListener('click', performconversion);
  inputconversion.appendChild(inputfield);
  inputconversion.appendChild(convertbutton);
}
function performconversion(){
    console.log(fromunitselect.value)
    const fromunit=fromunitselect.value
    const tounit=tounitselect.value
    const inputvalue=parseInt(inputfield.value)
    if(isNaN(inputvalue)){
        outputconversion.innerHTML="Invalid input"
        return;
    }
    let convertedValue;

    // Conversion formulas (you can extend this)
    if (fromunit === 'meter' && tounit === 'kilometer') {
        convertedValue = inputvalue / 1000;
    } else if (fromunit === 'kilometer' && tounit === 'meter') {
        convertedValue = inputvalue * 1000;
    } else if (fromunit === 'mile' && tounit === 'kilometer') {
        convertedValue = inputvalue * 1.60934;
    } else if (fromunit === 'yard' && tounit === 'meter') {
        convertedValue = inputvalue * 0.9144;
    } else if (fromunit === 'foot' && tounit === 'meter') {
        convertedValue = inputvalue * 0.3048;
    } else if (fromunit === 'inch' && tounit === 'centimeter') {
        convertedValue = inputvalue * 2.54;
    } else {
        convertedValue = inputvalue; 
    }

    outputconversion.textContent = `${inputvalue} ${fromunit} = ${convertedValue.toFixed(2)} ${tounit}`;
}
