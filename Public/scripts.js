async function getData() {
    try {
      const data = await (await fetchall('https://localhost:3000/fetchall')).json()
      alert(JSON.stringify(data))
    } catch (error) {
      alert(error.message);
    }
}


// async function loadIntoTable(url, table) {
//     const tableHead = table.querySelector("thead");
//     const tableBody = table.querySelector("tbody");
//     const response = await fetch(url);
//     const data = await response.json();

//     console.log(data);
// }




// loadIntoTable(chars, document.querySelector("table"));


// fetch('/').then(res => res.json()).then(data => {
//     console.log("data:". data);
// });
