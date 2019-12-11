import React from 'react';
import Navbar from './Navbar';
import Head from './Head';

function Layout({head, subheading,image,children}){
    return(
        <>
        <Navbar title="Postealo"/>
        <Head title={head} subheading={subheading} image={image}/>
        {children}
        </>
    );
}

export default Layout;
