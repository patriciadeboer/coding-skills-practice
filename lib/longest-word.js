/*
  Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

/*
Previous:
  function LongestWord(sen) {

    let newSen = sen.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");

    let arrSen = newSen.split(' ');
    let maxWord='';
    for(let i=0;i<arrSen.length;i++){
        currentLength=arrSen[i].length;
        if(currentLength>maxWord.length){
            maxWord=arrSen[i];
        }
    }


    // code goes here
    return maxWord;

  }

  // keep this function call here
  LongestWord(readline());
*/

function LongestWord(sen) {
  let longestWord = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz1234567890';

  sen.split(' ').forEach((word) => {
    let currentWord = word
      .split('')
      .filter((letter) => letters.includes(letter))
      .join('');
    let currentLength = currentWord.length;
    if (currentLength > longestWord.length) {
      longestWord = currentWord;
    }
  });
  return longestWord;
}

module.exports = LongestWord;
