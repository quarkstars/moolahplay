import { IonButton, IonButtons, IonIcon, isPlatform } from '@ionic/react';
import {
  add,
  addCircle,
  chevronBack,
  chevronDown,
  chevronForward,
  play,
  playCircle,
} from 'ionicons/icons';
import React from 'react';

interface IHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  mainButtonText?: string;
  mainButtonIcon?: string;
  googleUrl?: string;
  appleUrl?: string;
  onClickSub?: Function;
  overlayColor?: string;
  bgImageUrl?: string;
  isQuote?: boolean;
  scrollIsHidden?: boolean;
  featureImageUrl?: string;
  footerTitle?: string;
  postImageUrl?: string;
  footerSubtitle?: string;
  isRounded?: boolean;
  isCroppedTop?: boolean;
}
const Hero = (props: IHeroProps) => {
  const {
    title,
    subtitle,
    description,
    mainButtonText,
    mainButtonIcon,
    overlayColor,
    bgImageUrl,
    postImageUrl,
    isQuote,
    googleUrl,
    appleUrl,
    featureImageUrl,
    isRounded,
    isCroppedTop,
  } = props;

  return (
    <div
      className={`w-full flex justify-center relative overflow-visible ${
        isRounded ? 'rounded-lg' : ''
      }`}
      style={{
        backgroundImage: `url(${bgImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        style={{ backgroundColor: overlayColor }}
        className="flex flex-col justify-center w-full max-w-6xl p-8 py-20 overflow-visible bg-opacity-50 xs:flex-row"
      >
        {/* Text Section */}
        <div className="flex flex-col justify-center w-full space-y-4 xs:w-1/2">
          {title && (
            <h2 className="text-5xl font-medium tracking-tight text-white text-shadow-lg xs:text-5xl sm:text-7xl ">
              {title}
            </h2>
          )}
          {subtitle && <p className={`text-white font-medium text-xl sm:text-2xl`}>{subtitle}</p>}
          {description && <span className="text-lg text-white">{description}</span>}
          {/* Button and Image Section */}
          <div className="flex items-center justify-start mt-4 space-x-4">
            {googleUrl && !isPlatform('ios') && (
              <div className="w-1/2 max-w-xs hover:opacity-90 focus:opacity-90 md:w-1/3">
                <a href={googleUrl} target="_blank" rel="noopener noreferrer">
                  <img src={'/img/google-play.png'} alt="Post" />
                </a>
              </div>
            )}
            {appleUrl && !isPlatform('android') && (
              <div className="w-1/2 max-w-xs cursor-pointer hover:opacity-90 focus:opacity-90 md:w-1/3">
                <a href={appleUrl} target="_blank" rel="noopener noreferrer">
                  <img src={'/img/apple-store.png'} alt="Post" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Feature Image */}

        {featureImageUrl && (
          <div
            className={`xs:flex items-center justify-center w-full mt-12 xs:mt-0 xs:pl-4 xs:w-1/2 ${
              isCroppedTop ? 'xs:-mt-60 xs:-mb-60 hidden' : 'flex -mb-40 xs:-mb-48 '
            }`}
          >
            <div className="flex items-center justify-center max-w-xs xs:max-w-sm sm:max-w-md">
              <img src={featureImageUrl} alt="Feature" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
