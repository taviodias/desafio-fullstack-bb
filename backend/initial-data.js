import axios from "axios";
import { PATHS } from "./constants.js";

async function fetchPeople() {
    const results = [];
    let res, next;
    next = PATHS.swapi + 'people';
    do {
        res = await axios.get(next);
        next = res.data.next;
        results.push(...res.data.results);
    } while (next)

    return results.map((person) => {
        const genders = {
            male: 'Masculino',
            female: 'Feminino',
            hermaphrodite: 'Hermafrodita',
            'n/a': 'n/a'
        };

        const id = Number(person.url.match(/\d+/)[0]);
        if (person.height === 'unknown') {
            person.height = '??';
        }
        if (person.mass === 'unknown') {
            person.mass = '??';
        }
        if (person["birth_year"] === 'unknown') {
            person["birth_year"] = '??';
        }
        person.gender = genders[person.gender];

        return {
            id,
            name: person.name,
            height: person.height,
            mass: person.mass,
            birthYear: person["birth_year"],
            gender: person.gender,
            avatar: PATHS.avatar + `${id}.jpg`
        }
    });
}

export const PEOPLE = await fetchPeople();