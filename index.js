var data = [
    {
        id : 1,
        title : "Salary",
        status: 'Income',
        total : 5000000
    },
    {
        id : 2,
        title : "Foods",
        status : 'Expense',
        total : 2000000
    }
];
getData();

function submitHandler(){
    var typeTitle = document.getElementById('type-title').value;
    var typeStatus = document.getElementById('type-status').value;
    var typeTotal = document.getElementById('type-total').value;

    addData(typeTitle, typeTotal, typeStatus);
    getData();
    document.getElementById('type-title').value = "";
    document.getElementById('type-status').value = "";
    document.getElementById('type-total').value = "";
    return false;
}

function getData(){
    var typeData = document.getElementById('type-data');
    typeData.innerHTML = "";
    
    for(let i = 0; i < data.length; i++){
        let typeHTML = `
            <p>${data[i].id}. ${data[i].title} , ${data[i].status} : ${data[i].total}</p>
        `

        typeData.insertAdjacentHTML('beforeend',typeHTML);
    }
    
}
function addData (title,status,total){
    var typeObject = createObject(title,status,total);
    data.push(typeObject);
    console.log(`"${title}" has been inserted!`);
    console.log(typeObject);

}

function createObject(title,status,total){
    var temp = {
        id : generateId() + 1,
        title : title,
        status : status,
        total : total
    }
    return temp
}
function generateId(){
    var typeData = data.length;
    var id = data[typeData - 1].id;
    return id
}
