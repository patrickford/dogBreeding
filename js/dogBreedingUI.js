$(document).ready(function() {
   
  function showLitter(litter) {
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

  function showLargeBreeding() {

  }

  function showColorBreeding() {

  }

  showLitter(litter);  

});


