import React from 'react';
import { Tab,Form,TextArea } from 'semantic-ui-react';

const TextAreaExampleTextArea = () => (
    <Form>
      <TextArea id="ihtiyacne" placeholder='Aklına gelen hangi detaylar var?' />
    </Form>
  
  )

export default function Tab4({ selectedOption4, handleOptionChange }) {
  return (
    <Tab.Pane id='ihtiyac'>
      <label id='radioQuestion2'>İhtiyacın detayları neler ?</label>
        <TextAreaExampleTextArea/><br/>
    </Tab.Pane>
  );
}
