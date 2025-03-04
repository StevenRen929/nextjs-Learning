import React from 'react'
import axios from 'axios'

const Album = async () => {
    //server-side-fetching
    //reduce use of useEffect hook which is simplified
    //we can also use next js to directly fectch mongoose
const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
if(response.status!==200){
   throw new Error('Error fetch data')
}
else{

    console.log('Album data successfully fetched');
    const data = response.data; // 直接访问 Axios 的响应数据
    console.log(data);
    
    return (
      <div>
        <h1>Album List</h1>
        <ul>
          {data.map((album: {userId:number;  id: number; title: string }) => (
            <li key={album.id}>{`album Id:${album.id}  :   userId ${album.userId} `}{`album.title: ${album.title} `}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Album
