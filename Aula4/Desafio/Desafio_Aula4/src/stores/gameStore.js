import { writable } from "svelte/store";

// Inicializa a pontuação com 0 e o multiplicador e custo com valores iniciais
export const score = writable(0);
export const clickMultiplier = writable(0.5);
export const upgradeCost = writable(10);