$(document).ready(function(){
  function contains(number, digit) {
    if (number < 0) { // make sure negatives are dealt with properly, alternatively replace this if statement with number = Math.abs(number)
        number *= -1;
    }
    if (number == digit) { // this is to deal with the number=0, digit=0 edge case
        return true;
    }
    while (number != 0) { // stop once all digits are cut off
        if (number % 10 == digit) { // check if the last digit matches
            return true;
        }
        number = Math.floor(number / 10); // cut off the last digit
    }
    return false;
}
  $("form").submit(function(event){
    event.preventDefault();
    var userInput=parseInt($("#number").val());
    for (i=0;i<=userInput;i++){
      if(contains(i,3)){
        $("#output").append("I'm sorry, Dave. I'm afraid I can't do that."+",");
      } else if(contains(i,2)){
        $("#output").append("Boop!"+",");
      } else if(contains(i,1)){
        $("#output").append("Beep!"+",");
      } else{
        $("#output").append(i+",");
      }
    }


  });
});
