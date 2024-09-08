import fetchData from "./fetchData";

export default async function getUserData(userId:number) {
    try {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const data = await fetchData(url);
    return data;
    } catch(error:any){
        throw new Error(`${error.message}: Unable to fetch user data`);
    }
}