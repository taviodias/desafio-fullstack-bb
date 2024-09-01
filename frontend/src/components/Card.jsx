import { FavMark } from "./FavMark";

export function Card({ person, fav, addFav, delFav }) {
    return (
        <div className='flex h-60 w-[370px] border border-gray-400 rounded shadow-lg relative overflow-hidden'>
            {fav
                ? <FavMark />
                : <></>
            }
            <img loading="lazy" className='rounded-bl-sm rounded-tl-sm' src={person.avatar} alt={person.name} />
            <div className="px-4 flex flex-col bg-slate-600 w-full text-center">
                <header className="h-1/5 flex items-center justify-center pt-2.5">
                    <p className="text-gray-300 font-bold text-2xl text-wrap">{person.name}</p>
                </header>
                <section className="flex flex-col justify-evenly h-4/5">
                    <div className='flow-root'>
                        <p className="text-gray-900 font-bold float-left">Altura</p>
                        <p className='text-gray-300 font-normal float-right'>{person.height} cm</p>
                    </div>
                    <div className='flow-root'>
                        <p className="text-gray-900 font-bold float-left">Peso</p>
                        <p className='text-gray-300 font-normal float-right'>{person.mass} Kg</p>
                    </div><div className='flow-root'>
                        <p className="text-gray-900 font-bold float-left">Nascimento</p>
                        <p className='text-gray-300 font-normal float-right'>{person.birthYear}</p>
                    </div><div className='flow-root'>
                        <p className="text-gray-900 font-bold float-left">Gênero</p>
                        <p className='text-gray-300 font-normal float-right'>{person.gender}</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => fav ? delFav(person.id) : addFav(person.id)}
                        className="focus:ring-2 focus:outline-none font-medium rounded-lg text-sm py-1 text-center border-yellow-400 text-yellow-400 hover:text-white hover:bg-yellow-500 focus:ring-yellow-700 border"
                    >
                        <span><strong>{fav ? '-' : '+'}</strong> Favorito</span>
                    </button>
                </section>
            </div>
        </div>
    )
}
