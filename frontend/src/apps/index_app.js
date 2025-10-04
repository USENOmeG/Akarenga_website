import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from '../apps/url_instance.js';

// Page & components import
import Index from '../pages/index_page/index_page.jsx';

// API request URL instances.
const API_REQUEST_URL = BASE_URL;

const IndexPage = () => {
    const [ message, setMessage ] = useState("Loading...");

    useEffect(() => {
        axios.get(`${API_REQUEST_URL}`)
        .then(response => setMessage(response.data.message))
        .catch(error => {
            console.error("Error fetching data:", error);
            setMessage("Failed to load message.");
        });
    }, []);

    useEffect(() => {
        console.log("Message:", message);
    }, [message]);

    return(
        <div className="home">
            {/* Navbar section */}

            {/* Hero section */}
            <Index></Index>

            {/* Footer section */}
        </div>
    );
};

export default IndexPage;