import React from 'react'
import { Card, Container, Grid, Image } from 'semantic-ui-react'
import { Header, Icon, Segment } from 'semantic-ui-react'


function ImageList({props}) {
   
    
    return (
        < >

            {props.length === 0?
                    (
                        <Segment disabled placeholder basic>
                            <Header icon>
                                <Icon name='search' />
                                <br />
                                Nothing to show yet search for pictures for example cat..
                            </Header>
                            
                            
                        </Segment>
                    ):
                    (
                        <Segment basic>
                            <Container>
                                <Grid verticalAlign='middle' centered  doubling columns={4}>
                                        
                                    {   props.map(({urls, id})=>{
                                        return(
                                            <Grid.Column key = {id}>
                                                <Card>
                                                    <Image  src={urls.regular} size="medium" />
                                                </Card>
                                            </Grid.Column>
                                        )
                                        })
                                    }
                        
                                </Grid>
                            </Container>
                        </Segment>
                    )    
            }
        </>
    )
}

export default ImageList
