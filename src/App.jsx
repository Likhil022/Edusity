import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
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
        </div>
      </div>
    </>
  );
}

export default App;
