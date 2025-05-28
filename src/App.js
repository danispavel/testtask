import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Header />
      <main className="text-[20px] leading-[28px] text-[#1b281d] font-gotham bg-[#f8ede5] w-full">
        <Hero />
      </main>
    </>
  );
}

export default App;
