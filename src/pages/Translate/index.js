import React, {useEffect, useState} from 'react'
import Dropdown from 'react-dropdown'
import {
  Grid,
  StyledDropdown,
  Margin,
  StyledTextArea,
  StyledBackdrop,
  StyledRelative,
  StyledSpinner,
  Button
} from '../../styles'
import {ChevronDown} from '@styled-icons/entypo/ChevronDown'
import {StyledTranslate} from './Translate.styled'
import {Spinner9} from '@styled-icons/icomoon/Spinner9'
import {getWordsApi} from "../../features/translator/translatorSlice";
import {useDispatch, useSelector} from "react-redux";
import {translatorSelector} from "../../features/translator/translator.selector";

const Translate = () => {
  const dispatch = useDispatch()/**/
  const [options] = useState(['Frequency', 'Synonyms', 'Antonyms', 'Examples', 'Definitions'])
  const [form, setForm] = useState({type: '', word: ''})
  const status = useSelector(translatorSelector.status)
  const data = useSelector(translatorSelector.data)
  const [willFetch, setWillFetch] = useState(form.type || '')

  const setType = (selected) => {
    setForm(prev => ({
      ...prev,
      type: selected.toLowerCase()
    }))
  }

  const setWord = (word) => {
    setForm(prev => ({
      ...prev,
      word
    }))
  }

  const getSynonyms = word => {
    dispatch(getWordsApi({type: form.type, word}))
    setWillFetch(form.type);

    console.log(willFetch)
  }

  return (
    <StyledTranslate>
      <Margin margin={[80, 0]}>
        <Grid.Row>
          <Grid.Col lg={8}>
            <StyledDropdown>
              <Dropdown disabled={status === 'loading'} placeholder={'Search...'} options={options} value={options[0]}
                        onChange={({value}) => setType(value)}
              />
              <StyledDropdown.Icon>
                {status === 'loading' ? <Spinner9 className={'spinner'}/> : <ChevronDown/>}
              </StyledDropdown.Icon>
            </StyledDropdown>
          </Grid.Col>
          <Grid.Col lg={24}>
            <StyledBackdrop>
              <StyledRelative>
                <StyledTextArea value={form.word} onChange={({target}) => setWord(target.value)}/>
                {status === 'loading' && <StyledSpinner/>}
              </StyledRelative>
            </StyledBackdrop>
            <Margin margin={[20]}>
              {status === 'loading' ? <StyledSpinner style={{position: 'relative'}}/> :
                <Button onClick={() => getSynonyms(form.word)}>Start</Button>}
            </Margin>
          </Grid.Col>
        </Grid.Row>
        {/*<Grid.Row>*/}
        {status === 'fulfilled' && data[willFetch].map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        {/*</Grid.Row>*/}
      </Margin>
    </StyledTranslate>
  )
}

export default Translate
