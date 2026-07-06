import React from "react";
import Sale from '../components/sale'
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import Products from "@/components/products";
import Feature from "@/components/feature";
import Footer from '../components/Footer'
import PaymentMethod from "@/components/paymentmethod";


function Home() {
    return (
        <>
            <Hero />
            <Feature />
            <Sale />
            <Categories />
            <Products />
            <Footer />
            <PaymentMethod/>
        </>
    );
}

export default Home;