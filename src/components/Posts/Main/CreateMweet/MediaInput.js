import React from 'react';
import Sprite from '../../../../assets/svg/feather-sprite.svg';

const MediaInput = props => {
  const imageClick = () => {
    props.imageRef.current.click();
  }

  const videoClick = () => {
    props.videoRef.current.click();
  }
  
  return (
    <div className="createPost__form__media">
      <ul className="mediaMenus">
        <li className="mediaMenus__item" onClick={imageClick}>
          <svg className="mediaMenus__item--link">
            <use xlinkHref={`${Sprite}#image`}></use>
          </svg>
        </li>

        <li className="mediaMenus__item" onClick={videoClick}>
          <svg className="mediaMenus__item--link">
            <use xlinkHref={`${Sprite}#youtube`}></use>
          </svg>
        </li>

        <li className="mediaMenus__item">
          <svg className="mediaMenus__item--link">
            <use xlinkHref={`${Sprite}#paperclip`}></use>
          </svg>
        </li>
      </ul>
      
      <button className="createPost__form__button" disabled>Mweet</button>
    </div>
  );
}

export default MediaInput;