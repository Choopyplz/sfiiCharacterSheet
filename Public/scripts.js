//Char Select Gallery-------------------------------------
const gallery = document.getElementById('gallery');
const playerSelectMap = document.getElementById('header');

const wMap = document.createElement('img');
wMap.src = 'img/wmDefault.png';
wMap.classList.add('worldMap');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const portrait = document.querySelector('.plPortrait');

const iconIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

iconIndexes.forEach(i => {
    const icon = document.createElement('img');
    icon.src = `img/portraits/ps-${i}.png`;
    icon.classList.add('charIcon');
    icon.setAttribute('id', 'psIcon' + i);

    //Hover Player Select
    icon.addEventListener('mouseover', function () {
        icon.src = `img/portraits/psHover-${i}.png`;
        wMap.src = `img/wm-${i}.png`;
    })
    icon.addEventListener('mouseout', function () {
        icon.src = `img/portraits/ps-${i}.png`;
        wMap.src = 'img/wmDefault.png';
    })

    icon.addEventListener('click', function () {
        modal.style.display = 'block';
        overlay.style.display = 'block';
        portrait.src = `img/portraits/largerPortraits/pl-${i}.png`;
    })

    //Close Modal
    window.onclick = function (e) {
        if (e.target == overlay) {
            modal.style.display = "none"
            overlay.style.display = 'none';
        }
    }

    const closeButton = document.getElementById('exit');
    closeButton.addEventListener('click', function () {
        modal.style.display = "none";
        overlay.style.display = 'none';
    })

    playerSelectMap.appendChild(wMap);
    gallery.appendChild(icon);

})

//Data Table--------------------------------------------

const url = 'http://localhost:3000/chars';

fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        let bioData = document.querySelector('#bioKeys');
        let out = '';
        data.forEach(char => {
            out += `
                    <tr>
                        <td>${char.name}</td>
                        <td>${char.date_of_birth}</td>
                        <td>${char.height}</td>
                        <td>${char.weight}</td>
                        <td>${char.blood_type}</td>
                        <td>${char.nationality}</td>
                        <td>${char.fighting_style}</td>
                        <td>${char.alignment}</td>
                    </tr>
                    `;

            bioData.innerHTML = out;
        })
    })
    .catch(error => console.log(error));


//Chart---------------------------------------------------


//  setup block
let labels = ['Ryu', 'E. Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M. Bison'];
let colorHex = ['#ffffff', '#a8d0f7', '#f28729', '#259927', '#5684c4', '#163c70','#ed3d1a','#499bde','#bd390d','#bda30f','#374a9e','#a31219',]

const data = {
    labels: labels,
    datasets: [{
        label: '% Played',
        data: [19.92, 2.26, 4.14, 13.16, 6.77, 7.52, 16.17, 8.65, 1.88, 3.01, 9.77, 6.77],
        borderWidth: 1,
        backgroundColor: colorHex
    }]
};

// options block
const options = {
    plugins: {
        legend: {
            display: true,
            labels: {
                color: '#ffffff',
                weight: '600',
                textAlign: 'left',
                font: {
                    size: '13px',
                    weight: 'bold'
                }
            }
        },
        title: {
            display: true,
            text: 'Character Popularity Based On Event Hubs Users',
            color: '#c4e5ff',
            font: {
                size: '18px'
            },
            padding: {
                top: 10,
                bottom: 10
            }
        }
    }
};

//  config block
const config = {
    type: 'pie',
    data,
    options
};

//  render block
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);