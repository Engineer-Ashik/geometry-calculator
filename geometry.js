console.log("added successfully");

document.getElementById('triangle-b').addEventListener('click', function triangle(){
    //console.log('Button clicked');
    const triInOne = document.getElementById("triangle-x");
    //console.log('Button xxx clicked');
    const triInOneValue = triInOne.value;
    const triInOneValueParse = parseFloat(triInOneValue);
    triInOne.value="";

    const triInTwo = document.getElementById('triangle-y');
    //console.log('Button yyy clicked');
    const triInTwoValue = triInTwo.value;
    const triInTwoValueParse = parseFloat(triInTwoValue);
    triInTwo.value="";
    const area = ( 0.5 * triInOneValueParse * triInTwoValueParse );
    console.log(area);

    const triText = document.getElementById('tri-text');
    const triTextValue = triText.innerText;
    const triTextFloat = parseFloat(triTextValue); 

    triText.innerText = area;
})

//Get Element Code Here
function getElementValues(elements){
const getElementId = document.getElementById(elements);
const getElementValue = getElementId.value;
const getElementFloat = parseFloat(getElementValue);
getElementId.value="";
return getElementFloat;
}

document.getElementById('circle-b').addEventListener('click', function circle(){
    const circlebutt = getElementValues('circleX');
    console.log(circlebutt);
})