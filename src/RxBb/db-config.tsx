import { addRxPlugin, createRxDatabase, RxCollection, RxDatabase } from 'rxdb';
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { AppClick } from '../types/AppClick';
import { AppClickSchema } from './schemas/appClick.schema';
import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election';


addRxPlugin(RxDBDevModePlugin);
addRxPlugin(RxDBLeaderElectionPlugin)

const DATABASE_NAME = "my-rxdb";
const store: { db: RxDatabase<AppCollections, any, any> | null} = { db: null}


export type AppCollections = {
    clicks: RxCollection<AppClick>;
}

const createDB = async () => createRxDatabase<AppCollections>({
    name: DATABASE_NAME,                   // <- name
    storage: getRxStorageDexie(),       // <- RxStorage
    multiInstance: true,                // <- multiInstance (optional, default: true)
    cleanupPolicy: {
        waitForLeadership: true
    }
});


export const getDb = async () => {
    if (store.db === null) {
        store.db = await createDB();

        await store.db.addCollections({
            clicks: {
                schema: AppClickSchema
            }
        });
    }

    return store.db;
};
