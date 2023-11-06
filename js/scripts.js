function newItem() {

  // Add new list item
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  //Add if/else condition to check if user enters text before
  //clicking add button
  if (inputValue === '') {
    alert('You must write something before clicking Add button.')
  } else {
    let list = $('#list');
    list.append(li);
  }

  // Add strike function to croos out a list item
  function crossOut() {
    li.toggleClass('strike');
  }
  li.on('dblclick', crossOut);

  // Create delete button "X"

  let crossOutButton = $('<button></button>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);

  //Add function to delete a list item m- class delete
  function deleteListItem() {
    li.addClass('delete');
  }

  // Reorder items
  $('#list').sortable();

}