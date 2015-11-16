$(document).ready(function() {
   
  function showLitter(litter) {
    var dogRow;
    $(".dogs").append("<table class='table table-striped'>");
    $(".dogs").append("<thead><tr><th>Name</th><th>Gender</th><th>Color</th><th>Fur</th><th>Size</th></tr></thead>")
    for (var i = 0; i < litter.length; i++) {
      dogRow = "<tr>";
      dogRow += "<td>" + litter[i].name + "</td>";
      dogRow += "<td>" + litter[i].gender + "</td>";
      dogRow += "<td>" + litter[i].color + "</td>";
      dogRow += "<td>" + litter[i].fur + "</td>"; 
      dogRow += "<td>" + litter[i].size + "</td>";
      dogRow += "</tr";
      $(".dogs").append(dogRow);
    }
    $(".dogs").append("</table>"); 
  }

  showLitter(litter);

});