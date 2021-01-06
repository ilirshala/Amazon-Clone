import React from 'react'
import Product from './Product';
import './Home.css';



function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />


            { /* Products id,title,price,rating,image */}
            <div className="home__row">
                <Product
                    id="123213341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.95}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                />
                <Product
                    id="3543543135"
                    title="AmazonBasics Nylon Braided Lightning to USB Cable - MFi Certified Apple iPhone Charger, Dark Gray, 6-Foot (2-Pack) (Durability Rated 4,000 Bends)"
                    price={21.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61Xgh3kNA3L._AC_UL320_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="123744341"
                    title="AmazonBasics Humidifier with Night Light and Aroma Diffuser - 4-Liter, White
                    "
                    price={34.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71JHDQfKgUL._AC_UL320_.jpg"
                />
                <Product
                    id="123213341"
                    title="AmazonBasics Dehumidifier - For Areas Up to 2,500 Square Feet, 35-Pint, Energy Star Certified"
                    price={179.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51YrJCDKWWL._AC_UL320_.jpg"
                />
                <Product
                    id="1232548541"
                    title="AmazonBasics USB Pro Gaming Headset with Microphone for PC, Black"
                    price={39.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71bezUegMkL._AC_UL320_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1244213341"
                    title="Sceptre Curved 27 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)"
                    price={168.97}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/914W+OtJQ-L._AC_UY218_.jpg"
                />

            </div>




        </div>


    )
}

export default Home
