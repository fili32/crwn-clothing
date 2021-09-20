import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';
import CollectionPreview from '../pages/preview-collection/preview-collection.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherPropsCollection}) => (
            <CollectionPreview key={id} {...otherPropsCollection}/>
        ))}
    </div>
);

const mapToStateProps = createStructuredSelector({ 
    collections: selectCollectionsForPreview 
});

export default connect(mapToStateProps)(CollectionsOverview);