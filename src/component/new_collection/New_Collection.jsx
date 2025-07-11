import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import new_collection from '../../Assets/new_collections'
import Items from '../item/Items'
const New_Collection = () => {
    return (
        <Container>
            <div style={{
                paddingTop: 20
            }}>
                <Typography>NEW COLLECTION</Typography>
                <hr />
                <div>
                    <Grid container spacing={1} justifyContent={"center"} alignItems={"center"}>

                        {new_collection.map((item, i) => (
                            <Grid item md={3} >
                                <Items key={i} id={item.id}
                                    image={item.image}
                                    name={item.name}

                                    new_price={item.new_price}
                                    old_price={item.old_price} />
                            </Grid>

                        ))}


                    </Grid>

                </div>
            </div>
        </Container>
    )
}

export default New_Collection