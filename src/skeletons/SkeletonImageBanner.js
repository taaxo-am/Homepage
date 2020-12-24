import React from "react";
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonCarousel = ({classes}) => {
    return (
        <div className={`h-100 me-2 skeleton-wrapper ${classes}`}>
            <div className="d-flex flex-column justify-content-center">
                <SkeletonElement type="backdrop"/>
            </div>
            <Shimmer/>
        </div>
    )
}

export default SkeletonCarousel;
