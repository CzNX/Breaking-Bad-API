import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Character from './Character';
import './Main.css'
import spin from '../../img/spinner.gif'

const Main = ({ input }) => {
    const [loading, setloading] = useState(true);
    const [list, setlist] = useState([])

    input = input.toLowerCase();


    const base_url = `https://www.breakingbadapi.com/api/characters?name=${input}`


    useEffect(() => {
        const getlist = async () => {

            try {
                const response = await axios.get(base_url);
                if (response.data) {
                    setlist(response.data);
                    setloading(false);

                }
            } catch (error) {
                console.error(error);

                setloading(true);
            }
        }
        getlist();

    }, [list])



    return (
        loading ? <span className='spin'><img src={spin} alt="" /></span> :
            <section className='main'>
                {
                    list.map(item => {
                        return (
                            <Character {...item} key={item.char_id} />
                        )
                    })
                }


            </section>
    )
}

export default Main
