fillTable('http://localhost:3000/chars', document.querySelector("table"));

// Bio Table
async function fillTable(url, table) {
    const tableHead = table.querySelector('thead');
    const tableBody = table.querySelector('tbody');
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0]);

    //clear table
    tableHead.innerHTML = '<tr></tr>';
    tableBody.innerHTML = '';

    //putting headers
    for (const headerText in data[0]) {
        const headerElement = document.createElement('th');
        headerElement.textContent = headerText;
        tableHead.querySelector('tr').appendChild(headerElement);
    };

    //for content
    for (let i = 0; i < data.length; i++) {
        const obj = Object.values(data[i]);
        const rowElement = document.createElement('tr');
        for (const cellText of obj) {
            const cellElement = document.createElement('td');
            cellElement.textContent = cellText;
            rowElement.appendChild(cellElement);
        }
        tableBody.appendChild(rowElement);
    };
};

//Char Select Gallery

const gallery = document.getElementById('gallery');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `img/portraits/ps-${i}.png`;
    image.classList.add('charIcon');

    image.addEventListener('click', () => {
        //for table/modal
    })

    gallery.appendChild(image);
})



