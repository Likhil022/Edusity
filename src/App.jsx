import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
function App() {
  return (
    <>
      <div className="font-poppins">
        <Navbar />
        <Hero />
        <div className="px-[10%]">
          <Title title="Our Program" subTitle="What we offer" />
          <Programs />
          <About />
          <Title title="Gallery" subTitle="Campus Photos" />
          <Campus />
          <Title title="Testimonials" subTitle="What Student Says" />
        </div>
      </div>
    </>
  );
}

export default App;
