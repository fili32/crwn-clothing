import React from 'react';
import CollectionPreview from '../preview-collection/preview-collection.component.jsx';
import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div className='shops'>
                {
                    this.state.collections.map(({id, ...otherPropsCollection}) => (
                            <CollectionPreview key={id} {...otherPropsCollection}/>
                        ))
                }    
            </div>
        );
    }
}

export default ShopPage;