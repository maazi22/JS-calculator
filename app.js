function press(e){
    var a = document.getElementById('inp').value += e
    
}

function eq(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}

function clr(){
    var a = document.getElementById('inp').value = ""
}

function del(){
    var a = document.getElementById('inp')
    a.value = a.value.slice(0,-1)
}


