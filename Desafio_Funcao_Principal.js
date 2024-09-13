function encontrarRecintos(especie, quantidade) {
 mm
    if (!animaisInfo[especie]) return "Animal inválido";
    if (!Number.isInteger(quantidade) || quantidade <= 0) return "Quantidade inválida";
  
    const animal = animaisInfo[especie];
    const recintosViaveis = [];
  
    
    recintos.forEach(recinto => {
     
      if (!animal.biomas.includes(recinto.bioma) && !(recinto.bioma === 'savana e rio' && animal.biomas.includes('rio'))) {
        return;
      }
  
      
      let espacoOcupado = recinto.animais.reduce((total, animalRecinto) => {
        const animalInfo = animaisInfo[animalRecinto.especie];
        return total + (animalInfo.tamanho * animalRecinto.quantidade);
      }, 0);
  
      
      const animaisRecinto = recinto.animais;
      const carnivorosRecinto = animaisRecinto.some(a => animaisInfo[a.especie].carnivoro);
      const carnivoroNovo = animal.carnivoro;
  
      if (carnivoroNovo && (animaisRecinto.length > 0 || carnivorosRecinto)) {
        return; 
      }
  
      
      if (especie === 'hipopotamo' && recinto.bioma !== 'savana e rio') {
        return; 
      }
  
      
      if (especie === 'macaco' && animaisRecinto.length === 0 && quantidade === 1) {
        return; 
      }
  
     
      const espacoExtra = (animaisRecinto.length > 0 && !carnivoroNovo) ? 1 : 0;
  
     
      const espacoNecessario = (animal.tamanho * quantidade) + espacoExtra;
      const espacoLivre = recinto.tamanhoTotal - espacoOcupado;
  
      if (espacoLivre >= espacoNecessario) {
        recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre - espacoNecessario} total: ${recinto.tamanhoTotal})`);
      }
    });
  
    
    return recintosViaveis.length > 0 ? recintosViaveis.sort() : "Não há recinto viável";
  }

  


