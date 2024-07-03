<script lang="ts">
	import Menu from "./Menu.svelte";
    import { formatDistanceToNow } from "date-fns";

interface ComicResponse {
    month: string;
    num: number;
    link: string;
    year: string;
    news: string;
    safe_title: string;
    transcript: string;
    alt: string;
    img: string;
    title: string;
    day: string;
  };

  let info: ComicResponse | null = null;

async function main(){
    // Получение ID через fetch
    const responseId = await fetch(new URL(`https://fwd.innopolis.university/api/hw2?email=s.palkina@innopolis.university`));
    const id = await responseId.json();

    // Создание нового URL с полученным ID
    const url = new URL(`https://fwd.innopolis.university/api/comic`);
    url.search = new URLSearchParams({ id: id.toString() }).toString();

    // Получение информации о комиксе
    const responseComic = await fetch(url);
    info = await responseComic.json();

}
main();
</script>



<body>
	<div class="comic-picture">
        {#if info} <!-- Check if info is available -->
            <img src={info.img} alt={info.alt}>
            <h2>{info.safe_title}</h2>
            <time>{`Uploaded ${formatDistanceToNow(new Date(Date.UTC(Number.parseInt(info.year), Number.parseInt(info.month) - 1)))} ago`}</time>
        {/if}
    </div>
</body> 
<Menu/> 

<style>

    body {
        padding-top: 80px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(./img/fon.jfif);
        background-size: cover;
        background-position: center;
    }
    .comic-picture {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 20px;
    }
    
    </style>