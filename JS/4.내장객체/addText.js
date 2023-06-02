window.onload = () =>{
    let container = document.querySelector('#containerh2');
    let order = document.querySelector('#order');
    let orderInfo = document.querySelector('#orderInfo');
    
    order.addEventListener('click', ()=>{
        let p = document.createElement('p');
        let h2 = document.querySelector('#container > h2').innerHTML;
        let text = document.createTextNode(h2);
        
        p.appendChild(text);
        p.style.fontSize='0.8em';
        p.style.color='navy';
        orderInfo.appendChild(p);
    });

};