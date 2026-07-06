import React from "react";
import ProductDetail from "@/components/productdetail";
import Footer from '../components/Footer'
import PaymentMethod from "@/components/paymentmethod";


function Home() {
    return (
        <>
            <ProductDetail />
            <Footer />
            <PaymentMethod />
        </>
    );
}

export default Home;