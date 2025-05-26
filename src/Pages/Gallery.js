import React from 'react'
import gallery1 from '../Assets/gallery1.png'
import gallery2 from '../Assets/gallery2.png'
import gallery3 from '../Assets/gallery3.png'
import gallery4 from '../Assets/gallery4.png'
import gallery5 from '../Assets/gallery5.png'
import gallery6 from '../Assets/gallery6.png'
import './pagecss.css'

const Gallery = () => {
    return (
        <div>
            <center>
                <div className="gallery">
                    <div className="item big-left"><img style={{borderRadius:'14px', height:'428px'}} src={gallery6 }/></div>
                    <div className="item top-right-1"><img src={gallery4} /></div>
                    <div className="item top-right-2"><img src={gallery1} /></div>
                    <div className="item bottom-left-1"><img src={gallery2} /></div>
                    <div className="item bottom-left-2"><img src={gallery3} /></div>
                    <div className="item big-right"><img src={gallery5} /></div>
                </div>
            </center>


        </div>
    )
}

export default Gallery