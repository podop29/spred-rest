/* 
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  } 
  */

  const filterOutOdds = (...numArr) =>{
    return numArr.filter((num)=> num % 2 === 0)
    
  }

  //console.log(filterOutOdds(1,2,4,2,1,5))


  //find min

  const findMin = (...args) => Math.min(...args)
    
  //console.log(findMin(1,4,12,1,5,7,8,2,-4,-7))


  //mergeObjects

  const obj1 = {
      a:1,
      b:2
  };
  const obj2 = {
    c:3,
    d:4
};

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const obj3 = mergeObjects(obj1,obj2)
//console.log(obj3);


//doubleAndReturnArgs

const doubleAndReturnArgs = (arr, ...args) =>{
    let dbl = args.map((num)=> num * 2);
    return [...arr,...dbl]
}

//console.log(doubleAndReturnArgs([1,2,3,4], 5,6,7,8))



/** remove a random element in the items array
and return a new array without that item. */

const removeRandom =(...items) =>{
    let randomnum = Math.floor(Math.random() * items.length)
    return [...items.slice(0,randomnum), ...items.slice(randomnum + 1)]     
}
//console.log(removeRandom(1,2,3,4,5,6,7,8,9,10))

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) =>{
    return [...array1, ...array2]
}
//console.log(extend([1,2,3,4], [5,6,7,8]))

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) =>{
   let newObj = {...obj}
   newObj[key] = val;
   return newObj
}

//console.log(addKeyVal(obj1, 'c', 3))

/** Return a new object with a key removed. */

const removeKey = (obj, key) =>{
    let newObj = {...obj};
    delete obj[key];
    return obj;
}

//console.log(removeKey(obj1, "b"))

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})

//console.log(combine(obj1, obj2))

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {


  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

