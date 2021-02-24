import {
  connect,
  Wrapper,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import settings from '../settings';

const PageIndex = (props) => (

  <div>Coming soon</div>

)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: []
  })

  return {
    props: {},
    revalidate: 10
  }
  
})



export default connect()(PageIndex);



