const employee = new Map

([
    ["name","lalith"],
    ["age", 23],
    ["id ", 1234],
    ["location", "chennai"],
    ["job", "business"],

    
]);

//for deleting map element ..command give below
//employee.delete("id");

//for checking element is there or not if it is show true or flase.. command given below
//employee.has("age")

document.getElementById("para").innerHTML=employee.get("location");

