

export function contarOvejas(ovejas) {
    let ovejas2 = [];
    let regex = /na/gi;
      for(let i = 0; i<ovejas.length; i++){
        let eachSheep = ovejas[i]
        if(eachSheep.name.match(regex) && eachSheep.color == 'rojo'){
            ovejas2.push(eachSheep);
        }
      }
      ovejas = ovejas2
    return ovejas;
  }


  /*  &&  eachSheep[x] == 'rojo'*/