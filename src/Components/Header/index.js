import React from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';


/* client */
import styles from './styles';

export default class Header extends React.Component {
  static defaultProps = {
    headerColor: '#f7f7f7',
    style: null,
    onClose: () => { },
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.props.headerColor }, this.props.style]}>
        <TouchableOpacity onPress={this.props.onClose} style={styles.closeButton}>
          <Image
            style={{height:24,width:24}}
            source={require('./cancel.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}
