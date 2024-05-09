const form = document.querySelector('form');

form.addEventListener('submit',function(event){
   
    event.preventDefault();
    const expense = event.target.rupee.value;
    const descp = event.target.detail.value;
    const motive = event.target.reason.value;

    const form = document.querySelector('form');

    

    const list = document.querySelector('ul');

    const newLiItem = document.createElement('li');
    newLiItem.className = "list-group-item";
    newLiItem.innerHTML = 'Rs.' + expense + ' - ' + descp + ' - ' + motive;
    list.appendChild(newLiItem);
    

})