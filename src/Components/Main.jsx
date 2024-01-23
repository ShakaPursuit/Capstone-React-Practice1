import React from "react";


const Main=({quote})=>{


    return(<main>
        {
            quote ?
        
        <div>
            {quote.quote}




        </div>
        :
        <div>You have to Click the Button to Generate a Quote</div>





        }
    </main>)
}
export default Main