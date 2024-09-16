import { useState } from "react"

const Home = () =>{
    const [searchMeal setSearchMeal] = useState['']
    return(
        <div><input type= "search"
        placeholder="search Meal"/></div>
    )
}

export default Home