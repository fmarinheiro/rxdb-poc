import { createContext } from "react";
import { AppCollections } from "./db-config";
import { RxDatabase } from "rxdb";

export const DatabaseContext = createContext<RxDatabase<AppCollections, any, any> | null>(null);