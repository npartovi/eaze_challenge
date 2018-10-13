import React from 'react'

const GiphsListItem = ({ gif }) => {

    let originalImage = gif.images.fixed_height.url

    return(
        <div className="giphs-list-item">
            <img alt="oops" src={originalImage} />
        </div>
    )
}

export default GiphsListItem