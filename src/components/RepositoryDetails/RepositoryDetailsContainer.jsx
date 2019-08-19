import { connect } from 'react-redux';
import RepositoryDetails from './RepositoryDetails';


const mapStateToProps = (state) => {
	const { githubProfile } = state;
	return {
		githubProfile
	};
};


const RepositoryDetailsContainer = connect(
	mapStateToProps,
	{}
)(RepositoryDetails);

export default RepositoryDetailsContainer;