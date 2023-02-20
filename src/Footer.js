import React from "react";

export default function Footer(props){

    return(
        <div className={props.className}>
            
            <button className={props.isHome ? "active" : ""} onClick={props.gotoHome}>
                <i className="fa fa-home"/>
            </button>

            <button className={props.isSearch ? "active" : ""} onClick={props.gotoSearch}>
                <i className="fa fa-search"/>
            </button>

            <button className={props.isFave ? "active" : ""} onClick={props.gotoFave}>
                <i className="fa fa-heart"/>
            </button>

            <button className={props.isSettings ? "active" : ""} onClick={props.gotoSettings}>
                <i className="fa fa-gear"/>
            </button>
            

        </div>
    )
}