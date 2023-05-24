// 웹 브라우저 내의 모든 요소가 준비된 이후 실행
window.onload=function(){
    // 화면이 다 불러져왔으면 실행해
    var r=parseInt(Math.random()*256);
    var g=parseInt(Math.random()*256);
    var b=parseInt(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}

function setColor(){
    // 0~255까지 임의의 수를 추출
    var r=parseInt(Math.random()*256);
    var g=parseInt(Math.random()*256);
    var b=parseInt(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}