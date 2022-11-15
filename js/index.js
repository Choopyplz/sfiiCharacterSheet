fetch("https://data.mongodb-api.com/app/data-parqc/endpoint/data/v1").then((data) => {
    // console.log(data);
    return data.json();
}).then((objectData) => {
    console.log(objectData[0].name);
    let tableData="";
    objectData.map((values) => {
        tableData=`<h1>${values.name}</h1>`;
    })
})


