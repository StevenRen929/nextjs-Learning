export default async function Page() {
    const response = await fetch("http://localhost:3000/api/books", {
        method: "GET",
    });
   // const books = await response.json();
   const data = await response.json(); // 解析 JSON
    return(
        <main>
            <code>
            {JSON.stringify(data)}
            </code>
        </main>
    )


}