const textbox = document.querySelector("#text-overlay");

class Quote{
    constructor({quotesToUse = [], quoteindex, font ="50px Arial"}){
        this.quoteindex = quoteindex
        this.quotesToUse = quotesToUse
        this.quoteToDisplay = this.quotesToUse[this.quoteindex]
        this.font = font

        this.position = {
            x: canvas.width+5,
            y: 250
        }

        this.velocity = {
            x:-2,
            y:0
        }
    }


    updatedown()
    {
        // Move the subject back like a spotify music track
        if (this.quoteindex <= 0)
        {
            this.quoteindex = 84;
        }
        else if(this.quoteindex <= 12)
        {
            this.quoteindex = 0;
        }
        else if (this.quoteindex <= 24)
        {
            this.quoteindex = 12;
        } 
        else if (this.quoteindex <= 36)
        {
            this.quoteindex = 24;
        }
        else if (this.quoteindex <= 48)
        {
            this.quoteindex = 36;
        }
        else if (this.quoteindex <= 60)
        {
            this.quoteindex = 48;
        }
        else if (this.quoteindex <= 72)
        {
            this.quoteindex = 60;
        }
        else if (this.quoteindex <= 84)
        {
            this.quoteindex = 72;
        }
        else
        {
            this.quoteindex = 84;
        }
        
    }

    updateup()
    {
        // Move the subject forward like a spotify music track
        if(this.quoteindex < 12)
            {
                this.quoteindex = 12;
            }
            else if (this.quoteindex < 24)
            {
                this.quoteindex = 24;
            } 
            else if (this.quoteindex < 36)
            {
                this.quoteindex = 36;
            }
            else if (this.quoteindex < 48)
            {
                this.quoteindex = 48;
            }
            else if (this.quoteindex < 60)
            {
                this.quoteindex = 60;
            }
            else if (this.quoteindex < 72)
            {
                this.quoteindex = 72;
            }
            else if (this.quoteindex < 84)
            {
                this.quoteindex = 84;
            }
            else
            {
                this.quoteindex = 0;
            }
    }

    updateright()
    {
        // move one quote forward
        if (this.quoteindex == 84)
        {
            this.quoteindex = 0;
        }
        else
        {
            this.quoteindex++;
        }
    }

    updateleft()
    {
        // move one quote forward
        if (this.quoteindex == 0)
        {
            this.quoteindex = 84;
        }
        else
        {
            this.quoteindex--;
        }
    }


    changeposition(y = this.position.y, x = this.position.x)
    {
        this.position.x = x
        this.position.y = y
    }


    display()
    {
        this.quoteToDisplay = this.quotesToUse[this.quoteindex]
        textbox.textContent = this.quoteToDisplay;
    }

    checkForLeftScreen()
    {
        // if our position is greater than the width of the canvas
        if(this.position.x <= 0- ctx.measureText(this.quoteToDisplay).width){
            // increment the quote, and move back to the left side of the screen.
            this.switchquote()
            this.position.x = canvas.width + 5
        }

    }

    switchquote()
    {
        if(this.quoteindex+1 >= this.quotesToUse.length)
            {
                this.quoteindex = 0
            }
        else
        {
            this.quoteindex++
        }
    }
    
}