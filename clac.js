let element=document.getElementById("result")
function appendvalue(value){
    result.value+=value; 
}
function clearResult(){
    result.value="";
}
function deletlast(){
    result.value=result.value.slice(0,-1);
}
function calculate(){
    try{
        result.value=
        eval(result.value);}
        catch{
            result.value="Error";
        }
    }

