export const searchSkills = async (search) => {
  const params = new URLSearchParams({ q: search });

  const response = await fetch(`http://localhost:7030/api/search?${params}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
