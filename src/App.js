import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import News from './Pages/News';

const contentful = require("contentful");

export const client = contentful.createClient({
  space: '71m0kfhi6izb',
  environment: 'master',
  accessToken: 'TFo53g-B6lhOOrvpPonbZfX-dvrXc6fEFJLUXTrt6wk'
})

function App() {
  client
  .getEntry('3dvy3jS6PUOOuc8ArLYrYb')
  .then((entry) => {console.log (entry)})
  .catch((err) => {console.log (err)})

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="news/:newsId" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;