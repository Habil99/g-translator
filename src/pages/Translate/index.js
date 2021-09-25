// noinspection JSCheckFunctionSignatures

import React, {useState} from 'react'
import Dropdown from 'react-dropdown'
import {
  Grid,
  StyledDropdown,
  Margin,
  StyledTextArea,
  StyledBackdrop,
  StyledRelative,
  StyledSpinner,
  Button,
  StyledSidebar
} from '../../styles'
import {ChevronDown} from '@styled-icons/entypo/ChevronDown'
import {Spinner9} from '@styled-icons/icomoon/Spinner9'
import {PatchCheckFill} from '@styled-icons/bootstrap/PatchCheckFill'
import {StyledTranslate} from './Translate.styled'
import {getWordsApi} from "../../features/translator/translatorSlice";
import {useDispatch, useSelector} from "react-redux";
import {translatorSelector} from "../../features/translator/translator.selector";
import {PatchExclamationFill} from "@styled-icons/bootstrap";
import Sidebar from "./Sidebar";

const Translate = () => {
  const dispatch = useDispatch()/**/
  const [options] = useState(['Synonyms', 'Antonyms', 'Examples', 'Definitions'])
  const [form, setForm] = useState({type: options[0].toLowerCase(), text: ''})
  const status = useSelector(translatorSelector.status)
  const data = useSelector(translatorSelector.data)
  const error = useSelector(translatorSelector.error)
  const [willFetch, setWillFetch] = useState(form.type || '')

  const setType = (selected) => {
    setForm(prev => ({
      ...prev,
      type: selected.toLowerCase()
    }))
  }

  const setWords = (text) => {
    setForm(prev => ({
      ...prev,
      text
    }))
  }

  const getSynonyms = text => {
    const words = text.split(" ")
    dispatch(getWordsApi({type: form.type, words}))
    setWillFetch(form.type);
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
                <StyledTextArea
                  value={form.text}
                  onChange={({target}) => setWords(target.value)}
                  disabled={status === 'loading'}
                />
                {status === 'loading' && <StyledSpinner/>}
              </StyledRelative>
            </StyledBackdrop>
            <Margin margin={[20, 0]}>
              <Button onClick={() => getSynonyms(form.text)}
                      disabled={status === 'loading' || form.text.length < 3}>Start</Button>
            </Margin>
          </Grid.Col>
        </Grid.Row>
        {status === 'fulfilled' && <Sidebar data={data} willFetch={willFetch} />}
      </Margin>
    </StyledTranslate>
  )
}

export default Translate
