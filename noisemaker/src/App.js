import React from 'react';
import './App.css';
import * as Tone from "tone";

class App extends React.Component() {
  constructor(props){
    super(props)
    this.state = {
      C: null,
      D: null,
      E: null,
      F: null,
      G: null,
      A: null,
      B: null,
      COctave: null
    }
    this.synth = new Tone.synth().toMaster();
  }

  playC() {
    this.synth.triggerAttackRelease('C1', '4n')
    this.setState({
        C: 'C',
    })
}

  playD() {
    this.synth.triggerAttackRelease('D1', '4n')
    this.setState({
      D: 'D',
  })
  }

  playE() {
    this.synth.triggerAttackRelease('E1', '4n')
    this.setState({
      E: 'E',
  })
  }

  playF() {
    this.synth.triggerAttackRelease('F1', '4n')
    this.setState({
      F: 'F',
  })
  }

  playG() {
    this.synth.triggerAttackRelease('G1', '4n')
    this.setState({
      G: 'G',
  })
  }

  playA() {
    this.synth.triggerAttackRelease('A1', '4n')
    this.setState({
      A: 'A',
  })
  }

  playB() {
    this.synth.triggerAttackRelease('B1', '4n')
    this.setState({
      B: 'B',
  })
  }
  
  playCOctave() {
    this.synth.triggerAttackRelease('C2', '4n')
    this.setState({
      COctave: 'C',
  })
  }
  
  resetNotes() {
    this.setState({
      C: null,
      D: null,
      E: null,
      F: null,
      G: null,
      A: null,
      B: null,
      COctave: null
    })
  }
  render() {
    const {C, D, E, F, G, A, B, COctave} = this.state
    return <>
    <button className="reset" onClick={e => this.resetNotes()}>Reset Synthesizer</button>
    <section className="synthesizer">
                    <button className="keys CKey" onClick={e => this.playC()}>{C ? C : 'C'}</button>
                    <button className="keys DKey" onClick={e => this.playD()}>{D ? D : 'D'}</button>
                    <button className="keys EKey" onClick={e => this.playE()}>{E ? E : 'E'}</button>
                    <button className="keys FKey" onClick={e => this.playF()}>{F ? F : 'F'}</button>
                    <button className="keys GKey" onClick={e => this.playG()}>{G ? G : 'G'}</button>
                    <button className="keys AKey" onClick={e => this.playA()}>{A ? A : 'A'}</button>
                    <button className="keys BKey" onClick={e => this.playB()}>{B ? B : 'B'}</button>
                    <button className="keys COctave" onClick={e => this.playCOctave()}>{COctave ? COctave : 'COctave'}</button>
        </section>
        
        </>
    }
}

export default App;
