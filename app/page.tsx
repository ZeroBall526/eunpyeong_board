

export default async function Home() {

  let q1=1
  let q2=1
  let q3=1
  let q4=1

  let get_name = "test"

  console.log("insert into quiz values (null,"+q1+","+q2+","+q3+","+q4 +",'" + get_name + "','" + gettime + "')")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <a>Welcome</a>
    </main>
  );
}