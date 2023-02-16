import React, { useState } from "react"
import "./Header.css"

const Header = () => {
    const [num, setNum] = useState(0);

    const inc = () => {if(num<10)setNum(num + 1)}        
    const dec = () => {if(num>0) setNum(num - 1)}
   
    return (
        <div className="h">
            
            <div>
                <button className="btn btn-dark" onClick={inc}>+</button>
                {num}<button className="btn btn-dark" onClick={dec}>-</button>

            </div>

        </div>
    )
}
export default Header;
