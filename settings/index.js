const settings  = {

    AVAILABLE_LOCALES : "pl",
    DEFAULT_LOCALE : "pl",
    PROJECT : "ekomersy.pl",
    NAME : "ekomersy",
    GTM : "GTM-TFSQ6GK",
    PUBLIC_URL: 'https://ekomersy.pl',
    API_PUBLIC: 'https://api.eventjuicer.com/v1/public/hosts/ekomersy.pl',
    API_SERVICES: 'https://api.eventjuicer.com/v1/services',

    system : {

        lang_api_endpoint : 'https://localise.biz/api/export/all.json?format=multi&pretty&key=SHiwxgKaPMx_KThQH2zcdzwiKEMzuNBm',
        available_locales : ["pl"],
        default_locale : "pl",
        api : "https://api.eventjuicer.com/v1/public/hosts/ekomersy.pl",
        service_api : "https://api.eventjuicer.com/v1/services",
        post_api : "https://api.eventjuicer.com/v1/public/hosts/ekomersy.pl/register",
        og_image : "",
    
    },

    premium : {

        ticketgroups : []

    },

    hero : {
        heading : "awards.hero.title",
        subheading : "awards.hero.description",
        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/v1575327611/ega2020_2.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/v1575328032/ega2020_2_still.png",
        overlay : "black",
        template : "heroGold",
    },

    bookingmap : {
        api : "https://pages.ekomersy.pl/preorder"
    },

    reviews : {

    },

    ui : {

        menuItems : [
            {
              name: 'general',
              items: [
                {name: 'home', to: '/'},
                // {name: 'vote', to: '/vote'},
              ]
            },
            {
                name: 'awards',
                items: [
                  {name: 'jurors', to: '/jurors'},
                ]
              },

            {
              name: 'partners',
              items: [
                {name: 'premium', to: '/premium'},
              ]
            },
            // {
            //   name: 'exhibitors',
            //   items: [
            //     {name: 'exhibitors', to: '/exhibitors'},
            //     {name: 'exhibit', to: '/exhibit'},
            //     {name: 'faq', to: '/faq'}
            //   ]
            // }
        ]
    },


    common : {

        organizer_name : 'Infoguru Sp. z o.o. Sp.k.',
        organizer_address : 'POLAND, Poznan, Truskawiecka 13',
        organizer_regno : 'VAT ID PL7811967834',
        event_name : 'Ekomersy',
        event_location : 'internet',
        event_date : '17th February 2021',
        event_hours : '10:00-17:00',

    },

    rolebuttons : {
    },

    customer_support : {
    },

    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            {             
                name: 'Karolina Michalak',
                position : 'Event Manager',
                langs : ["pl","en"],
                avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1598009850/targiehandlu_people_km.jpg',
                phone: '+48 721 945 134',
                email: 'ekomersy@ekomersy.pl',
                chatlio : true
            }
        ]
    },

    schedule : {
    },

    footer : {
        iconStyle : "black",
        links : [
            {label : "common.pages.imprint", href : "/legal/imprint"},
            {label : "awards.contest.agreement.title", href : "/legal/contest"},
            {label : "awards.contest.legal-data.title", href : "/legal/personal-data"},
            {label : "common.pages.cookies", href : "/legal/cookies"},
        ]
    },


    awardstimeline: {

        baseLabel: "awards.timeline",
        iconSize: "40",

        items : [
            {date: "2020-11-02", name: "submissions", icon:  "NoteAdd", dotColor: 'black', active: true },
            {date: "2020-12-01", name: "public-voting", icon:  "Public" },
            {date: "2020-12-21", name: "qualification", icon:  "Assessment" },
            {date: "2021-01-11", name: "jury-voting", icon:  "HowToVote" },
            {date: "2021-02-17", name: "results", icon:  "Mic", active: false }
            
        ]

    },

    awards : {

        about : {
            wrapperProps: {
                label: "awards.about.stats"
            },
            items : [
                {
                  image:
                    'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_numberOfContestVoters.svg',
                },
                {
                  image:
                    'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_awardsCeremonyGuests.svg',
                },
                {
                  image:
                    'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_numberOfContestParticipants.svg',
                },
                {
                  image:
                    'https://res.cloudinary.com/eventjuicer/image/upload/v1604003805/ega/ega_2021_promotion.svg',
                },
               
            ]
        },

        become_a_juror: {

            label : "juror.form.title",
            baseLabel: "juror",
            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
              {name: "position", required: true},
              {name: "phone", required: true},
              {name: "company_website", required: true},
            ],
            start : ['fname', 'lname', 'cname2'],
            ticket_id : 1886,
            cc: "ekomersy@ekomersy.pl",
            email_template : "ega-juror-submission-confirmation",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",

        },

        // attend_a_party: {

        //     label : "party.form.title",
        //     baseLabel: "juror",
        //     legend: "party.form.intro",
        //     fields : [
        //       {name: "email", required: true},
        //       {name: "fname", required: true},
        //       {name: "lname", required: true},
        //       {name: "cname2", required: true},
        //       {name: "position", required: true},
        //       {name: "phone", required: true},
        //       {name: "company_website", required: true},
        //     ],
        //     start : ['fname', 'lname', 'cname2'],
        //     ticket_id : 1887,
        //     cc: "awards+party@ecommerceberlin.com",
        //     email_template : "ega-party-submission-confirmation",
        //     background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",

        // },
    },

    contestant: {


        faq : {

            wrapperProps: {
                label: "awards.faq.title",
                secondaryLabel: null,
            },
          
            baseLabel: "awards.faq",
            items: [
             {
               label: 'categories'
             },
             {
               label: 'timeline',
             },
             { label: 'fee' },
             { label: 'limits' },
             { label: 'status' },
             { label: 'abuse' },
             { label: 'sponsorship'},
        ]

        },
        register: {

            label : "awards.register.title",
            baseLabel: "awards",
            fields : [
              {name: "email", required: true},
              {name: "fname", required: true},
              {name: "lname", required: true},
              {name: "cname2", required: true},
            //   {name: "position", required: true},
            //   {name: "nip", required: false},
              {name: "project_name", required: true},
            //   {name: "awards_category", required: true, options: "categories"},
              {name: "phone", required: true},
              {name: "company_website", required: true},
              {name: "accept", required: true, type: "confirm"}
            ],

            start : ['cname2', 'project_name'],
            ticket_id : 1861,
            cc: "ekomersy@ekomersy.pl",
            email_template : "ekomersy-submission-confirmation",
            background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",

        },

        benefits: {

            label: "awards.benefits.title",
            secondaryLabel: "awards.benefits.description",
            baseLabel: "awards.benefits",
            typography: "subtitle",
            dense: true,

            items: [

                {
                    icon : "TrendingUp",
                    label :  'celebrate',
                },

                {
                    icon : "People",
                    label :  'networking',
                },

                {
                    icon : "VerifiedUser",
                    label :  'confidence',
                }
            ]
        },

        categories : {

            label: "awards.categories.title",
            secondaryLabel: "awards.categories.description",
            baseLabel: "awards.categories",
            typography: "subtitle",
            dense: true,
            
            items: [

                {
                    icon : "ShoppingCart",
                    label :  'sales_generation',
                },
            
                {
                    icon : "Forum",
                    label : 'communication'
                },
            
                {
                    icon : "Public",
                    label : 'internationalization'
                },

                {
                    icon : "LocalShipping",
                    label : 'logistics'
                },

                {
                    icon : "Storefront",
                    label :  'platform',
                },
            
                {
                    icon : "MonetizationOn",
                    label : 'payment'
                },
            
                {
                    icon : "Assessment",
                    label : 'analytics'
                },

                {
                    icon : "People",
                    label : 'agency'
                },

                {
                    icon : "Computer",
                    label : 'infrastructure'
                },

                {
                    icon : "NewReleases",
                    label : 'innovation'
                }

            ]
        },



    },

    awardsphotostream : {

        wrapperProps: {
            label : "awards.gallery.title"
        },

        cols: 12,

        items : [

            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012207/ega/beer.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012209/ega/audience1.jpg", cols: 3},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012208/ega/photowall2.jpg", cols: 6},


            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012184/ega/award1.jpg", cols: 6},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012217/ega/category_winner2.jpg", cols: 6},


            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012216/ega/MC_stage.jpg", cols: 6},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012215/ega/party_screens2.jpg", cols: 6},

  
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012221/ega/patio3.jpg", cols: 4},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012219/ega/venue3.jpg", cols: 4},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012183/ega/beer2.jpg", cols: 4},


            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012196/ega/bimmer_mainscreen.jpg", cols: 6},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012193/ega/venue2.jpg", cols: 6},

            
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012179/ega/MC_audience.jpg", cols: 6},
            {src: "https://res.cloudinary.com/eventjuicer/image/upload/v1604012191/ega/photowall.jpg", cols: 6},

           
        ]
    },



};


export default settings
 