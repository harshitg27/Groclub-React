import React from 'react'
import './Category.css'
import Spices from './img/category/Spices.png'

export default function Category() {
  return (
    <div>
        <section id="category">
            
            <div className="categorys-items">
                <div className="category-photos">
                    <img src={Spices}/>
                </div>
                <p className="category-name"> Snacks </p>
            </div>

            <div className="categorys-items">
                <div className="category-photos">
                    <img src={Spices}/>
                </div>
                <p className="category-name"> BreakFast Items </p>
            </div>

            <div className="categorys-items">
                <div className="category-photos">
                    <img src={Spices}/>
                </div>
                <p className="category-name"> Noodles </p>
            </div>

            <div className="categorys-items">
                <div className="category-photos">
                    <img src={Spices}/>
                </div>
                <p className="category-name"> Spices </p>
            </div>

            <div className="categorys-items">
                <div className="category-photos">
                    <img src={Spices}/>
                </div>
                <p className="category-name"> Steples </p>
            </div>

            <div className="categorys-items">
                <div className="category-photos">
                    <img src={Spices}/>
                </div>
                <p className="category-name"> Dry Fruits </p>
            </div>

            <div className="categorys-items">
                <div className="category-photos">
                    <img src={Spices}/>
                </div>
                <p className="category-name"> personal care </p>
            </div>

            <div className="categorys-items">
                <div className="category-photos">
                    <img src={Spices}/>
                </div>
                <p className="category-name"> beverages </p>
            </div>

            <div className="categorys-items">
                <div className="category-photos">
                    <img src={Spices}/>
                </div>
                <p className="category-name"> household </p>
            </div>
        </section>
    </div>
  )
}

