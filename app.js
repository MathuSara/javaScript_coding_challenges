let favNum = prompt("What's your favorite Number?");

if(favNum >= 1000) {
  alert("Woah, that's a big number!!");
}
else if(favNum >= 0 && favNum < 1000 ) {
  alert("That's a cool number!.");
}

else if(favNum < 0) {
  alert("Negative numbers?! That's just bananas.");
}

else {
  if(favNum =! parseInt(favNum)) {
  alert("Enter a valid integer");
}
}