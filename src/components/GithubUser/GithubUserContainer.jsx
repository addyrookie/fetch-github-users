import { connect } from 'react-redux';
import GithubUser from './GithubUser';
import { fetchGithubProfile, postRepositoryInformation } from  '../../actions/githubProfileActions';

const mapStateToProps = (state) => {
	const { githubProfile } = state;
	return {
		githubProfile
	};
};

const mapDispatchToProps = dispatch => (
	{
		fetchGithubProfile: () =>
			dispatch(fetchGithubProfile()),
		postRepositoryInformation: repositoryInfo =>
			dispatch(postRepositoryInformation(repositoryInfo))
	}
);

const GithubUserContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GithubUser);

export default GithubUserContainer;

