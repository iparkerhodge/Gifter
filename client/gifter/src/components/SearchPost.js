import React, { useContext } from 'react'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'
import { PostContext } from '../providers/PostProvider'

const SearchPosts = () => {
    const { searchPosts } = useContext(PostContext)

    const handleChange = (e) => {
        console.log(e.target.value)
        searchPosts(e.target.value)
    }

    return (
        <div className='container mt-1'>
            <Input type='text' onChange={handleChange} placeholder="Search Posts" />
        </div>
    )
}

export default SearchPosts