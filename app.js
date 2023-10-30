const input = document.getElementById('input');
const result = document.getElementById('result');
const inputType = document.getElementById('inputType');
const resultType = document.getElementById('resultType');



    let inputTypeValue = inputType.value;
    let resultTypeValue = resultType.value;


const myResult = () => {
   let inputTypeValue = inputType.value;
   let resultTypeValue = resultType.value;

    if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.001;
    } else if (inputTypeValue === 'meter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100;
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){
        result.value = input.value;
    }


    if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 1000;
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100000;
    } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer'){
        result.value = input.value;
    }

    
    if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.0001;
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 0.1;
    } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter'){
        result.value = input.value;
    }

} 

input.addEventListener('keyup', myResult);
inputType.addEventListener('change', myResult);
resultType.addEventListener('change', myResult);