function aboutClick(){
    
document.getElementById("homeContent").classList.add("hidden");
document.getElementById("serviceContent").classList.add("hidden");
    document.getElementById("contactContent").classList.add("hidden");
document.getElementById("aboutContent").classList.remove("hidden");

}
function homeClick() {
    document.getElementById("homeContent").classList.remove("hidden");
    document.getElementById("aboutContent").classList.add("hidden");
    document.getElementById("serviceContent").classList.add("hidden");
    document.getElementById("contactContent").classList.add("hidden");
  }
  function serviceClick() {
    document.getElementById("homeContent").classList.add("hidden");
    document.getElementById("aboutContent").classList.add("hidden");
    document.getElementById("contactContent").classList.add("hidden");
    document.getElementById("serviceContent").classList.remove("hidden");
  }
  function contactClick() {
    document.getElementById("homeContent").classList.add("hidden");
    document.getElementById("aboutContent").classList.add("hidden");
    document.getElementById("serviceContent").classList.add("hidden");
    document.getElementById("contactContent").classList.remove("hidden");
  }