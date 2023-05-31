import { useEffect, useState } from "react";
import "./Main.css";
import handsUpImage from "../../images/ben-hands-up.jpg";

function Main({ generateJoke, chuckJoke, isLoading }) {
  /*
  function handleJokeClick() {
    console.log(isLoading);
    generateJoke();
  }
  */

  return (
    <main className='main'>
      <div className='main__parent'>
        <div className='main__api-container'>
          <h2 className='main__api-header'>Chuck Norris Joke Generator</h2>
          <div className='main__api-joke-container'>
            <p className='main__api-joke'>
              {isLoading ? "Loading..." : "chuckJoke"}
            </p>
            <button
              className='main__api-generate-button'
              type='button'
              //onClick={handleJokeClick}
            >
              Generate Joke
            </button>
          </div>
          <div className='main__api-footer'>
            <p className='main__api-credit'>Courtesy of API-Ninja</p>
          </div>
        </div>
        <h2 className='main__new-video-header'>Our Newest Video</h2>
        <iframe
          className='main__video1'
          src='https://www.youtube.com/embed/0qCEqGUYYgY'
          title='YouTube video player'
          allow=' fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
        <h2 className='main__new-video-header'>What's New</h2>
        <p className='main__paragraph'>
          We are loving the weather, and out at the Heritage Hound Dog's
          fundraiser!
        </p>
        <img className='main__body-picture' src={handsUpImage} alt='Main' />
      </div>
    </main>
  );
}

export default Main;
