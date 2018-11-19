import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StepZilla from "react-stepzilla";

import Step1 from './steps/step1';
import Step2 from './steps/step2';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.sampleStore = {
      email: '',
      gender: '',
      savedToCloud: false
    };
  }

  componentDidMount(){
  }

  getStore() {
    return this.sampleStore;
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
      ...update,
    }
  }


  render() {
    const steps =
        [
          {name: 'Step1', component: <Step1 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
          {name: 'Step2', component: <Step2 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        ]


    return (
        <div className='step-progress'>
          <StepZilla
            steps={steps}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"Save"}
           />
        </div>
    );
  }
}

export default App;
