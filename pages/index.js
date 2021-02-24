import {
  connect,
  Wrapper,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

import settings from '../settings';

const PageIndex = (props) => (

  <Wrapper>
    <div style={{height: 2000}}>Maintenance</div>
  </Wrapper>

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



