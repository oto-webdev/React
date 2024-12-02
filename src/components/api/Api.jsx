import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Api = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])
  
  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setPosts(res.data) 
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {posts && posts.map((post) => {
          return (
            <div key={post.id} className="bg-white border border-gray-200 shadow-lg p-6 rounded-lg transition-all hover:shadow-2xl hover:border-gray-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Api;
