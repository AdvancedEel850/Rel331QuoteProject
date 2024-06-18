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
            this.quoteindex = 77;
        }
        else if(this.quoteindex <= 11)
        {
            this.quoteindex = 0;
        }
        else if (this.quoteindex <= 22)
        {
            this.quoteindex = 11;
        } 
        else if (this.quoteindex <= 33)
        {
            this.quoteindex = 22;
        }
        else if (this.quoteindex <= 44)
        {
            this.quoteindex = 33;
        }
        else if (this.quoteindex <= 55)
        {
            this.quoteindex = 44;
        }
        else if (this.quoteindex <= 66)
        {
            this.quoteindex = 55;
        }
        else if (this.quoteindex <= 77)
        {
            this.quoteindex = 66;
        }
        else
        {
            this.quoteindex = 77;
        }
        
    }

    updateup()
    {
        // Move the subject forward like a spotify music track
        if(this.quoteindex <= 11)
            {
                this.quoteindex = 11;
            }
            else if (this.quoteindex <= 22)
            {
                this.quoteindex = 22;
            } 
            else if (this.quoteindex <= 33)
            {
                this.quoteindex = 33;
            }
            else if (this.quoteindex <= 44)
            {
                this.quoteindex = 44;
            }
            else if (this.quoteindex <= 55)
            {
                this.quoteindex = 55;
            }
            else if (this.quoteindex <= 66)
            {
                this.quoteindex = 66;
            }
            else if (this.quoteindex < 77)
            {
                this.quoteindex = 77;
            }
            else
            {
                this.quoteindex = 0;
            }
    }

    updateright()
    {
        // move one quote forward
        if (this.quoteindex == 99)
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
            this.quoteindex = 99;
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