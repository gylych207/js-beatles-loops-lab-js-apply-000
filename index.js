// add solution here

function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts){
  let newArr = []
  let i=0;
while(i<facts.length){
  newArr.push(`${facts[i]}!!!`);
  i++;
}
return newArr
}

function iLoveTheBeatles(n){

  const arr = [];
  do{
    arr.push(`I love the Beatles!`)
    n++
  }while(n < 15);
  return arr;
}
