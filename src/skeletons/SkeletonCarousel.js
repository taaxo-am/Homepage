import React from "react";
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonCarousel = ({classes}) => {
    return (
        <div className={`pt-4 skeleton-wrapper ${classes}`}>
            <div className="ratio-16x9 d-flex flex-column justify-content-center">
                <SkeletonElement type="avatar carousel"/>
            </div>
            <Shimmer/>
        </div>
    )
}

export default SkeletonCarousel;
