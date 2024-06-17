// ./src/pages/Category.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <div className='pt-16 flex flex-col justify-center container mx-auto px-3'>
            <Link className='py-2' to="./atasan">Atasan</Link>
            <Link className='py-2' to="./bawahan">Bawahan</Link>
            <Link className='py-2' to="./setelan">Setelan</Link>
            <Link className='py-2' to="./aksesoris">Aksesoris</Link>
            <Link className='py-2' to="./dress">Dress</Link>
            <Link className='py-2' to="./sepatu">Sepatu</Link>
            <Link className='py-2' to="./tokopedia">Tokopedia</Link>
            <Link className='py-2' to="./shopee">Shopee</Link>
        </div>
    )
}

export default Category