import axios from "axios";
import { PATHS } from "./constants.js";

async function fetchPeople(){
    const results = [];
    let res, next;
    next = PATHS.swapi+'people';
    do{
        res = await axios.get(next);
        next = res.data.next;
        results.push(...res.data.results);
    }while(next)
    
    return results.map((person) =>{
        const id = Number(person.url.match(/\d+/)[0]);
        
        return {
            id,
            name: person.name,
            height: person.height,
            mass: person.mass,
            birthYear: person["birth_year"],
            gender: person.gender,
            avatar: PATHS.avatar+`${id}.jpg`
        }
    });
}

export const PEOPLE = await fetchPeople();