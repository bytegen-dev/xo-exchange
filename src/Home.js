import React from "react";

export default function Home(props){
    return(
        <div className={props.className}>
            <div className="welcome">
                <div className="hello">
                <p>Welcome back,</p>
                <p>Hello XXXXXX</p>
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