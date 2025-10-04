import React, { useState, useEffect } from "react";

export default function urlInstance(){
    // By changing the value, it organizes all the instances for API request, to a specific route.
    const DEBUG = true;
    const debugTrue_message = '=== Debug enabled ===';
    const debugFalse_message = '=== Debug disabled ===';

    if (DEBUG === true){
        // Exporting localhost URL for development.
        const BASE_URL = 'http://localhost:8000';
        console.log(debugTrue_message);
        return BASE_URL;
    } else {
        // Exporting allowed domain URL for production.
        const BASE_URL = ''
        console.log(debugFalse_message);
        return BASE_URL;
    };
};