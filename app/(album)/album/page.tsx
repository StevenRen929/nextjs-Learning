import React from 'react'
import axios from 'axios'

const Album = async () => {
    //server-side-fetching
    //reduce use of useEffect hook which is simplified
    //we can also use next js to directly fectch mongoose
const response = await fetch("https://jsonplaceholder.typicode.com/albums",{
  next  :{revalidate:3600}
})//fetch every hour
// if we want continous fetching we need to set revalidation: 0
//or cache no store
if(response.status!==200){
   throw new Error('Error fetch data')
}
else{

    console.log('Album data successfully fetched');
    const posts = await response.json()// 直接访问 Axios 的响应数据
    console.log(posts);
    
    return (
      <div>
        <h1>Album List</h1>
        <ul>
          {posts.map((album: {userId:number;  id: number; title: string }) => (
            <li key={album.id}>{`album Id:${album.id}  :   userId ${album.userId} `}{`album.title: ${album.title} `}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Album
