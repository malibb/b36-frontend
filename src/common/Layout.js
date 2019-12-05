import React from 'react';
import Navbar from './Navbar';
import Head from './Head';

function Layout({head, subheading,children}){
    return(
        <>
        <Navbar title="Postealo"/>
        <Head title={head} subheading={subheading}/>
        {children}
        </>
    );
}

export default Layout;
