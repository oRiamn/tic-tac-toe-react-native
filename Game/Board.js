import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Case from './Case';

export default class Board extends React.Component {

 constructor(props) {
   super(props);
   this.state = {
     player: 'X',
     cases: Array(9).fill(null),
   };
 }

calculateWinner(cases) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cases[a] && cases[a] === cases[b] && cases[a] === cases[c]) {
      return cases[a];
    }
  }
  return null;
}



 play(i){
   if(this.state.cases[i] === null){
     const cases = this.state.cases.slice();
     let nextPlayer = (this.state.player == 'X') ? 'O' : 'X';

     cases[i] = this.state.player;

     this.setState({
       cases: cases,
       player: nextPlayer
     });
   }
 }

  render() {
    const winner = this.calculateWinner(this.state.cases);
     if (winner !== null) {
       Alert.alert(
        'Partie terminée',
        'Le gagnant est: ' + winner,
        [
          {text: 'OK', onPress: () => this.setState({
            player: 'X',
            cases: Array(9).fill(null),
          })},
        ],
        { cancelable: false }
      );

     }
    return (
      <View style={styles.container}>
        <Text>Joueur : {this.state.player}</Text>
        <View style={styles.grid}>
        {this.state.cases.map((value, i) => {
            return <Case key={i} value={value} onPress={() => this.play(i)}/>;
        })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    width: 302,
    height: 302,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: '#000',
  }
});
