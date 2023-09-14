import React from 'react'
import { Tab,Form,TextArea } from 'semantic-ui-react'

const TextAreaExampleTextArea2 = () => (
    <Form>
      <TextArea id="email" placeholder='Lütfen E-Mail adresinizi giriniz...' />
    </Form>
    
  )  

export default function Tab7() {
  return (
    <div>
        <Tab.Pane>
          <label id='radioQuestion2'>Email adresini gir</label><br/><br/>
          <TextAreaExampleTextArea2/>
        </Tab.Pane>
    </div>
  )
}
