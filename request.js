const requestPromise = require('request-promise');

requestPromise('https://jsonplaceholder.typicode.com/todos/1').
then((body) => {
    const parserData = JSON.parse(body);
    console.log(`userId: ${parserData.userId} Id: ${parserData.id} title: ${parserData.title}`)
}).catch((error) => {
    console.log(error);
})