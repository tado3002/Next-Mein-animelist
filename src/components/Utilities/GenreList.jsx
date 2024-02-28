import Link from 'next/link'
import React from 'react'

const GenreList = ({genres}) => {
  return (
    <div className='flex flex-col gap-1'>
        <h3 className='text-base font-bold'>Genre: </h3>
        <div className='flex flex-wrap gap-2'>
            {
                genres.map((genre,index)=>{
                    return (
                        <button key={index} className='border shadow-color-secondary shadow-lg border-color-secondary p-2 text-sm rounded-xl'>
                            <Link href={`/search/genres/${genre.mal_id}`}>
                            {genre.name}
                            </Link>
                        </button>
                    )
                })
            }
        </div>
    </div>
  )
}

export default GenreList