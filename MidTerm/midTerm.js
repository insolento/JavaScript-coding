var checkBox = document.getElementById("copy");
document.getElementById("delivery_state").selectedIndex = -1
document.getElementById("billing_state").selectedIndex = -1
// Made selectedIndex = -1 as required

function copyFunction() {
    //Our function is simply copying the values from billing to delivery if checkbox checked
    if (checkBox.checked == true) {
        document.getElementById("delivery_name").value = document.getElementById("billing_name").value;
        document.getElementById("delivery_surname").value = document.getElementById("billing_surname").value;
        document.getElementById("delivery_address").value = document.getElementById("billing_address").value;
        document.getElementById("delivery_city").value = document.getElementById("billing_city").value;
        document.getElementById("delivery_state").selectedIndex = document.getElementById("billing_state").selectedIndex;
        // We also copying here by index not by value
        document.getElementById("delivery_zip").value = document.getElementById("billing_zip").value;
        document.getElementById("delivery_phone").value = document.getElementById("billing_phone").value;
    } else {
    // If not, I decided to delete values, If you are ticking checkbox by acccident, you don't want to delete all values after by yourself
        document.getElementById("delivery_name").value = "";
        document.getElementById("delivery_surname").value = "";
        document.getElementById("delivery_address").value = "";
        document.getElementById("delivery_city").value = "";
        document.getElementById("delivery_zip").value = "";
        document.getElementById("delivery_state").selectedIndex = -1;
        //bringing back selectedIndex=-1
        document.getElementById("delivery_phone").value = "";
    }
}