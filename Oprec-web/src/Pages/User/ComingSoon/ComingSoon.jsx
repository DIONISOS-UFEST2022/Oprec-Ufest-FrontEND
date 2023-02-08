import React, { useEffect } from 'react'
import "./ComingSoon.scss"
import Sparkles from '../../../Reusable/Animation/Sparkle/Sparkle'

function ComingSoon() {
    useEffect(()=>{
        window.scroll(0,0)
    })
    return (
        <div id="ComingSoon">
            <div className="Content">
                <Sparkles>
                    Coming Soon!
                </Sparkles>
                <br />
                13 February 2023
            </div>
        </div>
    )
}

export default ComingSoon