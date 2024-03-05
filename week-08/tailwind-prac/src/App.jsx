
function App() {

  return (
    <div>
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "red"}}>Hii</div>
        <div style={{ backgroundColor: "green"}}>Hii</div>
        <div style={{ backgroundColor: "pink"}}>Hii</div>
        <div style={{ backgroundColor: "yellow"}}>Hii</div>
      </div>
      <br></br> */}

      {/* <div className="flex justify-start" >
        <div className="bg-red-500">Hii</div>
        <div className="bg-green-500">Hii</div>
        <div className="bg-pink-500">Hii</div>
        <div className="bg-yellow-500">Hii</div>
      </div> */}
      {/* text-right will work on screen greater than sm(small) -> mobile first approach */}
      {/* <div className="grid grid-cols-12 gap-5 text-center sm:text-right" >
        <div className="bg-red-500 col-span-4">Hii</div>
        <div className="bg-green-500 col-span-5">Hii</div>
        <div className="bg-pink-500 col-span-2">Hii</div>
        <div className="bg-yellow-500 col-span-1">Hii</div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2" >
        <div className="bg-red-500 text-yellow-300">Hii</div>
        <div className="bg-green-500">Hii</div>
        <div className="bg-pink-500">Hii</div>
      </div>

    </div>
  )
}

export default App
