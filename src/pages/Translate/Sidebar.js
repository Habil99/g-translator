import React, {createRef, useRef} from 'react';
import {Grid, Margin, StyledBackdrop, StyledSidebar, StyledTooltip} from "../../styles";
import {PatchCheckFill} from "@styled-icons/bootstrap/PatchCheckFill";
import {PatchExclamationFill} from "@styled-icons/bootstrap";

const Sidebar = ({data, willFetch}) => {

  const toggleTooltip = (event, index) => {
    const tooltip = document.getElementById(`tooltip-${index}`)

    if (tooltip) {
      if (event.type === 'mouseover') {
        tooltip.classList.add('show')
      } else if (event.type === 'mouseout') {
        tooltip.classList.remove('show')
      }
    }
  }

  return (
    <Grid.Row>
      <Grid.Col lg={8}>
        <StyledSidebar>
          <StyledBackdrop>
            {data?.map((item, index) => (
              item && (
                <StyledSidebar.Button
                  onMouseOut={e => toggleTooltip(e, index)}
                  onMouseOver={(e) => toggleTooltip(e, index)}
                  className={`${index === 0 && 'active'}`} key={index}
                >
                  {item[willFetch].length > 0 ? (
                    <>
                      <PatchCheckFill/>
                      <span>{item.word}</span>
                    </>
                  ) : (
                    <>
                      <PatchExclamationFill/>
                      <span>{item.word}</span>
                      <StyledTooltip id={`tooltip-${index}`}>
                        <StyledTooltip.Content>Nothing found</StyledTooltip.Content>
                      </StyledTooltip>
                    </>
                  )}
                </StyledSidebar.Button>
              )
            ))}
          </StyledBackdrop>
        </StyledSidebar>
      </Grid.Col>
      <Grid.Col lg={16}>
        {data?.map((item, index) => (
          item && (
            <Margin margin={[0, 0, 20]} key={index}>
              {item[willFetch].length > 0 && item[willFetch]?.map((result, index) => (
                <p key={index}>{result}</p>
              ))}
            </Margin>
          )))}
      </Grid.Col>
    </Grid.Row>
  );
};

export default Sidebar;
