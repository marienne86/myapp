import { HelloWorld } from "./helloWorld";
//importa la funzione Helloworld dal file helloWorld

import { createRoot } from "react-dom/client";
//importare la funzione createRoot utilizzando la librerua client React Dom
//serve per creare un'applicazione React
//createRoot è una funzione che riceve un riferimento a un elemento Html che verrà utilizzato per istanziare la radice

const helloWorldElement = (
    <div>
        <HelloWorld/>
    </div>
)

//si può scrivere su piu righe aggiungendo la parentesi ()

const rootElement=document.getElementById ('root') //elemento root di index.html,
const root = createRoot (rootElement) //elemento radice react

root.render (helloWorldElement)
      