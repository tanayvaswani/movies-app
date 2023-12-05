import 'dotenv/config';

export const mutationLogin = async () => {
    const res = await fetch(
        "https://api.themoviedb.org/3/authentication/guest_session/new",
        {
            headers: {
                Authorization: 
                "Bearer import.meta.env.API_READ_ACCESS_TOKEN"
            },
        }
    );

    console.log(res.json());

    return res.json();
};