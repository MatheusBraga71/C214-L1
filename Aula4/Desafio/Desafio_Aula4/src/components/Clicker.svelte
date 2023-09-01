<script>
    import { Link } from "svelte-routing";
    import { score, clickMultiplier } from "../stores/gameStore.js";
  
    function clickCookie() {
      $score += $clickMultiplier;
    }
  </script>
  
  <div>
    <h1>Cookie Clicker</h1>
    <button on:click={clickCookie}>Clique no Cookie</button>
    <p>Pontuação: {$score}</p>
    <Link to="/upgrade">Upgrades</Link>
  </div>