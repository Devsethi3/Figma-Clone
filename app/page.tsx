"use client"
import LeftSidebar from '@/components/LeftSidebar'
import Live from '@/components/Live'
import RightSidebar from '@/components/RightSidebar'
import Navbar from '@/components/users/Navbar'
import { useEffect, useRef } from 'react'
import { fabric } from 'fabric'
import { handleCanvasMouseDown, handleResize, initializeFabric } from '@/lib/canvas'

const page = () => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fabricRef = useRef<fabric.Canvas | null>(null)
  const isDrawing = useRef(false)
  const shapeRef = useRef<fabric.Object | null>(null)
  const selectedShapeRef = useRef<string | null>(null)

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef })


    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        options,
        canvas,
        isDrawing,
        shapeRef,
        selectedShapeRef
      })
    })

    window.addEventListener("resize", () => {
      handleResize({ fabricRef })
    })
  }, [])

  return (
    <main className='h-screen overflow-hidden'>
      <Navbar />
      <section className='flex h-full flex-row'>
        <LeftSidebar />
        <Live />
        <RightSidebar />
      </section>
    </main>
  )
}

export default page