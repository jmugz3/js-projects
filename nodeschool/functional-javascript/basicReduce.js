'use strict';

module.exports = function countWords (inputWords){
    return inputWords.reduce( function (wordDict, word) {
        if (wordDict.hasOwnProperty(word)){
           wordDict[word] += 1;
        } else {
           wordDict[word] = 1;
        }
        return wordDict;
    }, {});        
}