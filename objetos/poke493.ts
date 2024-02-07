const pokemon002: {
    nome: string;
    numeroNaDex: number;
    tipo1: string;
    tipo2?: string;
    preEvolucao?: string;
    evolucao?: string;
    habilidades: string;
    movimentos: { nomeDoGolpe: string; nivel: number }[];
    status: {
      hp: number;
      atack: number;
      defense: number;
      speAtack: number;
      spedefense: number;
      speed: number;
      total: number;
    }[];
  } = {
    nome: "arceus",
    numeroNaDex: 493,
    tipo1: "normal",
    habilidades: "multitype",
    movimentos: [
      { nomeDoGolpe: "seismic toss", nivel: 1 },
      { nomeDoGolpe: "gravity", nivel: 10 },
      { nomeDoGolpe: "earth power", nivel: 20 },
      { nomeDoGolpe: "hyper voice", nivel: 30 },
    ],
    status:[ {hp: 120,
      atack: 120,
      defense: 120,
      speAtack: 120,
      spedefense: 120,
      speed:120,
      total:720
  
  }]
  };
  