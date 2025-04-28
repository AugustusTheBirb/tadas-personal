function ListItem({sign="mis", effect=() => ""}) {
    return <li className="comicnav"><button className="nav" onClick={effect}>{sign}</button></li>
}

function ComicNav() {
    return (
        
        <ul className="comicnav">
            <ListItem sign="&lt;|" ></ListItem>
            <ListItem sign="&lt;" ></ListItem>
            <ListItem sign="&gt;" ></ListItem>
            <ListItem sign="|&gt;" ></ListItem>
        </ul>

    )
}

export default ComicNav