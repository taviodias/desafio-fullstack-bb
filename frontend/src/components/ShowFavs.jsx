export function ShowFavsButton({ changeShowFavs, showFavs }) {
    return (<button
        className='bg-slate-600 text-yellow-400 p-2 border border-yellow-400 hover:bg-slate-800 min-w-36 focus:ring-3 focus:ring-yellow-700 rounded-lg'
        type='button'
        onClick={() => changeShowFavs()}
    >
        <span>{showFavs ? "Mostrar Todos" : "Mostrar Favoritos"}</span>
    </button>)
}