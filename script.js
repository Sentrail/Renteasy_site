var myTimeout = setTimeout(function() {
    if(confirm("Press OK to open this document!!")) {
    } else {
    alert("You can't close it, It's opened already");
    }
    }, 0);

function searchForm(){
var keyWords = "'Boys Quarters', 'boys quarters', 'boys quarter', 'Boys Quarter', 'Bedroom Flat', 'bedroom flat', 'Room', 'room', 'Rooms', 'rooms', 'Room and parlour', 'room and parlour', 'Room Self Contain', 'room self contain', 'Room and Parlour Self Contain', 'room and parlour self contain'";
if(formSearch === "Search" || formSearch === ""){
    document.getElementById('searchBox').value;
    alert("Please Enter a Search keyword");
    return false;
}
}

function validateForm() {
    var phoneNumber = document.getElementById("inputBox4").value;
    if(confirm( phoneNumber == "!£$%^&*)(_-=}]{[:;@'~#>.,<?/\|")) {
    alert("Incorrect input in the text field");
    return false;
    }
    }