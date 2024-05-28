document.addEventListener("DOMContentLoaded", function () {
    const press = document.querySelector("#addAdvertisement");
    const cityOutput = document.querySelector("#exampleFormControlTextarea1");
    const descriptionSelect = document.querySelector("#exampleFormControlTextarea2");
    const phoneSelect = document.querySelector("#exampleFormControlTextarea3");
    const amountSelect = document.querySelector("#exampleFormControlTextarea4");
    const squareSelect = document.querySelector("#exampleFormControlTextarea5");

    

    // Обработчик события клика на кнопку
    press.addEventListener('click', function() {
        console.log('1')
        const city = cityOutput.value;
        const description = descriptionSelect.value;
        const amount = amountSelect.value;
        const square = squareSelect.value;
        const phone = phoneSelect.value;
    

        const cargo = {
            city:city,
            description:description,
            amount:amount,
            square:square,
            phone: phone
        };

        let cargos = JSON.parse(localStorage.getItem('cargos')) || [];
        cargos.push(cargo);
        localStorage.setItem('cargos', JSON.stringify(cargos));
        console.log('2')
    });
});