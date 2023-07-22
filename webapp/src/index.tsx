import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { getDb } from './RxBb';


async function bootstrap() {
  const db =  await getDb();

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <App database={db} />
    </React.StrictMode>
  );
  
} 

bootstrap().then(() => console.log(`App started`));


