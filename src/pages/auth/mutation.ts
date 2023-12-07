import 'dotenv/config';

export const mutationLogin = async () => {

    const apiReadAccessToken = import.meta.env.VITE_API_READ_ACCESS_TOKEN;

    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: `Bearer ${apiReadAccessToken}`
            },
        }
    );

    console.log("inside mutation");
    console.log(await res.json());              //res.json() returns a promise, so we should use await when logging the response.
    console.log("done mutation");
    return res.json();
};