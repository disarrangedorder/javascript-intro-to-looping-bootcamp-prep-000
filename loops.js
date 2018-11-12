function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}


function whileLoop(num) {
  let countdown = num
  while (countdown>0){
    console.log(--countdown)
  }
  return "done"
}




function doWhileLoop(array) {
  var i = 0;
  function incrementVariable() {
    i = i + 1;
  }

  do {
    array.pop()
    incrementVariable()
  } while (array.length > 0 && i <10);

  return array
}


/*
instructions says to use incrementVariable as a condition but what's the point?
the incrementVariable function doesn't seem to affect the ability to remove the elements/
instructions:
remove elements from the array until the array is empty or until incrementVariable() returns false
(Your condition might look something like array.length > 0 && incrementVariable().) 



var i = 0;

function incrementVariable() {
  i++
}

*/
