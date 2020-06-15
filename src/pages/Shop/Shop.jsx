import React from "react";
import "./Shop.scss";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection";

export const Shop = ({match}) => {
  return (
    <div className="Shop">
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
      
     
    </div>
  );
};


export default Shop
