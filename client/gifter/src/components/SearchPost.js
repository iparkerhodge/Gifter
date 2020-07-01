import React, { useRef } from 'react'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

const SearchPosts = () => {
    const Search = useRef()

    return (
        <div className='container mt-1'>
            <InputGroup>
                <Input type='text' innerRef={Search} />
                <InputGroupAddon addonType='append'>
                    <Button>Search</Button>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}

export default SearchPosts