import './Home.css';
import React, { useState } from 'react';
import DatabaseTable from '../components/DatabaseTable';

const backEndUrl = "http://localhost:5000";

function Home() {
    const [state, setState] = useState();
    const getTest = () => {
        try {
            fetch(`${backEndUrl}/query`)
                .then(resposta => resposta.json())
                .then(dados => {
                    setState({ value: dados })
                });
        }
        catch {
            console.log("erro")
        }
    }
    return (
        <>
            <div id="container">
                <h1>Home</h1>
                <button onClick={() => getTest(state, setState)}>Buscar</button>
                {state ? <DatabaseTable content={state}/> : null}
            </div>
        </>
    )
}
export default Home;