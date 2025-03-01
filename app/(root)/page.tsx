import Image from "next/image";
import Hello from "@/app/components/Hello"

export default function Home() {
  console.log("what am i? --server side");
  return( 
    <>
  <h1>WELCOME</h1>
  <Hello/>  
  </>
    )
}
