export default async function Anime({params}) {

    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();
    return(
        <p>id: {data.titulo}</p>
    );
}