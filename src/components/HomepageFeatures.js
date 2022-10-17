import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'Dodges Website',
    imageUrl: 'img/incidamus-pretty.png',
    description: (
      <>
        Tribes Ascend now has some community made content to enjoy!
      </>
    ),
  },
  {
    title: 'Full of guides',
    imageUrl: 'img/inferno-pretty.png',
    description: (
      <>
        I swear I'll write them all eventually.
      </>
    ),
  },
  {
    title: 'Playing Tribes in 2022!',
    imageUrl: 'img/drydock-night-pretty.png',
    description: (
      <>
        Guides on how to setup the game and get you playing!
      </>
    ),
  },
];
function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4')}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
