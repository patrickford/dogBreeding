$(document).ready(function() {
   
  function showLitter(litter) {
    $(".dogs").empty(); 

    var dogTable;

    dogTable = "<table class='table table-striped table-hover'>";
    dogTable += "<thead><tr>";
    dogTable += "<th>Name</th>";
    dogTable += "<th>Gender</th>";
    dogTable += "<th>Color</th>";
    dogTable += "<th>Fur</th>"; 
    dogTable += "<th>Size</th>";
    dogTable += "</tr></thead>";    

    for (var i = 0; i < litter.length; i++) {
      dogTable += "<tr>";
      dogTable += "<td>" + litter[i].name   + "</td>";
      dogTable += "<td>" + litter[i].gender + "</td>";
      dogTable += "<td>" + litter[i].color  + "</td>";
      dogTable += "<td>" + litter[i].fur    + "</td>"; 
      dogTable += "<td>" + litter[i].size   + "</td>";
      dogTable += "</tr>";
    }
    dogTable += "</table>";
    
    $(".dogs").append(dogTable); 
  }

// Large Breeding
  $("#large-breeding").click(function(e) {
    e.preventDefault();
    var litter = fatDogs(dogC, dogD);
    showLitter(litter);
    return false;
  });

// Color Breeding
  $("#color-breeding").click(function(e) {
    e.preventDefault();
    var litter = pureColorDogs(dogC, dogD, "white");
    showLitter(litter);
    return false;
  });

  showLitter(litter);  

});


