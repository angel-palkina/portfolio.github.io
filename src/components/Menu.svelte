<script lang="ts">
	import router from 'page';
    import { Router, Route } from 'svelte-routing';
	import Projects from "./Projects.svelte";
	import App from "../App.svelte";
    import About from './About.svelte';
    import Comic from './Comic.svelte';

    const home = (event: MouseEvent) => {
        router("/Home")
    }
    const about = (event: MouseEvent) => {
        router("/About")
    }
    const project = (event: MouseEvent) => {
        router("/Projects")
    }
    const comic = (event: MouseEvent) => {
        router("/Comic")
    }

</script>
<body>
 
<header id="header" class="header">
        <div class="container header__container">
            <nav class="menu">
                <ul class="menu__list">
                    <li class="menu__item">
                        <button class="button" on:click={home}> Home</button>
                    </li>
                    <li class="menu__item">
                        <button class="button" on:click={about}> About me</button>
                    </li>
                    <li class="menu__item">
                        <button class="button" on:click={project}> Projects</button>
                    </li>
                    <li class="menu__item">
                        <button class="button" on:click={comic}> Comic</button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
   
</body>

<style>

body {
    padding-top: 80px;
}

.container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(179, 177, 177, 0.089);
    backdrop-filter: blur(8px);
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
    padding-bottom: 25px;

}

.menu__list {
    display: flex;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.menu__item {
    margin-left: 40px;
    
}

.button {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    background-color: #ffffff00;
    border: 0px;
    text-decoration: none;
}
</style>
