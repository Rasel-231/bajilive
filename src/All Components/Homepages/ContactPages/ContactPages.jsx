// import React from 'react';
// import { MdAddIcCall } from "react-icons/md";
// const ContactPages = () => {
//     return (
//         <div className='bg-orange-950 '>
//            <p className='flex text-2xl text-white font-bold  py-7 '><MdAddIcCall className='mt-2 mx-2 border border-emerald-50 rounded-full'/> +8801705312709</p>
//         </div>
//     );
// };

// export default ContactPages;

import React from 'react';
import { MdAddIcCall } from "react-icons/md";

const ContactPages = () => {
    return (
        <div className='bg-orange-900 flex justify-center items-center my-5'>
           <p className='sm:flex flex-wrap text-3xl text-white font-bold text-center  py-7'>
            <span>Call us:</span>
              <MdAddIcCall className='mt-1 mx-auto sm:mx-3 sm:border sm:border-emerald-50 sm:rounded-full '/> <span className='sm:hidden'>+88</span>01705-312709
           </p>

        </div>
    );
};

export default ContactPages;

