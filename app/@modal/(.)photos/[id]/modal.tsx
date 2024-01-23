"use client"

import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<React.ElementRef<"dialog">>(null)

  useEffect(() => {
    dialogRef.current?.showModal()
  }, [])

  const closeModal = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) =>
    e.target === dialogRef.current && router.back()

  return (
    <dialog
      ref={dialogRef}
      onClick={closeModal}
      onClose={router.back}
      className="backdrop:bg-black/60 backdrop:backdrop-blur-sm text-3xl"
    >
      <div className="p-32">{children}</div>
    </dialog>
  )
}
