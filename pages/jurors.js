import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  WidgetJurors,
  reduxWrapper,
  configure,
  MyTypography,
  Markdown,
  WidgetPhotostream,
  WidgetRegForm
} from 'eventjuicer-site-components';

import AllPartners from '../src/AllPartners'

import settings from '../settings';

const PageJury = (props) => (

<div>
 
<WidgetJurors
  first
  label="awards.jury.title"
  secondaryLabel="awards.jury.description"
  disableTemps={false}
  limit={100}
  filter={null}
  bio={false}
  minToShow={1}
/>


<WidgetRegForm
  
  setting="awards.become_a_juror"
  right={
    <div style={{marginTop: 30, marginLeft: 10}}>
    <MyTypography template="subtitle1" label="juror.register.title" /> 
    <Markdown label="juror.register.description" />
    </div>
  }
  summary={<div>asd</div>}
/>


 
<WidgetPhotostream setting="awardsphotostream" />

 
<WidgetContestantCompaniesArchiveWinners />
<AllPartners />
<WidgetVideoWithEventInfo />

</div>

  
)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: ['jurors']
  })

  return {
    props: {},
    revalidate: 10
  }
  
})



export default connect()(PageJury);



