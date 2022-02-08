import { Routes, Route } from 'react-router-dom';
import { Home, News } from './views';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
        </Routes>
    );
}

export default App;
