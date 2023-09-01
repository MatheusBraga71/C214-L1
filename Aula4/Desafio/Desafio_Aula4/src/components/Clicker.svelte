<script>
    import { Link } from "svelte-routing";
    import { score, clickMultiplier } from "../stores/gameStore.js";
  
    function clickCookie() {
      $score += $clickMultiplier;
    }
  </script>
  
  <div>
    <h1>Button Clicker</h1>
    <h2>Pontuação: {$score}</h2>
    <button on:click={clickCookie}>Clique no Botão</button>
    <p> Ganho por clique: {$clickMultiplier} pontos </p>
    <Link to="/upgrade">Melhorias</Link>
  </div>