const numberElement = document.getElementById('number');
const calculateElement = document.getElementById('calculate');
const resultElement = document.getElementById('result');


calculateElement.addEventListener('click', (any) => {
    let number = numberElement.value;
    calculaterPrimeFactors(number);
});

function calculaterPrimeFactors(number) {
    let factors = [];
    let divisor = 2;
    while (number >= 2) {

        if (number % divisor === 0) {
            factors.push(divisor);
            number /= divisor;
        } else {
            divisor++
        }

        let intialVal = numberElement.value;

        resultElement.innerText = `${intialVal} = ${factors.join(' x ')}`;
    }
}
