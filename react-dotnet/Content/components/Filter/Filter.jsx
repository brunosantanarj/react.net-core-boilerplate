import React from 'react';
import { Input } from 'react-life-design';

export default ({ filtredValue }) => (
  <Input
    type='text'
    placeholder='Filtre os corretores'
    onChange={({ target }) => filtredValue(target.value)}
  />
  )