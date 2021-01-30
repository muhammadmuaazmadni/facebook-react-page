import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
function MediaCard({ profilePic, title, time, body, imgUrl }) {
  return <div>
    <div className="f-card">
      <div className="start">
        <img className="file" src={profilePic} />
        <div className="co-name"><a href="#">{title}</a></div>
        <div className="time"><a href="#">{time}</a></div>
      </div>
      <div className="content">
        <p>{body}</p>
      </div>
      <div className="ref">
        <img className="ref1" src={imgUrl} />
      </div>
    </div>
  </div>
}
 ReactDOM.render(
   <>
     <MediaCard profilePic="https://i.pinimg.com/originals/e8/e2/bf/e8e2bf947c74c2381088ece748878bd2.jpg"
       title="Muaaz" time={new Date().toLocaleTimeString()} body="Flowers is very beautiful thing. He make our life charming.I likie it vey much."
       imgUrl="https://cdn.britannica.com/88/194588-050-967E8D17/flowers.jpg" />

     <MediaCard profilePic="https://s.itl.cat/pngfile/s/158-1581256_pak-army-ssg-hd.jpg"
       title="Saleh" time={new Date().toLocaleTimeString()} body="Pakistan army is the one best force in world.Every pakistani like it.I proud our force."
       imgUrl="https://www.ilmkidunya.com/news/newsImages/2021/1/Medium/pak-army-jobs.jpg" />
    
     <MediaCard profilePic="https://img.collegedekhocdn.com/media/img/careers/doctor-clinic.jpg"
       title="Hashir" time={new Date().toLocaleTimeString()} body="Doctrate is very best job.He save our life.They work myself every time. He is very responsible."
       imgUrl="https://www.nm.org/-/media/northwestern/better/nm-find-doctor.jpg?h=540&w=960&la=en&hash=9E9CBA794A065698E253F1087F705599" />
   </>,
   document.getElementById('root')
)
