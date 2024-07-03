<script lang="ts">
	import Menu from './Menu.svelte';
    import me from "./img/about/photo.jpg";

</script>
<body>
    <div class="cont">
        <img class="img-me" src={me} alt="My photo">
    <div class="text-about-me"><ul class="bio">
        <li class="spis">Place of study: Innopolis University</li>
        <li class="spis">Hometown: Perm</li>
        <li class="spis">Date of Birth: 29.03.2005</li>
        <li class="spis">Secondary general education: Lyceum 10 Perm</li>

    </ul></div>
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
.cont{
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 3%;
}
.bio {
        list-style-type: none; /* Убираем стандартные маркеры */
    }
    .bio li::before {
        content: url(./img/about/cloud-sketched-shape_59576.png); /* Замените 'путь_к_вашему_изображению' на URL или путь к файлу изображения */
        margin-right: 10px; /* Добавляем небольшой отступ справа от изображения */
    }
.text-about-me{
    font-size: 30px;
    padding-top: 7%;
}   
.spis{
    margin-bottom: 30px;
}

</style>
