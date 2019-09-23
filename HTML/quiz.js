window.onload = function() {
    $('#add').on('click', addPlayers);
}

var index = 1;
var rowCount = 1;
 // add player to the table
function addPlayers() {

    var element = $('#username').val();
    var row = $(`<tr id="${index}"></tr>`);
    $('#tableBody').append(row)
    let newItem = $(`<td style="font-size: 40px; color: red; background-color: light-grey; width: 200px; border: 5px solid blue; font-family: Courier">${element}</td>`);
    $(`#${index}`).append(newItem);
    if (rowCount == 4 ) {
        index++;
        rowCount = 1;
    } else {
        rowCount++;
    }
}