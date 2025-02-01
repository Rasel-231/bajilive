
const Game = ({received}) => {
    const {title,category,img,description}= received;
  
    return (
        <div>
           <div className="flex justify-center items-center my-2 py-2">
           <div className='border border-black rounded shadow-md text-center'>
            <div className='flex justify-center items-center '>
                <img src={img} alt="404" className="w-full h-[320px]"/>
            </div>
            <div>
                <p className="text-xl font-bold uppercase">{title}</p>
                <p className="font-semibold">{category}</p>
                <p>{description}</p>
                <div className='my-3'>
                    <button className='p-2 bg-blue-600 rounded-md text-white hover:bg-green-600'>Play Now</button>
                </div>
            </div>
           </div>
        </div>
     
        </div>
    );
};

export default Game;


