var FirebaseServer = require('firebase-server');

new FirebaseServer(5000, 'localhost.firebaseio.test', {
        "partners": [{
            "logos": [{
                "logoUrl": "../images/logos/gdg-lviv.svg",
                "name": "GDG Lviv",
                "url": "https://plus.google.com/102444623953913144164",
                "width": 170
            }],
            "title": "Template Creator"
        }, {
            "logos": [{
                "logoUrl": "../images/logos/google.svg",
                "name": "Google",
                "url": "https://www.google.com.ua/intl/en/about/"
            }, {
                "logoUrl": "../images/logos/gdg-x.svg",
                "name": "GDG[x]",
                "url": "https://github.com/gdg-x"
            }, {
                "logoUrl": "../images/logos/google.svg",
                "name": "Google",
                "url": "https://www.google.com.ua/intl/en/about/"
            }, {
                "logoUrl": "../images/logos/gdg-x.svg",
                "name": "GDG[x]",
                "url": "https://github.com/gdg-x"
            }, {
                "logoUrl": "../images/logos/google.svg",
                "name": "Google",
                "url": "https://www.google.com.ua/intl/en/about/"
            }, {
                "logoUrl": "../images/logos/gdg-x.svg",
                "name": "GDG[x]",
                "url": "https://github.com/gdg-x"
            }, {
                "logoUrl": "../images/logos/google.svg",
                "name": "Google",
                "url": "https://www.google.com.ua/intl/en/about/"
            }, {
                "logoUrl": "../images/logos/gdg-x.svg",
                "name": "GDG[x]",
                "url": "https://github.com/gdg-x"
            }, {
                "logoUrl": "../images/logos/google.svg",
                "name": "Google",
                "url": "https://www.google.com.ua/intl/en/about/"
            }, {
                "logoUrl": "../images/logos/gdg-x.svg",
                "name": "GDG[x]",
                "url": "https://github.com/gdg-x"
            }, {
                "logoUrl": "../images/logos/google.svg",
                "name": "Google",
                "url": "https://www.google.com.ua/intl/en/about/"
            }],
            "title": "General Partner"
        }],
        "schedule": [{
            "date": "2016-09-09",
            "dateReadable": "September 9",
            "timeslots": [{
                "endTime": "10:00",
                "sessions": [[132]],
                "startTime": "09:00"
            }, {
                "endTime": "10:15",
                "sessions": [[136]],
                "startTime": "10:00"
            }, {
                "endTime": "11:00",
                "sessions": [[139]],
                "startTime": "10:15"
            }, {
                "endTime": "11:40",
                "sessions": [[103], [120], [109]],
                "startTime": "11:00"
            }, {
                "endTime": "12:30",
                "sessions": [[129], [116], [109]],
                "startTime": "11:50"
            }, {
                "endTime": "14:00",
                "sessions": [[133]],
                "startTime": "12:30"
            }, {
                "endTime": "14:40",
                "sessions": [[101], [118], [107]],
                "startTime": "14:00"
            }, {
                "endTime": "15:30",
                "sessions": [[140], [126], [107]],
                "startTime": "14:50"
            }, {
                "endTime": "16:00",
                "sessions": [[134]],
                "startTime": "15:30"
            }, {
                "endTime": "16:40",
                "sessions": [[105], [127], [119]],
                "startTime": "16:00"
            }, {
                "endTime": "17:30",
                "sessions": [[112], [111], [119]],
                "startTime": "16:50"
            }, {
                "endTime": "18:20",
                "sessions": [[106], [125], [119]],
                "startTime": "17:40"
            }, {
                "endTime": "22:30",
                "sessions": [[137]],
                "startTime": "18:30"
            }],
            "tracks": [{
                "title": "Expo hall"
            }, {
                "title": "Conference hall"
            }, {
                "title": "Workshops hall"
            }]
        }, {
            "date": "2016-09-10",
            "dateReadable": "September 10",
            "timeslots": [{
                "endTime": "10:10",
                "sessions": [[135]],
                "startTime": "09:30"
            }, {
                "endTime": "10:50",
                "sessions": [[114], [117], [121]],
                "startTime": "10:10"
            }, {
                "endTime": "11:40",
                "sessions": [[122], [113], [121]],
                "startTime": "11:00"
            }, {
                "endTime": "12:30",
                "sessions": [[104], [124], [121]],
                "startTime": "11:50"
            }, {
                "endTime": "14:00",
                "sessions": [[133]],
                "startTime": "12:30"
            }, {
                "endTime": "14:40",
                "sessions": [[108], [128], [102]],
                "startTime": "14:00"
            }, {
                "endTime": "15:30",
                "sessions": [[110], [123], [102]],
                "startTime": "14:50"
            }, {
                "endTime": "16:00",
                "sessions": [[134]],
                "startTime": "15:30"
            }, {
                "endTime": "16:40",
                "sessions": [[131], [140], [130]],
                "startTime": "16:00"
            }, {
                "endTime": "17:30",
                "sessions": [[115], [140], [130]],
                "startTime": "16:50"
            }],
            "tracks": [{
                "title": "Expo hall"
            }, {
                "title": "Conference hall"
            }, {
                "title": "Workshops hall"
            }]
        }],
        "sessions": {
            "101": {
                "complexity": "Beginner",
                "description": "In this session, we will take a look at Windows and .NET support on Google Cloud Platform. We will build a simple ASP.NET app, deploy to Google Compute Engine and take a look at some of the tools and APIs available to .NET developers on Google Cloud Platform. ",
                "id": 101,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/mete-atamel-windows-and-net-on-google-cloud-platform",
                "speakers": [1],
                "tags": ["Cloud"],
                "title": "Windows and .NET on Google Cloud Platform "
            },
            "102": {
                "complexity": "Beginner",
                "description": "Do you remember the game Simon says from the 80s? I don’t know about you, but I know many that spent hours trying to press those specific sequences of red, green, blue and yellow buttons in the correct order. But why play on your own? We’ve implemented a gRPC server that allows you to play Simon with other players over the internet!\n\nIn this workshop we will dive into the toolset and libraries to build your very own Simon Says client for this server. We will have a message description in Protocol Buffers format and some stub code in several languages ready for you to play with. The goal for this workshop is for you to have a working client that you can use to play (and beat!) other attendees of the workshop.",
                "id": 102,
                "language": "English",
                "speakers": [1],
                "tags": ["Cloud"],
                "title": "Hands-on gRPC experience building your own multiplayer game client"
            },
            "103": {
                "complexity": "Intermediate",
                "description": "Doze mode is just around the corner. \nIntroduced in Marshmallow, as the shy guy that was allowed to step in only when your device went to sleep. ZzzZzzzz\nWith the new N release, Doze mode becomes the rockstar. He rushes into the room with a big shabang by shooting all background services and network requests that forgot to get away. \nHe should no longer be shy. He just shoots and dances on bones of your scheduled alarms, while you wonder why this particular task is no longer running.\nWith the new Doze mode, you require to adapt your app architecture to the new reality.\nOn this talk, we will learn how to survive Doze mode using Job Scheduler, Content Provider and stay in one piece.",
                "id": 103,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/yonatan-levin-knock-knock-whos-there-doze",
                "speakers": [2],
                "tags": ["Android"],
                "title": "Knock knock! Who's there? Doze."
            },
            "104": {
                "complexity": "Beginner",
                "description": "It's no longer just about digitizing our environment. It’s rather about pervasive and ubiquitous computing. Almost all everyday things will turn into connected devices soon. This “Internet of Things” will allow the Web to be physically tangible. But what is the value, and how can one prevent IoT applications which just seem to be only more expensive and complicated than conventional solutions. Sascha will discuss the purpose and guide you through this complex topic showing inspiring solutions, tips from practice, and code samples in a variety of technologies from simple Bluetooth Eddystone Beacons to more sophisticated IoT platforms like Eclipse SmartHome.",
                "id": 104,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/sascha-wolter-the-physical-web-context-is-king",
                "speakers": [3],
                "tags": ["Web"],
                "title": "The Physical Web: Context is King!",
                "videoId": "fLfQNp75kbc"
            },
            "105": {
                "complexity": "Intermediate",
                "description": "TBD",
                "id": 105,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/rustem-arzymbetov-intro-to-tensorflow",
                "speakers": [4],
                "tags": ["Cloud"],
                "title": "Intro to TensorFlow",
                "videoId": "e3cuSz1hEPs"
            },
            "106": {
                "complexity": "Beginner",
                "description": "Fuelio. Success story (I'll write more info later)",
                "id": 106,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/adrian-kajda-fuelio-success-story",
                "speakers": [5],
                "tags": ["Android"],
                "title": "Fuelio. Success story",
                "videoId": "qK7ysoohsaM"
            },
            "107": {
                "complexity": "Beginner",
                "description": "There's been much discussion about Progressive Web Apps. They're still a relatively new model. In this talk, I'll summarise few options and techniques for getting started with your own Progressive Web App",
                "id": 107,
                "language": "English",
                "speakers": [6],
                "tags": ["Web"],
                "title": "Introduction to Progressive Web Apps in Angular 2"
            },
            "108": {
                "complexity": "Intermediate",
                "description": "Angular 2 introduces a new Data Architecture based on Reactive Programming using RxJS 5. We are really excited to see the new approach using Observable sequences aka Observables. We will cover a basic introduction of Angular 2 followed by RxJS 5 and the new HTTP API covering some basic use cases.",
                "id": 108,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/gerard-sans-new-data-architecture-in-angular-2",
                "speakers": [6],
                "tags": ["Web"],
                "title": "New Data Architecture in Angular 2",
                "videoId": "pgmLkwD-mqM"
            },
            "109": {
                "complexity": "Beginner",
                "description": "TBD",
                "id": 109,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/jozef-vodicka-how-much-money-firebase-can-save-you",
                "speakers": [7],
                "tags": ["Cloud"],
                "title": "How much money Firebase can save you"
            },
            "110": {
                "complexity": "Intermediate",
                "description": "There's a lot of hype around MVP pattern in the Android world. Now it's time for concretes. During his presentation Mateusz will tell you how IG divided responsibilities between pattern's different components, how they tied Presenters' and Views' lifecycles and what they did to make it all testable. If you'd love to make your Fragments' and Activities' code simpler and increase your coverage, but you're confused how to glue it all together - don't miss Mateusz's talk.",
                "id": 110,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/mateusz-herych-the-ultimate-guide-to-mvp-pattern-on-android",
                "speakers": [8],
                "tags": ["Android"],
                "title": "The ultimate guide to MVP pattern on Android"
            },
            "111": {
                "complexity": "Intermediate",
                "description": "It's beauty, it's handy, it's fast, it's easy - all about Dagger 2",
                "id": 111,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/kseniia-shumelchyk-building-modular-architecture-apps-with-dagger-2",
                "speakers": [9],
                "tags": ["Android"],
                "title": "Building modular architecture apps with Dagger 2"
            },
            "112": {
                "complexity": "Intermediate",
                "description": "Last year brought a lot of new capabilities to browsers, fundamentally changing the way we will build web apps in 2016. 60FPS, push messages, offline support and background sync became a reality marking the birth of Progressive Web Apps.",
                "id": 112,
                "language": "English",
                "speakers": [10],
                "tags": ["Web"],
                "title": "Building web apps in 2016"
            },
            "113": {
                "complexity": "Intermediate",
                "description": "Microservices is coming with a certain workload and constraints. Let's try to see how Google Cloud Platform and App Engine can help the overall microservices implementation.",
                "id": 113,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/jean-baptiste-clion-microservices-in-google-app-engine",
                "speakers": [11],
                "tags": ["Cloud"],
                "title": "Microservices in Google App Engine"
            },
            "114": {
                "complexity": "Intermediate",
                "description": "Storing account information is a common challenge many app developers face, and is often tackled in tailored solutions. Isn't there some strategy to store account credentials in a centralized place?\n\nWhat about considerations for multiple accounts? Security concerns? And when should or could I synchronize data?\n\nAndroid offers a powerful—and underrated—account manager. Let's explore the possibilities together and lay out an architecture for engineering an Android app based on accounts.",
                "id": 114,
                "language": "English",
                "speakers": [12],
                "tags": ["Android"],
                "title": "I’ve been doing some syncing…"
            },
            "115": {
                "complexity": "Beginner",
                "description": "Upcoming Android N release will bring some interesting changes to both Android run-time and toolchain. Let's talk about JIT, AOT, hybrid JIT/AOT, Jack, Jill and other acronyms and codenames ;-) In this presentation we'll see how many awesome tricks are needed to make our apps start fast and run smoothly on modern Android devices. Hopefully we'll also answer the most important question -- what's next for Android after Java.",
                "id": 115,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/aleksander-piotrowski-android-tool-chain-and-run-time-improvements-in-n",
                "speakers": [13],
                "tags": ["Android"],
                "title": "Android tool-chain and run-time improvements in N",
                "videoId": "WqULb6bdwwg"
            },
            "116": {
                "complexity": "Beginner",
                "description": "One of my favourite things about the web are ASCII smileys. They're sweet, fun and simply make the web a better place. How could anyone not like them ¯(ツ)/¯?\n\nThis talk is an overdose of smileys, because they're the perfect excuse to get started with Polymer. Polymer is a library built on top of the Web Components standards that helps developers create reusable components for the modern web. And since I know that everybody has been wondering how one could take over the world by creating a suite of Polymer animated emoticon components, we're going to do exactly that.",
                "id": 116,
                "language": "English",
                "presentation": "http://carmenpopoviciu.github.io/on-polymer-and-smileys/",
                "speakers": [14],
                "tags": ["Web"],
                "title": "On Polymer and smileys... or Polysmileys"
            },
            "117": {
                "complexity": "Beginner",
                "description": "Data is becoming one of the main decision-makers in an organisation. The more data we have the more challenges we face every day. Every decision we make will have long-term implications. In the talk we will go through different approaches to the data pipelines: from a simple in-house built, with comparison to open source solutions based on Apache stack(Apache Kafka, Apache Samza, Spark) and finally hosted auto-scaling solutions based Amazon(S3, Kinesis, Lambda, EMR) or Google(Pub/Sub, Dataflow, BigQuery). The talk covers the main aspects of data collecting processes altogether with further implications for data processing, highlighting appropriate solutions and architectures for the particular use-cases. ",
                "id": 117,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/sergii-khomenko-building-data-pipelines-from-simple-to-more-advanced-hands-on-experience",
                "speakers": [15],
                "tags": ["Cloud"],
                "title": "Building data pipelines: from simple to more advanced - hands-on experience"
            },
            "118": {
                "complexity": "Intermediate",
                "description": "TBD",
                "id": 118,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/dmytro-danylyk-kotlin-plus-android",
                "speakers": [16],
                "tags": ["Android"],
                "title": "Kotlin + Android"
            },
            "119": {
                "complexity": "Beginner",
                "description": "Writing Android apps is usually fun because you are actually building something. But what about writing tests? Boring stuff. Errr, UI tests? I am a developer!\n\nIn this talk we will take a look at options for UI tests on Android, why you should write them and how they help you with your app development workflow. No more untested apps!",
                "id": 119,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/jana-moudra-hands-on-with-ui-testing-for-android-developers",
                "speakers": [17],
                "tags": ["Android"],
                "title": "Hands-on with UI testing for Android developers"
            },
            "120": {
                "complexity": "Beginner",
                "description": "\"Remember back when AJAX completely changed what was possible in the desktop web? Progressive web apps are that same fundamental shift for the mobile web.\" said Rahul Row-Chowdhury (Google’s product lead for chrome and the web platform) on stage at Google I/O 2016. - Progressive web apps use service workers, app shell, push notifications, RAIL and other capabilities to deliver an app-like user experience.",
                "id": 120,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/jakub-skvara-progressive-web-apps-prepare-your-web-for-2017",
                "speakers": [18],
                "tags": ["Web"],
                "title": "Progressive web apps - prepare your web for 2017"
            },
            "121": {
                "complexity": "Intermediate",
                "description": "Using service workers and other modern progressive web apps capabilities we can update our web applications to be offline-fires. In this session we'll show how to easily convert your applications be usable without the internet connection.",
                "id": 121,
                "language": "English",
                "speakers": [18],
                "tags": ["Web"],
                "title": "Offline-first progressive web apps"
            },
            "122": {
                "complexity": "Intermediate",
                "description": "I would like to talk about architecture of our Settle Up app. It's all based on new Firebase announced on I/O with the help of modern frameworks like Rx, Kotlin and MVP.",
                "id": 122,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/david-vavra-firebase-plus-kotlin-plus-rxjava-plus-mvp-practical-tips",
                "speakers": [19],
                "tags": ["Android"],
                "title": "Firebase + Kotlin + RxJava + MVP: Practical Tips",
                "videoId": "b9NgjqM6dvk"
            },
            "123": {
                "complexity": "Beginner",
                "description": "TBD",
                "id": 123,
                "language": "English",
                "speakers": [20],
                "tags": ["Web"],
                "title": "TBD"
            },
            "124": {
                "complexity": "Intermediate",
                "description": "You are tired of building every patch for your QA ? Still deploying to google play manually ? You still think that build server is something that you don't need ? Than I will try to show you how you can make life of your team easier with CI.",
                "id": 124,
                "language": "English",
                "speakers": [21],
                "tags": ["Android"],
                "title": "Continues Integration in Android",
                "videoId": "MmGDQkgknfY"
            },
            "125": {
                "complexity": "Intermediate",
                "description": "TBD",
                "id": 125,
                "language": "English",
                "speakers": [22],
                "tags": ["Cloud"],
                "title": "Kubernetes in a real world"
            },
            "126": {
                "complexity": "Intermediate",
                "description": "Imagine the world where you can get any application, look into its code (even if it is not open sourced) and modify any conditional operator in any way you like. Welcome, you are in the Android applications world! Let's discover how anyone can decompile your app and, for example, hack your 'if' operators. For the beginning, we will play a role of a script kiddie and try to hack some simple app. After this, we will pretend security-conscious Android developers and try to think how we can protect ourselves.",
                "id": 126,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/michael-pustovit-android-hacking-for-dummies-if-operator-demolytion",
                "speakers": [23],
                "tags": ["Android"],
                "title": "Android hacking for dummies: ‘if’ operator demolytion",
                "videoId": "We04nyIIsA0"
            },
            "127": {
                "complexity": "Intermediate",
                "description": "If you have any experience with Android Media Player, you definitely know how hard it is to prepare it and do not lose your mind. ExoPlayer - is an alternative, which can help you deal with media with much less pain. So lets discuss if it really a \"silver bullet\" or yet another State Machine hell.",
                "id": 127,
                "language": "Ukrainian",
                "presentation": "https://speakerdeck.com/gdglviv/anton-minashkin-exoplayer-media-playback-without-pain-almost-dot-dot-dot",
                "speakers": [24],
                "tags": ["Android"],
                "title": "ExoPlayer: Media playback without pain (almost...)"
            },
            "128": {
                "complexity": "Beginner",
                "description": "Google announced Android Wear 2.0 become available this Fall. This major update brings some revolutionary changes in platform, that should change our approaches in developing wearable apps, including freedom of BLE tethering, system support for complications and activity recognition by GoogleFit, developed mainly for Android Wear 2.0. We will talk deeper about these new features and look at some ways to implement them in the code.",
                "id": 128,
                "language": "English",
                "speakers": [25],
                "tags": ["Android"],
                "title": "Android Wear 2.0: Great Changes Upcoming this Fall"
            },
            "129": {
                "complexity": "Intermediate",
                "description": "Accessibility is a very important step to make sure that your app reaches everyone in an easy and fun way to use. \nGood accessibility support means much more than just making sure the app supports screen readers, different fonts sizes and good contrast ratios. It is a learning process, and one in which we ourselves still have much to learn and explore. ",
                "id": 129,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/resul-caner-yildirim-accessibility-on-android",
                "speakers": [26],
                "tags": ["Android"],
                "title": "Accessibility on Android"
            },
            "130": {
                "complexity": "Intermediate",
                "description": "Wearable devices are one of the most popular things nowadays. Specially, after the Apple Watch, we finally get the whole picture of the entire list of products and their features. Now, we can talk about how we can design a user experience for this type of devices.\nEvery platform has it's own design principles and approaches. But, in the core, they all need to follow same core rules. So, how we combine this core requirements with Google's Material Design and use them on an Android Wear device? Let's learn!",
                "id": 130,
                "language": "English",
                "speakers": [26],
                "tags": ["Android"],
                "title": "Designing an Android Wear Application"
            },
            "131": {
                "complexity": "Intermediate",
                "description": "In this talk, I will reveal you all the deepest secrets of using MVVM architecture in Android. \nWe will discuss on how to organise your application, views, models, how to retrieve data from the model requested from the view via data binding. \nLightweight Activities and Fragments, is it even possible? \n\nYes, and I will show you how to achieve this with MVVM and DataBinding!",
                "id": 131,
                "language": "English",
                "presentation": "https://speakerdeck.com/gdglviv/roman-herasymenko-deal-with-it-android-databinding-explained",
                "speakers": [27],
                "tags": ["Android"],
                "title": "Deal with it: Android DataBinding explained"
            },
            "132": {
                "description": "Get your badge, coffee, enjoy talking with tech edicts around",
                "id": 132,
                "image": "/images/backgrounds/registration.jpg",
                "title": "Registration & morning Coffee"
            },
            "133": {
                "description": "Foooooooood!",
                "id": 133,
                "image": "/images/backgrounds/lunch.jpg",
                "title": "Lunch"
            },
            "134": {
                "description": "Coffeeeeeee!",
                "id": 134,
                "image": "/images/backgrounds/coffee-break.jpg",
                "title": "Coffee break"
            },
            "135": {
                "description": "Coffeeeeeee!",
                "id": 135,
                "image": "/images/backgrounds/morning.jpg",
                "title": "Morning coffee"
            },
            "136": {
                "description": "Official start of the conference. Greetings from the organizers, sponsors and partners.",
                "id": 136,
                "image": "/images/backgrounds/opening.jpg",
                "language": "English",
                "title": "GDG DevFest Ukraine 2016 Opening"
            },
            "137": {
                "description": "Afterparty is a great time to have some fun and meet new people",
                "id": 137,
                "image": "/images/backgrounds/party.jpg",
                "title": "Afterparty & Networking"
            },
            "138": {
                "description": "Make sure you won't miss closing ceremony, all gifts from out sponsors and partners will find their owners during this session.",
                "id": 138,
                "image": "/images/backgrounds/closing.jpg",
                "title": "Conference closing and contest winners announcements"
            },
            "139": {
                "description": "",
                "id": 139,
                "language": "English",
                "title": "Keynote"
            },
            "140": {
                "description": "TBD",
                "id": 140,
                "language": "English",
                "title": "TBD"
            }
        },
        "speakers": [
            null,
            {
                "bio": "الوانی خیلی خفنه اون از بچگی کد میزنه و کلی سرور خفن داره. همه الوانی رو دوست دارن",
                "company": "آزمابشگاه اینرنت اشیا صبایی و شرکا",
                "companyLogo": "/images/logos/gdg- .svg",
                "country": "ایران، تهران، پالادیوم",
                "featured": true,
                "id": 101,
                "name": "پرهام الوانی",
                "photoUrl": "/images/people/mete_atamel.jpg",
                "shortBio": "Mete is a Developer Advocate at Google, currently focused on helping developers with Google Cloud...",
                "socials": [{
                    "icon": "linkedin",
                    "link": "https://www.linkedin.com/in/meteatamel/",
                    "name": "LinkedIn"
                }, {
                    "icon": "twitter",
                    "link": "https://twitter.com/meteatamel/",
                    "name": "Twitter"
                }, {
                    "icon": "github",
                    "link": "https://github.com/meteatamel/",
                    "name": "GitHub"
                }],
                "tags": ["Cloud", "Compute Engine", "gRPC"],
                "title": "Developer Advocate"
            }],
        "url": "http://2event.com/events/630032"
        ,
        "videos": [{
            "speakers": "Jakub Škvára",
            "thumbnail": "/images/sessions/116.JPG",
            "title": "Polymer vs other libraries",
            "youtubeId": "-UEURYYVCmg"
        }, {
            "speakers": "Mandy Waite",
            "thumbnail": "/images/sessions/109.JPG",
            "title": "Scalable Microservices with gRPC, Kubernetes, and Containers",
            "youtubeId": "BZ-uR8LQRkA"
        }, {
            "speakers": "Mandy Waite",
            "thumbnail": "/images/sessions/110.JPG",
            "title": "Google Cloud Platform End to End: How we built 'Cloud Spin'",
            "youtubeId": "n-H6jYnL32U"
        }, {
            "speakers": "Mateusz Herych",
            "thumbnail": "/images/sessions/102.JPG",
            "title": "How can Android Backup break your app",
            "youtubeId": "89wvLLc25AY"
        }, {
            "speakers": "Alex Pazhyn",
            "thumbnail": "/images/sessions/113.JPG",
            "title": "Material Design. Custom Branding",
            "youtubeId": "3u8864j4g24"
        }, {
            "speakers": "Viktor Zozuliak",
            "thumbnail": "/images/sessions/122.JPG",
            "title": "Service Worker - Native Apps Experience For The Web",
            "youtubeId": "szLFi1aO398"
        }, {
            "speakers": "Said Tahsin Dane",
            "thumbnail": "/images/sessions/101.JPG",
            "title": "Material Design on Custom Views",
            "youtubeId": "nFZxAIi8n7I"
        }, {
            "speakers": "Ihor Dvoretskyi",
            "thumbnail": "/images/sessions/135.JPG",
            "title": "The Cloud Convergence: OpenStack and Kubernetes",
            "youtubeId": "3zbxUcyiP8Y"
        }, {
            "speakers": "Juarez Filho",
            "thumbnail": "/images/sessions/120.JPG",
            "title": "Firebase Adventures - Real time platform for your apps",
            "youtubeId": "uz4vA21lqoE"
        }, {
            "speakers": "Anton Minashkin",
            "thumbnail": "/images/sessions/134.JPG",
            "title": "Data Binding. Next big thing?",
            "youtubeId": "GYwvQ0YAPo4"
        }, {
            "speakers": "Hallade Xavier",
            "thumbnail": "/images/sessions/112.JPG",
            "title": "Mastering the NDK with Android Studio 1.3+ and the gradle-experimental plugin",
            "youtubeId": "GbTe0BTuNaU"
        }, {
            "speakers": "Jana Moudrá",
            "thumbnail": "/images/sessions/115.JPG",
            "title": "Let's play Dart!",
            "youtubeId": "DoUATBQcihI"
        }, {
            "speakers": "Valentyn Shybanov",
            "thumbnail": "/images/sessions/106.JPG",
            "title": "Using GoLang for building micro-service architecture in Google Cloud Platform",
            "youtubeId": "euROYVOJYuI"
        }, {
            "speakers": "Semih Yagcioglu",
            "thumbnail": "/images/sessions/124.JPG",
            "title": "Build Your Thing In a Weekend with AngularJS 2.0",
            "youtubeId": "gHd-0itPpGg"
        }, {
            "speakers": "Dawid Ostrowski",
            "thumbnail": "/images/sessions/125.JPG",
            "title": "[Keynote] Lean Startup with Google",
            "youtubeId": "o04aL3IzmcQ"
        }, {
            "speakers": "Constantine Mars",
            "thumbnail": "/images/sessions/133.JPG",
            "title": "RxJava for Android",
            "youtubeId": "3LQnqJhGQmI"
        }, {
            "speakers": "Roman Mazur",
            "thumbnail": "/images/sessions/104.JPG",
            "title": "Power of Android Shell",
            "youtubeId": "a4InM2VhAvQ"
        }, {
            "speakers": "Dmytro Danylyk",
            "thumbnail": "/images/sessions/103.JPG",
            "title": "Planning Android Screens",
            "youtubeId": "gQbjjOE2yF4"
        }, {
            "speakers": "Dima Maleev",
            "thumbnail": "/images/sessions/108.JPG",
            "title": "V8 under the hood",
            "youtubeId": "Oazl4fx-X68"
        }, {
            "speakers": "Kseniia Shumelchyk",
            "thumbnail": "/images/sessions/117.JPG",
            "title": "Bluetooth Low Energy and iBeacon development for Android",
            "youtubeId": "tEUmmZDwHDg"
        }, {
            "speakers": "Maciej Górski",
            "thumbnail": "/images/sessions/114.JPG",
            "title": "Continuous Delivery with Ease",
            "youtubeId": "b-4upgkYdZo"
        }, {
            "speakers": "Michał Tajchert",
            "thumbnail": "/images/sessions/105.JPG",
            "title": "Hijacking notification actions - lets respond to your messages!",
            "youtubeId": "2rT4Us7cFDg"
        }, {
            "speakers": "Roman Herasymenko",
            "thumbnail": "/images/sessions/111.JPG",
            "title": "New security model in Marshmallow",
            "youtubeId": "lFpb-LaYDvs"
        }, {
            "speakers": "Valentyn Shybanov",
            "thumbnail": "/images/sessions/107.JPG",
            "title": "Angular2: Reasoning behind technical decisions",
            "youtubeId": "V7GCjnfsOCE"
        }, {
            "speakers": "",
            "thumbnail": "/images/sessions/140.JPG",
            "title": "Fireside Chat",
            "youtubeId": "8kXNWOhEAhE"
        }, {
            "speakers": "Alexey Rybakov",
            "thumbnail": "/images/sessions/119.JPG",
            "title": "Android TV Development",
            "youtubeId": "SoXb9cXnJhc"
        }, {
            "speakers": "Buşra Deniz",
            "thumbnail": "/images/sessions/123.JPG",
            "title": "Google WebRTC on Mobile",
            "youtubeId": "YWaOdwCenZM"
        }]
    }
);
