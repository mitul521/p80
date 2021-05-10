narray=[];
function submit(){
    for ( var i=1;i<=4;i++){
        narray.push(document.getElementById("friend"+i).value);
    }
      document.getElementById("display").innerHTML=narray;  
    }
    function sort(){
        narray.sort();
        document.getElementById("display-sort").innerHTML=narray;
    }