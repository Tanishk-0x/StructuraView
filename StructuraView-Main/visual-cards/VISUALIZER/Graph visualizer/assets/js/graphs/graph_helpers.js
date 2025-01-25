
function calculateEdgeLength(v, w) {
  return Math.round(Math.sqrt(Math.pow(v.x - w.x, 2) + Math.pow(v.y - w.y, 2)));
}

function findEdgelLength(array, v2) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === v2) {
      return array[i].len;
    }
  }
  return -1;
}

function checkEdge(array, w) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === w) {
      return true;
    }
  }
  return false;
}
