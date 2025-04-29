import ComicNav from "./ComicNav.jsx"
import PageInfo from '../testcomic.js'
import { useState } from 'react'


  

function Comic() {
    const [page, setPage] = useState(1)
    let currentPage = PageInfo[page-1]
    let maxPage = PageInfo.length
    let imagePath = "testcomic-" + String(page) + ".jpg"
    return (
        <div className="comic-container">
        <h1 className="title">{currentPage.title}</h1>
        <h2 className="date">{currentPage.date}</h2>
        <ComicNav setPage={setPage} page={page} maxPage={maxPage}/>
        <img className="comic" src={imagePath} alt="comic page"/>
        <ComicNav setPage={setPage} page={page} maxPage={maxPage}/>
        <p className="description">{currentPage.description}</p>
        </div>

    )
}

export default Comic