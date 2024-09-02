import React from 'react'
import VideoIreland from '@/Components/VideoIreland'
import DublinBridge from '@/assets/DublinBridge.mp4'


const VideoText:React.FC = () => {
  return (
    <div>
        <VideoIreland  videoSrc={DublinBridge} 
        label="Dublin Bridge"
        title="Visit the Iconic Dublin Bridge"
        description="Dublin Bridge is one of the most famous landmarks in Ireland. It is a must-see for anyone visiting the city. The bridge offers stunning views of the River Liffey and the surrounding area. Whether you are a history buff or just looking for a beautiful spot to take a walk, Dublin Bridge has something for everyone."
        />
    </div>
  )
}

export default VideoText 