import React from 'react';
import './githubuser.css';
class GithubUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
		const { fetchGithubProfile } = this.props;
		fetchGithubProfile();
	}

	render() {
		const { githubProfile: { allRepos } } = this.props;
		const displayRepos = [];
		if(allRepos && allRepos.length > 0) {
			allRepos.map(repo => {
				displayRepos.push(
					<div className="repo-tile">
						<img className="repo-image" src={repo.owner.avatar_url} />
						<div className="repo-content">
							<div className="repo-heading">{repo.name}</div>
							<div className="repo-description">{repo.description}</div>
						</div>
					</div>
				)
			})
		}
		return (
			<div className="container">
				{displayRepos}
			</div>)
	}
}

export default GithubUser;