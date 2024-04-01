function convert(){
    let temperaturCe = document.getElementById('inputCel').value;

    let temperaturFor = ((temperaturCe * 1.8) + 32);
    document.getElementById('inputFor').value = temperaturFor;
}

function convertFor(){
    let temperaturCe = document.getElementById('inputFor').value;
    let temperaturFor = ((temperaturCe - 32) / 1.8);
    document.getElementById('inputCel').value = temperaturFor;
}
