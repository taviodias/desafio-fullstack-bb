import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from './components/Card';
import logo from './assets/star_wars.png'

function App() {
    const [people, setPeople] = useState([]);
    const [favs, setFavs] = useState([1, 2, 3, 4, 11]);
    const [seeFavs, setSeeFavs] = useState(false);
    const [search, setSearch] = useState('');

    const fetchPeople = async () => {
        const res = await axios.get('http://localhost:8080');
        setPeople(res.data);
    }

    const addFav = (id) => {
        if (!favs.includes(id)) {
            setFavs([...favs, id]);
        }
    };

    const delFav = (id) => {
        const posId = favs.indexOf(id);
        if (posId === -1) return;
        const newFavs = [...favs];
        newFavs.splice(posId, 1);
        setFavs(newFavs);
    };

    const changeSearch = (e) => {
        setSearch(e.target.value);
    }

    const clearSearch = (e) => {
        setSearch('');
    }

    useEffect(() => {
        fetchPeople();
    }, []);

    return (
        <main className='flex flex-col items-center justify-center gap-y-4 mt-8 container'>
            <img className='h-40 mb-4' src={logo} alt="Star Wars logo" />
            <div className='flex gap-x-2 w-full justify-center px-4'>
                <div className="relative grow max-w-[450px]">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" onChange={(e) => changeSearch(e)} value={search} className="block w-full p-4 ps-10 text-sm border border-white rounded-lg focus:ring-yellow-700 bg-gray-700  placeholder-gray-400 text-white " placeholder="Busque um Personagem" />
                    <button type="button" onClick={(e) => clearSearch(e)} className="text-white absolute end-2.5 bottom-2.5 bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:outline-none focus:ring-yellow-700 font-medium rounded-lg text-sm px-4 py-2">Limpar</button>
                </div>
                <button
                    className='bg-slate-600 text-yellow-400 p-2 border border-yellow-400 hover:bg-slate-800 min-w-36 focus:ring-3 focus:ring-yellow-700 rounded-lg'
                    type='button'
                    onClick={() => setSeeFavs(!seeFavs)}
                >
                    <span>{seeFavs ? "Mostrar Todos" : "Mostrar Favoritos"}</span>
                </button>
            </div>
            <div className='w-full flex justify-around gap-y-4 gap-x-2 flex-wrap'>
                {people.map((person) => {
                    if (seeFavs) {
                        if (!favs.includes(person.id)) {
                            return;
                        }
                        return <Card
                            key={person.id}
                            person={person}
                            fav={favs.includes(person.id)}
                            addFav={addFav}
                            delFav={delFav}
                        />
                    }
                    return <Card
                        key={person.id}
                        person={person}
                        fav={favs.includes(person.id)}
                        addFav={addFav}
                        delFav={delFav}
                    />
                })}
            </div>
        </main>
    )
}

export default App;
