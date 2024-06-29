import { formatDistanceToNow } from "date-fns";
main();


type Comic = {
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

async function main() {
    // Получение ID через fetch
    const responseId = await fetch(new URL(`https://fwd.innopolis.university/api/hw2?email=s.palkina@innopolis.university`));
    const id = await responseId.json();

    // Создание нового URL с полученным ID
    const url = new URL(`https://fwd.innopolis.university/api/comic`);
    url.search = new URLSearchParams({ id: id.toString() }).toString();

    // Получение информации о комиксе
    const responseComic = await fetch(url);
    const info = await responseComic.json();

    document.addEventListener('DOMContentLoaded', function() {
        const imgElement = document.getElementById('comic-picture');
        if (imgElement) {
            //создание картинки и альтернативного текста
            const img = document.createElement("img");
            img.src = info.img;
            img.alt = info.alt;
            imgElement.appendChild(img); // добавление элемента по Id в документ

            // сохдание заголовка без использования innerHTML
            const title = document.createElement("h2");
            title.textContent = info.safe_title;
            imgElement.appendChild(title);// добавление элемента по Id в документ

            // создание даты
            const date = new Date(
                Date.UTC(
                    Number.parseInt(info.year),
                    Number.parseInt(info.month) - 1
                )
            );

            const time = document.createElement("time");
            time.innerHTML = date.toLocaleDateString(
                "en",
                { 
                    month: "long",
                    year: "numeric"
                }
            );
            imgElement.appendChild(time);// добавление элемента по Id в документ
        } else {
            console.error("Элемент с ID 'comic-picture' не найден");
        }
    });
    

    
}