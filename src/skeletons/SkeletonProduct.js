import React from "react";
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonProduct = ({classes}) => {
    return (
        <div className={`col skeleton-wrapper ${classes}`}>
            <div className="d-flex flex-column justify-content-center">
                <SkeletonElement type="avatar"/>
                <SkeletonElement type="title"/>
                <SkeletonElement type="subtitle"/>
            </div>
            <Shimmer/>
        </div>
    )
}

export default SkeletonProduct;
