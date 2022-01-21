import React from "react";
import Banner from "../components/Dashboard1/Banner";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import "./css/Dashboard1.css";
import Card1 from "../components/Dashboard1/Card1";
import { IconButton } from "@mui/material";
import Card2 from "../components/Dashboard1/Card2";
function Dashboard1() {
  return (
    <div className="dashboard1">
      <div className="dashboard1__background"></div>
      <div className="dashboard1__sec1">
        <nav className="dashboard1__navbar">
          <div className="dashboard1__nav__container">
            <div className="dashboard1__nav__logo">
              <img src="/images/logo.png" alt="" srcset="" />
            </div>
            <div className="dashboard1__navbar__itemList">
              <div className="dashboard1__navbar__item">
                <a href="#"> home </a>
              </div>
              <div className="dashboard1__navbar__item">
                <a href="#"> Movies </a>
              </div>
              <div className="dashboard1__navbar__item">
                <a href="#"> series </a>
              </div>
              <div className="dashboard1__navbar__item">
                <a href="#"> cartoon </a>
              </div>
            </div>
          </div>
          <div className="dashboard1__navbar__Icons">
            <div className="dashboard1__navbar__searchIcon">
              <IconButton>
                <SearchIcon style={{ color: "gray" }} />
              </IconButton>
            </div>
            <div className="dashboard1__navbar__notificationIcon">
              <IconButton>
                <NotificationImportantIcon style={{ color: "gray" }} />
              </IconButton>
            </div>
          </div>
        </nav>
        <div className="dashboard1__sec1__banner">
          <Banner
            poster={
              "https://charlie-gray.com/wp-content/uploads/2021/03/ANYA-TQG-ANYA_361_FINAL_RGB-1440x946.jpg"
            }
            season={5}
            title={"The Queen'a Gambit"}
          />
        </div>
        <div className="dashboard1__sec1__content">
          <h2>Popular on Netflix</h2>
          <div className="dashboard1__sec1__contentList">
            <Card1
              seasons={1}
              rating={6.5}
              title={"sex education"}
              poster={"/images/sex_education.jpg"}
            />
            <Card1
              seasons={2}
              rating={9.5}
              title={"Kota Factory"}
              poster={
                "https://upload.wikimedia.org/wikipedia/en/d/d9/Kota_Factory_poster.jpg"
              }
            />
            <Card1
              seasons={5}
              rating={9.5}
              title={"yeh kaali kaali ankhein"}
              poster={
                "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQSpkuhT_lWn1NgDPMOmcXlJvLobkmqYHxoAPbuqY8DWZL55mSH"
              }
            />
            <Card1
              seasons={4}
              rating={9.5}
              title={"lucifer"}
              poster={
                "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRGZN1_0pyEzJJ8DTE0LurQp6Fu6qeIg6AwvSe1WiKeHD7n4l21"
              }
            />
            <Card1
              seasons={5}
              rating={9.5}
              title={"money hiest"}
              poster={"/images/money_heist_poster.jpg"}
            />
            <Card1
              seasons={5}
              rating={9.5}
              title={"money hiest"}
              poster={"/images/money_heist_poster.jpg"}
            />
          </div>
        </div>
      </div>
      <div className="dashboard1__sec2">
        <nav>
          <div className="dashboard1__sec2__navbar">
            <div className="dashboard1__sec2__navbar__content">
              <div className="dashboard1__sec2__navbar__box">
                <img src="/images/Netflix-avatar.png" alt="" />
              </div>
              <div className="dashboard1__sec2__navbar__contentBar">
                <h2>User Name</h2>
                <p>User_Name@gmail.com</p>
              </div>
            </div>
            <div className="dashboard1__sec2__navbar__dashboardDot">
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
        </nav>
        <div className="dashboard1__sec2__content">
          <div className="dashboard1__sec2__new-episode">
            <h2>New Episode</h2>
          </div>
          <div className="dashboard1__sec2__new-episode__content">
            <Card2
              name={"Hellbound"}
              duration={57}
              episode={3}
              part={1}
              poster={
                "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSjlU10XSzoxnmWAzJhadQvxYYEew49ogNqnDalCumIGid433o7"
              }
            />
            <Card2
              name={"Ozark"}
              duration={43}
              episode={2}
              part={1}
              poster={
                "https://resizing.flixster.com/IOc_pe5bdDqyMCioLOS7XOCy9ag=/206x305/v2/https://flxt.tmsimg.com/assets/p14303628_b_v13_aa.jpg"
              }
            />
            <Card2
              name={"Peaky Blinders"}
              duration={17}
              episode={6}
              part={2}
              poster={"/images/Peaky_Blinders_poster.jpg"}
            />
            <Card2
              name={"Peaky Blinders"}
              duration={17}
              episode={6}
              part={2}
              poster={"/images/Peaky_Blinders_poster.jpg"}
            />
          </div>

          <div className="dashboard1__sec2__continue-watching">
            <h2>Continue Watching</h2>
          </div>
          <div className="dashboard1__sec2__continue-watching__content">
            <Card2
              name={"The Queen'a Gambit"}
              duration={27}
              episode={5}
              part={1}
              poster={
                "https://charlie-gray.com/wp-content/uploads/2020/09/QueensGambit_Vertical_Main_RGB_EN-US-576x853.jpg"
              }
              progressBar={60}
            />
            <Card2
              name={"Peaky Blinders"}
              duration={17}
              episode={6}
              part={2}
              poster={"/images/Peaky_Blinders_poster.jpg"}
              progressBar={70}
            />

            <Card2
              name={"Peaky Blinders"}
              duration={17}
              episode={6}
              part={2}
              poster={"/images/Peaky_Blinders_poster.jpg"}
              progressBar={30}
            />
            <Card2
              name={"Peaky Blinders"}
              duration={17}
              episode={6}
              part={2}
              poster={"/images/Peaky_Blinders_poster.jpg"}
              progressBar={40}
            />
          </div>

          <div className="dashboard1__sec2__friends-watching">
            <h2>Friends Watching</h2>
          </div>
          <div className="dashboard1__sec2__friends-watching__content">
            <Card1
              seasons={5}
              rating={9.5}
              title={"money heist"}
              poster={"/images/money-heist-poster.png"}
              large
            />
            <Card1
              seasons={5}
              rating={9.5}
              title={"lost in space"}
              poster={
                "https://resizing.flixster.com/QXhQzTNlafSPAENOG4iEAfiBdDE=/fit-in/1152x864/v2/https://flxt.tmsimg.com/assets/p15197695_b_h9_ak.jpg"
              }
              large
            />
            <Card1
              seasons={5}
              rating={9.5}
              title={"money hiest"}
              poster={"/images/default_banner.jpg"}
              large
            />
            <Card1
              seasons={5}
              rating={9.5}
              title={"money hiest"}
              poster={"/images/default_banner.jpg"}
              large
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard1;
