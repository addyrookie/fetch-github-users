import React from 'react';

function RepositoryDetails(props) {
const { githubProfile: { repositoryInfo } } = props;
	return (
		<div>
			{ JSON.stringify(repositoryInfo) } Wow
		</div>
	);
}

export default RepositoryDetails;