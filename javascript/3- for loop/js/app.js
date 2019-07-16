function expand() { 
    var size = document.getElementById("sizeInput").value;
    // document.getElementById("navContainer").style.height = size +"px";
    let i =0;
    setInterval(function(){
        
        if(i < parseInt(size)){
            console.log(i,size);
        document.getElementById("navContainer").style.height = i +"px";
        document.getElementById("navContainer").style.width = i +"px";
        i = i + 1;
        }
    },5)

 }