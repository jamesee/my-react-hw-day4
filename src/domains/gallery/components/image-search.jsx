import { useState } from 'react';
import { Button } from 'components/button';
import { SearchIcon } from "@heroicons/react/outline";

export const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='max-w-md rounded'>
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center py-2">
          <input onChange={e => setText(e.target.value)} className="w-150 h-10 appearance-none bg-transparent border-pink-500 w-full text-gray-700 m-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />

          <Button
                type="button"
                className="
                      h-10
                      w-20
                      bg-transparent 
                      text-pink-700 
                      font-semibold 
                      p-2 
                      border 
                      hover:bg-gray-100 
                      rounded-2xl
                      focus:ring-pink-900
                    "
                onClick={onSubmit}
              >
            <SearchIcon className="m-0 w-5 h-5 stroke-current text-pink-600" />
          </Button>
        </div>
      </form>
    </div>
  )
}

