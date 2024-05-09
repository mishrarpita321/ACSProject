import 'bootstrap/dist/css/bootstrap.min.css';
import Combined from './components/Combined/Combined';
import Page2 from './components/Page2/Page2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Combined />} />
        <Route path="/combinedservice" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
