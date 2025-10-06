// Built-in library.
import React, { useState, useEffect } from "react";

// Pages & components.
import styles from '../index_page/index_page.module.css';

export default function Index(){

    return(
        <div className="heroContainer">
            <section className="hero">
                <h3>Hello world</h3>
            </section>
            <section className="aboutUs"></section>
            <section className="ourService"></section>
            <section className="youtubePR"></section>
            <section className="solutions"></section>
            <section className="questionAndAnswer"></section>
            <section className="contactUs"></section>
        </div>
    );
};