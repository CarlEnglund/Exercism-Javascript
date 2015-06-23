var words = function (input)
{
    //Array to store the result
    var words = {};

    //Store words in array by splitting them
    var wordList = input.split(/\s+/);

    //Loop that runs for the entire wordlist length
    while (wordList.length > 0)
    {
        //Set the first word to temp and remove it from the array
        var temp = wordList.shift();
        //Count it as 1 word
        words[temp] = 1;
        //Search for the word in the array, if not exsistant the function will return -1
        while(wordList.indexOf(temp) != -1)
        {
            //Retrive new word
            wordList.splice(wordList.indexOf(temp),1)
            words[temp]++;
        }
    }

    //Return result
    return words;
}

module.exports = words;