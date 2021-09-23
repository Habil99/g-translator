import React, {useEffect, useState} from 'react'
import Dropdown from 'react-dropdown'
import {Grid, StyledDropdown, Margin, StyledTextArea, StyledBackdrop} from '../../styles'
import { ChevronDown } from '@styled-icons/entypo/ChevronDown'
import { StyledTranslate } from './Translate.styled'
import { Spinner9 } from '@styled-icons/icomoon/Spinner9'

const Translate = () => {
  const [options] = useState(['Frequency', 'Synonyms', 'Antonyms', 'Examples', 'Definitions'])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  })

  return (
    <StyledTranslate>
      <Margin margin={[80, 0]}>
        <Grid.Row>
          <Grid.Col lg={8}>
            <StyledDropdown>
              <Dropdown disabled={loading} placeholder={'Search...'} options={options} value={options[0]}/>
              <StyledDropdown.Icon>
                {loading ? <Spinner9 className={'spinner'} /> : <ChevronDown />}
              </StyledDropdown.Icon>
            </StyledDropdown>
          </Grid.Col>
          <Grid.Col lg={24}>
            <StyledBackdrop>
              <StyledTextArea />
            </StyledBackdrop>
          </Grid.Col>
        </Grid.Row>
      </Margin>
    </StyledTranslate>
  )
}

export default Translate
