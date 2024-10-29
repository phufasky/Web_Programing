// /app/api/vercel/route.ts

export async function GET() {
    try {
      const response = await fetch('https://api.vercel.app/blog');
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('API Fetch Error:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
        status: 500,
      });
    }
  }
  