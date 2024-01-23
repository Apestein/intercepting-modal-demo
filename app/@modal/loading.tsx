"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useRef } from "react"

export default function Loading() {
  // const dialogRef = useRef<React.ElementRef<"dialog">>(null)

  // useEffect(() => {
  //   dialogRef.current?.showModal()
  // }, [])

  return (
    <div className="fixed inset-0 bg-black/60">
      <Skeleton className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-32" />
    </div>
    // <dialog ref={dialogRef}>
    //   <Skeleton className="p-32" />
    // </dialog>
  )
}
