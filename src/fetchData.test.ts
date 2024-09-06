import axios from "axios";
import fetchData from "./fetchData";


jest.mock('axios');

// Explicitly cast axios.get as a Jest mock function. TypeScript doesn't know that the axios module is mocked by Jest
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('Fetches successfully data from an API', async()=>{
   const data = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  };
  mockedAxios.get.mockResolvedValue({data});

   const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
   expect(result).toBe(data);
});
