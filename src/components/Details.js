import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import db from "../firebase"
import { collection, doc, query, getDoc } from "firebase/firestore"

const Details = (props) => {
  const { id } = useParams()
  const [detailData, setDetailData] = useState({})

  useEffect(() => {
    const database = query(collection(db, "movies"))
    getDoc(doc(query(collection(db, "movies")), id))
      .then((docSnap) => {
        if (docSnap.exists) {
          setDetailData(docSnap.data())
        } else {
          console.log("no such document in firebase 🔥")
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error)
      })
  }, [id])

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>
      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <Content>
        <Controls>
          <Player>
            <img src='/images/play-icon-black.png' alt='' />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src='/images/play-icon-white.png' alt='' />
            <span>Trailer</span>
          </Trailer>
          <AddToList>
            <span />
            <span />
          </AddToList>
          <GroupWatch>
            <div>
              <img src='/images/group-icon.png' alt='' />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`
const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;


    @media (max-width: 7680px) {
        width: intial;
  }
`

const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin 0 auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 1.5rem;
  
  img {
    max-width: 37.5rem;
    width: 35vw;
    min-width: 12.5rem;
  }
  
  `

const Content = styled.div`
  max-width: 54.625rem;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 1.5rem 0;
  min-height: 3.5rem;
  justify-content: flex-start;

  @media (max-width: 767px) {
    flex-direction: column;
    position: relative;
    top: 5rem;
    gap: 0.5rem;
  }
`
const Player = styled.button`
  font-size: 1.5rem;
  margin: 1.5rem 1.25rem 0 0;
  padding: 0 1.5rem;
  height: 3.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  position: relative;
  bottom: 0.7rem;

  img {
    width: 2rem;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`

const Trailer = styled(Player)`
  position: relative;
  //   right: 10rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`

const AddToList = styled.div`
  margin-right: 1rem;
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  position: relative;
  border: 2px solid white;
  cursor: pointer;

  span {
    background: rgb(249, 249, 249);
    display: inline-block;
    position: relative;
    left: 1rem;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 1rem;
    }

    &:nth-child(2) {
      height: 1rem;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`

const GroupWatch = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  div {
    height: 3.25rem;
    width: 3.25rem;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 767px) {
    margin-left: -0.75rem;
  }
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 1rem;
  min-height: 1.25rem;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-top: 10rem;
  }
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 1.25rem;
  padding: 1rem 0;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

export default Details
