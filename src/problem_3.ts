{
    function countWordOccurrences(sentence: string, word: string): number {

        const lowerCaseSentence = sentence.toLowerCase()

        const lowerCaseWord = word.toLowerCase()

        const words = lowerCaseSentence.split(' ')
        
        return words.filter(w => w === lowerCaseWord).length
    }

    console.log(countWordOccurrences("I love typescript", "typescript"));
}