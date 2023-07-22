import { useContext, useEffect, useState } from "react"
import { ClicksRepositoryContext, ClicksRepositoryType } from "./RxBb"

export const Home2 = () => {

    const [clicks, setClicks] = useState(0);

    const { findAll }  = useContext(ClicksRepositoryContext) as ClicksRepositoryType;
    useEffect(() => {
        const subs = findAll.subscribe((data) => {
            setClicks(data.length * 2);
        });

        return () => subs.unsubscribe();
    });
    
    return <>"Clicks from home2 component" {clicks}</>
}