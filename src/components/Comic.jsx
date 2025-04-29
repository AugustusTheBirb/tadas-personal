import ComicNav from "./ComicNav.jsx"

function Comic({date="default", description="default", image="../../public/testcomic-3.jpg"}) {
    return (
        <div className="comic-container">
        <h2 className="header">{date}</h2>
        <ComicNav />
        <img className="comic" src={image} alt="comic page"/>
        <ComicNav />
        <p className="description">{description}</p>
        </div>

    )
}

export default Comic