const array = [null, null, null, null, null, null, null, null, null];
var nextTurn = "X";
function addXorO(id){
    if(nextTurn === "X"){
        if(array[id]==null) {
            array[id] = "X";
            document.getElementById(id).innerText = "X";
        }
        verifyX();
        nextTurn="O";
        
    }
    else{
        if(array[id]==null) {
            array[id] = "0";
            document.getElementById(id).innerText = "O";
        }
        verify0();
        nextTurn="X";
        
    }
            
    console.log(array);
}

function verify0(){
    console.log(array);
    if(array[0] === '0' && array[1] === '0' && array[2] === '0' ||
        array[3] === '0' && array[4] === '0' && array[5] === '0' ||
        array[6] === '0' && array[7] === '0' && array[8] === '0'){
        alert("O wins");
        location.reload();
    }
    else if(array[0] === '0' && array[3] === '0' && array[6] === '0' ||
        array[1] === '0' && array[4] === '0' && array[7] === '0' ||
        array[2] === '0' && array[5] === '0' && array[8] === '0'){
        alert("0 wins");
        location.reload();
    }
    else if(array[0] === '0' && array[4] === '0' && array[8] === '0' ||
        array[2] === '0' && array[4] === '0' && array[6] === '0'){
        alert("0 wins");
        location.reload();
    }
}

function verifyX(){
    console.log(array);
    if(array[0] === 'X' && array[1] === 'X' && array[2] === 'X' ||
        array[3] === 'X' && array[4] === 'X' && array[5] === 'X' ||
        array[6] === 'X' && array[7] === 'X' && array[8] === 'X'){
        alert("X wins");
        location.reload();
    }
    else if(array[0] === 'X' && array[3] === 'X' && array[6] === 'X' ||
        array[1] === 'X' && array[4] === 'X' && array[7] === 'X' ||
        array[2] === 'X' && array[5] === 'X' && array[8] === 'X'){
        alert("X wins");
        location.reload();
    }
    else if(array[0] === 'X' && array[4] === 'X' && array[8] === 'X' ||
        array[2] === 'X' && array[4] === 'X' && array[6] === 'X'){
        alert("X wins");
        location.reload();
    }
}