var myTimeout = setTimeout(function() {
    if(confirm("Press OK to open this document!!")) {
    } else {
    alert("You can't close it, It's opened already");
    }
    }, 10);

var keyWords = "'Boys Quarters', 'boys quarters', 'boys quarter', 'Boys Quarter', 'Bedroom Flat', 'bedroom flat', 'Room', 'room', 'Rooms', 'rooms', 'Room and parlour', 'room and parlour', 'Room Self Contain', 'room self contain', 'Room and Parlour Self Contain', 'room and parlour self contain'";
function searchForm(formSearch){
if(formSearch === "Search" || formSearch === ""){
    document.getElementById('search_box').value="Please Enter a keyword";
    return false;
}
}

function validateForm() {
    var Name = document.getElementById("demo").value;
    if( Name == "") {
    alert("Please fill in the empty text fields");
    return false;
    }
    }