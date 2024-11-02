

function passwordGenerator(){
  var arr = "@123abcdefghijklmnopqrst"
  var random = "";
  var paasword = " ";
  
  for ( var i = 0 ; i < 12 ; i++){
  random = Math.floor(Math.random() * arr.length)
  paasword += arr[random]
  
  }
  
  
  document.getElementById("inputBox").innerHTML = `<span> ${paasword}</span>`
  
  }