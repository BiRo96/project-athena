export async function fetchDataFromAPI() {
  const res = await fetch('https://raw.githubusercontent.com/BiRo96/project-athena-resources/refs/heads/main/datas.json');
  if (!res.ok) throw new Error('Failed to fetch');
  return await res.json();
}
