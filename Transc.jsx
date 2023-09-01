import React from 'react'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Transc() {

  return (
    <div>
      <CircularProgress value={50} size='300px' color='purple'>
      <CircularProgressLabel>50%</CircularProgressLabel>
      </CircularProgress>
    </div>
  )
}
