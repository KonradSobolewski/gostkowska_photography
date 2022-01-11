import './style/App.css';
import NavBar from './components/nav/navBar';
import Content from './components/content';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <NavBar />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
