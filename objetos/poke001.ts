const pokemon001: {
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
    }[];
  } = {
    nome: "bulbasaur",
    numeroNaDex: 1,
    tipo1: "grama",
    tipo2: "venenoso",
    evolucao: "ivysaur",
    habilidades: "overgrow, chlorophyll",
    movimentos: [
      { nomeDoGolpe: "tackle", nivel: 1 },
      { nomeDoGolpe: "leech seed", nivel: 7 },
      { nomeDoGolpe: "vine whip", nivel: 13 },
      { nomeDoGolpe: "poison powder", nivel: 20 },
    ],
    status:[ {hp: 45,
      atack: 49,
      defense: 49,
      speAtack: 65,
      spedefense: 65,
      speed:45
  
  }]
  };
  