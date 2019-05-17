import React from 'react';
import styled from 'styled-components';
import { Colors, Button, Radio } from 'react-life-design';

import List from '../List/List.jsx';
import Filter from '../Filter/Filter.jsx';

const WrapperStyle = styled.div`
  margin: 150px auto;
  max-width: 400px;
  border: 1px solid ${Colors.line};
  padding: 41px;
  text-align: center;
`;

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      corretores: props.corretores,
      disabled: false,
      filtredValue: '',
    }
  }

  setaNovosCorretores = (corretores) => this.setState(prevState => ({
    corretores: prevState.corretores.concat(corretores),
    disabled: true,
  }));

  fetchCorretor = () => fetch('/corretores/more')
    .then(response => response.json())
    .then(this.setaNovosCorretores)

  corretoresFiltrados = corretor => corretor.name
    .toLowerCase()
    .includes(this.state.filtredValue.toLowerCase());

  
  render = () => (
    <WrapperStyle>
      <h1>{this.props.name}</h1>
      <Filter filtredValue={filtredValue => this.setState({ filtredValue })} />
      <List corretores={this.state.corretores.filter(this.corretoresFiltrados)} />
      <Button
        type='button'
        isType='confirm'
        onClick={this.fetchCorretor}
        disabled={this.state.disabled}
      >
            Ver mais corretores 
            <svg className='svg' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 20.4'>
                <polyline className='plus br' points='19,10.2 11,10.2 11,18.2 '/>
                <polyline className='plus bl' points='11,18.2 11,10.2 3,10.2 '/>
                <polyline className='plus tr' points='11,2.2 11,10.2 19,10.2 '/>
                <polyline className='plus tl' points='3,10.2 11,10.2 11,2.2 '/>
            </svg>
        </Button>
    </WrapperStyle>
  )
}