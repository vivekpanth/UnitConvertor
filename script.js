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
  inputfield.placeholder="Enter Value To Convert"
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
function createtemperatureinputs() {
  
  const units = ["fahrenheit", "celsius", "kelvin"];
  units.forEach((unit) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.textContent = unit;
    option2.textContent = unit;
    fromunitselect.appendChild(option1);
    tounitselect.appendChild(option2);
  });

  convertbutton.textContent = "Convert";
  inputconversion.appendChild(fromunitselect);
  inputconversion.appendChild(tounitselect);

  convertbutton.addEventListener('click', performconversion);
  inputconversion.appendChild(inputfield);
  inputconversion.appendChild(convertbutton);
}
function createtimeinputs() {
  
  const units = ["day", "hour", "minute","second"];
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
function createmassinputs() {
  
  const units = ["gram", "kilogram", "pounds"];
  units.forEach((unit) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.textContent = unit;
    option2.textContent = unit;
    fromunitselect.appendChild(option1);
    tounitselect.appendChild(option2);
  });

  convertbutton.textContent = "CONVERT";
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
    let convertedvalue;
    if (fromunit === 'meter' && tounit === 'kilometer') {
        convertedvalue = inputvalue / 1000;
    } else if (fromunit === 'kilometer' && tounit === 'meter') {
        convertedvalue = inputvalue * 1000;
    } else if (fromunit === 'mile' && tounit === 'kilometer') {
        convertedvalue = inputvalue * 1.60934;
    } else if (fromunit === 'yard' && tounit === 'meter') {
        convertedvalue = inputvalue * 0.9144;
    } else if (fromunit === 'foot' && tounit === 'meter') {
        convertedvalue = inputvalue * 0.3048;
    } else if (fromunit === 'inch' && tounit === 'centimeter') {
        convertedvalue = inputvalue * 2.54;
    } 
    else if (fromunit === 'kilogram' && tounit === 'gram') {
        convertedvalue = inputvalue * 1000;
    } else if (fromunit === 'gram' && tounit === 'kilogram') {
        convertedvalue = inputvalue / 1000;
    } else if (fromunit === 'pound' && tounit === 'kilogram') {
        convertedvalue = inputvalue * 0.453592;
    }
    else if (fromunit === 'celsius' && tounit === 'fahrenheit') {
        convertedvalue = (inputvalue * 9/5) + 32;
    } else if (fromunit === 'fahrenheit' && tounit === 'celsius') {
        convertedvalue = (inputvalue - 32) * 5/9;
    } else if (fromunit === 'celsius' && tounit === 'kelvin') {
        convertedvalue = inputvalue + 273.15;
    }
    else  if (fromunit === 'hour' && tounit === 'minute') {
        convertedvalue = inputvalue * 60;
    } else if (fromunit === 'minute' && tounit === 'hour') {
        convertedvalue = inputvalue / 60;
    } else if (fromunit === 'day' && tounit === 'hour') {
        convertedvalue = inputvalue * 24;
    }
    else  if (fromunit === 'hour' && tounit === 'second') {
        convertedvalue = inputvalue * 3600;
    } else if (fromunit === 'minute' && tounit === 'second') {
        convertedvalue = inputvalue * 60; // 1 minute = 60 seconds
    } else if (fromunit === 'day' && tounit === 'second') {
        convertedvalue = inputvalue * 86400; // 1 day = 86400 seconds
    } 
        else {
        convertedvalue = inputvalue; 
    }

    outputconversion.textContent = `${inputvalue} ${fromunit} = ${convertedvalue.toFixed(4)} ${tounit}`;
}
