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


    update()
    {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.checkForLeftScreen()
    }

    changeposition(y = this.position.y, x = this.position.x)
    {
        this.position.x = x
        this.position.y = y
    }


    display()
    {
        this.quoteToDisplay = this.quotesToUse[this.quoteindex]
        ctx.font = this.font;
        ctx.fillStyle = "ForestGreen";
        ctx.fillText(this.quoteToDisplay, this.position.x, this.position.y)
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