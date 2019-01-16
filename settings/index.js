
exports.default = {

    system : {

        lang_api_endpoint : 'https://localise.biz/api/export/all.json?format=multi&pretty&key=tWMy1RRHuiW6DD9T7AyYtFlQzAeztbBK',
        available_locales : ["pl"],
        default_locale : "pl",
        api : "https://api.eventjuicer.com/v1/public/hosts/ekomersy.pl",
        og_image : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_limit,w_1024/v1546943854/ebe_og_home.jpg",
    
    },
    hero : {

        videoSrc : "https://res.cloudinary.com/eventjuicer/video/upload/v1544572510/ebe_hero_final.mp4",
        background : "https://res.cloudinary.com/eventjuicer/image/upload/v1544572575/ebe_hero_final_poster.jpg",
        overlay : "black",
        template : "heroGold",
    },

    bookingmap : {
        height : 510,
        steps : [
            "choose_booth",
            "confirm",
            "pay",
            "access"
        ],
        allowedGroupIds : [259, 257, 256, 262],
        styles : {
            light : 258,
            standard : 256,
            hot : 257,
            superhot : 262,
            ultra : null,
            grand : 259,
            stage : 261
        },
        api : "https://order.ecommerceberlin.com/preorder"
    },

    reviews : {

    },

    ui : {

        menuItems : [
            {
              name: 'general',
              items: [
                {name: 'home', to: '/'},
              ]
            },
            // {
            //   name: 'visitors',
            //   items: [
            //     {name: 'visit', to: '/visit'},
            //     {name: 'schedule', to: '/schedule'},
            //     {name: 'presenters', to: '/presenters'},
            //     {name: 'exhibitors', to: '/exhibitors'},
            //     {name: 'offers', to: '/offers'}
            //   ]
            // },
            {
              name: 'providers',
              items: [
                {name: 'exhibitors', to: '/exhibitors'},
                {name: 'exhibit', to: '/exhibit'},
                {name: 'faq', to: '/faq'}
              ]
            }
        ]
    },
    visitor : {
        ticket_id : 1385,
        email_template : "ecommerceberlin-visitor-registration",
        background : "https://res.cloudinary.com/ecommerceberlin/image/upload/c_fit,h_500,w_500/v1546813408/ebe_lanyard1.jpg",
        api : "https://api.eventjuicer.com/v1/public/hosts/ecommerceberlin.com/register"
    },

    common : {

        organizer_name : 'Infoguru Sp. z o.o. Sp. k.',
        organizer_address : 'POLAND, Poznan, Truskawiecka 13',
        organizer_regno : 'VAT ID ',
        event_name : 'Ekomersy 2018',
        event_location : '',
        event_date : ' ',
        event_hours : ' ',

    },

    rolebuttons : {
        accent : "gold",
        items : [
        {
          url: 'https://static.eventjuicer.com/photos/12961446_1288640741145929_7684227399478032531_o.jpg',
          label: 'common.visitor',
          width: '50%',
          target : "/visit"
        },
        {
          url: 'https://static.eventjuicer.com/photos/12967348_1288628734480463_3860331543127036065_o.jpg',
          label: 'common.exhibitor',
          width: '50%',
          target : "/exhibit"
        },
        ]
    },

    customer_support : {

    },

    sales_support : {

        title: 'event.support.hello',
        description: 'event.support.description',

        people : [
            // {             
            //     name: 'Lucas',
            //     position : 'Business Development Manager',
            //     langs : ["de"],
            //     avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1546386301/ecommerceberlin_support_lz.jpg',
            //     phone: '+49 157 7254 7327',
            //     email: 'lucas@ecommerceberlin.com',
            //     chatlio : true
            // },
            // {
            //     name: 'Peter',
            //     position : 'Project Manager',
            //     langs : ["en"],
            //     avatar: 'https://res.cloudinary.com/eventjuicer/image/upload/v1546386405/ecommerceberlin_support_psz.jpg',
            //     phone: '+48 725 945 403',
            //     email: 'peter@ecommerceberlin.com',
            //     chatlio : true
            // }
          ]
    },

    schedule : {
        times : {
            '10:30': 'presentation',
            '11:10': 'presentation',
            '11:50': 'presentation',
            '12:30': 'presentation',
            '13:00': 'break_20',
            '13:20': 'presentation',
            '14:00': 'presentation',
            '14:40': 'presentation',
            '15:20': 'presentation',
            '15:50': 'presentation'
          },    
          venues : {
            A: { company_id: 1365 },
            B: { company_id: 1366 },
            C: { company_id: 1398 },
            D: { company_id: 1023 }
          },
          venueStyle : "gold",
    },

    footer : {
        iconStyle : "black",
        links : [
            {label : "common.pages.imprint", href : "/legal"},
        ]
    },
};

