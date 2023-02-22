import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";
import Home from "./Home";
import Search from "./Search";
import Settings from "./Settings";
import Footer from "./Footer";
import Fave from "./Fave";
import Prelaoder from "./Preloader";

export default function App(){
    const [uiSettings, setUiSettings] = useState({
        showHome: true,
        showSearch: false,
        showFave: false,
        showSettings: false,
        showFooter: true,
        darkMode: false,
    })
    
    function gotoHome(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                showHome: true,
                showSearch: false,
                showSettings: false,
                showFave: false,
            })
        })
    }
    
    function gotoSearch(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                showHome: false,
                showSearch: true,
                showFave: false,
                showSettings: false,
            })
        })
    }
    
    function gotoSettings(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                showHome: false,
                showSearch: false,
                showFave: false,
                showSettings: true,
            })
        })
    }

    function gotoFave(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                showHome: false,
                showSearch: false,
                showSettings: false,
                showFave: true,
            })
        })
    }
    
    function toggleDarkMode(){
        setUiSettings((prevState)=>{
            return ({
                ...prevState,
                darkMode: !prevState.darkMode
            })
        })
    }

    
    const [footerVisible, setFooterVisible] = useState(true)
    
    function touchStarted(event){
        const watchlist = document.querySelector(".watchlist-items-holder")
        console.log("scroll-started")
            const startY = event.touches[0].clientY
            watchlist.addEventListener("touchmove", touchMove)
            watchlist.addEventListener("touchend", touchEnd)
            
            function touchMove(event){
                const endY = event.changedTouches[0].clientY
                if(endY < startY){
                    setFooterVisible(false)
                }
                else if(endY > startY){
                    setFooterVisible(true)
                }
            }

            function touchEnd(){
                console.log("touch ended")
            }
    }

    function touchStartedII(event){
        const appSettings = document.querySelector(".settings-items-holder")
        console.log("scroll-started")
            const startY = event.touches[0].clientY
            appSettings.addEventListener("touchmove", touchMove)
            appSettings.addEventListener("touchend", touchEnd)
            
            function touchMove(event){
                const endY = event.changedTouches[0].clientY
                if(endY < startY){
                    setFooterVisible(false)
                }
                else if(endY > startY){
                    setFooterVisible(true)
                }
            }

            function touchEnd(){
                console.log("touch ended")
            }
    }

    function touchStartedIII(event){
        const fave = document.querySelector(".fave-items-holder")
        console.log("scroll-started")
            const startY = event.touches[0].clientY
            fave.addEventListener("touchmove", touchMove)
            fave.addEventListener("touchend", touchEnd)
            
            function touchMove(event){
                const endY = event.changedTouches[0].clientY
                if(endY < startY){
                    setFooterVisible(false)
                }
                else if(endY > startY){
                    setFooterVisible(true)
                }
            }

            function touchEnd(){
                console.log("touch ended")
            }
    }

    function showFooter(){
        setFooterVisible(true)
    }

    const [selectedDefaultCurrency, setSelectedDefaultCurrency] = useState("NGN")
    
    const [defaultCurrency, setDefaultCurrency] = useState("NGN")

    function changedefCurrency(){
        setDefaultCurrency(selectedDefaultCurrency)
    }

    function changeselecteddefCurrency(event){
        setSelectedDefaultCurrency(event.target.value)
    }

    useEffect(
        function(){
            const date = new Date()
            const hour = date.getHours()

            if(hour > 16||hour < 8){
                setUiSettings((prevState)=>{
                    return({
                        ...prevState, darkMode: true
                    })
                })
            } else{
                setUiSettings((prevState)=>{
                    return({
                        ...prevState, darkMode: false
                    })
                })
            }
        }, []
    )
    


    return(
        <div className={uiSettings.darkMode ? "dark container" : "container"}>
            <Home  defaultCurrency={defaultCurrency} onTouchStart={touchStarted} toggleDarkMode={toggleDarkMode} className={uiSettings.showHome ? "home show type-big" : "home type-big"}/>
            <Search defaultCurrency={defaultCurrency} className={uiSettings.showSearch ? "search show type-big" : "search type-big"}/>
            <Fave touchStart={touchStartedIII} className={uiSettings.showFave ? "show fave type-big" : "fave type-big"} />
            <Settings defaultCurrency={defaultCurrency} changeselecteddefCurrency={changeselecteddefCurrency} changedefCurrency={changedefCurrency} selectedDefaultCurrency={selectedDefaultCurrency} darkMode={uiSettings.darkMode} toggleDarkMode={toggleDarkMode} touchStart={touchStartedII} className={uiSettings.showSettings ? "settings show type-big" : "settings type-big"}/>
            <Footer
            className={footerVisible ? "footer show type-big" : "footer type-big"}
            gotoHome={gotoHome}
            gotoSearch={gotoSearch}
            gotoSettings={gotoSettings}
            gotoFave={gotoFave}
            isHome={uiSettings.showHome}
            isSearch={uiSettings.showSearch}
            isSettings={uiSettings.showSettings}
            isFave={uiSettings.showFave}
            />
            <div onClick={showFooter} className={footerVisible ? "show-footer" : "show show-footer"}>
                <i className="fa fa-arrow-up" />
            </div>
            <Prelaoder />
        </div>
    )
}