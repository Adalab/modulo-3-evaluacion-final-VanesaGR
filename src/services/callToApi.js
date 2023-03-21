const callToApi = () =>{
    return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            const cleanData = data.results.map ((eachCharacter)=>{
                return{
                    image: eachCharacter.image,
                    name:eachCharacter.name,
                    alive: eachCharacter.alive,
                    species: eachCharacter.species,
                    gender: eachCharacter.gender,
                    house: eachCharacter.house,
                };
            });
            return cleanData;
        });
    };

    export default callToApi;


    //llamada a la api, por defecto la de Gryffindor, filtrando solo los datos que necesitamos, en este caso el nombre, el estatus, la especie, el género y la casa