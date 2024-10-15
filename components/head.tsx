export default function Head() {
    return (
       <header className="bg-gray-800 p-5 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">🎶 Music Store</h1>
        < div className="flex justify-between items-center gap-5">
            <button className="bg-black text-white px-4 py-2 rounded-md"> Home </button>
            <button className="bg-black text-white px-4 py-2 rounded-md"> Product </button>
            <button className="bg-black text-white px-4 py-2 rounded-md"> About us </button>
        </div>
      </header>
        ) 
}