/*
  PLAYLING — ESTADOS DO CURSO
  ===========================
  Este é o ÚNICO arquivo que você precisa editar para avançar o curso.

  Estados possíveis:
    "current" = aula/ciclo atual (AGORA)
    "next"    = próximo conteúdo, ainda sem acesso (A SEGUIR)
    "open"    = conteúdo anterior já liberado (LIBERADO)
    "locked"  = conteúdo futuro bloqueado (BLOQUEADO)

  AULAS 01–04 E CICLOS
  --------------------
  Use o mesmo padrão:
    conteúdo passado = "open"
    conteúdo atual   = "current"
    próximo          = "next"
    demais           = "locked"

  AULAS INTERNAS DOS CICLOS 01, 02 E 03
  -------------------------------------
  O mesmo mecanismo vale para:
    ciclo-01-aula-01 ... ciclo-01-aula-05
    ciclo-02-aula-01 ... ciclo-02-aula-05
    ciclo-03-aula-01 ... ciclo-03-aula-05

  Exemplo — ao iniciar a Aula 02 de qualquer ciclo:
    aula-01 do ciclo = "open"
    aula-02 do ciclo = "current"
    aula-03 do ciclo = "next"
    aulas 04 e 05    = "locked"
*/

window.PLAYLING_CONFIG = {
  states: {
    "aula-01": "current",
    "aula-02": "next",
    "aula-03": "locked",
    "aula-04": "locked",
    "ciclo-01": "locked",
    "ciclo-02": "locked",
    "ciclo-03": "locked",
    "ciclo-01-aula-01": "current",
    "ciclo-01-aula-02": "next",
    "ciclo-01-aula-03": "locked",
    "ciclo-01-aula-04": "locked",
    "ciclo-01-aula-05": "locked",
    "ciclo-02-aula-01": "current",
    "ciclo-02-aula-02": "next",
    "ciclo-02-aula-03": "locked",
    "ciclo-02-aula-04": "locked",
    "ciclo-02-aula-05": "locked",
    "ciclo-03-aula-01": "current",
    "ciclo-03-aula-02": "next",
    "ciclo-03-aula-03": "locked",
    "ciclo-03-aula-04": "locked",
    "ciclo-03-aula-05": "locked"
  },

  items: {
    "aula-01": {
      label: "Aula 01",
      title: "Começar jogando",
      href: "aula-01-jogo.html"
    },
    "aula-02": {
      label: "Aula 02",
      title: "Língua e fala",
      href: "aulas-02-03-saussure.html#aula-02"
    },
    "aula-03": {
      label: "Aula 03",
      title: "Sincronia e diacronia",
      href: "aulas-02-03-saussure.html#aula-03"
    },
    "aula-04": {
      label: "Aula 04",
      title: "Revisão e Próximos Passos",
      href: "aula-04-revisao-proximos-passos.html"
    },
    "ciclo-01": {
      label: "Ciclo 01",
      title: "LEGO + Gerativismo",
      href: "ciclo-01-lego-gerativismo.html"
    },
    "ciclo-02": {
      label: "Ciclo 02",
      title: "LingBet + Sociolinguística",
      href: "ciclo-02-lingbet-sociolinguistica.html"
    },
    "ciclo-03": {
      label: "Ciclo 03",
      title: "UnoLing + Análise do Discurso",
      href: "ciclo-03-unoling-analise-discurso.html"
    }
  },

  sequence: [
    "aula-01",
    "aula-02",
    "aula-03",
    "aula-04",
    "ciclo-01",
    "ciclo-02",
    "ciclo-03"
  ]
};

window.PlayLing = {
  state(id) {
    return window.PLAYLING_CONFIG.states[id] || "locked";
  },

  item(id) {
    return window.PLAYLING_CONFIG.items[id] || null;
  },

  isAvailable(id) {
    const state = this.state(id);
    return state === "current" || state === "open";
  },

  groupState(ids) {
    const states = ids.map(id => this.state(id));
    if (states.includes("current")) return "current";
    if (states.includes("next")) return "next";
    if (states.includes("open")) return "open";
    return "locked";
  },

  adjacent(id, direction) {
    const seq = window.PLAYLING_CONFIG.sequence;
    const i = seq.indexOf(id);
    if (i < 0) return null;
    const nextIndex = direction === "prev" ? i - 1 : i + 1;
    return seq[nextIndex] || null;
  },

  currentWithin(ids) {
    return ids.find(id => this.state(id) === "current")
      || ids.find(id => this.state(id) === "next")
      || ids.find(id => this.state(id) === "open")
      || ids[0];
  }
};
