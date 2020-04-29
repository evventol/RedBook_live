import BaseApi from "../../api/baseApi";

const exampleInstance = new BaseApi('https://jsonplaceholder.typicode.com/posts/1');

export const JSONPlaceholderResources = () => exampleInstance.get()