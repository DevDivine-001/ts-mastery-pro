import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
      </div>
  )
}
export default layout