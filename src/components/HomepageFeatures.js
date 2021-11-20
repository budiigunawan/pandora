import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Mudah Diterapkan',
    Svg: require('../../static/img/undraw_programmer_re_owql.svg').default,
    description: (
      <>
        Pandora disusun secara langkah demi langkah, sehingga mudah diterapkan
        dalam proyek Anda.
      </>
    ),
  },
  {
    title: 'Percepat Development',
    Svg: require('../../static/img/undraw_maker_launch_crhe.svg').default,
    description: (
      <>
        Menggunakan qore dan qore SDK yang dapat mempercepat proses development.
      </>
    ),
  },
  {
    title: 'Best Practices',
    Svg: require('../../static/img/undraw_book_lover_re_rwjy.svg').default,
    description: (
      <>
        Belajar menerapkan best practice, sehingga kemunculan bug dapat
        diminimalisir
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
