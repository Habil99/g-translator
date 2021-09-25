import React from 'react';
import {Grid, Margin, StyledBackdrop, StyledSidebar, StyledTooltip} from "../../styles";
import {PatchCheckFill} from "@styled-icons/bootstrap/PatchCheckFill";
import {PatchExclamationFill} from "@styled-icons/bootstrap";
import {toggleTooltip, getFirstTabWithData} from "../../helpers";
import {ChevronRight} from '@styled-icons/entypo/ChevronRight'

const Sidebar = ({data, willFetch}) => {
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
                  className={`${index === getFirstTabWithData(data, willFetch) && 'active'}`}
                  key={index}
                >
                  {item[willFetch].length > 0 ? (
                    <>
                      <PatchCheckFill/>
                      <span className={'sidebar-text'}>{item.word}</span>
                      <span>
                        <ChevronRight/>
                      </span>
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
