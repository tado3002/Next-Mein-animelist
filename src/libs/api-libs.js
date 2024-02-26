export const getAnimeResponse = async (resource, query) => {
  const api = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}/anime${query}`
  );

  const anime = await api.json();
  return anime;
};
export const getNestedAnime = async (resource, objProperty) => {
  const api = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}/anime`
  );
  const anime = await api.json();
  return anime.data.flatMap((item) => item[objProperty]);
};
export const getRandomizeNumber = (data, gap) => {
  let start = Math.floor(Math.random() * data.length)
      // jika length - start < gap, exp : 200 195 8 -3
  if(data.length - start < gap){start = data.length - gap}
  const end = start + gap;
  const response = {data: data.slice(start, end)};
  return response;
};
