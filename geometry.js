console.log("added successfully");

document.getElementById('triangle-b').addEventListener('click', function triangle() {
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

//Get Element Code Here
function getElementValues(elementId) {
    const getElementId = document.getElementById(elementId);
    const getElementValue = getElementId.value;
    const getElementFloat = parseFloat(getElementValue);
    getElementId.value = "";
    return getElementFloat;
}

//Set Element Code Here
function setElementValues(elementId, values) {
    const setElement = document.getElementById(elementId);
    const setElementText = setElement.innerText;
    const setElementFloat = parseFloat(setElementText);
    setElement.innerText = values;
}

//circle button
document.getElementById('circle-b').addEventListener('click',function circle(){
    const circleInput = getElementValues('circle-x');
    const area = (3.1416 * circleInput * circleInput);
    const circleText = setElementValues('circle-text', area);
})