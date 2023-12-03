import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LotteryPage from './pages/lottery';
import { WagmiConfig } from 'wagmi';
import { client } from './helpers/wagmi';

function App() {
  return (
    <WagmiConfig config={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/lottery" element={<LotteryPage />} />
            <Route path="*" element={<LotteryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WagmiConfig>
  );
}

export default App;
