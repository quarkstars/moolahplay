import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { arrowForward, arrowForwardOutline, close, flash, list, menu } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router';
import { Link, sites } from 'data/data';
import Hero from 'components/ui/Hero';

const HomePage = () => {
  const site = sites[process.env.NEXT_PUBLIC_SITE || 0];
  return (
    <>
      <IonMenu side="end" contentId="main-content">
        <IonContent className="ion-padding">
          <div className="flex flex-col w-full">
            <div className="flex justify-end w-full">
              <IonMenuToggle>
                <IonButton fill="clear">
                  <IonIcon slot="icon-only" icon={close} />
                </IonButton>
              </IonMenuToggle>
            </div>
            {site.links.map((link: Link) => {
              return (
                <IonItem href={link.url} button key={link.name}>
                  <IonLabel className="flex justify-start w-full">{link.name}</IonLabel>
                  <IonIcon icon={arrowForward} size="small" className="text-gray-300" slot="end" />
                </IonItem>
              );
            })}
          </div>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader className="flex justify-center">
          <IonToolbar className="max-w-6xl">
            <IonTitle className="xs:w-full w-[110%]">
              <div className="flex justify-center w-full xs:justify-start">
                <img src={site.logoUrl} alt={site.name} className="w-24" />
              </div>
            </IonTitle>

            <IonSegment
              slot="end"
              className="hidden tracking-tight w-96 xs:flex"
              mode="md"
              value={site.links[0].url}
            >
              {site.links.map((link: Link) => {
                return (
                  <IonSegmentButton value={link.url} key={link.name}>
                    <IonLabel className="tracking-normal">{link.name}</IonLabel>
                  </IonSegmentButton>
                );
              })}
            </IonSegment>
            <IonButtons slot="end">
              <IonMenuButton className="flex scale-125 xs:hidden"></IonMenuButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="flex flex-col justify-center w-full">
            <Hero
              title={site.heroTitle}
              subtitle={site.heroTagline}
              description={site.heroDescription}
              googleUrl={site.googleUrl}
              appleUrl={site.appleUrl}
              overlayColor={
                'linear-gradient(90deg, rgba(97,219,146,.4) 0%, rgba(0,165,196,.2) 100%)'
              }
              bgImageUrl={site.bannerImage}
              featureImageUrl={site.heroFeatureImageUrl}
              footerTitle={site.footerTitle}
              footerSubtitle={site.footerTitle}
            />
            <div className="flex flex-col items-center justify-center w-full">
              <section className="w-full max-w-6xl px-8 py-10 mt-10 space-y-12">
                <div className="flex justify-center w-full space-x-12">
                  <div className="items-center justify-center hidden w-full max-w-xs xs:flex xs:w-1/3">
                    <div className="flex items-center justify-center max-w-xs xs:max-w-sm sm:max-w-md">
                      <img src={'/img/1.png'} alt="Image of woman" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center w-full xs:w-2/3">
                    <h3 className="pb-2 text-4xl font-medium text-gray-900 sm:text-5xl">
                      Real Fast, Real Easy!
                    </h3>
                    <p className="text-lg text-gray-700">
                      With a Moolah Play cashless advance your funds are issued safely and
                      conveniently right at your favorite machine!
                    </p>
                  </div>
                </div>
              </section>
              <h3 className="pb-0 text-4xl font-medium text-gray-900 sm:text-5xl">How it Works</h3>
              <section className="w-full max-w-6xl px-8 pb-10 mt-10 space-y-12">
                <div className="flex justify-between w-full space-x-12">
                  <div className="flex flex-col justify-center w-full space-y-12 sm:space-y-10 sm:w-2/3">
                    <div className="flex items-start justify-start w-full space-x-4 xs:items-center xs:space-x-8 sm:justify-center">
                      <div className="flex items-center justify-center w-1/3 pt-6 mt-12 xs:pt-0">
                        <div className="flex items-center justify-center w-32">
                          <IonIcon src="/img/1.svg" style={{ transform: 'scale(9)' }} />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center w-full sm:w-2/3">
                        <h3 className="text-xl font-medium uppercase sm:text-2xl text-primary">
                          Get a Players Card
                        </h3>
                        <p className="text-sm text-gray-700 xs:text-base">
                          You must be an active member of the MarkerTrax™ Players Club to enroll in
                          the MarkerTrax™ program. To become a member simply go to the Players Club
                          desk, the Cage or ask any MarkerTrax™ Staff Member for assistance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start justify-start w-full space-x-4 xs:items-center xs:space-x-8 sm:justify-center">
                      <div className="flex items-center justify-center w-1/3 pt-6 mt-12 xs:pt-0">
                        <div className="flex items-center justify-center w-32">
                          <IonIcon src="/img/2.svg" style={{ transform: 'scale(9)' }} />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center w-full sm:w-2/3">
                        <h3 className="text-xl font-medium uppercase sm:text-2xl text-primary">
                          Create an Account
                        </h3>
                        <p className="text-sm text-gray-700 xs:text-base">
                          Select “Sign Up” and enter your Ellis Island Players Club Number and Date
                          of Birth. This will start the FREE enrollment process! You’ll receive an
                          instant approval decision.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="items-center justify-center hidden w-full mt-12 sm:flex xs:w-1/3 sm:w-1/4">
                    <div className="flex items-center justify-center max-w-xs xs:max-w-sm sm:max-w-md">
                      <img src={'/img/2.png'} alt="Image of a Man" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full max-w-6xl px-8 pb-10 space-y-12 lg:-mt-8">
                <div className="flex justify-between w-full sm:space-x-12">
                  <div className="flex flex-col justify-center w-full space-y-12 sm:space-y-8 sm:w-2/3">
                    <div className="flex items-start justify-start w-full space-x-4 xs:items-center xs:space-x-8 sm:justify-center">
                      <div className="flex items-center justify-center w-1/3 pt-6 mt-12 xs:pt-0">
                        <div className="flex items-center justify-center w-32">
                          <IonIcon src="/img/3.svg" style={{ transform: 'scale(9)' }} />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center w-full sm:w-2/3">
                        <h3 className="text-xl font-medium uppercase sm:text-2xl text-primary">
                          You&apos;re Approved
                        </h3>
                        <p className="text-sm text-gray-700 xs:text-base">
                          If approved, you&apos;ll be offered a cashless advance and can start
                          enjoying the benefits of playing now and paying later! You can lower your
                          limit to your personal comfort level or accept the amount offered!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start justify-start w-full space-x-4 xs:items-center xs:space-x-8 sm:justify-center">
                      <div className="flex items-center justify-center w-1/3 pt-6 mt-12 xs:pt-0">
                        <div className="flex items-center justify-center w-32">
                          <IonIcon src="/img/4.svg" style={{ transform: 'scale(9)' }} />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center w-full sm:w-2/3">
                        <h3 className="text-xl font-medium uppercase sm:text-2xl text-primary">
                          It&apos;s Time To Play
                        </h3>
                        <p className="text-sm text-gray-700 xs:text-base">
                          Now that you&apos;re approved, visit the cage cashier to sign for your
                          cashless advance and then head to your favorite machine to access your
                          Moolah Play funds!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="items-center justify-center hidden w-full mt-12 sm:flex xs:w-1/3 sm:w-1/4">
                    <div className="flex items-center justify-center max-w-xs xs:max-w-sm sm:max-w-md">
                      <img src={'/img/3.png'} alt="Image of a Man" />
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full max-w-6xl px-8 pb-10 mt-10 space-y-12">
                <div className="space-y-12 overflow-hidden w-fullmx-8 rounded-xl">
                  <Hero
                    title={site.footerTitle}
                    subtitle={site.footerSubtitle}
                    //   description={site.heroDescription}
                    googleUrl={site.googleUrl}
                    appleUrl={site.appleUrl}
                    overlayColor={
                      'linear-gradient(90deg, rgba(97,219,146,.4) 0%, rgba(0,165,196,.2) 100%)'
                    }
                    bgImageUrl={site.bannerImage}
                    featureImageUrl={'/img/moolah-bg.png'}
                    footerTitle={site.footerTitle}
                    footerSubtitle={site.footerSubTitle}
                    isCroppedTop={true}
                  />
                </div>
              </section>
            </div>
            <footer className="flex justify-center w-full py-10 text-white bg-gray-900">
              <div className="flex flex-col items-center justify-center w-full max-w-6xl px-16 md:flex-row">
                <div className="flex items-center justify-center w-full md:justify-start">
                  {site.links.map((link: Link) => {
                    return (
                      <IonButton fill="clear" href={link.url} key={link.name} mode="md">
                        <IonLabel className="text-white">{link.name}</IonLabel>
                      </IonButton>
                    );
                  })}
                </div>
                <div className="flex justify-center w-full text-center md:justify-end md:text-left">
                  {`© ${new Date().getFullYear()} ${site.name}  All rights reserved.`}
                </div>
              </div>
            </footer>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default HomePage;
