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
import {cookingTime} from './Codewars/kata_05.js';
import {incrementer} from './Codewars/kata_06.js';
import {rowWeights} from './Codewars/kata_07.js';
import {flyBy} from './Codewars/kata_08.js';
import {largestCrossSum} from './Codewars/kata_09.js';


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
     let nums = [4, 6, 9, 1, 3]
      let lamps = 'xxxxxx';
      let drone = '====T';
      contarOvejas(ovejas);
      listGifts(letter);
      getSum( 2,50 )
      movie(100, 10, 0.95)
      solution('abc', 'bc')
      validSpacing(' Hello world')
      cookingTime(12)
      incrementer(nums)
/*       rowWeights(array)
 */      flyBy(lamps, drone)
      largestCrossSum(matrix)
}

app ()