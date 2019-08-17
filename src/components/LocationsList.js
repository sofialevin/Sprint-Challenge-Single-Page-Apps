import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {

    const [locations, setLocations ] = useState([]);

    useEffect(() => {
        axios
            .get('https://rickandmortyapi.com/api/location/')
            .then(result => {
                setLocations(result.data.results);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <section className="grid-view">
            {locations.map(locations => {
                return <LocationCard locations={locations} key={locations.id}/>
            })}
        </section>
    )
    
}

// const [locations, setLocations ] = useState([]);

//     useEffect(() => {
//         axios
//           .get('https://rickandmortyapi.com/api/location/')
//           .then(result => {
//             setLocations(result.data.results);
//             console.log(locations)
//           })
//           .catch(error => console.log(error))
//       }, []);

//     return (
//         <section className="grid-view">
//             {locations.map(location => {
//                 return <LocationCard location={location} key={location.id}/>
//             })}
//         </section>
//     )
// }
