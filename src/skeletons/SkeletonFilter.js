import React from "react";
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonFilter = ({classes}) => {
    return (
        <div className={`pt-4 skeleton-wrapper ${classes} filters`}>
            <div className="d-flex flex-column justify-content-center">
                <SkeletonElement type="filters title"/>
                <SkeletonElement type="d-none d-md-block subtitle"/>
                <SkeletonElement type="d-none d-md-block subtitle"/>
                <SkeletonElement type="d-none d-md-block subtitle"/>
            </div>
            <Shimmer/>
        </div>
    )
}

export default SkeletonFilter;
