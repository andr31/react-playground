import './App.css';
import Navbar from './components/Navbar';
import WorkInProgress from './components/WorkInProgress.tsx';

function App() {
  const menuItems = [
    { name: 'ABOUT', link: '/about' },
    { name: 'PORTFOLIO', link: '/portfolio' },
    { name: 'PRICING', link: '/pricing' },
    { name: 'GETTING READY', link: '/getting-ready' },
    { name: 'CONTACT', link: '/contact' },
  ];

  return (
    <>
      <Navbar menuItems={menuItems} />
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/static/images/Lucas_merged_1.png')",
        }}
      >
        <main className="container mx-auto px-4 py-8"></main>
      </div>
      <WorkInProgress></WorkInProgress>
    </>
  );
}

export default App;
