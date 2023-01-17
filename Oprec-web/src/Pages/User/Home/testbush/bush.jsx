import "./bush.scss"

export function Bush() {
    return (<div className="bushContainer">
        <div className="bush">
            <div className="bushcircle a"></div>
            <div className="bushcircle b"></div>
            <div className="bushcircle c"></div>
            <div className="bushcircle d"></div>
            <div className="bushcircle e"></div>
            <div className="bushcircle f"></div>
            <div className="bushcircle g"></div>
            <div className="bushcircle h"></div>
            <div className="bushcircle i"></div>
            <div className="bushcircle j"></div>
        </div>
    </div>)
}


export function BgBush() {
    return (<div className="bushbgContainer">
        <Bush />
        {/* <div className="bush">
            <div className="bushcircle a"></div>
            <div className="bushcircle b"></div>
            <div className="bushcircle c"></div>
            <div className="bushcircle d"></div>
        </div> */}
    </div>)
}