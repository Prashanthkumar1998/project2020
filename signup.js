function validate()
{
    var name=document.getElementById("name");
    var Spacialization=document.getElementById("Spacialization");
    var address=document.getElementById("address");
   

    var city=document.getElementById("city");
    var course=document.getElementById("course");
    var state=document.getElementById("state");
    var pincode=document.getElementById("pincode");
    var email=document.getElementById("email");
    var pass=document.getElementById("pass");
    var rpass=document.getElementById("rpass");
    var dob=document.getElementById("dob");
    var mobile=document.getElementById("mobileno");
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  
 if(name.value=="")
 {
     
     alert("Please Enter your Name")
     return false
 }else if(!(/^[a-zA-Z ]+$/).test(name.value))
 {
     alert("Name should have only alphabets ")
     return false
 }
 
 if(Spacialization.value=="")
 {
     alert("Please enter your Spacialization")
     return false
 }
 else if(!(/^[a-zA-Z ]+$/).test(Spacialization.value))
 {
     alert("Spacialization should have only alphabets")
     return false
 }

 if(address.value=="")
 {
    alert("Please enter Adress")
    return false
 }else if(!(/^[a-zA-Z,0-9 ]+$/).test(address.value))
 {
     alert("Enter proper adress")
     return false
 }

 if(city.selectedIndex=="")
 {
    alert("Please select city")
    return false
 }
 

 if(pincode.value=="")
 {
    alert("Please enter Pincode")
    return false
 }else if(!(/^[0-9]{6}$/).test(pincode.value))
 {
     alert("Enter proper Picode")
     return false
 }
 
 
 if(email.value=="")
 {
    alert("Please enter Email Id")
    return false
 }
else if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{5,6})+\.)+([a-zA-Z0-9]{3,4})+$/).test(email.value))
{
    alert("invalid email")
    return false
}
 
 if(pass.value=="")
 {
     alert("Please Enter Password")
     return false 
 }else if(!((/^[A-Za-z0-9@#*&]\w{7,14}\d{1,4}$/)).test(pass.value))
 {
     alert("Password should contain atleast 7-14 characters and 1-4 digits")
    return false
 }
 else if(rpass.value=="")
 {
     alert("Please Comfirm Password")
     return false 
 }
 else if(rpass.value!=pass.value)
 {
     alert("Password did not match")
     return false
 }
 
 
 if(dob.value=="")
 {
     alert("Pnter date of birth")
     return false
 }

 if(mobile.value=="")
 {
     alert("Please enter mobile number")
     return false
 }else if(!(/^[0-9]{10}$/).test(mobile.value))
 {
     alert("Enter proper mobile number")
     return false
 }

 
 if(fileInput.value=="")
 {
     alert("Please upload the pic")
     return false
 }else if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput.value = '';
        return false;
    }else
    {
        //Image preview
        if (fileInput.files && fileInput.files[0]) 
        {
            var reader = new FileReader();
            reader.onload = function(e)
             {
                document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}


 


