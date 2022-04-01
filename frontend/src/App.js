import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreens";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <h1>Ecommerce App</h1>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
