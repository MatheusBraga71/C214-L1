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
    <h1>Melhorias</h1>
    <p>Multiplicador de Clique: {$clickMultiplier}x</p>
    <p>Custo da Melhoria {$clickMultiplier + 1}x: {$upgradeCost} pontos</p>
    <button on:click={buyUpgrade}>Comprar Melhoria</button>
    <Link to="/clicker">Voltar</Link>
  </div>