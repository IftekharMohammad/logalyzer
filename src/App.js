import React, {useEffect, useState} from "react";
import axios from 'axios';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Blocks/Loader/Loader";
import ErrorView from "./components/ErrorView/ErrorView";

const App = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        axios.get('https://reqres.in/api/users/2')
            .then(function (response) {
                // handle success
                 setIsLoaded(true);
                console.log(response);
            })
            .catch(function (error) {
                    setIsLoaded(true);
                    setError(error);
                console.log(error);
            });
    }, [])

    if (error) {
        return (
            <>
                <Header/>
                <ErrorView/>
                <Footer/>
            </>
        );
    } else if (!isLoaded) {
        return (
            <>
                <Loader/>
            </>
        );
    } else {
        return (
            <>
                <Header/>
                <Layout/>
                <Footer/>
            </>
        );
    }

}

export default App;
