<script lang="ts">
	import Menu from './Menu.svelte';

    import vk from "./img/footer/vk.png";
    import tg from "./img/footer/tg.png";
    import git from "./img/footer/git.png";
    import mail from "./img/footer/mail.png";
    import me from "./img/about/photo.jpg";
    

</script>
<body>
    <div class="cont">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="img-me" src={me} alt="My photo">
    
    <div class="text-about-me"><ul class="bio">
        <li class="spis">Place of study: Innopolis University</li>
        <li class="spis">Hometown: Perm</li>
        <li class="spis">Date of Birth: 29.03.2005</li>
        <li class="spis">Secondary general education: Lyceum 10 Perm</li>
    </ul>
        <div class="footer-icons">
            <a href="https://vk.com/angel.sofia" id="vk-link">
                <img class="footer-image" src={vk} alt="vk">
            </a>
            <a href="https://github.com/angel-palkina" id="gh-link">
                <img class="footer-image" src={git} alt="git">
            </a>
            <a href="https://t.me/angel_sofia2005" id="tg-link">
                <img class="footer-image" src={tg} alt="tg">
            </a>
            <a href="mailto:s.palkina@innopolis.university" class="footer-buttom-mail" id="email">
                <img class="footer-image" src={mail} alt="mail">
            </a>
        </div>

    </div>
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
    font-weight: 400;
}
.footer-icons {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 30px;
}
.footer-image {
    max-width: 40px;
    max-height: 40px;
}
.footer-icons > *{
    margin-left: 50px;
}

</style>
