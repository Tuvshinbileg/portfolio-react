import Header from "./components/header.js";
import About from "./components/about.js";
import Experience from "./components/experience.js";

export default function Home() {
  return (
    <div className="font-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
        <Header />
        <main className="pt-24 w-full lg:w-[52%] lg:py-24 flex flex-col" id="content">
          <About />
          <Experience />
        </main>
      </div>
    </div>
  );
}
