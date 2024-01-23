import { Modal } from "./modal"

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string }
}) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return <Modal>{photoId}</Modal>
}
