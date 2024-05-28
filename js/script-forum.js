window.onload = function() {
    const advertisements = JSON.parse(localStorage.getItem('advertisements')) || [];

    const advertisementSection = document.querySelector('.mb-3');

    advertisements.forEach((advertisement, index) => {
        const advertisementDiv = document.createElement('div');
        advertisementDiv.classList.add('container');

        advertisementDiv.innerHTML = `
            <div id="itd-row" class="row border-bottom p-3">
                <div class="col">
                    <div class="d-flex">
                        <img src="${advertisement.image}" alt="" width="216" height="162">
                        <div>
                            <h5 class="itd-name">${advertisement.name}</h5>
                            <p class="itd-description">${advertisement.description}</p>
                            <div class="d-flex p-1 me-2">
                                <button class="btn btn-success btn-toggle d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#contacts-${index}" aria-expanded="false">
                                    Показать контакты
                                </button>
                                <button class="btn btn-success">Скрыть</button>
                            </div>
                        </div>
                        <!--Показ контактов-->
                        <div class="collapse" id="contacts-${index}">
                            <a class="itd-telephone me-2" href="tel:${advertisement.telephone}">${advertisement.telephone}</a><br>
                            <button class="btn btn-outline-success">Жалоба</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        advertisementSection.appendChild(advertisementDiv);
    });
};