<?php
function remove_char(string $s): string {
    $array = explode(" ",$s);
     array_shift(array : $array);
    array_pop(array : $array);
       $result =  implode(" ",$array);
    return $result;
  }