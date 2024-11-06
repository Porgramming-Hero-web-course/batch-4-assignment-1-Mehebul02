{
    function removeDuplicates (numbers:number[]){
        return [...new Set(numbers)];
    }
    const array = [1, 2, 2, 3, 4, 4, 5]
    console.log(removeDuplicates(array));
}