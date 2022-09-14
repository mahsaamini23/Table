const userForm = document.querySelector('#userForm');
const table = document.querySelector('#table');
const submit = document.querySelector('.userFormSubmit');


userForm.addEventListener('submit',function(e){
    e.preventDefault();

    const items = ['first-name' , 'last-name' , 'email' ,'code', 'phone' , 'option'];
    const table = document.querySelector('table');
    const tr = document.createElement('tr');
    const idTd = document.createElement('td');
    const id = Math.floor((Math.random()*100)-1);
    idTd.innerHTML=id;
    tr.appendChild(idTd);

    for (let i=0 ;i<items.length ; i++){
        const td = document.createElement('td');

        if(userForm[i].id === items[i]){
            td.innerHTML = userForm[i].value;
            tr.appendChild(td);

        }else{
            let deleteBtn = document.createElement('button');
            deleteBtn.type='button';
            deleteBtn.id = "delete-btn";
            deleteBtn.innerText = 'Delete';
            deleteBtn.addEventListener('click', function(e){
                table.removeChild(e.target.parentElement.parentElement);
            })
            td.appendChild(deleteBtn);
            tr.appendChild(td);
        
            let updateBtn = document.createElement('button');
            updateBtn.type='button';
            updateBtn.id ='update-btn';
            updateBtn.innerText = 'Update';
            updateBtn.addEventListener('click',function(e){
                submit.innerText = 'update';
                const row = e.target.parentElement.parentElement;
                console.log(row );
            })
            submit.innerText = "submit";
            td.appendChild(updateBtn);
            tr.appendChild(td);
        
        }
    }


    table.append(tr);
    e.target.reset();
});
