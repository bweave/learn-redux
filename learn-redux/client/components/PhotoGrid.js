import React from 'react'
import Photo from './Photo'

class PhotoGrid extends React.Component {
	render() {
		const { posts } = this.props

		return (
			<div className="photo-grid">
				{posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
			</div>
		)
	}
}

export default PhotoGrid
