import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>
            <Route path="/show/:showId" element={<Show />} />
          </Routes>
        </BrowserRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
