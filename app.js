// calculator 2




// function getNumber(num){
//     var result = document.getElementById("inputResult")
//     if(result.value == 0){
//         result.value = ""
//     }
//     result.value += num; 
// }

// function clearResult(){
//     var result = document.getElementById("inputResult")
//     result.value = 0
// }

// function getResult(){
//     var result = document.getElementById("inputResult")
//     result.value = eval(result.value)

// }

// function backSpace(){
//     var result = document.getElementById("inputResult")
//     result.value = result.value.slice(0,-1)
// }







// Calculator again

function getNum(num){
    var result = document.getElementById("result")
    if(result.value == 0){
        result.value = ""
    }
    result.value += num
}
function clearInput(){
    var result = document.getElementById("result")
    result.value = 0
}
function equal(){
    var result = document.getElementById("result")
    result.value = eval(result.value)
}
function backSpace(){
    var result = document.getElementById("result")
    result.value = result.value.slice(0,-1)
}



