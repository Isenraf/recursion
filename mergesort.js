function mergeSort(arr) {
  const low = 0;
  const high = arr.length - 1;

  if (arr.length < 2) {
    return arr;
  }

  if (low < high) {
    const mid = Math.floor((low + high) / 2);
    const leftSort = mergeSort(arr.slice(0, mid + 1));
    const rightSort = mergeSort(arr.slice(mid + 1));

    return merge(leftSort, rightSort);
  }
}

function merge(listA, listB) {
  const _new = [];
  let indexI = 0;
  let indexJ = 0;

  while (indexI <= listA.length - 1 && indexJ <= listB.length - 1) {
    if (listA[indexI] < listB[indexJ]) {
      _new.push(listA[indexI]);
      indexI++;
    } else {
      _new.push(listB[indexJ]);
      indexJ++;
    }
  }

  // Remaining elements
  for (; indexI <= listA.length - 1; indexI++) {
    _new.push(listA[indexI]);
  }

  for (; indexJ <= listB.length - 1; indexJ++) {
    _new.push(listB[indexJ]);
  }

  return _new;
}
