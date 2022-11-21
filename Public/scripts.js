// fillTable('http://localhost:3000/chars', document.querySelector('table'));

// // Bio Table
// async function fillTable(url, table) {
//     const tableHead = table.querySelector('thead');
//     const tableBody = table.querySelector('tbody');
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data[0]);

//     //clear table
//     tableHead.innerHTML = '<tr></tr>';
//     tableBody.innerHTML = '';

//     //putting headers
//     for (const headerText in data[0]) {
//         const headerElement = document.createElement('th');
//         headerElement.textContent = headerText;
//         tableHead.querySelector('tr').appendChild(headerElement);
//     };

//     //for content
//     for (let i = 0; i < data.length; i++) {
//         const obj = Object.values(data[i]);
//         const rowElement = document.createElement('tr');
//         for (const cellText of obj) {
//             const cellElement = document.createElement('td');
//             cellElement.textContent = cellText;
//             rowElement.appendChild(cellElement);
//         }
//         tableBody.appendChild(rowElement);
//     };
// };


//Char Select Gallery
const gallery = document.getElementById('gallery');
const playerSelectMap = document.getElementById('header');
const iconIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const wMap = document.createElement('img');
    wMap.src = 'img/wmDefault.png';
    wMap.classList.add('worldMap');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

iconIndexes.forEach(i => {
    const icon = document.createElement('img');
    icon.src = `img/portraits/ps-${i}.png`;
    icon.classList.add('charIcon');
    icon.setAttribute('id', 'psIcon' + i);

    //Hover Player Select
    icon.addEventListener('mouseover', function() {
        icon.src = `img/portraits/psHover-${i}.png`;
        wMap.src = `img/wm-${i}.png`;
    })
    icon.addEventListener('mouseout', function() {
        icon.src = `img/portraits/ps-${i}.png`;
        wMap.src = 'img/wmDefault.png';
    })

    icon.addEventListener('click', function () {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    })

    //Close Modal
    window.onclick = function(e){
        if(e.target == overlay) {
        modal.style.display = "none"
        overlay.style.display = 'none';
        }
    }

    playerSelectMap.appendChild(wMap);
    gallery.appendChild(icon);

})







