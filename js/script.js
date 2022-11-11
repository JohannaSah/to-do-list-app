
function newItem() {

    // 1. adding a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = document.createTextNode(inputValue);
    li.append(inputValue);

    if (inputValue === '') {
        alert ('You must write something');
    }
    else {
        let list = $('#list');
        list.append(li);
    }

    // 2. Crossing out an item from the list of items:
    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    // 3(i). adding a delete button
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', deleteListItem);

    // 3(ii). adding Class delete (display:none) from the css:
    function deleteListItem() {
        li.addClass('delete')
    }

    // 4. reordering the items#
    $('#list').sortable();
}