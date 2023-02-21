import React from "react";

export default function Fave(props){
    return(
        <div className={props.className}>
            <div className="top-section">
                <p>Favourites</p>
                <p>*Currencies that have been selected as <i>favourite</i> can easily be reviewed by clicking them in the section below ⬇ </p>
            </div>
            <div className="bottom-section">
                <div className="fave-items-holder" onTouchStart={props.touchStart}>
                    <div className="fave--item">
                        <span>USD</span>
                        <span>
                            <button><i className="fa fa-external-link-alt" /></button>
                            <button><i className="fa fa-close" /></button>
                        </span>
                    </div>
                    <div className="fave--item">
                        <span>EUR</span>
                        <span>
                            <button><i className="fa fa-external-link-alt" /></button>
                            <button><i className="fa fa-close" /></button>
                        </span>
                    </div>
                    <div className="fave--item">
                        <span>GBP</span>
                        <span>
                            <button><i className="fa fa-external-link-alt" /></button>
                            <button><i className="fa fa-close" /></button>
                        </span>
                    </div>
                    <div className="fave--item">
                        <span>CNY</span>
                        <span>
                            <button><i className="fa fa-external-link-alt" /></button>
                            <button><i className="fa fa-close" /></button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="re-search">
                
            </div>
        </div>
    )
}