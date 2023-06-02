window.onload = function(){
    let java = document.createElement('li');
    let oracle = document.createElement('li');
    let jsp = document.createElement('li');
    let spring = document.createElement('li');

    let javatext = document.createTextNode('JAVA');
    let oracletext = document.createTextNode('ORACLE');
    let jsptext = document.createTextNode('JSP/SERVLET');
    let springtext = document.createTextNode('SPRING');

    java.appendChild(javatext);
    oracle.appendChild(oracletext);
    jsp.appendChild(jsptext);
    spring.appendChild(springtext);

    // 부모 요소가 ul인거 생각하기!
    let ul = document.querySelector('#items');
    let li = document.querySelectorAll('li');

    ul.insertBefore(java, li[0]);
    ul.insertBefore(oracle, li[0]);
    ul.appendChild(jsp);
    ul.appendChild(spring);


};