import Link from "next/link"

export default function Home() {
  const photos = Array.from({ length: 6 }, (_, i) => i + 1)
  return (
    <main className="flex min-h-screen text-3xl gap-3 flex-col items-center bg-neutral-800 justify-between p-24">
      {photos.map((id) => (
        <Link key={id} href={`/photos/${id}`} className="bg-white p-12">
          {id}
        </Link>
      ))}
    </main>
  )
}
