import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";

import "../styles/global.css";

export default function MyApp({Component, pageProps}){
    return <>
        <Header/>
        <main><Component {...pageProps}/></main>
        <Toaster/>
        <Footer/>
    </>;
}