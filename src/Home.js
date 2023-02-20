import React from "react";

export default function Home(props){
    function reload(){
        window.location.reload()
    }

    return(
        <div className={props.className}>
            <div className="welcome">
                <div onClick={reload} className="hello">
                    <img src="currency.png" alt="xoxchange-icon"/> <span>Xchange 💸</span>
                </div>
                <div onClick={props.toggleDarkMode} className="theme"><i className="fa fa-adjust" /></div>
            </div>
            <div className="featured">
                <div className="featured--about">
                    <span>Featured</span>
                </div>
                <div className="featured-items-holder">
                    <div className="featured--item">
                        $ 0.09
                    </div>
                    <div className="featured--item">
                        # 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                    <div className="featured--item">
                        E 0.09
                    </div>
                </div>
            </div>
            <div className="watchlist">
                    <div className="watchlist--about">
                        <span>Watchlist</span> <span>($USD)</span>
                    </div>
                    <div className="watchlist-items-holder" onTouchStart={props.onTouchStart}>
                    <div className="watchlist--item">
                        Gold (kg) $100
                    </div>
                    <div className="watchlist--item">
                        Bitcoin $500
                    </div>
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>             
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>             
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>             
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>             
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>             
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>             
                    <div className="watchlist--item">
                        Ethereum $500
                    </div>             
                </div>
            </div>
        </div>
    )
}