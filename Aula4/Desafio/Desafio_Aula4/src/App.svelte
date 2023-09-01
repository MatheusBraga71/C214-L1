<script>
	import { Router, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import Clicker from "./components/Clicker.svelte";
	import Upgrade from "./components/Upgrade.svelte";
  </script>
  
  <Router>
	<Route path="/" component={Home} />
	<Route path="/clicker" component={Clicker} />
	<Route path="/upgrade" component={Upgrade} />
  </Router>