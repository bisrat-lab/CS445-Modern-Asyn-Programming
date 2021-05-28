function removeDuplicates(array :number[] ) {
    return array.filter((a, b) => array.indexOf(a) === b)
  };