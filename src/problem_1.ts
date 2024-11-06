{

    function sumArray(numbers: number[]): number {

        return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)


    }

    const array = [1, 2, 3, 4, 5]
    console.log(sumArray(array));


}

