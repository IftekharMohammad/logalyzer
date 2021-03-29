import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Form />
            <Footer/>
        </div>
    );
}

export default App;
