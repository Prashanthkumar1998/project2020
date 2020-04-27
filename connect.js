function validate()
{
    var name=document.getElementById("name");
    var person=document.getElementById("person");
    if(!(/^[a-zA-Z ]+$/).test(name.value))
 {
     alert("Topic name should have only alphabets ")
     return false
 }
    else if(person.value=="")
    {
        alert("enter person name")
        return false
    }
    else {
        return true
    }
}