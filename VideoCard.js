import "./VideoCard.css"
import React from 'react'
import Avatar from '@material-ui/core/Avatar';

function VideoCard({image, title, dop, views, channelName, channelImg}) {
    return (
        <div className="videoCard">
            <img className = "videoCard__thumbnail" src = {image} alt="the office"/>
            <div className="videoCard__videoInfo">
                <Avatar src={channelImg} alt={channelName}/>
                <div className="videoCard__videoInfo__videoText">
                    <h4>{title}</h4>
                    <p>
                        {channelName}
                    </p>
                    <p>
                        {views}  {dop}    
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard