import Header from "./components/header";
import Hero from "./sections/hero";
import Footer from "./sections/footer";
import {bgImage} from "./assets"; 

const App = () => (
  <main className="flex flex-1 flex-col">
    <section>
      <Header />
    </section>
    <section>
      <Hero />
    </section> 
    <section className="sm:hidden pt-8">
      <img src = {bgImage} className=" object-cover h-[50vh]"/> 
    </section>
    <section className="bottom-0 left-0">
      <Footer />
    </section>
  </main>
)

export default App;
