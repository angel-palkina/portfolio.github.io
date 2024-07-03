<script lang="ts">
	import router from "page";
	import Projects from "./components/Projects.svelte";
	import About from './components/About.svelte';
    import Comic from './components/Comic.svelte';
    import Home from "./components/Home.svelte";
	
	let page = Home;

	router('/', () => page = Home);
	router('/Comic', () => page = Comic);
	router('/About', () => page = About);
	router('/Projects', () => page = Projects);

	router.start();

</script>

<svelte:component this={page} />



