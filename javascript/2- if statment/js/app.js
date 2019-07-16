function changeColor() { 
    var color = document.getElementById("colorPicker").value;
    //alert(color);
    if(color == "red"){
        document.getElementById("colorPicker").style.backgroundColor = "red";
    }


    if(color == "yellow"){
        document.getElementById("colorPicker").style.backgroundColor = "yellow";
    }
 }