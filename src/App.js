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

        axios.get('https://logalyzer-backend.herokuapp.com/api/get_status', {headers: {"Access-Control-Allow-Origin": "*"}})
            .then(function (response) {
                // handle success
                if(response.data["status"] === "OK"){
                    setIsLoaded(true);
                    setError(false);
                } else{
                    setIsLoaded(true);
                    setError(true);
                }
            })
            .catch(function (error) {
                    setIsLoaded(true);
                    setError(error);
            });
    }, []);

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

};

export default App;
