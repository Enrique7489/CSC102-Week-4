//Enrique Noriega 1/26/25



//Palindrome Checker Input
function checkPal()
{

    var string1 = document.getElementById("initialString").value;
    var splitString = string1.split("");
    var revString = splitString.reverse();
    var joinString = revString.join("");



    if (string1 == joinString)
        {
            document.getElementById("resultsString").innerHTML = "Palindrome ✅";
        }

        else 
        {
            document.getElementById("resultsString").innerHTML = "Not a Palindrome ❌";
        }

}
 
//Name and Zipcode Box Input
function box2Input()
{

    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var zipCode = document.getElementById("zCode").value;

    var fullName = firstName + " " + lastName;


    if (firstName.length == 0 || lastName.length == 0)
        {
            document.getElementById("box2Results").innerHTML = "First and Last name cannot be blank";
        }
    
    else if (fullName.length >20)
        {
            document.getElementById("box2Results").innerHTML = "Full Name cannot be more than 20 characters";
        }

    
    else if (zipCode.length !=5)
        {
            document.getElementById("box2Results").innerHTML = "Invalid Zip Code - Enter a Valid 5 digit Zip Code";
        }

    else 
    {
        document.getElementById("box2Results").innerHTML = "Credentials Accepted";
        document.getElementById("submitSuccess").style.display = "block"; // style.display='block' is used to overwrite 'none'

    }

}