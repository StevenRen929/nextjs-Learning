'use client'
import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1> users list </h1>
      <ul className="mt-10 space-y-2">
        {["1", "2", "3", "4"].map((id) => (
          <li key={id}>
            <Link href={`/dashboard/users/${id}`}>User {id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
