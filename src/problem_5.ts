{
    function getProperty<T,K extends keyof T>(obj:T, Key:K):T[k]{
        return obj[Key]

    }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));

}