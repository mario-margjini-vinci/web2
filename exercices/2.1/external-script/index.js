const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString());
function addDateTime(message) {
    let string =dateTimeNow.toLocaleDateString()+" "+dateTimeNow.toLocaleTimeString()+" : "+message;;
    return string
}

alert(addDateTime("caca"));