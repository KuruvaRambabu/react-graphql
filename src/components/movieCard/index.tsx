import "./index.css"

const MovieCard = (props)=>{
    const {eachData} = props
    const{coverImage,description,siteUrl,title} = eachData
    const {large:img,color} = coverImage
    
    return(
        <li className="movie-card-li-El">
            <img className="anim-cover-img" src = {img} />
            <p>{description}</p>
        </li>
    )

}

export default MovieCard