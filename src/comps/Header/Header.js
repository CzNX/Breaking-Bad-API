import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../img/logo.png'
import axios from 'axios';


const mapper = (mapme) => {
    return (
        mapme.map(q => {
            const { quote, author, quote_id } = q;
            return (
                <div key={quote_id} className='quote'>
                    <p>{quote}</p>
                    <small>- {author}</small>

                </div>)
        }))
}


const Header = ({ input, setinput }) => {

    const [quotelist, setquotelist] = useState([])
    const [randquotelist, setrandquotelist] = useState([])
    const [state, setstate] = useState(true)

    const base_url = `https://www.breakingbadapi.com/api/quote/random`;
    const randbaseurl = `https://www.breakingbadapi.com/api/quote/random?author=Walter+White`





    const handleqQuote = async (e) => {
        e.preventDefault();
        const getquote = async () => {
            try {
                const response = await axios.get(base_url);
                if (response.data) {
                    setquotelist(response.data);
                    setstate(false);
                }

            }
            catch (error) {
                console.error(error);
                setstate(true);
            }
        }
        getquote();
    }


    useEffect(() => {
        const quotelistmap = async () => {

            try {
                const response = await axios.get(randbaseurl);
                if (response.data) {
                    setrandquotelist(response.data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        quotelistmap();

    }, [])





    return (
        <section className='header'>
            <p className='my'>&copy; CzNX / 2021</p>
            <div className="headerinner">
                <div className="himage">
                    <img src={logo} alt="err" />
                </div>
                <div className="search">
                    <form className='form'>
                        <input type="text"
                            value={input}
                            placeholder='search character'
                            onChange={(e) => setinput(e.target.value)}
                        />
                        <button className='q-btn'
                            onClick={handleqQuote}
                        >
                            Random Quote
                        </button>
                    </form>
                </div>
                <div className="quote-content">


                    {/* {state ?    randquotelist.map(q => {
                        const { quote, author, quote_id } = q;
                        return (
                            <div key={quote_id} className='quote'>
                                <p>{quote}</p>
                                <small>- {author}</small>

                            </div>)
                    }) :

                        quotelist.map(q => {
                            const { quote, author, quote_id } = q;
                            return (
                                <div key={quote_id} className='quote'>
                                    <p>{quote}</p>
                                    <small>- {author}</small>

                                </div>)
                        })} */}

                    {state ? mapper(randquotelist) : mapper(quotelist)}
                </div>


            </div>

        </section>
    )
}

export default Header
