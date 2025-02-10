//Enrique Noriega 2/9/25
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}

function play()
{
    mySound = new sound("sounds/GoodNightLofi.mp3");
    mySound.play();
}

function stop()
{
    window.location.reload();
}


var corgiInterval = 0;
var change = 100;

//Sound for Swimming Corgi

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}

function intStart()
{
    document.getElementById("startM").disabled = true;
    document.getElementById("stopM").disabled = false;

    mySound2 = new sound("sounds/waterSwim.mp3");
    mySound2.play();

    document.getElementById("16Corgi").src = "images/corgiSwimGIF.gif";

    var corgi = document.getElementById("16Corgi");
 
    corgi.style.bottom = "-400px";

    corgiInterval = setInterval(function()
    {
        corgi.style.left = change +"px";

        change +=2;

    }, 20);
}

function intStop()
{
    document.getElementById("startM").disabled = false;
    document.getElementById("stopM").disabled = true;
    

    clearInterval(corgiInterval);
}

function intReset()
{
    window.location.reload();
}

