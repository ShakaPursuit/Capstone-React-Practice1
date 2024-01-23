import React from "react";


const GetQuote=({setQuote})=>{
     


    const fetchData=(event)=>{
        event.preventDefault()

        fetch('https://api.seriesquotes.10cyrilc.me/quote/')
        .then(res => res.json())
        .then(data =>{
                setQuote(data[0])
                // setGetQuote(data[0])
                console.log(data)
        })
        .catch(err=>console.log(err))
    }

    return (
        <nav>
            <form onSubmit={fetchData}>

            <button className="getquote" type="submit" >Click for Quote!</button>

            </form>




        </nav>
  



    )






}
export default GetQuote