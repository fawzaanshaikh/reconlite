import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import List from "./pages/List";
import View from "./pages/View";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/create" element={<Create />} />
            <Route path="/view/:id" element={<View />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
