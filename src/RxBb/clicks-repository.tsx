import { RxDatabase, RxDocument } from "rxdb"
import { BehaviorSubject } from "rxjs"
import { AppClick } from "../types/AppClick"
import { ReactNode, createContext } from "react"
import { AppCollections } from "./db-config"


export type ClicksRepositoryType = {
    findAll: BehaviorSubject<RxDocument<AppClick, {}>[]>
}

export const ClicksRepositoryContext = createContext<ClicksRepositoryType | null>(null);

interface ClickRepositoryProviderProps {
    children: ReactNode,
    database: RxDatabase<AppCollections, any, any>
}
  
export const ClickRepositoryProvider = (props: ClickRepositoryProviderProps) => {
   

    return ( 
        <ClicksRepositoryContext.Provider value={{
            findAll: findAllSubject(props.database)
        }}>
            {props.children}
        </ClicksRepositoryContext.Provider>
    );
};

const findAllSubject = (db: RxDatabase<AppCollections, any, any>) => {
    return db.clicks.find().$
}