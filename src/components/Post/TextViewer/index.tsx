import styled from "styled-components"
import { MdLocationOn, MdCalendarToday } from "react-icons/md"

const Wrapper = styled.div`
  width: 20%;
  max-width: 613px;
  height: auto;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0 1rem;
  box-sizing: border-box;

  @media(max-width: 768px){
       width: 100%;
    }
`

const DateWrapper = styled.div`
    display: flex;
    padding: 1rem 1rem 0.25rem;

`

const LocationWrapper = styled.div`
    display: flex;
    padding: 0.25rem 1rem 1rem;

`


const ContentWrapper = styled.div`
    display: flex;
    padding: 1rem;

`

type Props = {
    location: string
    content: string
    date: string
}

const TextViewer = (props: Props) => {
    return (
        <Wrapper>
            <DateWrapper>
                <MdCalendarToday size={16} color={"rgb(52,58,64)"} style={{
                    margin: "auto 0",
                    marginRight: "0.5rem"
                }}/> {props.date}
            </DateWrapper>
            <LocationWrapper>
                <MdLocationOn size={16} color={"rgb(52,58,64)"} style={{
                    margin: "auto 0",
                    marginRight: "0.5rem"
                }}/> {props.location}
            </LocationWrapper>
            <ContentWrapper>
                {props.content}
            </ContentWrapper>
        </Wrapper>
    )
}

export default TextViewer