-----> Understanding Union and Intersection Types in TypeScript <-----

In TypeScript, Union and Intersection types are used to create more flexible and dynamic types. These types help you define variables and structures that can handle multiple values or combine different properties. Let’s take a look at what each of these types does with simple examples.


----------> Union Types <-------

Union types allow a variable to hold more than one type. For example, you might want a variable that can either be a string or a number. In TypeScript, you can use the | (pipe) symbol to define a union type.

Example of Union Type:
# { 
# let data: string | number;

# data = "Hello, world!";  
# console.log(data);       

# data = 100;             
# console.log(data);        }

In the above code, the data variable can hold either a string or a number. You can assign a string or a number to data, and both are accepted because we have defined data as a union type of string | number.


---------->Intersection Types <-------

Intersection types combine multiple types into one. A variable or object of an intersection type must have all the properties of the types combined. You use the & symbol to define an intersection type.

Example of Intersection Type:

# interface Person {
#   name: string;
#   age: number;
# }

# interface Worker {
#   company: string;
#   role: string;
# }

# type Employee = Person & Worker;

# const employee: Employee = {
#   name: "Alice",
#   age: 28,
#   company: "TechCorp",
#   role: "Developer"
# };

# console.log(employee);


In this code, Employee is an intersection of Person and Worker. This means that any object of type Employee must have all properties of both Person (name, age) and Worker (company, role).


----------> Summary <----------

*Union types allow a variable to hold values of different types, like string | number.
*Intersection types combine multiple types into one, requiring the variable to meet all type constraints.

Both union and intersection types are powerful tools in TypeScript that help you write more flexible and type-safe code. They enable you to handle a wider range of data types while ensuring that your code remains clear and error-free.

