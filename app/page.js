'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const Page = () => {
  const [activeContent, setActiveContent] = useState('services');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const content = {
    about: (
      <>
        <div className="flex flex-col gap-4 max-w-full md:max-w-40 nav-content font-semibold">
          <div>i&apos;m sumona, a web developer who builds websites that feel personal, alive, and true to you.</div>
          <div>i create <span className='underline'>indie-inspired personal sites</span>, <span className='underline'>minimal blogs</span>, and <span className='underline'>professional websites</span> for businesses, portfolios, and creators.</div>
        </div>
        <div className='max-w-full md:max-w-40 font-semibold'>because i believe everyone deserves a space on the internet that feels like home – honest, meaningful, and uniquely theirs, whether it&apos;s for themselves or their work.</div>
      </>
    ),
    gallery: (
      <>
        <div className="flex flex-col gap-4 nav-content">
          <div className='font-semibold'>here&apos;s a collection of my recent projects and works</div>
          <div className='pb-4 flex flex-col -space-y-2 w-full md:w-[16rem] h-[18rem] overflow-y-auto scroll-smooth px-3 font-semibold'>
            <div className="w-full md:w-54 h-full relative group">
              <img 
                src="/p1.jpg" 
                className="w-fit object-cover rounded" 
              />
              <div className='text-base text-neutral-100 w-full flex items-center justify-between relative z-999 -translate-y-8 px-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                <p>portfolio site</p>
                <a target='_blank' href='https://portfolio.sumona.tech/' className='underline'>live</a>
              </div>
            </div>
            <div className="w-full md:w-54 h-full relative group">
              <img 
                src="/p2.jpg" 
                className="w-fit object-cover rounded" 
              />
              <div className='text-base text-neutral-100 w-full flex items-center justify-between relative z-999 -translate-y-8 px-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                <p>blog site</p>
                <a target='_blank' href='https://mysticalread.vercel.app/' className='underline'>live</a>
              </div>
            </div>
            <div className="w-full md:w-54 h-full relative group">
              <img 
                src="/p3.jpg" 
                className="w-fit object-cover rounded" 
              />
              <div className='text-base text-black w-full flex items-center justify-between relative z-999 -translate-y-8 px-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                <p>code canvas</p>
                <a target='_blank' href='https://code-canvas-neon.vercel.app/' className='underline'>live</a>
              </div>
            </div>
            <div className="w-full md:w-54 h-full relative group">
              <img 
                src="/p4.jpg" 
                className="w-fit object-cover rounded" 
              />
              <div className='text-base text-black w-full flex items-center justify-between relative z-999 -translate-y-8 px-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                <p>landing clone</p>
                <a target='_blank' href='https://userjot-clone.vercel.app/' className='underline'>live</a>
              </div>
            </div>
            <div className="w-full md:w-54 h-full relative group">
              <img 
                src="/p5.jpg" 
                className="w-fit object-cover rounded" 
              />
              <div className='text-base text-neutral-100 w-full flex items-center justify-between relative z-999 -translate-y-8 px-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                <p>music site</p>
                <a target='_blank' href='https://awwwards-music-app.vercel.app/' className='underline'>live</a>
              </div>
            </div>
            <div className="w-full md:w-54 h-full relative group">
              <img 
                src="/p7.jpg" 
                className="w-fit object-cover rounded" 
              />
              <div className='text-base text-black w-full flex items-center justify-between relative z-999 -translate-y-8 px-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                <p>animated navbar</p>
                <a target='_blank' href='https://cool-nav.vercel.app/landing' className='underline'>live</a>
              </div>
            </div>
            <div className="w-full md:w-54 h-full relative group">
              <img 
                src="/p6.jpg" 
                className="w-fit h-44 mx-auto object-cover rounded" 
              />
              <div className='text-base text-black w-full flex items-center justify-between relative z-999 -translate-y-8 px-4 opacity-0 group-hover:opacity-100 transition-opacity'>
                <p>waitlist site</p>
                <a target='_blank' href='https://play.tailwindcss.com/YWzyUt7dlG' className='underline'>live</a>
              </div>
            </div>
          </div>
        </div>
      </>
    ),
    services: (
      <>
        <div className="w-full md:w-[16rem] h-[20.5rem] overflow-y-auto scroll-smooth px-3 font-semibold">
          {/* Card 1 */}
          <div className="border-2 border-black rounded flex flex-col px-4 shadow items-start justify-between relative overflow-hidden group mb-4 h-[3.5rem]">
            <div className="w-full h-full absolute inset-0 bg-black">
              <img 
                src="https://i.pinimg.com/736x/e7/f1/ff/e7f1ff551c5ea2c8cf9d30c1713cf6f8.jpg" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" 
              />
            </div>
            <div className="text-white relative z-10 font-semibold text-lg -space-y-1">
              <div>Indie-style personal websites</div>
              <div>$20</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-black rounded flex flex-col px-4 shadow items-start justify-between relative overflow-hidden group mb-4 h-[3.5rem]">
            <div className="w-full h-full absolute inset-0 bg-black">
              <img 
                src="https://i.pinimg.com/736x/e7/f1/ff/e7f1ff551c5ea2c8cf9d30c1713cf6f8.jpg" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" 
              />
            </div>
            <div className="text-white relative z-10 font-semibold text-lg -space-y-1">
              <div>SaaS websites</div>
              <div>$40</div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-black rounded flex flex-col px-4 shadow items-start justify-between relative overflow-hidden group mb-4 h-[3.5rem]">
            <div className="w-full h-full absolute inset-0 bg-black">
              <img 
                src="https://i.pinimg.com/736x/e7/f1/ff/e7f1ff551c5ea2c8cf9d30c1713cf6f8.jpg" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" 
              />
            </div>
            <div className="text-white relative z-10 font-semibold text-lg -space-y-1">
              <div>Front-end development</div>
              <div>$40-50</div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border-2 border-black rounded flex flex-col px-4 shadow items-start justify-between relative overflow-hidden group mb-4 h-[3.5rem]">
            <div className="w-full h-full absolute inset-0 bg-black">
              <img 
                src="https://i.pinimg.com/736x/e7/f1/ff/e7f1ff551c5ea2c8cf9d30c1713cf6f8.jpg" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" 
              />
            </div>
            <div className="text-white relative z-10 font-semibold text-lg -space-y-1">
              <div>Site redesign</div>
              <div>$30</div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="border-2 border-black rounded flex flex-col px-4 shadow items-start justify-between relative overflow-hidden group mb-4 h-[3.5rem]">
            <div className="w-full h-full absolute inset-0 bg-black">
              <img 
                src="https://i.pinimg.com/736x/e7/f1/ff/e7f1ff551c5ea2c8cf9d30c1713cf6f8.jpg" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-500" 
              />
            </div>
            <div className="text-white relative z-10 font-semibold text-lg -space-y-1">
              <div>Blog setups</div>
              <div>$20</div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <Link href='mailto:sumonadotwork@gmail.com'>
            <img src='https://64.media.tumblr.com/a74cd56a8b80f7a0893c6676db7869af/23434649a8f0054e-b2/s400x600/ab66d2feec9a05ea9409c7cbeb6bc6f0d07c70f6.pnj' className='md:w-[8rem] w-[14rem] h-[4rem] -ml-3' />
            <div className='absolute inset-0 top-5 left-6 z-999 text-neutral-200 font-semibold'>hire me</div>
          </Link>
        </div>
      </>
    ),
    links: (
      <>
        <div className="w-full md:w-96 flex flex-col items-center justify-center gap-4 nav-content relative">
          <div className='absolute top-0'>
            <img src='https://i.pinimg.com/736x/70/36/dd/7036ddacc93641bda4e5836bd84a5f52.jpg' className='w-24' />
          </div>
          <div className='font-semibold'>
            <p className="font-['InstrumentItalic'] text-xl md:mt-20 mt-26">connect with me on</p>
            <div className='text-center flex flex-col gap-0.5 mt-2'>
              <a href='https://github.com/7sumona02' className='hover:underline text-neutral-600/80 hover:text-black transition-all'>github</a>
              <a href='https://www.linkedin.com/in/sumona-biswas/' className='hover:underline text-neutral-600/80 hover:text-black transition-all'>linkedin</a>
              <a href='mailto:sumonadotwork@gmail.com' className='hover:underline text-neutral-600/80 hover:text-black transition-all'>email｡𖦹°‧</a>
              <a href='https://getmechai.vercel.app/link.html?vpa=8433404016@ibl&nm=SumonaBiswas&amt=100' className='hover:underline text-neutral-600/80 hover:text-black transition-all'>buy me a chai 🍵</a>
            </div>
          </div>
        </div>
      </>
    ),
    support: (
      <>
        <div className="w-full md:w-96 nav-content flex flex-col items-center justify-center relative">
          <div className="absolute top-0 font-['InstrumentItalic'] max-w-70 mx-auto text-center inset-0 lowercase font-semibold">Your support lets me build more honest and meaningful sites for the web⋆˚☆</div>
          <div className='relative md:mt-0 mt-14'>
            <img src='/frame.jpg' className='w-40 relative' />
            <img src='https://media1.tenor.com/m/D3rxeICLzfwAAAAC/chobits-chii.gif' className='w-[7rem] h-[7rem] absolute left-6 top-6' />
          </div>
          <div className='absolute bottom-4 animate-bounce'>
            <a href='https://getmechai.vercel.app/link.html?vpa=8433404016@ibl&nm=SumonaBiswas&amt=100'><img src='/support.gif' /></a>
          </div>
        </div>
      </>
    )
  };

  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-neutral-900 overflow-hidden select-none p-4'>
      <div className='h-screen overhidden fixed inset-0'><img src='https://i.pinimg.com/736x/81/93/59/8193592b2daa2bad01dc773c90609f64.jpg' className='w-full h-full opacity-50 object-cover' /></div>
      <div className={`${isMobile ? 'h-full w-full' : 'h-[22rem] w-[40rem]'} bg-white overflow-hidden border-2 border-black shadow-md rounded relative z-999`}>
        <div className={`${isMobile ? 'flex flex-col' : 'grid grid-cols-3'} text-black font-semibold`}>
          <div className={`${isMobile ? 'h-auto p-4' : 'h-[110%] p-4'} bg-black relative`}>
            <div><img src='/angel.jpg' className='absolute inset-0 opacity-95 h-full w-full object-cover' /></div>
            <div className='relative z-999'>
              <div className='flex items-center gap-4'>
                <img src='https://i.pinimg.com/736x/93/78/3c/93783c5005d2b72ce835219bf5dc4a85.jpg' className={`${isMobile ? 'w-24' : 'w-32'} rounded border-2 border-black shadow`} />
                {isMobile && (
                  <div className='font-["Instrument"] text-lg'>
                    <div className='font-semibold text-xl'>sumona, web dev</div>
                  </div>
                )}
              </div>
              <div className="font-['Instrument'] text-lg mt-3">
                {!isMobile && (
                  <div className='-space-y-1'>
                    <div className='font-semibold text-xl'>sumona, web dev</div>
                  </div>
                )}
                <div className='flex flex-col -space-y-1 mt-2 font-semibold'>
                  <div className='flex justify-between items-center group'>
                    <Link 
                      className={`hover:underline ${activeContent === 'about' ? 'text-black' : 'text-neutral-600/80'} hover:text-black transition-all`} 
                      href=''
                      onClick={(e) => { e.preventDefault(); setActiveContent('about'); }}
                    >
                      about
                    </Link>
                    <div className='text-lg opacity-0 group-hover:opacity-100 transition-opacity'>⤶</div>
                  </div>
                  <div className='flex justify-between items-center group'>
                    <Link 
                      className={`hover:underline ${activeContent === 'gallery' ? 'text-black' : 'text-neutral-600/80'} hover:text-black transition-all`} 
                      href=''
                      onClick={(e) => { e.preventDefault(); setActiveContent('gallery'); }}
                    >
                      gallery
                    </Link>
                    <div className='text-lg opacity-0 group-hover:opacity-100 transition-opacity'>⤶</div>
                  </div>
                  <div className='flex justify-between items-center group'>
                    <Link 
                      className={`hover:underline ${activeContent === 'services' ? 'text-black' : 'text-neutral-600/80'} hover:text-black transition-all`} 
                      href=''
                      onClick={(e) => { e.preventDefault(); setActiveContent('services'); }}
                    >
                      services
                    </Link>
                    <div className='text-lg opacity-0 group-hover:opacity-100 transition-opacity'>⤶</div>
                  </div>
                  <div className='flex justify-between items-center group'>
                    <Link 
                      className={`hover:underline ${activeContent === 'support' ? 'text-black' : 'text-neutral-600/80'} hover:text-black transition-all`} 
                      href=''
                      onClick={(e) => { e.preventDefault(); setActiveContent('support'); }}
                    >
                      support
                    </Link>
                    <div className='text-lg opacity-0 group-hover:opacity-100 transition-opacity'>⤶</div>
                  </div>
                  <div className='flex justify-between items-center group'>
                    <Link 
                      className={`hover:underline ${activeContent === 'links' ? 'text-black' : 'text-neutral-600/80'} hover:text-black transition-all`} 
                      href=''
                      onClick={(e) => { e.preventDefault(); setActiveContent('links'); }}
                    >
                      links
                    </Link>
                    <div className='text-lg opacity-0 group-hover:opacity-100 transition-opacity'>⤶</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`flex gap-6 ${isMobile ? 'w-full p-4' : 'w-[35rem] p-4'} h-full space-y-4 rounded-r-lg font-['Instrument'] text-lg leading-6 ${isMobile ? '' : 'col-span-2'}`}>
            {content[activeContent]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page