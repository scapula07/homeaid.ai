import React from 'react'

export default function Category() {
  return (
    <div className='px-8 py-12'>
        <div className='flex flex-col space-y-4 items-center lg:items-start'>
            <h5 className='text-2xl font-semibold' style={{color: "#787878"}}>All home problems</h5>

            <p className='text-sm font-light text-center lg:text-start cate-text-w px-4 lg:px-0' style={{color: "#787878"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt in consectetur pharetra elit tincidunt.</p>

            <div className='flex flex-col'>
                <main className='grid grid-flow-row lg:grid-cols-7'>

                </main>

            </div>

        </div>

    </div>
  )
}
