<?php

function remove_char(string $s): string {
   $arr = str_split($s);
   array_shift($arr);
   array_pop($arr);
   var_dump($arr);
   $result =join('', $arr);
   return $result;
   
   // OPCION 2
   // return substr($s,1,-1);
 }

?>