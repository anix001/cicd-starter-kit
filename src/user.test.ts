import getUserData from "./user";
import fetchData from "./fetchData";


jest.mock("./fetchData", () => ({
    __esModule: true,
    default: jest.fn().mockResolvedValue({ user: "mockUser" }),
  }));

  const mockedFetchData = fetchData as jest.MockedFunction<typeof fetchData>;

test('returns user data for a given userId', async ()=>{
    const data = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      };
      mockedFetchData.mockResolvedValue(data);

      const result = await getUserData(1);
      expect(result).toEqual(data);
      expect(fetchData).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
});

test('handles errors when fetching user data', async () => {
    mockedFetchData.mockRejectedValue(new Error('Network Error'));
  
    try {
      await getUserData(1);
    } catch (e:any) {
      expect(e.message).toBe('Network Error: Unable to fetch user data!');
    }
  });
