export async function fetchData(url: string) {
  const baseUrl =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_BASE_URL}`;

  const res = await fetch(`${baseUrl}${url}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.json();
}
