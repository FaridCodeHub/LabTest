function area(){
    let l = document.getElementById('length').value;
    let w = document.getElementById('breadth').value;
    let a = l*w;

    document.getElementById('result').innerHTML="AREA"+a;
}



