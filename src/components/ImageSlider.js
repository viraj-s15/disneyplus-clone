import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autplay: true,
  }

  return (
    <SliderContainer {...settings}>
      <Wrap>
        <a>
          <img src='./images/slider-badging.jpg' alt='slider-image1' />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='./images/slider-scale.jpg' alt='slider-image2' />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='./images/slider-badag.jpg' alt='slider-image3' />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='./images/slider-scales.jpg' alt='slider-image4' />
        </a>
      </Wrap>
    </SliderContainer>
  )
}

const SliderContainer = styled(Slider)`
  margin-top: 4rem;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -5rem;
  }
  .slick-next {
    right: -5rem;
  }
`

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`

export default ImageSlider
