import React, {Component} from 'react';
import {connect} from 'react-redux';
import SampleComponent from './../../presentational/sampleComponent/sampleComponent';
import {sampleActionCreator} from './../../../actionCreators/sampleActionCreator';

class SampleContainer extends Component {
    render(){
        return(
            <div className="sampleContainer">
                <SampleComponent
                    counterVal={this.props.counterVal}
                    updateCounter={() => this.props.updateCounter(1)}
                    componentLabel={'Sample component is loading inside sample container with counter val:'}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counterVal: state.sample.counter || 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCounter : (counter) => dispatch(sampleActionCreator(counter))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SampleContainer);
/* connect(mapStateToProps, mapDispatchToProps) is HOC which will return a component
*/