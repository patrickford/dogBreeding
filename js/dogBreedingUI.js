$(document).ready(function() {
   
  function showLitter(litter) {
    var dog;
    for (var i = 0; i < litter.length; i++) {
      dog = "<p> Name: " + litter[i].name + " Gender: " + litter[i].gender + " Color: " + litter[i].color 
            + " Fur: " + litter[i].fur + " " + " Size: " + litter[i].size + "</p>";
            + " "
      $(".dogs").append(dog);
    }
  }

  showLitter(litter);

});