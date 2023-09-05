import React from 'react'

const OfferCard = ({ img, category, title }) => {
    return (
        <div className=" rounded-lg !min-w-[357px] flex flex-col items-start cursor-pointer ">
            <img className='rounded-lg' src={`/image/feature-brands/homepage-new-brand-img-${img}.webp`} alt="" />
            <span className="text-gray-500 text-lg font-semibold uppercase mt-4">{category}</span>
            <span className="text-title text-lg font-bold -mt-1">{title}</span>
        </div>
    )
}

export default OfferCard