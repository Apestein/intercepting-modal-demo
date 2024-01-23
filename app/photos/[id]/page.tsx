export default function PhotoPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <main className="bg-neutral-800 min-h-screen text-3xl">
      <article className="p-12 bg-white">{id}</article>
    </main>
  )
}
