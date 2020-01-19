import React, {Component} from 'react';
import StackHeader from '../components/StackHeader'
import { 
  Container
   } from 'native-base';

type Props = {
  navigation: any
};

export default class ChallengeList extends Component<Props> {
  render() {
    const { navigation } = this.props
    
    return (
      <Container>
        <StackHeader 
          title={'ChallengeList'}
          navigation={navigation}
        />
      </Container>
    );
  }
}