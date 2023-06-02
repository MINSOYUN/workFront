window.onload = () => {
    let img = document.createElement('img');
    let container = document.querySelector('#container');
    let date = new Date();

    img.setAttribute('width', '300px');
    img.setAttribute('height', '200px');

    if (date.getHours() <= 12) {
        img.src = 'images/morning.jpg';
    } else {
        img.src = 'images/afternoon.jpg';
    }

    container.appendChild(img);
};
