let id = 0; 

document.getElementById('add').addEventListener('click', () => { 

    let createdDate = new Date(); 
    let table = document.getElementById('list');
    let row = table.insertRow(1); 
    row.setAttribute('id', `item-${id}`); 
    row.insertCell(0).innerHTML = '完'; 
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`;
    row.insertCell(2).innerHTML = document.getElementById('restaurant-name').value;
    row.insertCell(3).innerHTML = document.getElementById('type-of-ramen').value; 
    row.insertCell(4).innerHTML = document.getElementById('city-country').value; 
    let actions = row.insertCell(5); 
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('visit-date').value = '';
    document.getElementById('restaurant-name').value = '';
    document.getElementById('type-of-ramen').value = '';
    document.getElementById('city-country').value = '';



});

function createDeleteButton(id) { 

    let btn = document.createElement('button'); 
    btn.className = 'btn btn-primary'; 
    btn.id = id; 
    btn.innerHTML = 'Delete'; 
    btn.onclick = () => { 
        console.log(`Deleting row item-${id}`); 
        let elementToDelete = document.getElementById(`item-${id}`); 
        elementToDelete.parentNode.removeChild(elementToDelete); 
    }; 
    return btn;
}























// let button = document.getElementById('btn');

// let content = document.getElementById('content'); 

// button.addEventListener('click', () => { 
//     if(content.innerHTML == 'Goodbye') { 
//         content.innerHTML = 'Hello' ; 
//     } else { 
//         content.innerHTML = 'Goodbye'
//     }
// }); 

// document.getElementById('remove').addEventListener('click', () => { 
//     let idToRemove = document.getElementById('remove-id').value; 
//     let elementToRemove = document.getElementById(idToRemove); 
//     elementToRemove.parentNode.removeChild(elementToRemove); 
//     document.getElementById('remove-id').value = ""; 
// });

// let id = 0; 

// document.getElementById('add').addEventListener('click', () => { 
//         var parent = document.getElementById('paragraphs');
//         var newElement = document.createElement('p'); 
//         newElement.innerHTML = document.getElementById('new-text').value;
//         newElement.setAttribute('id', id++);  
//         parent.appendChild(newElement);
//         document.getElementById('new-text').value = ""; 
// });

