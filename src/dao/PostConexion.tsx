export const PostConexion = async ( movie : Movie ) => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    try {
        console.log("TEST AQUÍ");
        console.log(apiUrl);
        console.log("API:" + `${apiUrl}/movies.json`);
        const response = await fetch(`${apiUrl}/movies.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        });
        if (response.ok) {
            const jsonData = await response.json();
            console.log(jsonData);
            return(jsonData);
        } else {
            alert(await response.text());
        }
    
    } catch (error) {
        console.log('Error al obtener los datos:', error);
    }
}