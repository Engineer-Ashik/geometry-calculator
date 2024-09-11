console.log("added successfully");

//Triangle button
document.getElementById('triangle-btn').addEventListener('click', function triangle() {
    //console.log('Button clicked');
    const triInOne = document.getElementById("triangle-x");
    //console.log('Button xxx clicked');
    const triInOneValue = triInOne.value;
    const triInOneValueParse = parseFloat(triInOneValue);
    triInOne.value = "";

    const triInTwo = document.getElementById('triangle-y');
    //console.log('Button yyy clicked');
    const triInTwoValue = triInTwo.value;
    const triInTwoValueParse = parseFloat(triInTwoValue);
    triInTwo.value = "";

    if(triInOneValue >= 0 && triInTwoValue >= 0){
        const area = (0.5 * triInOneValueParse * triInTwoValueParse);
        console.log(area);    
    }
    else {
        alert('Please Enter A Valid Input');
    }


    const triText = document.getElementById('tri-text');
    const triTextValue = triText.innerText;
    const triTextFloat = parseFloat(triTextValue);

    triText.innerText = area;
})

//Get Element reusable Code Here
function getElementValues(elementId) {
    const getElementId = document.getElementById(elementId);
    const getElementValue = getElementId.value;
    const getElementFloat = parseFloat(getElementValue);
    getElementId.value = "";
    return getElementFloat;
}

//Set Element reusable Code Here
function setElementValues(elementId, values) {
    const setElement = document.getElementById(elementId);
    const setElementText = setElement.innerText;
    const setElementFloat = parseFloat(setElementText);
    setElement.innerText = values;
}

//Extra Area Calculation list 
function addToCalculationEntry(areaType, area ){
    console.log('Added calculationEntry Function now....');
    console.log(areaType + ' '+ area);
    const calculationEntry = document.getElementById('calculation-entry'); // id of area section div
    const counting = calculationEntry.childElementCount;

    const paragraph = document.createElement('p');
    paragraph.innerHTML = counting+1 + ' ' + areaType + ' ' + area + 'cm<sup>2</sup>'; // `${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Meter</button>`
    calculationEntry.appendChild(paragraph);

}

//circle button
document.getElementById('circle-btn').addEventListener('click',function circle(){
    const circleInput = getElementValues('circle-x');
    if( circleInput >= 0){
    const area = (3.1416 * circleInput * circleInput);
    const circleText = setElementValues('circle-text', area);
    addToCalculationEntry('CIRCLE' ,area);}
    else{
        alert('Please Enter A Valid Input');
    }
})

//Rectangles & Square button
document.getElementById('rectangle-btn').addEventListener('click',function rectangle(){
    const rectangleInputW = getElementValues('rectangle-w');
    const rectangleInputL = getElementValues('rectangle-l');
    if( rectangleInputW >= 0 && rectangleInputL >= 0){
    const area = (rectangleInputW * rectangleInputL);
    const rectangleText = setElementValues('rectangle-text', area);}
    else{
        alert('Please Enter A Valid Input');
    }
})

//parallelogram button
document.getElementById('parallelogram-btn').addEventListener('click',function parallelogram(){
    const parallelogramInputB = getElementValues('parallelogram-base');
    const parallelogramInputH = getElementValues('parallelogram-hight');
    if( parallelogramInputB >= 0 && parallelogramInputH >= 0 ){
    const area = ( parallelogramInputB * parallelogramInputH );
    const parallelogramText = setElementValues('parallelogram-text', area);}
    else{
        alert('Please Enter A Valid Input');
    }
})

//Rhombus button
document.getElementById('rhombus-btn').addEventListener('click',function rhombus(){
    const rhombusInputP = getElementValues('rhombus-p');
    const rhombusInputQ = getElementValues('rhombus-q');
    if( rhombusInputP >= 0 && rhombusInputQ >= 0 ){
    const area = ( rhombusInputP * rhombusInputQ );
    const rhombusText = setElementValues('rhombus-text', area);}
    else{
        alert('Please Enter A Valid Input');
    }
})

//Pentagon button
document.getElementById('pentagon-btn').addEventListener('click',function pentagon(){
    const pentagonInputP = getElementValues('pentagon-p');
    const pentagonInputA = getElementValues('pentagon-a');
    if( pentagonInputA >= 0 && pentagonInputP >= 0){
    const area = ( 0.5 * pentagonInputP * pentagonInputA );
    const pentagonText = setElementValues('pentagon-text', area);}
    else{
        alert('Please Enter A Valid Input');
    }
})

// Ellipse button
document.getElementById('ellipse-btn').addEventListener('click',function ellipse(){
    const ellipseInputA = getElementValues('ellipse-a');
    const ellipseInputB = getElementValues('ellipse-b');
    if( ellipseInputA >= 0 && ellipseInputB >= 0 ){
    const area = ( 3.1416 * ellipseInputA * ellipseInputB );
    const ellipseText = setElementValues('ellipse-text', area);}
    else{
        alert('Please Enter A Valid Input');
    }
})

// Hexagon button
document.getElementById('hexagon-btn').addEventListener('click',function hexagon(){
    const hexagonInput = getElementValues('hexagon-a');
    if( hexagonInput >= 0 ){
    const area = ( 0.5 * 3 * 1.7321 * hexagonInput * hexagonInput );
    const hexagonText = setElementValues('hexagon-text', area);}
    else{
        alert('Please Enter A Valid Input');
    }
})

// Trapezium button
document.getElementById('trapezium-btn').addEventListener('click',function trapezium(){
    const trapeziumInputA = getElementValues('trapezium-a');
    const trapeziumInputB = getElementValues('trapezium-b');
    const trapeziumInputH = getElementValues('trapezium-h');
    if( trapeziumInputA >= 0 && trapeziumInputB >= 0 && trapeziumInputH >=0 ){
    const area = ( 0.5 * trapeziumInputH * (trapeziumInputA + trapeziumInputB));
    const trapeziumText = setElementValues('trapezium-text', area);}
    else{
        alert('Please Enter A Valid Input');
    }
})
