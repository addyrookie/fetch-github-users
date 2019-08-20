import React from 'react';
import './repositorydetails.css';

function RepositoryDetails(props) {
const { githubProfile: { repositoryInfo } } = props;
	return (
		<div className="repo-details-container">
			<div className="sidebar">
				<img className="sidebar-image" src={repositoryInfo.owner.avatar_url} alt={`${repositoryInfo.owner.login} Avatar`} />
				<div className="sidebar-heading">Verified by Github</div>
				<div className="sidebar-text">Github confirms that this app meets the <a className="sidebar-link" href="#">requirements for verification</a></div>
				<div className="sidebar-categories">
					<div className="sidebar-categories-heading">
						Categories
					</div>
					<div className="sidebar-categories-container">
						<div className="sidebar-categories-item">JavaScript</div>
						<div className="sidebar-categories-item">Platform</div>
						<div className="sidebar-categories-item">IDE</div>
						<div className="sidebar-categories-item">Paid</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="content-banner">Application</div>
				<h1 className="content-heading">
			  	{repositoryInfo.name}
			  </h1>
			  <button className="content-cta">Set up a plan</button>
			  <div className="content-short-description">
			  	{repositoryInfo.description}
			  </div>
			  <div className="content-long-description">
			 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			 	</div>
			</div>
		</div>
	);
}

export default RepositoryDetails;