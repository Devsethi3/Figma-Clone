"use client"
import Live from '@/components/Live'
import Navbar from '@/components/users/Navbar'

const page = () => {
  return (
    <main className='h-screen overflow-hidden'>
      <Navbar />
      <section className='flex h-full flex-row'></section>
      <Live />
    </main>
  )
}

export default page