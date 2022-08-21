// EnterDeposit, storedDeposit

console.log('calculate');

function calculate(idNo) {
    const element1 = document.getElementById(idNo)

    const element1Value = element1.value;
    const element1String = parseFloat(element1Value)

    element1.value = '';
    return element1String



};
function calculateInner(idNo) {
    const element1 = document.getElementById(idNo).innerText

    const element1String = parseFloat(element1)
    return element1String


};

