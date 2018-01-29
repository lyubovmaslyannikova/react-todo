import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Filters from '../components/Filters';

const mapStateToProps = state => {
	return state.filters;
};

const mapDispatchToProps = {
	setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
