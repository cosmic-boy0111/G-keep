import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer style={{
            position:'absolute',
            bottom:'0',
            textAlign:'center',
            width:'100%'
        }}
        >
            <p>copyright © {year}</p>
        </footer>
    )
}

export default Footer
