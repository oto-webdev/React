import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Api = () => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10) 

  useEffect(() => {
    fetchPosts()
  }, [])
  
  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      // Limit to first 30 posts
      setPosts(res.data.slice(0, 50)) 
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  // Calculate the current posts to display
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage)

  return (
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white border border-gray-200 shadow-lg p-6 rounded-lg transition-all hover:shadow-2xl hover:border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-l-md"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            onClick={() => paginate(pageNumber + 1)}
            className={`px-4 py-2 ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300'}`}
          >
            {pageNumber + 1}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Api
