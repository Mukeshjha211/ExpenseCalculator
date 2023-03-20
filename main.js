var form = document.getElementById('fillform');

var itemlist = document.getElementById('items');

// Form Submit Event 
form.addEventListener('submit', addItem);

// Add Item
function addItem(e){
    e.preventDefault();
var newItem = document.getElementById('item');

// Create new li element
var li = document.createElement('li');

// Add class 
li.className = 'list-group-item';

}