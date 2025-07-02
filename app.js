function App() {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <header className="p-4 border-b flex justify-between items-center">
          <h1 className="text-xl font-bold">Anne</h1>
          <nav className="hidden md:flex gap-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>
  
        <main className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <section className="bg-blue-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">About Me</h2>
            <p>I’m an engineering student passionate about design and systems.</p>
          </section>
          <section className="bg-pink-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold">Projects</h2>
            <p>Here are some of the things I’ve worked on.</p>
          </section>
        </main>
  
        <footer className="p-4 text-center text-sm text-gray-500 border-t mt-8">
          &copy; 2025 Anne
        </footer>
      </div>
    );
  }
  export default App;
  