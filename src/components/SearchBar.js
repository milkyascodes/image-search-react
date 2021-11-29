import React, { useState } from 'react'
import {  Form, Header, Search, Segment } from 'semantic-ui-react'

function SearchBar({submitting, notifi}) {
    const [search, setSearch] = useState('')
    const [loading, setloading] = useState(false)
    
    function onInputChange(e){
        setSearch(e.target.value)
        setloading(true)
    }
    function onFormSubmit(e){
        e.preventDefault()
        setloading(false)
        submitting(search)
    }
    
    return (
        <Segment raised  >
            <Form onSubmit={(e)=>onFormSubmit(e)}>
               
               <Header>Search</Header>
                <Search
                    id={search}
                    loading={loading}
                    value={search}
                    showNoResults={notifi}
                    onSearchChange={onInputChange}
                    onBlur={()=> setloading(false)}
                    input={{ icon: 'search', iconPosition: 'left' }}
                />
                   
                    
                
            </Form>
        </Segment>
            
    )
}

export default SearchBar
