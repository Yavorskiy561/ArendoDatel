window.onload = function() {
    const cargos = JSON.parse(localStorage.getItem('cargos')) || [];

    const tableBody = document.querySelector('#tableBody');
    cargos.forEach((cargo, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${cargo.address}</td>
            <td>${cargo.description}</td>
            <td>${cargo.amount}</td>
            <td>${cargo.square}</td>
            <td><button class="btn btn-success btn-toggle d-inline-flex align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#contacts-${index}" aria-expanded="false">
                Показать контакты
            </button></td>
            <td><button class="btn btn-success" onclick="editRow(${index})">Изменить</button></td>
            <td><button class="btn btn-danger" onclick="deleteRow(${index})">Удалить</button></td>
        `;

        const contactsDiv = document.createElement('div');
        contactsDiv.classList.add('collapse', 'p-1');
        contactsDiv.id = `contacts-${index}`;
        contactsDiv.innerHTML = `
            <a class="itd-telephone me-2 p-1 nav-link text-success" href="tel:+${cargo.phone}">${cargo.phone}</a><br>
            <button class="btn btn-outline-success">Жалоба</button>
        `;

        row.appendChild(contactsDiv);
        tableBody.appendChild(row);
    });
};

function editRow(index) {
    const cargos = JSON.parse(localStorage.getItem('cargos'));
    const cargo = cargos[index];

    // Открываем модальное окно или перенаправляем на страницу редактирования
    // и передаем данные редактируемого объявления
    // ...
}

function updateLocalStorage() {
    const tableRows = document.querySelectorAll('#tableBody tr');
    const cargos = [];
    tableRows.forEach(row => {
        const cargo = {
            address: row.cells[0].textContent,
            description: row.cells[1].textContent,
            amount: row.cells[2].textContent,
            square: row.cells[3].textContent,
            phone: row.querySelector('.itd-telephone').textContent.trim()
        };
        cargos.push(cargo);
    });
    localStorage.setItem('cargos', JSON.stringify(cargos));
}

function deleteRow(index) {
    const tableRows = document.querySelectorAll('#tableBody tr');
    tableRows[index].remove();
    updateLocalStorage();
}
