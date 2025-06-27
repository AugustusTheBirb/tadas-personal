function ListItem({sign="mis", effect=() => ""}) {
    return <li className="comicnav"><button className="nav" onClick={effect}>{sign}</button></li>
}

function ComicNav({setPage, page=1, maxPage=1}) {
    
    return (    
        <ul className="comicnav">
            <ListItem sign="&lt;|" effect={() => setPage(1)} ></ListItem>
            <ListItem sign="&lt;" effect={() => setPage(Math.max(page-1,0))}></ListItem>
            <ListItem sign="&gt;" effect={() => setPage(Math.min(page+1,maxPage))}></ListItem>
            <ListItem sign="|&gt;" effect={() => setPage(maxPage)}></ListItem>
        </ul>

    )
}

export default ComicNav