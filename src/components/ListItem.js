import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  // constructor(props) {
  //   super(props);

  //   LayoutAnimation.spring();
  // }

  renderDescription() {
    const {library, expanded} = this.props;
    const {id, title, description} = this.props.library.item;
    if (expanded) {
      return (
        <CardSection>
          <Text style={styles.description}>{description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    // console.log(this.props.library.item.id, 'Library');
    // console.log(this.props.selectLibraryId, 'Library selectLibraryId');
    const {id, title} = this.props.library.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  description: {
    paddingHorizontal: 15,
    fontSize: 13,
  },
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
