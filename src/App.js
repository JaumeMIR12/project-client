import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    // Obtener los datos desde el backend
    useEffect(() => {
        axios.get('http://localhost:8000/api/home-data')
            .then(response => {
                setPlayers(response.data.players);
                setTeams(response.data.teams);
                setLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <header>
                <h1>Football Manager</h1>
                <p>Bienvenido a tu aventura como Manager de Fútbol</p>
            </header>
            <section>
                <h2>Jugadores Destacados</h2>
                <ul>
                    {players.map((player, index) => (
                        <li key={index}>
                            {player.name} - {player.position} ({player.team})
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Equipos</h2>
                <ul>
                    {teams.map((team, index) => (
                        <li key={index}>
                            {team.name} - {team.country}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default App;
