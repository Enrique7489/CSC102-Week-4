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

//new sound created for bg music
function play()
{
    mySound = new sound("sounds/GoodNightLofi.mp3");
    mySound.play();
}

function stop()
{
    window.location.reload();
}