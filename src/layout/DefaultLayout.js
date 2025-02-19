import React from "react";
import Header from "../component/Header";
import Content from "../component/Content";
import Footer from "../component/Footer";

function DefaultLayout() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
