import { useAtom } from 'jotai';

import Header from './components/Header';
import { queryAtom } from './atoms';

function App() {
  const [query] = useAtom(queryAtom);
  return (
    <>
      <Header />
      {query ? (
        <h1>You are searching for..."{query}"</h1>
      ) : (
        <h1>Search for something above ☝️ 🚀</h1>
      )}
    </>
  );
}

export default App;
