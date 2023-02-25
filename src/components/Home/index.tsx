import { useQuery } from "@apollo/client"
import { useState } from "react"
import { ANIMI_DATA_QUERY } from "../../graphQlQueries/homePage"
import MovieCard from "../movieCard"

import "./index.css"


const Home = ()=>{
    const [animiData, setAnimiData] = useState([])
    const {loading, error, data} = useQuery(ANIMI_DATA_QUERY)
    if (loading) return <h1>Hello world......</h1>
    if (error) return <h1>{error.message}</h1>
    
    const {Media:banner,Page:page} = data
    const {bannerImage} = banner
    const {media} = page
    return(
        <div>
            <img src = {bannerImage} />
        <ul className="movie-card-main-el">
            {media.map((eachData: { coverImage: any; description: any; siteUrl: any; title: any })=><MovieCard eachData = {eachData}/> )}
            </ul>
        </div>
    )
}

export default Home 