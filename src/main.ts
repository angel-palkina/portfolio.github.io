import './сss/app.css';
import { Router, Route } from 'svelte-routing';

import App from './App.svelte';

const app = new App({
  target: document.getElementById('app')!,
  
})

export default app


