import { Header } from './stories/Header';

function App() {
  console.error('hahahha');
  return (
    <>
      <Header
        onCreateAccount={() => {}}
        onLogin={() => {}}
        onLogout={() => {}}
        user={{
          name: 'Jane Doe',
        }}
      />
    </>
  );
}

export default App;
