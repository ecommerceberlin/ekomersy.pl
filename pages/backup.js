import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetContestantCompaniesArchiveWinners,
  WidgetJurors,
  Wrapper,
  reduxWrapper,
  configure,
  TwoColsLayout as Section,
  MyTypography,
  Markdown,
  WidgetVerticalTimeline,
  WidgetPhotostream,
  WidgetRegForm,
  WidgetFaq,
  WidgetIconGrid
} from 'eventjuicer-site-components';


import {Categories, Timeline, WhyParticipate} from '../src/icons' 
import AllPartners from '../src/AllPartners'
import settings from '../settings';


const PageIndex = (props) => (


  <div>

  <WidgetVideoWithEventInfo />

  <Wrapper first label="awards.hello.title">
  
  <Section 
   
   left={  
      <div style={{marginTop: '5rem'}}>
      <MyTypography template="h4" label="awards.hello.submit" />
      <MyTypography template="subtitle1" label="awards.hello.needs" />
      <Markdown label="awards.hello.details" />
      </div> 
    }
   right={ 
      <Timeline />
   }
 leftCentered={true}
/>


 </Wrapper>


<WidgetRegForm

  setting="contestant.register"
  options={{
  "categories": [
    'sales_generation',
    'communication',
    'internationalization',
    'logistics',
    'platform',
    'payment',
    'analytics',
    'agency',
    'infrastructure',
    'innovation'
  ]
  }} 
  right={
    <>
    <MyTypography template="subtitle1" label="awards.rules-summary.title" />  
    <Markdown label="awards.rules-summary.body" />
    </>
  }
 summary={<div>asd</div>}
 />

<WhyParticipate />

<Categories />

<WidgetFaq setting="contestant.faq" />

<WidgetJurors
  label="awards.jury.title"
  secondaryLabel="awards.jury.description"
  disableTemps={false}
  limit={100}
  filter={null}
  bio={false}
  minToShow={1}
/>
 
<WidgetContestantCompaniesArchiveWinners />

<WidgetPhotostream setting="awardsphotostream" />


<AllPartners />


</div>

)
 
 
export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: ['contestant_companies_all']
  })

  return {
    props: {},
    revalidate: 10
  }
  
})



export default connect()(PageIndex);



