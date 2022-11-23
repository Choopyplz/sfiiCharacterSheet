
//Char Select Gallery
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
        portrait.src = `img/portraits/largerPortraits/pl-${i}.png`;
    })

    //Close Modal
    window.onclick = function(e){
        if(e.target == overlay) {
        modal.style.display = "none"
        overlay.style.display = 'none';
        }
    }

    const closeButton = document.getElementById('exit');
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
        overlay.style.display = 'none';    
    })

    playerSelectMap.appendChild(wMap);
    gallery.appendChild(icon);

})

//Data Table

const url = 'http://localhost:3000/chars';

fetch(url)
    .then(res => {
        return res.json();
    })

    .then(chars => {
        let bioData = document.querySelector('#bioKeys');
        let out = '';
        for(let char of chars) {
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
        }

        bioData.innerHTML = out;

    })