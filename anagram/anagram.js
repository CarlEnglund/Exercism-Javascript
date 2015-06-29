function Anagram(startingWord) {

  var normalizedStartingWord;

  startingWord = startingWord.toLowerCase();
  normalizedStartingWord = normalize(startingWord);

  function isAnAnagram(otherWord) {
    otherWord = otherWord.toLowerCase();
    return (startingWord !== otherWord && 
            normalizedStartingWord === normalize(otherWord));
  }

  function findMatchesAmong(potentialAnagrams) {
    if (typeof potentialAnagrams === 'string') {
      potentialAnagrams = [].slice.apply(arguments);
    }
    return potentialAnagrams.filter(isAnAnagram);
  }

  return {
    matches: findMatchesAmong
  };
}

function normalize(word) {
  return word.split('').sort().join('');
}

if (module) {
  module.exports = Anagram;
}