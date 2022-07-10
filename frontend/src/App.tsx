import CodeAnalyzer from './components/CodeAnalyzer';

type AnalyzeCodeRespone = {
  imports: string[];
  contracts: string[];
}

function App() {
  return (
    <div className='App'>
      <CodeAnalyzer />
    </div>
  );
}

export default App;
