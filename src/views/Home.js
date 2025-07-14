import React from 'react';
import PlayBox from 'components/PlayBox';
import ArtistBox from 'components/ArtistBox';

import { NavLink } from 'react-router-dom';
import {Icon} from 'components/Icons';
import Song from 'components/Song';


export default function Home() {


  const items =[
    {
      id: 1,
      title: 'Winning Speech',
      artist: 'Karan Aujla',
      image: '/ws.png',
      src: 'ws.mp3'
    },

    {
      id: 2,
      title: 'G.O.A.T',
      artist: 'Diljit Dosanjh',
      image: '/goat.png',
      src:'goat.mp3.mp3'
    },

    {
      id: 3,
      title: 'Chaleya',
      artist: 'Arijit Singh , Pritam',
      image: '/chal.png',
      src:'chaleya.mp3'
    },

   {
      id: 4,
      title: 'Paro',
      artist: 'Aditiya Rikhari',
      image: '/paro.png',
      src:'paro.mp3.mp3'
    },

    {
      id: 5,
      title: 'Jhol',
      artist: 'Mannu,Annural Khalid',
      image: '/jhol.png',
      src:'jhol.mp3'
    },

    
  ]

  const singer =[
    {
      id: 1,
      position: 'Artist',
      name: 'Shreya Ghoshal',
      image: '/shr.png'
    },
    {
      id: 2,
      position: 'Artist',
      name: 'Sunidhi Chauhan',
      image: '/suni.png'
    },
    {
      id: 3,
      position: 'Artist',
      name: 'Arijit Singh',
      image: '/ari.png'
    },
    {
      id: 4,
      position: 'Artist',
      name: 'Sonu Nigham',
      image: '/sonu.png'
    },
    {
      id: 5,
      position: 'Artist',
      name: 'Divine',
      image: '/div.png'
    }
  ]

  const mixer =[
    {
      id: 1,
      position: 'Pritam, Vishal-Shekhar, Arjun',
      name: 'Daily Mix 1',
      image: '/dm1.png'
    },
    {
      id: 2,
      position: 'Shubh, Karan Aujla, Prince Narula ',
      name: 'Daily Mix 2',
      image: '/dm2.png'
    },
    {
      id: 3,
      position: 'Rochak Kohli, B Praak, Darshan Raval ',
      name: 'Daily Mix 3',
      image: '/dm3.png'
    },
    {
      id: 4,
      position: 'Rasraj Ji Maharaj, Jubin Nautiyal, Tanishk Bagchi',
      name: 'Daily Mix 4',
      image: '/dm4.png'
    },
    {
      id: 5,
      position: 'Kushagra, Aditya Rikhari, Simran Choudhary ',
      name: 'Daily Mix 5',
      image: '/dm6.png'
    }

  ]



  return (
    <div>
      <div>
      <h3 className='text-3xl text-white font-bold tracking-tight mb-6'>Your Library</h3>
      <div className='grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all'>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://misc.scdn.co/liked-songs/liked-songs-640.png" />
          <h4 className='text-[16px] font-bold p-4'>Liked Songs</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="/bu.png" />
          <h4 className='text-[16px] font-bold p-4'>Bollywod Unwined</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="/hh.png" />
          <h4 className='text-[16px] font-bold p-4'>Hot Hits India</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="/tni.png" />
          <h4 className='text-[16px] font-bold p-4'>Trending Now India</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="/dm1.png" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 1</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="/dm2.png" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 2</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>

      </div>
      </div>
        <div className='flex justify-between items-end mb-4'>
        <PlayBox title={'Made for GOPAL'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6'>
                {items.map(item => <Song item={item} key={item.id} /> )}
                
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Daily Mix'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {mixer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Indian Top Profile'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {singer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4 rounded-full' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>

    </div>
  )
}