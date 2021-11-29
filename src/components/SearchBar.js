import React, { useState } from 'react'
import {  Form, Header, Icon, Label, Search, Segment } from 'semantic-ui-react'

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
            <Header textAlign="right">

                <Label href="https://github.com/milkyascodes" target="_blank"  as='a' color="teal">
                    <Icon name='github' /> Follow me
                </Label>
            </Header>
            <Form onSubmit={(e)=>onFormSubmit(e)}>
               
               <Header>Search for images 👇</Header>
               <br />
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
