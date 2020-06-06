import React, { Component } from 'react'
import SHOP_DATA from './ShopData'
import CollectionPreview from '../../components/Preview/Collection-Preview'
import './Shop.scss'

export default class Shop extends Component {
    constructor(){
        super()
        this.state={
            collections : SHOP_DATA
        }
    }
   
    render() {
        
        return (
            <div className='Shop'>
              {this.state.collections.map(({id, ...otherProps})=>
              
              <CollectionPreview key={id} {...otherProps}/>

                )}
            </div>
        )
    }
}
