import React from 'react'
import {Grid, StyledMain, StyledButton, Typography, Margin, Image} from "../../styles";
import Illustration from '../../assets/svgs/illustration.svg'

const Main = () => {
  return (
    <StyledMain>
      <Grid.Row>
        <Grid.Col display="flex" justify="start" lg="12">
          <Margin margin={[120, 0]}>
            <Typography.Title size="32" weight="700">The Best Platform For <br/> Online Learning</Typography.Title>
            <Typography.Text size="15" weight="400">
              Amet minim moult non descent ullamco est sit aliqua amet sint. Velit officia consequat duis enim velit mollit.
            </Typography.Text>
            <StyledButton to="/translate" type="link">
              Start to translate
            </StyledButton>
          </Margin>
        </Grid.Col>
        <Grid.Col display="flex" justify="end" lg="12">
          <Image fit={'contain'} src={Illustration} alt="" />
        </Grid.Col>
      </Grid.Row>
    </StyledMain>
  )
}

export default Main
