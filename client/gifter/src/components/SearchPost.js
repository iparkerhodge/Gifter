import React, { useContext } from 'react'
import { Input } from 'reactstrap'
import { PostContext } from '../providers/PostProvider'
import debounce from 'lodash.debounce'

const SearchPosts = () => {
    const { searchPosts } = useContext(PostContext)

    const debouncedSearchPosts = debounce(searchPosts, 300)
    const handleChange = (e) => {
        debouncedSearchPosts(e.target.value)
    }

    return (
        <div className='container mt-1'>
            <Input type='text' onChange={handleChange} placeholder="Search Posts" />
        </div>
    )
}

export default SearchPosts