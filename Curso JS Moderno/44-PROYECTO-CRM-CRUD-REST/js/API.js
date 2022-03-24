const url = '../db.json';

export const nuevoCliente =  async (cliente) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch(error) {
        console.log(error);
    }
}