import React, {Component} from 'react'
import SearchBar from '../search/SearchBar';
import { connect } from 'react-redux';
import { renderTrendingGifs, renderFavoriteGifs } from '../../actions/giphyAPI'


class NavBar extends Component {

    renderTrending = () => {
        this.props.renderTrendingGifs()
    }

    renderFavorites = () => {
        this.props.renderFavoriteGifs()
    }

    render(){
        return(
            <nav className="navbar-container">
                <div className="navbar-wrapper">
                    <div className="search-bar-container">
                        <SearchBar />
                    </div>
                    <div className="links-bar-container">
                        <button className="trending navButton" onClick={this.renderTrending}>Trending</button>
                        <button className="favorite navButton" onClick={this.renderFavorites}>Favorites</button>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    actions: state.actions
})

export default connect(mapStateToProps, {renderTrendingGifs, renderFavoriteGifs})(NavBar)
