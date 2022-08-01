import React from 'react'
import TweetPost from './TweetPost'
import Post from './Post'

export default function Main() {
  return (
    <div>
        <TweetPost />
        <div className='overflow-y-auto'>
            {/* <Post /> */}
        </div>
    </div>
  )
}
