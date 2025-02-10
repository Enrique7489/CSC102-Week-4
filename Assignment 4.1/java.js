function first()
{
    var corgiImage = document.getElementById("CorgiIdle");
    var firstFuncOut = Math.ceil(Math.random()*2);
    document.getElementById("firstFuncOut").innerHTML = firstFuncOut;


    //Biscuit Found / Player Wins
    if(firstFuncOut == 1)
        {
            document.getElementById("firstFuncOut").innerHTML = "You found a biscuit!";
            corgiImage.src = "images/CorgiWin.png";
            document.getElementById("winSound").play();
            
        }
        
        //No Biscuits / Player Loses
        else if(firstFuncOut == 2)
            {
                
            document.getElementById("firstFuncOut").innerHTML = "Oof, no biscuits :("
                corgiImage.src = "images/CorgiFail.png";
                document.getElementById("loseSound").play();
            }

}

