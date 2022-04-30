function validname() {

    var name = document.myform.message1.value;

    var name3 = document.myform.message3.value;

    var name1 = document.myform.message4.value;

    var mobile2 = document.myform.message2.value;
    var name4 = document.myform.msg.value;



    if (name == null || name == "") {
        alert("pls enter text");
        return false;
    }

    if (mobile2.length == 10);
    else {
        alert("enter 10 digit number");
        return false;
    }
    if (name3 == null || name3 == "") {
        alert("pls enter text");
        return false;
    }
    
    if (name1 == null || name1 == "" ){
    
    alert("pls enter DATE");
    return false;
}
    if (name4 == null || name4 == "" ){
    
    alert("pls enter text MESSAGE");
    return false;
}

}




 