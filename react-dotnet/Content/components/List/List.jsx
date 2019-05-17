import React from 'react';

export default ({ corretores }) => (
    <ul>
        { corretores.map(corretor => (
            <div key={corretor.id}>
                <h2>Corretor: {corretor.name}</h2>
            </div>
        ))}
    </ul>
)

