window.onload = ()=>{
    let button = document.querySelector('button');
    button.addEventListener('click', ()=>{
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let td2 = document.createElement('td');
        tr.appendChild(td);
        tr.appendChild(td2);

        let tbody = document.createElement('tbody');
        tbody.appendChild(tr);
        let attendant = document.querySelectorAll('#attendant');
        attendant.appendChild(tbody);

        let name = document.querySelector('#username').value;
        let major = document.querySelector('#major').value;

        thead.appendChild(name);

        

    });
};