const recintos = [
    { numero: 1, bioma: 'savana', tamanhoTotal: 10, animais: [{ especie: 'macaco', quantidade: 3 }] },
    { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animais: [] },
    { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animais: [{ especie: 'gazela', quantidade: 1 }] },
    { numero: 4, bioma: 'rio', tamanhoTotal: 8, animais: [] },
    { numero: 5, bioma: 'savana', tamanhoTotal: 9, animais: [{ especie: 'leao', quantidade: 1 }] }
  ];
  
    const animaisInfo = {
    leao: { tamanho: 3, biomas: ['savana'], carnivoro: true },
    leopardo: { tamanho: 2, biomas: ['savana'], carnivoro: true },
    crocodilo: { tamanho: 3, biomas: ['rio'], carnivoro: true },
    macaco: { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
    gazela: { tamanho: 2, biomas: ['savana'], carnivoro: false },
    hipopotamo: { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
  };
  