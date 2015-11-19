$(document).ready(function() {
   
  function showLitter(litter) {
    $("#dogs").empty(); 

    var dogTable;

    dogTable = "<table class='table table-condensed table-bordered table-hover'>";
    dogTable += "<thead><tr>";
    dogTable += "<th>Name</th>";
    dogTable += "<th>Gender</th>";
    dogTable += "<th>Color</th>";
    dogTable += "<th>Fur</th>"; 
    dogTable += "<th>Size</th>";
    dogTable += "<th>Mate</th>";    
    dogTable += "</tr></thead>";    

    for (var i = 0; i < litter.length; i++) {
      if (litter[i].gender=== 'female') {
        dogTable += "<tr class='danger'>";        
      } else {
        dogTable += "<tr class='info'>"
      }
      dogTable += "<td>" + litter[i].name   + "</td>";
      dogTable += "<td>" + litter[i].gender + "</td>";
      dogTable += "<td>" + litter[i].color  + "</td>";
      dogTable += "<td>" + litter[i].fur    + "</td>"; 
      dogTable += "<td>" + litter[i].size   + "</td>";
      if (litter[i].gender=== 'female') {
        dogTable += "<td><input type='radio' name='female' value=" + i + "></td>";
      } else {
        dogTable += "<td><input type='radio' name='male' value=" + i + "></td>";        
      }
      dogTable += "</tr>";
    }
    dogTable += "</table>";
    
    $("#dogs").append(dogTable); 
  }

// Large Breeding
  $("#large-breeding").click(function(e) {
    e.preventDefault();
    var maxSize = $("#maxSize").val()
    var litter = fatDogs(dogC, dogD, maxSize);
    showLitter(litter);
    return false;
  });

// Color Breeding
  $("#color-breeding").click(function(e) {
    e.preventDefault();
    var litterColor = $("input[name=colors]:checked").val();
    var litter = pureColorDogs(dogC, dogD, litterColor);
    showLitter(litter);
    return false;
  });

  showLitter(litter);  

});


