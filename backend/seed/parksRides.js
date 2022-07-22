const db = require('../db')
const { Park, Ride } = require('../models')

db.on('error', console.error.bind(console, 'mongoDB connection error:'))

const main = async () => {
    const rides = [
        {
            name: 'Haunted Mansion',
            park: 'Magic Kingdom',
            section: 'Liberty Square',
            rank: 1, 
            heightRequirement: 'No height requirement.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Seven Dwarfs Mine Train',
            park: 'Magic Kingdom',
            section: 'Fantasyland',
            rank: 2, 
            heightRequirement: 'Height requirement: 38"/97 cm.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Tomorrowland Transit Authority People Mover',
            park: 'Magic Kingdom',
            section: 'Tomorrowland',
            rank: 3, 
            heightRequirement: 'No height requirement.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: false, 
            image: ''
        },
        {
            name: 'Spaceship Earth',
            park: 'EPCOT',
            section: 'World Celebration',
            rank: 1, 
            heightRequirement: 'No height requirement.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Living with the Land',
            park: 'EPCOT',
            section: 'World Nature',
            rank: 2, 
            heightRequirement: 'No height requirement.',
            waterRide: false, 
            wheelchairOnRide: true, 
            wheelchairTransfer: false, 
            image: ''
        },
        {
            name: 'Frozen Ever After',
            park: 'EPCOT',
            section: 'World Showcase',
            rank: 3, 
            heightRequirement: 'No height requirement.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Tower of Terror',
            park: 'Hollywood Studios',
            section: 'Sunset Boulevard',
            rank: 1, 
            heightRequirement: 'Height required: 40"/122 cm.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Star Wars: Rise of the Resistance',
            park: 'Hollywood Studios',
            section: `Star Wars: Galaxy's Edge`,
            rank: 2, 
            heightRequirement: 'Height required: 40"/102 cm.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: `Mickey & Minnie's Runaway Railway`,
            park: 'Hollywood Studios',
            section: 'Holywood Boulevard',
            rank: 3, 
            heightRequirement: 'No height requirement.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Avatar Flight of Passage',
            park: 'Animal Kingdom',
            section: 'Pandora: The World of Avatar',
            rank: 1, 
            heightRequirement: 'Height required: 44"/112 cm.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Expedition Everest',
            park: 'Animal Kingdom',
            section: 'Asia',
            rank: 2, 
            heightRequirement: 'Height required: 44"/112 cm.',
            waterRide: false, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Kilamanjaro Safari',
            park: 'Animal Kingdom',
            section: 'Africa',
            rank: 3, 
            heightRequirement: 'No height requirement.',
            waterRide: false, 
            wheelchairOnRide: true, 
            wheelchairTransfer: false, 
            image: ''
        },
        {
            name: 'Crusn N Gusher',
            park: 'Typhoon Lagoon',
            section: 'N/A',
            rank: 1, 
            heightRequirement: 'Height required: 48"/122 cm.',
            waterRide: true, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Keelhaul Falls',
            park: 'Typhoon Lagoon',
            section: 'N/A',
            rank: 2, 
            heightRequirement: 'No height requirement.',
            waterRide: true, 
            wheelchairOnRide: false, 
            wheelchairTransfer: false, 
            image: ''
        },
        {
            name: 'Storm Slides',
            park: 'Typhoon Lagoon',
            section: '',
            rank: 3, 
            heightRequirement: 'No height requirement.',
            waterRide: true, 
            wheelchairOnRide: false, 
            wheelchairTransfer: false, 
            image: ''
        },
        {
            name: 'Summit Plummet',
            park: 'Blizzard Beach',
            section: 'Green Slopes',
            rank: 1, 
            heightRequirement: 'Height required: 48"/122 cm.',
            waterRide: true, 
            wheelchairOnRide: false, 
            wheelchairTransfer: false, 
            image: ''
        },
        {
            name: 'Slush Gusher',
            park: 'Blizzard Beach',
            section: 'Green Slopes',
            rank: 2, 
            heightRequirement: 'Height required: 48"/122 cm.',
            waterRide: true, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        },
        {
            name: 'Snow Stormers',
            park: 'Blizzard Beach',
            section: 'Purple Slopes',
            rank: 3, 
            heightRequirement: 'No height requirement.',
            waterRide: true, 
            wheelchairOnRide: false, 
            wheelchairTransfer: true, 
            image: ''
        }
    ]

    // parks.forEach(park => {
    //     let ride = rides.map((ride) => ride) // ??? trying to get at each individual ride within the function.
    //     const selectedRides = []
    //     const getSelectedRides = () => {
    //         if (ride.park === park.name){
    //             selectedRides.push(ride)
    //         }
    //     }
    //     getSelectedRides()
    // });
    // working draft; if function does not populate rides within each park object, will insert parks manually.
    // update: could not get this to work. populated these stats manually.

    const parks = [
        {
            name: 'Magic Kingdom',
            dateOpened: 'October 1, 1971',
            description: `'Magic Kingdom Park is a theme park at the Walt Disney World Resort in Bay Lake, Florida, near Orlando, Florida. Owned and operated by The Walt Disney Company through its Parks, Experiences and Products division, the park opened on October 1, 1971, as the first of four theme parks at the resort. The park is represented by Cinderella Castle, inspired by the fairy tale castle featured in the 1950 film. In 2019, the park hosted 20.9 million visitors, making it the most visited theme park in the world for the thirteenth consecutive year and the most visited theme park in North America for at least the past nineteen years. Magic Kingdom is divided into six themed "lands." It is designed like a wheel, with the hub in front of Cinderella Castle. Pathways spoke out from the hub across the 107 acres (43 ha) of the park and lead to these six lands.'--Wikipedia`,
            sections: ['Main Street, U.S.A.', 'Adventureland', 'Frontierland', 'Liberty Square', 'Fantasyland', 'Tomorrowland'], 
            topRides: ['Haunted Mansion', 'Seven Dwarfs Mine Train', 'Tomorrowland Transit Authority People Mover'], // source: mousehacking.com
            topRestaurant: 'Columbia Harbour House', // source: mousehacking.com
            waterPark: false, 
            serviceAnimalRelief: ['Adventureland', 'Frontierland', 'Liberty Square', 'Fantasyland', 'Tomorrowland'], 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Cinderella_Castle_October_1.jpg/800px-Cinderella_Castle_October_1.jpg' // source: wikipedia.org
        },
        {
            name: 'EPCOT',
            dateOpened: 'October 1, 1982',
            description: `'EPCOT is a theme park at the Walt Disney World Resort in Bay Lake, Florida. It is owned and operated by The Walt Disney Company through its Parks, Experiences and Products division. Inspired by an unrealized concept developed by Walt Disney, the park opened on October 1, 1982, as EPCOT Center, and was the second of four theme parks built at Walt Disney World, after Magic Kingdom Park. Spanning 305 acres (1.23 km2), more than twice the size of Magic Kingdom Park, Epcot is dedicated to the celebration of human achievement, namely technological innovation and international culture, and is often referred to as a "permanent world's fair". In 2019, Epcot hosted 12.444 million guests, ranking it as the fourth-most-visited theme park in North America and the seventh-most-visited theme park in the world. The park is represented by Spaceship Earth, a geodesic sphere.'--Wikipedia`,
            sections: ['World Celebration', 'World Discovery', 'World Nature', 'World Showcase'], 
            topRides: ['Spaceship Earth', 'Living with the Land', 'Frozen Ever After'], // source: mousehacking.com
            topRestaurant: 'Regal Eagle Smokehouse', // source: mousehacking.com
            waterPark: false, 
            serviceAnimalRelief: ['World Discovery', 'World Nature', 'World Showcase'], 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Spaceship_Earth_and_entry_plaza_2021.jpg/1280px-Spaceship_Earth_and_entry_plaza_2021.jpg' // source: wikipedia.org
        },
        {
            name: 'Hollywood Studios',
            dateOpened: 'May 1, 1989',
            description: `'Disney's Hollywood Studios is a theme park at the Walt Disney World Resort in Bay Lake, Florida, near Orlando. It is owned and operated by The Walt Disney Company through its Parks, Experiences and Products division. Based on a concept by Marty Sklar, Randy Bright, and Michael Eisner, the park opened on May 1, 1989, as the Disney-MGM Studios (Theme) Park, and was the third of four theme parks built at Walt Disney World. Spanning 135 acres (55 ha), the park is dedicated to the imagined worlds from film, television, music, and theatre, drawing inspiration from the Golden Age of Hollywood. The park's representative icon was originally the Earffel Tower from the park's opening until 2001 when the Sorcerer's Hat—a stylized version of the magical hat from Fantasia—was erected in the park's central hub. The latter then served as the park's icon until its removal in January 2015. Since then, the park has been identified and represented in marketing by the Hollywood Tower Hotel, with the Chinese Theatre serving as the park's visual centerpiece. In 2018, the park hosted 11.258 million guests, ranking it the fifth most-visited theme park in North America and the ninth most-visited theme park in the world.'--Wikipedia`,
            sections: ['Hollywood Boulevard', 'Echo Lake', 'Commissary Lane', 'Grand Avenue', `Star Wars: Galaxy's Edge`, 'Toy Story Land', 'Animation Courtyard', 'Sunset Boulevard'], 
            topRides: ['Tower of Terror', 'Star Wars: Rise of the Resistance', `Mickey & Minnie's Runaway Railway`], // source: mousehacking.com            
            topRestaurant: 'Docking Bay 7 Food & Cargo', // source: mousehacking.com
            waterPark: false, 
            serviceAnimalRelief: ['Hollywood Boulevard', 'Commissary Lane', 'Toy Story Land', 'Animation Courtyard'], 
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/The_Great_Movie_Ride_and_Chinese_Theater_at_Walt_Disney_World.jpg' // source: wikipedia.org
        },
        {
            name: 'Animal Kingdom',
            dateOpened: 'April 22, 1998',
            description: `'Disney's Animal Kingdom Theme Park is a zoological theme park at the Walt Disney World Resort in Bay Lake, Florida, near Orlando. Owned and operated by The Walt Disney Company through its Parks, Experiences and Products division, it is the largest theme park in the world, covering 580 acres (230 ha). The park opened on Earth Day, April 22, 1998, and was the fourth theme park built at the resort. The park is dedicated and themed around natural environment and animal conservation, a philosophy once pioneered by Walt Disney. Disney's Animal Kingdom distinguishes itself from the rest of Walt Disney World's theme parks by featuring traditional attractions as well as hundreds of species of live animals. Special designs and provisions were incorporated throughout the park to protect the animals' welfare. The park is located on the western edge of the resort and is isolated from the other theme parks and properties to minimize external disruptions to the animals. In 2019, Disney's Animal Kingdom hosted 13.888 million guests, ranking it as the third-most-visited theme park in North America and the sixth-most-visited theme park in the world. The park is the second-most-visited at Walt Disney World Resort, behind Disney's Magic Kingdom. The park's icon is the Tree of Life, a 145-foot-tall (44 m), 50-foot-wide (15 m) artificial baobab tree.'--Wikipedia`,
            sections: ['Oasis', 'Discovery Island', 'Pandora: The World of Avatar', 'Africa', 'Asia', 'Dinoland U.S.A.'], 
            topRides: ['Avatar Flight of Passage', 'Expedition Everest', 'Kilamanjaro Safari'], // source: mousehacking.com
            topRestaurant: `Satu'li Canteen`, // source: mousehacking.com
            waterPark: false, 
            serviceAnimalRelief: ['Discovery Island', 'Pandora: The World of Avatar', 'Asia', 'Dinoland U.S.A.'], 
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Tree_of_Life%2C_Disney%27s_Animal_Kingdom.jpg' // source: wikipedia.org
        },
        {
            name: 'Typhoon Lagoon',
            dateOpened: 'June 1, 1989',
            description: `'Disney's Typhoon Lagoon is a water theme park located at the Walt Disney World Resort in Lake Buena Vista, Florida near Orlando, and is one of two operating water parks at the resort. It is the second water park to open at the resort, preceded by Disney's River Country which closed in November 2001. Opened on June 1, 1989, [the park] is home to one of the world's largest outdoor wave pools where it is even possible to bodysurf. The theme of the park is the "Disney legend" of a typhoon that wreaked havoc upon a formerly pristine tropical paradise. Ships, fishing gear, and surfboards are strewn about where the storm flung them. Its centerpiece is "Miss Tilly", a shrimp boat impaled upon a mountain named "Mount Mayday" that erupts a 50-foot (15 m) geyser of water every half hour, right before the bells of the watch sound on it. Its mascot is "Lagoona Gator". In 2016, the park admitted approximately 2,277,000 visitors, currently making it the second most visited water park in the world. It operates year-round, with an annual maintenance closure during either the fall or winter. During the closure, its sister park, Blizzard Beach, remains open. Of the major parks at Disney World, it is the only one that lies within the city limits of Lake Buena Vista. Blizzard Beach and the four theme parks are within the adjacent city of Bay Lake. However, Lake Buena Vista is the mailing address for the entire Walt Disney World Resort.'--Wikipedia`,
            sections: [], 
            topRides: ['Crush N Gusher', 'Keelhaul Falls', 'Storm Slides'], // source: mousehacking.com            
            topRestaurant: 'Leaning Palms', // source: mousehacking.com    
            waterPark: true, 
            serviceAnimalRelief: ['Located at the North and South ends of the park.'], 
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Walt_Disney_World_Typhoon_Lagoon_Entrance.JPG/' // source: wikipedia.org
        },
        {
            name: 'Blizzard Beach',
            dateOpened: 'April 1, 1995',
            description: `'Disney's Blizzard Beach is a water theme park located at the Walt Disney World Resort in Bay Lake, Florida near Orlando. All water areas are heated (at approximately 80 °F or 27 °C), with the exception of the melting snow in the ice cave of Cross Country Creek. The park opened on April 1, 1995 and was the third Walt Disney World water park. In 2016, the park hosted approximately 2,091,000 guests, ranking it the third-most visited water park in the world, behind its sister park, Typhoon Lagoon. Blizzard Beach is open year-round with an annual maintenance closure in the winter. During the closure, its sister park, Typhoon Lagoon, remains open. The park's whimsical and imaginative concept was conceived by designer-Imagineer Marshall Monroe. Innovative elements of the park include a beach chair-themed chair lift, complete with beach umbrellas, and pretend snow skis. The setting and atmosphere of the park are marked by a unique blending of tropical landscaping with simulated melting snow throughout. The mountain is a unique engineering structure constructed in a challenging setting - a high water table Florida woodland. And the architecture is a playful intersection of alpine lodges with Caribbean colors and accents.'--Wikipedia`,
            sections: ['Purple Slopes', 'Green Slopes', 'Red Slopes'], 
            topRides: ['Summit Plummet', 'Slush Gusher', 'Snow Stormers'], // source: mousehacking.com
            topRestaurant: 'Warming Hut', // source: mousehacking.com    
            waterPark: true, 
            serviceAnimalRelief: ['Located at the entrance and at the Purple Slopes.'], 
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/WDW_Blizzard_Beach_entrance.JPG' // source: wikipedia.org
        },
    ]

    await Ride.insertMany(rides)
    console.log("created rides!")

    await Park.insertMany(parks)
    console.log("created parks!")
}

const run = async () => {
    await main()
    db.close()
}

run()