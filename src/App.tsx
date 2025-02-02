import type React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

const App: React.FC = () => {
	return (
		<div>
			<About />
			<Services />
			<Contact />
		</div>
	);
};

export default App;
