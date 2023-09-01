<script>
    import { Link } from "svelte-routing";
    import { score, clickMultiplier, upgradeCost } from "../stores/gameStore.js";
  
    function buyUpgrade() {
      if ($score >= $upgradeCost) {
        $score -= $upgradeCost;
        $clickMultiplier *= 2;
        $upgradeCost *= 2;
      } else {
        alert("Você não tem pontos suficientes para comprar este upgrade!");
      }
    }
  </script>
  
  <div>
    <h1>Upgrades</h1>
    <p>Multiplicador de Clique: {clickMultiplier}x</p>
    <p>Custo do Upgrade: {$upgradeCost} pontos</p>
    <button on:click={buyUpgrade}>Comprar Upgrade</button>
    <Link to="/clicker">Voltar</Link>
  </div>