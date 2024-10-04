import Footer from "@/components/footer";
import Header from "@/components/header";
import Profile from "@/components/profile";

export default function home(){
  return(
    <div className="overflow-x-hidden">
      <Header/>
      <Profile/>
      <Footer/>
    </div>
  )
}
