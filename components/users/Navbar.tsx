import Image from "next/image"
import ActiveUsers from "./ActiveUsers"

const Navbar = () => {
  return (
    <div>
      <nav className="flex select-none items-center justify-between gap-4 bg-[#130b1c] px-5 text-white">
        <Image src="/assets/logo.svg" alt="logo" width={60} height={60} />
        <ActiveUsers />
      </nav>
    </div>
  )
}

export default Navbar