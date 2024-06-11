import executeQuery from './_lib/db'

export default async function Home() {


  const sql = 'select * from quiz'
  const data = await executeQuery(sql, '')
  const getdata = JSON.parse(JSON.stringify(data))

  console.log(getdata)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a>Welcome</a>
    </main>
  );
}