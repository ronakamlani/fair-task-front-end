import React from 'react';
import Link from 'next/link';
import { AnchorInterface } from '../../interface/Anchor.interface';



const PrimaryAnchor = ({href,name}:AnchorInterface)=>{
    return (<Link as={href} href={href}>
            <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                {name}
            </a>
        </Link>
    );
};

export default PrimaryAnchor;