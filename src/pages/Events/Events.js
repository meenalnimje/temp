import "./Events.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { setLoading } from "../../redux/appSlice";
import { useNavigate } from "react-router-dom";

function Events() {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eventImg, setEventImg] = useState([]);
  async function fetchEventImages() {
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        "https://ashvamedha.onrender.com/upload/",
        {
          folderName: "eventImgSmall",
        }
      );
      // setBg(response.data.result);
      setEventImg(response?.data?.result);
    } catch (err) {
    } finally {
      dispatch(setLoading(false));
    }
  }
  useEffect(() => {
    fetchEventImages();
  }, []);
  const sportsInfo = [
    {
      id: 1,
      sportName: "Chess",
      imgUrl: eventImg[0]?.image?.url,
      desc: "Chess is the art of thinking ahead, of making complex decisions under pressure",
      date: "28th-29th October",
    },
    {
      id: 2,
      sportName: "Badminton",
      imgUrl: eventImg[1]?.image?.url,
      desc: "Badminton is not only about winning. It's about playing beautiful, memorable games.",
      date: "28th-29th October",
    },
    {
      id: 3,
      sportName: "Volleyball",
      imgUrl: eventImg[2]?.image?.url,
      desc: "Success in volleyball comes not from individual glory but from seamless teamwork",
      date: "28th-29th October",
    },
    {
      id: 4,
      sportName: "Football",
      imgUrl: eventImg[4]?.image?.url,
      desc: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.",
      date: "28th-29th October",
    },
    {
      id: 5,
      sportName: "Basketball",
      imgUrl: eventImg[3]?.image?.url,
      desc: "Basketball is like photography. If you don't focus, all you have is the negative.",
      date: "28th-29th October",
    },
    {
      id: 6,
      sportName: "Table Tennis",
      imgUrl: eventImg[6]?.image?.url,
      desc: "The sound of the ball hitting the table is the sound of opportunity. Don't miss your shot.",
      date: "28th-29th October",
    },
  ];
  return (
    !isLoading && (
      <div className="events">
        <Navbar />
        <h2 className="heading">
          <span className="h1">UPCOMING </span>
          <span className="h2">EVENTS</span>
        </h2>
        <div className="event-container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {sportsInfo.map((item) => (
              <SwiperSlide
                className="ui-card"
                onClick={() => navigate(`/events/${item.id}`)}
              >
                <img src={item.imgUrl} alt="" />
                <div class="description">
                  <h3>{item.sportName}</h3>
                  <p className="desc">"{item.desc}"</p>
                  <button className="btn-primary">Register now</button>
                </div>
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline">
                  <GrCaretPrevious className="prev" />
                </ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline">
                  <GrCaretNext className="next" />
                </ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
        <Footer />
      </div>
    )
  );
}

export default Events;
