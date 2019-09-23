window.onload = function() {

    addTitle();

}

function addTitle() {
    var name = "Peter";
    $('#userName').html(`Welcome, ${name}`);
}

$('#addTicket').on('click', add);

        // $('#newItem').keydown(function(e){
        //     if(e.keyCode==13) {
        //         add();
        //     }
        // })

        function add() {
            var element1 = $('#type').val();
            var element2 = $('#amount').val();
            var newItem = $(`<li>${element1} $ ${element2}</li>`);
            $('#ticketList').append(newItem);

            $('#newItem').val('');
        }