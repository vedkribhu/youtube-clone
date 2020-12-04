import React from 'react'
import TuneIcon from '@material-ui/icons/Tune';
import "./Searchpage.css";

function Searchpage() {
    return (
        <div className="searchpage">
            <div className="searchpage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
        </div>
    )
}

export default Searchpage
