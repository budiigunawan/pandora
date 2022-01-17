import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Access',
    Svg: require('../../static/img/undraw_programmer_re_owql.svg').default,
    description: (
      <>All develompment documentations are centralized in one place</>
    ),
  },
  {
    title: 'Accelerate Development',
    Svg: require('../../static/img/undraw_maker_launch_crhe.svg').default,
    description: (
      <>
        Accelerate learning process is equal to accelerating the development
        process
      </>
    ),
  },
  {
    title: 'Best Practices Approach',
    Svg: require('../../static/img/undraw_book_lover_re_rwjy.svg').default,
    description: (
      <>
        Learn to apply best practices to our project, so we can prevent bugs
        that will appear in the future
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
