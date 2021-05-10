"use strict";

new Vue({
  el: "#app",
  data: {
    running: false,
    playerLife: 100,
    monsterLife: 100,
    logs: []
  },
  computed: {
    hasResult: function hasResult() {
      return this.playerLife == 0 || this.monsterLife == 0;
    }
  },
  methods: {
    startGame: function startGame() {
      this.running = true;
      this.playerLife = 100;
      this.monsterLife = 100;
      this.logs = [];
    },
    attack: function attack(especial) {
      this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player');

      if (this.monsterLife > 0) {
        this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
      }
    },
    healAndHurt: function healAndHurt() {
      this.heal(10, 15);
      this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster');
    },
    heal: function heal(min, max) {
      var heal = this.getRandom(min, max);
      this.playerLife = Math.min(this.playerLife + heal, 100);
      this.registerLog("Jogador recebeu ".concat(heal, "% de cura"), 'player');
    },
    hurt: function hurt(atr, min, max, especial, source, target, cls) {
      var plus = especial ? 5 : 0;
      var hurt = this.getRandom(min + plus, max + plus);
      this[atr] = Math.max(this[atr] - hurt, 0);
      this.registerLog("".concat(target, " perdeu ").concat(hurt, "% de vida."), cls);
    },
    getRandom: function getRandom(min, max) {
      var value = Math.random() * (max - min) + min;
      return Math.round(value);
    },
    registerLog: function registerLog(text, cls) {
      this.logs.unshift({
        text: text,
        cls: cls
      });
    }
  },
  watch: {
    hasResult: function hasResult(value) {
      if (value) {
        this.running = false;
      }
    }
  }
});