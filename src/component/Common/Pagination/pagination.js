import styled from "../../Users/UserClass.module.css";
import React, {useState} from "react";



const Pagination = ({setSelectedPage, currentPage, totalCountUsers,pageSize, portionSize = 10 }) => {
    let usersArray = [];

    let [portionNumber, setPortionNumber] = useState(1)
    let pageCount = Math.ceil(totalCountUsers / pageSize)

    let portionCount = Math.ceil(pageCount / portionSize)
    let leftPositionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPositionPageNumber = portionNumber * portionSize


    for (let i = 1; i <= pageCount; i++) {
        usersArray.push(i)
    }

    let pagination = usersArray.filter(p => p >= leftPositionPageNumber && p <= rightPositionPageNumber).map(p => <li key={p} onClick={() => setSelectedPage(p)}
                                             className={styled.styledList && currentPage === p && styled.activePage}>{p}</li>)

debugger
    return(
        <>
            {
                portionNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {pagination}

            {
                portionCount > portionNumber &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }
        </>
    )
}
export default Pagination