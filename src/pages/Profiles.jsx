// ./src/pages/Profiles.jsx
import React from 'react'
import Navbar from '../components/Navbar'

const Profiles = () => {
    return (
        <div className='pt-16 bg-slate-50 h-screen'>
            <div className='container mx-auto px-4 flex flex-col gap-4'>
                <section>
                    <h1 className='text-3xl font-bold'>Profile Kami</h1>
                    <p className='mt-4 text-lg text-balance'>Selamat datang di halaman profil <span className='font-bold'>Gractesz</span>! Kami adalah platform yang didedikasikan untuk memberikan rekomendasi produk pakaian wanita terbaik dari berbagai toko online terpercaya. <span className='font-bold'>Gractesz</span> berkomitmen untuk membantu Anda menemukan pilihan fashion terkini dan terpopuler tanpa repot. Kami tidak mengulas produk secara mendalam, tetapi kami memastikan setiap rekomendasi yang kami berikan adalah pilihan terbaik berdasarkan tren dan kualitas. Jelajahi rekomendasi pakaian wanita dari kami dan temukan gaya yang paling cocok untuk Anda.</p>
                </section>
                <section>
                    <h1 className='text-3xl font-bold'>Kontak Kami</h1>
                </section>
            </div>
        </div>
    )
}

export default Profiles