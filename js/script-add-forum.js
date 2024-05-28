document.addEventListener("DOMContentLoaded", function () {
    const addAdvertisementBtn = document.getElementById("addAdvertisement");

    addAdvertisementBtn.addEventListener("click", function () {
        const city = document.getElementById("exampleFormControlTextarea1").value;
        const description = document.getElementById("exampleFormControlTextarea2").value;
        const phoneNumber = document.getElementById("exampleFormControlTextarea3").value;

        const advertisementData = {
            city: city,
            description: description,
            phoneNumber: phoneNumber
        };

        localStorage.setItem("advertisementData", JSON.stringify(advertisementData));
        window.location.href = "index.html"; // Redirect to the page with the advertisement
    });
});