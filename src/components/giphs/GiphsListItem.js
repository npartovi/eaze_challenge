import React, {Component} from 'react'

class GiphsListItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            modal: false
        }
    }

    openModal = () => this.setState({modal: true})

    closeModal = () => this.setState({modal: false})

    
    render(){

        
        const {gif} = this.props
        console.log(gif)
        const { modal } = this.state
        const source = gif.source || "no source available"
        const title = gif.title || "no title available"
        const url = gif.url || "no url available"
        const trending_datetime = gif.trending_datetime || "no trending_datetime available"
        const username = gif.username || "no username available"
        const rating = gif.rating || "no rating available"
        const originalImage = gif.images.fixed_height.url

        return(
            <div className="giphs-list-item">
                <img onClick={this.openModal} alt="oops" src={originalImage} />
                <div className="modal" style={modal ? {display: "block"} : {display: "none"}}>
                    <div className="modal-content">
                        <div className="left-modal-container">
                            <img src={originalImage} />
                        </div>
                        <div className="right-modal-container">
                            
                            <h3><span>Title:</span>{title}</h3>
                            <h3><span>Username:</span>{username}</h3>
                            <h3><span>Rating:</span>{rating}</h3>
                            <h3><span>URL:</span><a target="_blank" href={url}>{url}</a></h3>
                            <h3><span>Date/Time of Trending</span>{trending_datetime}</h3>
                            <h3><span>Source:</span>{source}</h3>
                            
                                <button onClick={this.closeModal}>Close Modal</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GiphsListItem