'use client'
import { useState } from 'react'

const currentHotels = [
  {
        name: 'SONESTA SELECT DALLAS NORTH PARK',
        img: 'http://3.141.1.117/wp-content/uploads/2025/06/658f794e-b841-4b2b-b6cd-26ba0193130a-1-600x380.png',
  },
  {
        name: 'HAMPTON INN & SUITES PVD AIRPORT / WARWICK',
        img: 'http://3.141.1.117/wp-content/uploads/2021/02/Screen-Shot-2021-02-07-at-12.52.15-AM-600x380.png',
  },
  {
        name: 'HAMPTON INN & SUITES TROPHY CLUB / FORT WORTH',
        img: 'http://3.141.1.117/wp-content/uploads/2013/04/Hampton-Inn-Suites-Trophy-Club.jpg',
  },
  ]

const pastHotels = [
  {
        name: 'COURTYARD BY MARRIOTT DALLAS',
        img: 'http://3.141.1.117/wp-content/uploads/2013/04/Photo-gallery-0.jpg',
  },
  {
        name: 'EMBASSY SUITES LAS COLINAS / DALLAS',
        img: 'http://3.141.1.117/wp-content/uploads/2021/02/daltp-exterior-0530-hor-clsc_O-600x380.jpg',
  },
  {
        name: 'HOMEWOOD SUITES BY HILTON DALLAS',
        img: 'http://3.141.1.117/wp-content/uploads/2021/02/Rendering-600x380.jpg',
  },
  {
        name: 'TOWNEPLACE SUITES BY MARRIOTT DALLAS',
        img: 'http://3.141.1.117/wp-content/uploads/2024/10/Screenshot-2024-10-26-at-1.36.10%E2%80%AFAM-600x380.png',
  },
  { name: 'TRYP BY WYNDHAM COLLEGE STATION', img: null },
  { name: 'WINGATE BY WYNDHAM DALLAS / LAS COLINAS', img: null },
  { name: 'WINGATE BY WYNDHAM RICHARDSON / DALLAS', img: null },
  ]

export default function Portfolio() {
    const [tab, setTab] = useState('current')
    const hotels = tab === 'current' ? currentHotels : pastHotels

  return (
        <>
  {/* Hero */}
          <section className="relative w-full overflow-hidden" style={{height: '90vh'}}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{backgroundImage: "url('http://3.141.1.117/wp-content/uploads/2016/01/mainimages3.jpg')", filter: 'grayscale(100%)'}}
        />
        <div className="absolute inset-0 bg-black/20" />
          </section>

{/* Portfolio Section */}
      <section className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-10">
                    <h2 className="text-2xl tracking-widest uppercase mb-2">
                      OUR <span className="text-[#1a3a8c]">HOTELS</span>
        </h2>
            <div className="w-12 h-0.5 bg-gray-400 mx-auto mb-8" />
        </div>

{/* Tabs */}
          <div className="flex mb-10">
                        <button
              onClick={() => setTab('current')}
              className={`px-10 py-4 text-sm tracking-wider uppercase transition-colors ${
                                tab === 'current'
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-600 hover:text-gray-800 border border-gray-200'
              }`}
            >
              Current
                </button>
            <button
              onClick={() => setTab('past')}
              className={`px-10 py-4 text-sm tracking-wider uppercase transition-colors ${
                                tab === 'past'
                                  ? 'bg-gray-800 text-white'
                                  : 'text-gray-600 hover:text-gray-800 border border-gray-200'
              }`}
            >
              Past
                </button>
                </div>

{/* Hotel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {hotels.map((hotel) => (
                          <div key={hotel.name}>
                            <h3 className="text-xs tracking-widest uppercase text-gray-700 mb-3">{hotel.name}</h3>
                      {hotel.img ? (
                              <img
                                src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-48 object-cover"
                  />
                                      ) : (
                                                          <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                                        {hotel.name}
</div>
                )}
</div>
            ))}
              </div>
              </div>
              </section>
              </>
  )
}
