import {contarOvejas} from './Exercise_01/code.js';
import {listGifts} from './Exercise_02/code.js';
import {} from './Exercise_03/code.js';
import {} from './Exercise_04/code.js';
import {} from './Exercise_05/code.js';
import {} from './Exercise_06/code.js';
import {} from './Exercise_07/code.js';

import {getSum} from './Codewars/kata_01.js';
import {movie} from './Codewars/kata_02.js';
import {solution} from './Codewars/kata_03.js';
import {validSpacing} from './Codewars/kata_04.js';

function app (){
    const ovejas = [
        { name: 'Noa', color: 'azul' },
        { name: 'Euge', color: 'rojo' },
        { name: 'Navidad', color: 'rojo' },
        { name: 'Ki Na Ma', color: 'rojo'},
        { name: 'AAAAAaaaaa', color: 'rojo' },
        { name: 'Nnnnnnnn', color: 'rojo'}
      ]
      const letter = 'bici coche balón _playstation bici coche peluche'
     

      contarOvejas(ovejas);
      listGifts(letter);
      getSum( 2,50 )
      movie(100, 10, 0.95)
      solution('abc', 'bc')
      validSpacing(' Hello world')
}

app ()