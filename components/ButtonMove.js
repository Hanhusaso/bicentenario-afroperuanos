import React from 'react'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function ButtonMove(props) {
    const dir = props.dir
    return (
        <div className="buttonMove">
            <div className="circleInside">
                {
                    dir == "down"
                    ? <AiFillCaretDown className="whiteArrow" />
                    : <AiFillCaretUp className="whiteArrow" />
                }
            </div>
        </div>
    )
}
