import React from 'react'

type Props  = {
  params:{
    id:string
  }
}

const page =  async ({params}:Props) => {
    //console.log(params);
    //const {id} = params;
    const { id } = await Promise.resolve(params); // Ensure params is fully resolved
   // console.log("params:",params);
  return (
    <div>User Profile Page: {id}</div>
  )
}

export default page


//way to fetch api

// import React from 'react';

// type Props = {
//   params: {
//     id: string;
//   };
// };

// const UserDetailPage = async ({ params }: Props) => {
//   const { id } = params; // No error since we're in an async component

//   return <div>User Detail Page: {id}</div>;
// };

// export default UserDetailPage;
// 🔥 Why the error happens:
// App Router (app directory) uses Server Components by default.
// Since params is asynchronously resolved, you must either:
// Use async in your component.
// Or, switch to client components by adding "use client" at the top — but that's usually unnecessary unless you need client-side interactivity.
// ⚡ Bonus: If you plan to fetch user data, here’s a quick way to integrate data fetching:
// tsx
// Copy
// Edit
// import React from 'react';

// type Props = {
//   params: {
//     id: string;
//   };
// };

// const UserDetailPage = async ({ params }: Props) => {
//   const { id } = params;

//   // Example: Fetch user data (replace with your actual API)
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const user = await res.json();

//   return (
//     <div>
//       <h1>User Detail Page: {id}</h1>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default UserDetailPage;