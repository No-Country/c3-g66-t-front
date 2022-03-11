
const Points = ( {minPoint, maxPoint, onChangeMinPoint, onChangeMaxPoint} ) => {

    const getMinPoint = (e) => {
        onChangeMinPoint(e.target.value);
    };
    const getMaxPoint = (e) => {
        onChangeMaxPoint(e.target.value);
    };

    return (
        <div className='pl-5 h-10 w-64 flex flex-col items-start justify-center bg-gray-100 border-r border-gray-200'>
            <div className='flex flex-row items-center justify-start w-full gap-4'>
                <div className="h-6 w-20 rounded shadow-md">
                    <input className='p-2 h-full w-full border border-gray-400 rounded text-xs focus:outline-none bg-white'
                    onInput={getMinPoint} type='number' min='1' max='5' placeholder='Mínimo' value={minPoint}/>
                </div>
                <span className='text-sm text-gray-400'>-</span>
                <div className="h-6 w-20 rounded shadow-md">
                    <input className='p-2 h-full w-full rounded bg-white border border-gray-400 text-xs focus:outline-none'
                    onInput={getMaxPoint} type='number' min='1' max='5' placeholder='Máximo' value={maxPoint}/>
                </div>
            </div>
        </div>
    )
}

export default Points
