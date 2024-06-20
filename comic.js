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

        //создание картинки и альтернативного текста
        const img = document.createElement("img");
        img.src = info.img;
        img.alt = info.alt;
        document.getElementById('comic-picture').appendChild(img); // добавление элемента по Id в документ

        // сохдание заголовка без использования innerHTML
        const title = document.createElement("h2");
        title.textContent = info.safe_title;
        document.getElementById('comic-picture').appendChild(title);// добавление элемента по Id в документ

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
        document.getElementById('comic-picture').appendChild(time);// добавление элемента по Id в документ
}

main();
