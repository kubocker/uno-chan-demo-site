import MainContent from './MainContent';
import { Header } from './Header';

function App() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#282a36]">
        <MainContent />
      </div>
    </>
  );
}

export default App;
