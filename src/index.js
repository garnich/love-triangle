/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation


  var i,j,k,d,z;
  var m =[];

   for (i=0; i <= preferences.length-1; i++)
   {
      j = preferences[i];
      k = preferences[j-1];

        if( k == j){i++}
          else
          { d = preferences[k-1];
            z = preferences[d-1];
              if(z==j){m.push(j, k, d);}
    }
  }
  return (Array.from(new Set(m))).length/3;
}
