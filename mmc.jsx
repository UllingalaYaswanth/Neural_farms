// #convert to linestring 
function coordsToLineString(coords) {
  const wktPoints = coords.map(([lat, lon]) => `${lon} ${lat}`).join(', ');
  return `LINESTRING (${wktPoints})`;
}

const path = [
  [28.6139, 77.2090],
  [28.6145, 77.2100],
  [28.6150, 77.2110]
];

const lineWKT = coordsToLineString(path);
console.log(lineWKT); 


// polygon code
function coordsToPolygon(coords) {
  if (coords[0][0] !== coords[coords.length - 1][0] || coords[0][1] !== coords[coords.length - 1][1]) {
    coords.push(coords[0]); // Close polygon
  }
  const wktCoords = coords.map(([lat, lon]) => `${lon} ${lat}`).join(', ');
  return `POLYGON ((${wktCoords}))`;
}

const polygon = [
  [28.6139, 77.2090],
  [28.6145, 77.2100],
  [28.6150, 77.2110]
];

const polyWKT = coordsToPolygon(polygon);
console.log(polyWKT);