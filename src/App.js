import './App.css';
import AboutSection from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeSection from './components/Home';
import ProjectsSection from './components/Projects';
import Skills from './components/Skills';

function App() {
	return <>
		<Header />
		<HomeSection />
		<AboutSection />
		<ProjectsSection />
		<Skills />
		<Footer />
	</>
}

export default App;
