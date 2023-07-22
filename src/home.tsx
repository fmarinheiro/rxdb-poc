import { useContext, useEffect, useState } from "react"
import { ClicksRepositoryContext, ClicksRepositoryType } from "./RxBb"
import { Home2 } from "./home2";

export const Home = () => {

    const [clicks, setClicks] = useState(0);

    const { findAll }  = useContext(ClicksRepositoryContext) as ClicksRepositoryType;
    useEffect(() => {

        const subs = findAll.subscribe((data) => {
            setClicks(data.length);
        });

        return () => subs.unsubscribe();
    });
    
    return (
        <>
            <h1>Clicks from home component {clicks}</h1>
            <h2><Home2 /></h2>
        </>
    );
}