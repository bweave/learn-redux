import React from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

class Photo extends React.Component {
	renderImage() {
		const { post } = this.props

		return (
			<div className="grid-photo-wrap">

				<Link to={`/view/${post.code}`}>
					<img className="grid-photo" src={post.display_src} alt={post.caption} />
				</Link>

				<CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					<span className="likes-heart" key={post.likes}>{post.likes}</span>
				</CSSTransitionGroup>

			</div>
		)
	}

	renderCaption() {
		const { post, i, comments } = this.props
		const commentCount = comments[post.code] ? comments[post.code].length : 0

		return(
			<figcaption>
				<p>{post.caption}</p>

				<div className="control-buttons">
					<button className="likes" onClick={this.props.increment.bind(null, i)}>&hearts; {post.likes}</button>

					<Link to={`/view/${post.code}`} className="button">
						<span className="comment-count">
							<span className="speech-bubble"></span>
							{commentCount}
						</span>
					</Link>
				</div>

			</figcaption>
		)
	}

	render() {
		const img = this.renderImage()
		const caption = this.renderCaption()

		return (
			<figure className="grid-figure">
				{img}
				{caption}
			</figure>
		)
	}
}

export default Photo
