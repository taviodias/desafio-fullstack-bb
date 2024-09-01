import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './assets/star_wars.png'
import { ShowFavsButton } from './components/ShowFavs';
import { SearchBar } from './components/SearchBar';
import { ListCards } from './components/ListCards';

function App() {
    const [people, setPeople] = useState([]);
    const [favs, setFavs] = useState([1, 2, 3, 4, 11]);
    const [showFavs, setShowFavs] = useState(false);
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

    const changeShowFavs = () => {
        setShowFavs(!showFavs)
        setSearch('');
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
                {showFavs
                    ? null
                    : <SearchBar search={search} changeSearch={changeSearch} clearSearch={clearSearch} />
                }
                <ShowFavsButton changeShowFavs={changeShowFavs} showFavs={showFavs} />
            </div>
            <div className='w-full flex justify-around gap-y-4 gap-x-2 flex-wrap'>
                <ListCards
                    people={people}
                    showFavs={showFavs}
                    addFav={addFav}
                    delFav={delFav}
                    favs={favs}
                    search={search}
                />
                {/* {people.map((person) => {
                    if (showFavs) {
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
                })} */}
            </div>
        </main>
    )
}

export default App;
