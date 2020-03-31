 

$(document).ready(function(){
  $("form#palindrome-detector").submit(function(event){
    event.preventDefault();

    var originalInput = $("#phrase").val();
    var newArray = originalInput.split("");
    var arrayLength = newArray.length;
    var firstHalf = newArray.slice(0, Math.floor(arrayLength/2))
    var lastHalf = firstHalf.reverse()
    


    $("#finalResult").text(originalInput);

    console.log("foof")
  });
});

