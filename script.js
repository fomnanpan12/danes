function myFunction() {
    var x = document.getElementById("navList");
    if (x.className === "nav-list") {
      x.className += " responsive";
    } else {
      x.className = "nav-list";
    }
  }
