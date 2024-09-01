import { Card } from './Card';

export function ListCards({ people, showFavs, favs, addFav, delFav, search }) {
    return (people.map((person) => {
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
        if (search) {
            const regex = new RegExp('\w*' + search.toLowerCase() + '\w*', 'g');
            if (regex.test(person.name.toLowerCase())) {
                return <Card
                    key={person.id}
                    person={person}
                    fav={favs.includes(person.id)}
                    addFav={addFav}
                    delFav={delFav}
                />
            }
            return;
        }
        return <Card
            key={person.id}
            person={person}
            fav={favs.includes(person.id)}
            addFav={addFav}
            delFav={delFav}
        />
    }))
}