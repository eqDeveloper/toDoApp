//Variables
//List Icons in SVG formats
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';

var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

//User clicked on the add button
//If there is any text inside the item field, add that item to the list
document.getElementById('add').addEventListener('click', function() {

    var value = document.getElementById('item').value;

    if (value) {
        addItemToList(value);
        document.getElementById('item').value = ''; //reset the input field
    }

});

//Create the remove Item function
function removeItem() {
    // You can return event data by using console.log(e); passing the event in the method
    var item = this.parentNode.parentNode; //Get the item being clicked on
    var parent = item.parentNode; //Get the parent node of the item
    parent.removeChild(item);
}

function itemCompleted() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    var target = (id === 'todo') ? document.getElementById('completed') : document.getElementById('todo');

    //If the item is in the todo list move it to the completed else if in completed move it to to do
    parent.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);

}

//Function to add the new item to the ToDo List
function addItemToList(text) {
    var list = document.getElementById('todo');

    //Create new line item element
    var item = document.createElement('li');
    item.innerText = text;

    //Create new add buttons div and class
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    //Create new Remove button
    var remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = removeSVG;

    // Add the click function to the remove button
    remove.addEventListener('click', removeItem);

    //Create new Completed button
    var completed = document.createElement('button');
    completed.classList.add('complete');
    completed.innerHTML = completeSVG;

    // Add the click function to the completed button
    completed.addEventListener('click', itemCompleted);

    //adding the new item to the buttons div
    buttons.appendChild(remove);
    buttons.appendChild(completed);
    item.appendChild(buttons);

    //This is where you add the new item to the list
    // To add the item to the bottom of the list you would use - list.appendChild(item);
    // We want to add the newest item to the top of the list so we will use the insertBefore
    list.insertBefore(item, list.childNodes[0]); //Insert the new value at position 0 in the list

}
