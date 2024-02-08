export const fetchTvShowDetails = async (tvShowId: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.SOME_TOKEN}`,
      },
    }
  );

  return res.json();
};
