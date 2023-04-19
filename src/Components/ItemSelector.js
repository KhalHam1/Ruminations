import React from 'react'
import './ItemSelector.css'

function ItemSelector() {
    return (
        <div>
            <div className='selection__container'>
            <button className='selection__top__left'><div className='selection__text'>Defining Life</div></button>
            <button className='selection__top__right'><div className='selection__text'>Life Quotes</div></button>
            <button className='selection__bottom__left'><div className='selection__text'>Life Stories</div></button>
            <button className='selection__bottom__right'><div className='selection__text'>COMING SOON</div></button>
            </div>
        

        </div>
    );
}

export default ItemSelector;