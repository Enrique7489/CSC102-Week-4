//Enrique Noriega 1/26/25

function checkCreds()
{
    
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badge = document.getElementById("badgeID").value;
    var pass = document.getElementById("PW").value;

    
    var fullName = firstName + " " + lastName;

    //Full Name, Badge and Password Input / Password: CorgiLife
    if (firstName.length == 0 || lastName.length == 0)
    {
            
            document.getElementById("loginStatus").innerHTML = "First and Last name cannot be blank";
    
    }

    else if (fullName.length >20)
        {
            document.getElementById("loginStatus").innerHTML = "Name is too long - must be less than 20 characters";
        }

    else if (badge.length !=3)
        {
            document.getElementById("loginStatus").innerHTML = "Badge Number is not 3 digits - Invalid";
        }

    else if (pass != "CorgiLife") 
        {
            document.getElementById("loginStatus").innerHTML = "Password is incorrect";
        }

    else
    {
        document.getElementById("loginStatus").innerHTML = "Credentials Validated";
    
        location.replace("game.html");

    }
}