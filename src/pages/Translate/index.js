// noinspection JSCheckFunctionSignatures

import React, {useCallback, useEffect, useState} from 'react'
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
} from '../../styles'
import {useHistory, useLocation} from 'react-router'
import {useQuery} from "../../helpers";
import {ChevronDown} from '@styled-icons/entypo/ChevronDown'
import {Spinner9} from '@styled-icons/icomoon/Spinner9'
import {StyledTranslate} from './Translate.styled'
import {getWordsApi} from "../../features/translator/translatorSlice";
import {useDispatch, useSelector} from "react-redux";
import {translatorSelector} from "../../features/translator/translator.selector";
import Sidebar from "./Sidebar";

const Translate = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const query = useQuery(location)
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

  const getSynonyms = useCallback(text => {
    const type = form.type
    const words = text.split(" ")
    dispatch(getWordsApi({type, words}))
    setWillFetch(type);

    console.log(type, 'type', willFetch, 'willfetch')
    history.push(`?type=${willFetch}&words=${words.join('-').toLowerCase()}`)
  }, [])

  useEffect(() => {
    const type = query.get('type')
    const words = query.get('words')
    const text = words?.split('-').join(' ')

    if (type && words) {
      setWords(text)
      setType(type)
      getSynonyms(text)
    }
  }, [])

  return (
    <StyledTranslate>
      <Margin margin={[80, 0]}>
        <Grid.Row>
          <Grid.Col lg={8}>
            <StyledDropdown>
              <Dropdown
                disabled={status === 'loading'}
                placeholder={'Search...'}
                options={options} value={options.find(option => option.toLowerCase() === form.type)}
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
              <Button
                onClick={() => getSynonyms(form.text)}
                disabled={status === 'loading' || form.text.length < 3}
              >
                Start
              </Button>
            </Margin>
          </Grid.Col>
        </Grid.Row>
        {status === 'fulfilled' && data[0] ?
          <Sidebar
            data={data}
            willFetch={willFetch}
          /> : <p>Nothing found</p>}
      </Margin>
    </StyledTranslate>
  )
}

export default Translate
