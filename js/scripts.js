//Assigning a list element to a variable.
let li = $('<li></li>');
//adding the list element to the ordered list
list.append(li);
//Get input value and store it to inputValue
let inputValue = $('#input').val();
// let text = document.createTextNode(inputValue); 
//inputValue/text is added to the list
li.append(inputValue);
//If inputValue is not entered, alert will be given, else inputValue will be added to the list.
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.append(inputValue);
  }

  //Crossing out a list item:
  function crossOut() {
    li.addClass('strike');
}

//Event listener waits for double click to crossOut a list item
$("li").on("dblclick", crossOut);