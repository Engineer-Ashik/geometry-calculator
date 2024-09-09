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
    const area = (0.5 * triInOneValueParse * triInTwoValueParse);
    console.log(area);

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

//circle button
document.getElementById('circle-btn').addEventListener('click',function circle(){
    const circleInput = getElementValues('circle-x');
    const area = (3.1416 * circleInput * circleInput);
    const circleText = setElementValues('circle-text', area);
})

//Rectangles & Square button
document.getElementById('rectangle-btn').addEventListener('click',function rectangle(){
    const rectangleInputW = getElementValues('rectangle-w');
    const rectangleInputL = getElementValues('rectangle-l');
    const area = (rectangleInputW * rectangleInputL);
    const rectangleText = setElementValues('rectangle-text', area);
})

//parallelogram button
document.getElementById('parallelogram-btn').addEventListener('click',function parallelogram(){
    const parallelogramInputB = getElementValues('parallelogram-base');
    const parallelogramInputH = getElementValues('parallelogram-hight');
    const area = ( parallelogramInputB * parallelogramInputH );
    const parallelogramText = setElementValues('parallelogram-text', area);
})

//Rhombus button
document.getElementById('rhombus-btn').addEventListener('click',function rhombus(){
    const rhombusInputP = getElementValues('rhombus-p');
    const rhombusInputQ = getElementValues('rhombus-q');
    const area = ( rhombusInputP * rhombusInputQ );
    const rhombusText = setElementValues('rhombus-text', area);
})

//Pentagon button
document.getElementById('pentagon-btn').addEventListener('click',function pentagon(){
    const pentagonInputP = getElementValues('pentagon-p');
    const pentagonInputA = getElementValues('pentagon-a');
    const area = ( 0.5 * pentagonInputP * pentagonInputA );
    const pentagonText = setElementValues('pentagon-text', area);
})

// Ellipse button
document.getElementById('ellipse-btn').addEventListener('click',function ellipse(){
    const ellipseInputA = getElementValues('ellipse-a');
    const ellipseInputB = getElementValues('ellipse-b');
    const area = ( 3.1416 * ellipseInputA * ellipseInputB );
    const ellipseText = setElementValues('ellipse-text', area);
})

// Hexagon button
document.getElementById('hexagon-btn').addEventListener('click',function hexagon(){
    const hexagonInput = getElementValues('hexagon-a');
    const area = ( 0.5 * 3 * 1.7321 * hexagonInput * hexagonInput );
    const hexagonText = setElementValues('hexagon-text', area);
})

// Trapezium button
document.getElementById('trapezium-btn').addEventListener('click',function trapezium(){
    const trapeziumInputA = getElementValues('trapezium-a');
    const trapeziumInputB = getElementValues('trapezium-b');
    const trapeziumInputH = getElementValues('trapezium-h');
    const area = ( 0.5 * trapeziumInputH * (trapeziumInputA + trapeziumInputB) );
    const trapeziumText = setElementValues('trapezium-text', area);
})
