import { Grid, Typography } from '@mui/material'
import React from 'react'
import data_product from '../../Assets/data'
import Items from '../item/Items'


const RelatedProduct = () => {
    return (
        <>
            <div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5,
                    marginBottom: 20
                    
                }}>

                    <Typography variant='h3' fontWeight={700}>Related Product</Typography>
                    <hr style={{
                        width: "300px",
                        height: "5px",
                        background: "red"
                    }} />
                </div>

                <div>
                    <Grid container spacing={2}>
                        {data_product.map((item, i) => (
                            <Grid item md={3}>
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

        </>
    )
}

export default RelatedProduct
