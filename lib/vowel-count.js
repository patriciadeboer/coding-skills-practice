/*
https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  const vowels = ['a','e','i','o','u'];
  const vowelCount=str.split('').filter(char=> vowels.includes(char));
  return vowelCount.length;
}

module.exports= getCount;
