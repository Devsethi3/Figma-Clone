import { CursorChatProps, CursorMode } from '@/types/type'
import React from 'react'
import Cursor from './Cursor'
import CursorSVG from '@/public/assets/CursorSVG'

const CursorChat = ({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateMyPresence({ message: e.target.value });
    setCursorState({
      mode: CursorMode.Chat,
      previousMessage: null,
      message: e.target.value
    })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setCursorState({
        mode: CursorMode.Chat,
        previousMessage: cursorState.message,
        message: ''
      })
    }
    else if (e.key === "Escape") {
      setCursorState({
        mode: CursorMode.Hidden,
      })
    }
  }

  return (
    <div className='absolute top-0 left-0' style={{ transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)` }}>
      {cursorState.mode === CursorMode.Chat && (
        <>
          <CursorSVG color='#000' />
          <div className='absolute left-2 top-5 bg-teal-600 px-4 py-2 text-sm leading-relaxed text-white rounded-full'
            onKeyUp={(e) => e.stopPropagation()}
          >
            {cursorState.previousMessage && (
              <div>{cursorState.previousMessage}</div>
            )}

            <input
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={cursorState.previousMessage ? '' : 'Type a Message'}
              value={cursor.message}
              className='z-10 text-white bg-transparent outline-none placeholder-teal-300 border-none min-w-40' autoFocus={true} />
          </div>
        </>
      )}
    </div>
  )
}

export default CursorChat