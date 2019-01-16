import {
  connect,
  MyHead as Head,
  // MyLink as Link,
  // FsVideo,
  WidgetVideoWithEventInfo,
  WidgetVideoWithReviews,
  WidgetVisitor,
  // WidgetFeaturedExhibitors,
  WidgetAllExhibitorsColumnList,
  WidgetSalesMap,
  // WidgetPresenters,
  WidgetSchedule,
  // WidgetExhibitors,
  LayoutMain as Layout,
  WidgetRoleButtons,
  Wrapper
} from 'eventjuicer-site-components';

import FeaturedExhibitors from '../src/FeaturedExhibitors';
import FeaturedPresenters from '../src/FeaturedPresenters';

const settings = require('../settings').default;

class PageIndex extends React.Component {
  static async getInitialProps({ query, isServer, store }) {
    return {
      preload: ['exhibitors'],
      settings: settings
      //    load : ["bookingmap", "formdata", "ticketgroups"]
    };
  }

  render() {
    return (
      <Layout>
        <Head />

        {/* <WidgetVideoWithEventInfo />

        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <WidgetRoleButtons first={true} />

        <FeaturedPresenters bio={false} />

        <WidgetSchedule />

        <WidgetSalesMap
          label="exhibitors.map.title2"
          secondaryLabel="exhibitors.map.opensales"
        />

        <FeaturedExhibitors />

        <WidgetVisitor
          label="visitors.register_alt"
          secondaryLabel="event.parties"
        />

       <WidgetAllExhibitorsColumnList />



        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <Wrapper label="partners.media.title">
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1000/v1546766050/media_partners.jpg"
              alt=""
              style={{ width: '100%', maxWidth: 900 }}
            />
          </div>
        </Wrapper>

        <Wrapper label="partners.community.title">
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1000/v1546766051/community_partners.jpg"
              alt=""
              style={{ width: '100%', maxWidth: 900 }}
            />
          </div>
        </Wrapper> */}

        {/* <WidgetVideoWithReviews overlay="black" /> */}

        {/* <FsVideo
          background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
          videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
        /> */}
      </Layout>
    );
  }
}

export default connect(
  null,
  null
)(PageIndex);
