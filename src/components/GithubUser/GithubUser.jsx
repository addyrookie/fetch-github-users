import React from 'react';
import { Link } from 'react-router-dom';

import './githubuser.css';

class GithubUser extends React.Component {
	constructor(props) {
		super(props);
		this.selectRepository = this.selectRepository.bind(this);
	}

	componentDidMount() {
		const { fetchGithubProfile } = this.props;
		fetchGithubProfile();
	}

	selectRepository(e) {
		const { postRepositoryInformation } = this.props;
		const repoInfo = JSON.parse(decodeURIComponent(e.target.dataset.repo));
		postRepositoryInformation(repoInfo);
		console.log('Here we go');
	}

	render() {
		const { githubProfile: { allRepos } } = this.props;
		const displayRepos = [];
		if(allRepos && allRepos.length > 0) {
			allRepos.map(repo => (
				displayRepos.push(
					<div className="repo-tile" key={repo.id}>
						<img className="repo-image" src={repo.owner.avatar_url} alt={`${repo.owner.login} Avatar`} />
						<div className="repo-content">
							<div className="repo-heading">
								<Link to={`/${repo.owner.login}/${repo.name}`} data-repo={encodeURIComponent(JSON.stringify(repo))} onMouseOver={this.selectRepository}>
									{repo.name}
								</Link>
							</div>
							<div className="repo-description">{repo.description}</div>
						</div>
					</div>
				)
			))
		}
		return (
			<div className="container">
				{displayRepos}
			</div>)
	}
}

export default GithubUser;