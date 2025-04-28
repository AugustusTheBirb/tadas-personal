import ComicNav from "./ComicNav.jsx"

function Comic({date="default", description="default", image="../../public/test.jpg"}) {
    return (
        <div className="comic-container">
        <h2 className="header">{date}</h2>
        <ComicNav />
        <img className="comic" src={image} alt="first page image"/>
        <ComicNav />
        <p className="description">{description}</p>
        </div>

    )
}

export default Comic