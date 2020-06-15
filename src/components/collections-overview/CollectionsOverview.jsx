import React from 'react';
import { connect } from 'react-redux';
// import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import './CollectionsOverview.scss';
import CollectionPreview from '../Preview/Collection-Preview';
import { selectCollectionsForPreview } from '../../redux/Shop/ShopSelectors';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
    collections:selectCollectionsForPreview(state)
});


export default connect(mapStateToProps)(CollectionsOverview);