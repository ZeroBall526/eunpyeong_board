"use client"

export default function Home() {
  async function run(){
    const response = await fetch('http://'+window.location.host+'/api/send', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: "test",
        extra: "test1"
      })
    })
    const result = await response.json()
    alert(result.success)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a>Welcome</a>
      <button onClick={run}>api test btn</button>
    </main>
  );
}