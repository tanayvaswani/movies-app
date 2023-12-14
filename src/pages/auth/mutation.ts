
export const mutationLogin = async () => {

    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
            },
        }
    );

    // console.log(await res.json());              //res.json() returns a promise, so we should use await when logging the response. But we don't need to await when returning the response, as it will cause error while calling mutationLogin() in index.tsx
    return res.json();
}; 