import React from 'react'
import './Note.css'

const Note = () => {
  return (
    <main>
         <div className="upperSection">
            <div className="Right">
                
            <div className='i'>
         <h3><i class="fa-solid fa-grip-lines"></i>
</h3>
            </div>

        <div className="search">
            <input type="text" placeholder='search' />
        </div>


            </div>
         </div>
    </main>
  )
}

export default Note