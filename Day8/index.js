

function findLongestWord(sentence) {
    
    const words = sentence.split(" ");   
    
    let longestWord = "";
    let longestLength = 0;   
   
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const wordLength = word.length;     
     
      if (wordLength > longestLength) {
        longestWord = word;
        longestLength = wordLength;
      }
    }    

    return [longestWord, longestLength];
  } 
  
  console.log(findLongestWord("Problem solving is an imprortant skill every developer should have")); 
  