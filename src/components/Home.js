import styled from "styled-components"
import ImageSlider from "./ImageSlider"
import NewStuff from "./NewStuff"
import DisneyOriginals from "./DisneyOriginals"
import Recommended from "./Recommended"
import Trending from "./Trending"
import Branches from "./Branches"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import db from "../firebase"
import { setMovies } from "../features/movie/movieSlice"
import { userName } from "../features/user/userSlice"
import { onSnapshot, collection, query } from "firebase/firestore"

const Home = (props) => {
  const dispatch = useDispatch()
  const username = useSelector(userName)
  let recommends = []
  let newStuff = []
  let originals = []
  let trending = []

  useEffect(() => {
    const database = query(collection(db, "movies"))
    const getData = onSnapshot(database, (snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }]
            break
          case "new":
            newStuff = [...newStuff, { id: doc.id, ...doc.data() }]
            break

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }]
            break

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }]
            break
        }
      })

      dispatch(
        setMovies({
          recommend: recommends.slice(0, 4),
          newStuff: newStuff.slice(0, 4),
          original: originals.slice(0, 4),
          trending: trending.slice(0, 4),
        })
      )
    })
  }, [userName])

  return (
    <Container>
      <ImageSlider />
      <Branches />
      <Recommended />
      <NewStuff />
      <DisneyOriginals />
      <Trending />
    </Container>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`

export default Home
