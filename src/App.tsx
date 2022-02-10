import { Routes, Route } from 'react-router-dom';
import { Home, News } from './views';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news-coverage" element={<News />} />
        </Routes>
    );
}

export default App;
