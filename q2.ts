// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    const todoResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = todoResponse.data;

    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
    const user = userResponse.data;

    return {
        title: todo.title,
        completed: todo.completed,
        owner: user.name,
    };
  } catch (error) {
    return "INVALID TODO ID";
  }
};

// Test cases
const input1 = 15;
const input2 = 60;
const input3 = 250;

// Run the tests
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
