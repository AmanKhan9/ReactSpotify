import React from 'react'
import './MusicPlayer.css'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

function MusicPlayer({spotify}) {
    return (
        <div>
            <div className="player__body">
                <Sidebar/>
                <Body spotify={spotify}/>
                <Footer spotify={spotify}/>
        </div>
        </div> 
    )
}

export default MusicPlayer
