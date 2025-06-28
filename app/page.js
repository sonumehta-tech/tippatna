
import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testomonil";
import WhyUs from "@/Components/Whyus";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Hero/>
      <Services/>
      <WhyUs/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default App;
