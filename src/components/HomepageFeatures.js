import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_programmer_re_owql.svg').default,
    description: (
      <>
        Pandora was designed from the ground up to be easily learned and used in
        your project
      </>
    ),
  },
  {
    title: 'Accelerate Development',
    Svg: require('../../static/img/undraw_maker_launch_crhe.svg').default,
    description: (
      <>
        Pandora use Qore to accelerate the development process especially on the
        backend, so you can focus on the flow and UI/UX of the project.
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
