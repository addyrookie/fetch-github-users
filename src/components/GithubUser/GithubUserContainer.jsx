import { connect } from 'react-redux';
import GithubUser from './GithubUser';
import { fetchGithubProfile } from  '../../actions/githubProfileActions';

const mapStateToProps = (state) => {
	const { githubProfile } = state;
	return {
		githubProfile
	};
};

const mapDispatchToProps = dispatch => (
	{
		fetchGithubProfile: () =>
			dispatch(fetchGithubProfile())
	}
);

const GithubUserContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GithubUser);

export default GithubUserContainer;

