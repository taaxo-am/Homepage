import React from "react";
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const SkeletonAdeegyo = ({classes}) => {
    return (
        <div className={`pt-4 skeleton-wrapper ${classes}`}>
            <div className="row row-cols-2 justify-content-center">
                <div className='col'>
                    <SkeletonElement type="avatar"/>
                </div>
                <div className='col flex-grow-1 flex-column'>
                    <SkeletonElement type="title"/>
                    <SkeletonElement type="subtitle adeegyo"/>
                    <SkeletonElement type="subtitle"/>
                </div>
            </div>
            <Shimmer/>
        </div>
    )
}

export default SkeletonAdeegyo;
