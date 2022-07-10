import { useEffect } from "react"
import styled from "styled-components"
import { auth, provider } from "../firebase"
import { signInWithPopup, signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import {
  userName,
  userPhoto,
  setUsersLoginDetails,
  setSignOutState,
} from "../features/user/userSlice"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const username = useSelector(userName)
  const userphoto = useSelector(userPhoto)

  const googleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user)
        })
        .catch((error) => {
          alert(error.message)
        })
    } else if (username) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState())
          navigate("/")
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }

  const setUser = (user) => {
    dispatch(
      setUsersLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    )
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user)
        navigate("/home")
      }
    })
  }, [userName])

  return (
    <Nav>
      <a href=''>
        <NavLogo src='/images/logo.svg' alt='Disney+ logo' />
      </a>
      {!username ? (
        <Login onClick={googleAuth}>LOGIN</Login>
      ) : (
        <>
          <NavBar>
            <a href='/home'>
              <img src='/images/home-icon.svg' alt='Home icon' />
              <span>HOME</span>
            </a>
            <a href='/search'>
              <img src='/images/search-icon.svg' alt='Search icon' />
              <span>SEARCH</span>
            </a>
            <a href='/watchlist'>
              <img src='/images/watchlist-icon.svg' alt='Watchlist icon' />
              <span>WATCHLIST</span>
            </a>
            <a href='/originals'>
              <img src='/images/original-icon.svg' alt='Originals icon' />
              <span>ORIGINALS</span>
            </a>
            <a href='/movies'>
              <img src='/images/movie-icon.svg' alt='Movies icon' />
              <span>MOVIES</span>
            </a>
            <a href='/series'>
              <img src='/images/series-icon.svg' alt='Series icon' />
              <span>SERIES</span>
            </a>
          </NavBar>
          <SignOut>
            <UserImage src={userphoto} alt={username} />
            <DropDown>
              <span onClick={googleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  )
}

const Nav = styled.div`
  background-color: #090b13;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3em;
  letter-spacing: 1rem;
  z-index: 2;
`

const NavLogo = styled.img`
  width: 7em;
`

const NavBar = styled.div`
  max-height: 1.5rem;
  margin: 0px;
  display: flex;
  padding: 0px;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 1.35rem;
      min-width: 20px;
      width: 1.35rem;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      font-size: 1.25em;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 1052px) {
    display: none;
  }
`

const Login = styled.button`
  margin-right: 3rem;
  font-size: 1.5rem;
  color: inherit;
  letter-spacing: 2px;
  background-color: rgb(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    border: transparent !important;
    background-color: #f9f9f9;
    color: black;
  }
`

const UserImage = styled.img`
  height: 4.5em;
  border-radius: 50%;
`

const DropDown = styled.div`
position: absolute
top: 3em;
  letter-spacing: 3px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151,151,151,0.34);
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  cursor: pointer;
  box-shadow: rgb(0,0,0/ 50%) 0px 0px 18px;  
  opacity: 0;
  `

const SignOut = styled.div`
  margin-right: 2rem;
  margin-top: 4rem;
  cursor: pointer;

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`
export default Header
