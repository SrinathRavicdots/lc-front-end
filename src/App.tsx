import { ColorModeContextProvider, TopBar } from './pages/global';

import { Dashboard } from '@mui/icons-material';

function App() {
  return (
    <ColorModeContextProvider>
      <div className="App">
        <main className="content">
          <TopBar />
        </main>
      </div>
    </ColorModeContextProvider>
  );
}

export default App;
