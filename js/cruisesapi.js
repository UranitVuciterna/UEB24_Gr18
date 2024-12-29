// Përdorimi i vargjeve (arrays) në JS dhe qasja e elementeve brenda vargjeve
const cruises = [
    {
        id: 1,
        name: "Caribbean Adventure",
        description: "Explore the vibrant cultures, breathtaking beaches, and exciting adventures of the Caribbean. Perfect for families, couples, and solo travelers looking for a tropical escape.",
        destination: "Caribbean",
        duration: 7,
        price: 999,
        departuredate: "2025-01-15",
        returndate: "2025-01-22",
        ship: "Ocean Explorer",
        ports: ["Miami, FL", "Nassau, Bahamas", "San Juan, Puerto Rico", "St. Thomas, USVI"],
        activities: ["Snorkeling", "Live Music", "Cooking Classes", "Kids' Club"],
        dining: ["Buffet", "Seafood Grill", "Italian Restaurant"],
        image: "../cruiseimages/Costa-Luminosa-900x400.jpg",
        rating: 4.5,
        rooms: [
            {
                type: "Interior",
                price: 452,
                sleeps: "1-6",
                description: [
                    "Our most budget-friendly option",
                    "Cozy and comfortable retreat after an adventure-filled day",
                    "153 - 340 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/Facebook.jpg",
            },
            {
                type: "Ocean View",
                price: 615,
                sleeps: "1-6",
                description: [
                    "Endless ocean views await from your very own in-stateroom window",
                    "Great for families with small children",
                    "162 - 293 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/oceanview1.jpg",
            },
            {
                type: "Balcony",
                price: 899,
                sleeps: "1-4",
                description: [
                    "Private balcony with stunning views",
                    "Perfect for romantic getaways",
                    "190 - 276 sq. ft. stateroom"
                ],
                roomsimage: "",
            }
        ]
    },
    {
        id: 2,
        name: "Mediterranean Highlights",
        description: "Sail through the heart of the Mediterranean and experience its rich history, delicious cuisine, and stunning architecture. A journey through Europe’s most iconic destinations.",
        destination: "Mediterranean",
        duration: 10,
        price: 1299,
        departuredate: "2025-02-10",
        returndate: "2025-02-20",
        ship: "Sea Voyager",
        ports: ["Barcelona, Spain", "Marseille, France", "Florence, Italy", "Athens, Greece"],
        activities: ["Wine Tasting", "Dance Classes", "Art Gallery Tours", "Fitness Programs"],
        dining: ["Gourmet Mediterranean Cuisine", "Steakhouse", "Vegan Bistro"],
        image: "../cruiseimages/cruise-myths-busted-2-scaled.jpg",
        rating: 4.7,
        rooms: [
            {
                type: "Interior",
                price: 499,
                sleeps: "1-4",
                description: [
                    "Comfortable and affordable stateroom",
                    "Perfect for travelers focused on exploring onshore",
                    "140 - 310 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/interior1.jpg",
            },
            {
                type: "Ocean View",
                price: 700,
                sleeps: "1-6",
                description: [
                    "Large windows to soak in Mediterranean views",
                    "Ideal for families or groups",
                    "180 - 320 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/oceanview2.jpg",
            },
            {
                type: "Suite",
                price: 1450,
                sleeps: "1-4",
                description: [
                    "Luxurious suite with a private balcony and seating area",
                    "Includes premium services and amenities",
                    "300 - 450 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/suite1.jpg",
            }
        ]
    },
    {
        id: 3,
        name: "Alaskan Wonders",
        description: "Discover the majestic beauty of Alaska, from towering glaciers to untamed wilderness. Perfect for nature enthusiasts and photographers.",
        destination: "Alaska",
        duration: 14,
        price: 1999,
        departuredate: "2025-06-01",
        returndate: "2025-06-15",
        ship: "Glacier Queen",
        ports: ["Seattle, WA", "Ketchikan, AK", "Juneau, AK", "Skagway, AK"],
        activities: ["Glacier Viewing", "Photography Workshops", "Wildlife Lectures", "Dog Sledding"],
        dining: ["Fresh Seafood", "Farm-to-Table Dining", "Casual Grill"],
        image: "../cruiseimages/img-Australian-cruise-sector-increases-economic-impact_credit-CLIA_940x443.jpg",
        rating: 4.9,
        rooms: [
            {
                type: "Interior",
                price: 550,
                sleeps: "1-4",
                description: [
                    "Cozy stateroom ideal for adventurers",
                    "Provides a comfortable and quiet retreat",
                    "140 - 280 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/interior2.jpg",
            },
            {
                type: "Ocean View",
                price: 850,
                sleeps: "1-6",
                description: [
                    "Panoramic windows for breathtaking glacier views",
                    "Designed for families or couples",
                    "200 - 320 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/oceanview3.jpg",
            },
            {
                type: "Balcony",
                price: 1400,
                sleeps: "1-4",
                description: [
                    "Private balcony to witness Alaska's pristine wilderness",
                    "Perfect for romantic moments and wildlife watching",
                    "250 - 370 sq. ft. stateroom"
                ],
                roomsimage: "",
            },
            {
                type: "Suite",
                price: 2200,
                sleeps: "1-4",
                description: [
                    "Spacious suite with a balcony and separate living area",
                    "Comes with concierge service and premium amenities",
                    "400 - 600 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/suite2.jpg",
            }
        ]
    },
    {
        id: 4,
        name: "Asian Discovery",
        description: "Embark on a journey through the wonders of Asia, blending ancient traditions with modern marvels. From bustling cities to serene temples, this cruise offers something for everyone.",
        destination: "Asia",
        duration: 12,
        price: 1799,
        departuredate: "2025-03-05",
        returndate: "2025-03-17",
        ship: "Pacific Pearl",
        ports: ["Tokyo, Japan", "Shanghai, China", "Ho Chi Minh City, Vietnam", "Bangkok, Thailand"],
        activities: ["Martial Arts Classes", "Cultural Shows", "Origami Workshops", "Local Food Tastings"],
        dining: ["Asian Fusion Cuisine", "Sushi Bar", "Traditional Noodle House"],
        image: "../cruiseimages/ocean-cay-destinations_22.webp",
        rating: 4.6,
        rooms: [
            {
                type: "Interior",
                price: 499,
                sleeps: "1-4",
                description: [
                    "Simple and cozy option for budget travelers",
                    "Provides all the essentials for a comfortable stay",
                    "140 - 300 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/interior3.jpg",
            },
            {
                type: "Ocean View",
                price: 750,
                sleeps: "1-6",
                description: [
                    "Large windows overlooking stunning Asian landscapes",
                    "Ideal for families or couples",
                    "200 - 320 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/oceanview4.jpg",
            },
            {
                type: "Balcony",
                price: 1050,
                sleeps: "1-4",
                description: [
                    "Private balcony perfect for relaxing after a day of exploration",
                    "Enjoy fresh sea air and views of Asian coastlines",
                    "250 - 400 sq. ft. stateroom"
                ],
                roomsimage: "",
            },
            {
                type: "Suite",
                price: 1800,
                sleeps: "1-4",
                description: [
                    "Luxury suite with premium amenities and services",
                    "Separate living area and a spacious balcony",
                    "400 - 600 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/suite3.jpg",
            }
        ]
    },
    {
        id: 5,
        name: "Northern Europe Escape",
        description: "Experience the charm of Northern Europe, from the colorful streets of Copenhagen to the serene beauty of the Finnish archipelago. Perfect for history lovers and nature enthusiasts.",
        destination: "Northern Europe",
        duration: 8,
        price: 1099,
        departuredate: "2025-05-20",
        returndate: "2025-05-28",
        ship: "Baltic Star",
        ports: ["Copenhagen, Denmark", "Stockholm, Sweden", "Helsinki, Finland", "Tallinn, Estonia"],
        activities: ["Sauna & Spa", "Nordic Cooking Classes", "Live Jazz", "Nature Walks"],
        dining: ["Nordic Cuisine", "Seafood Buffet", "International Café"],
        image: "../cruiseimages/poster-custom_banner-banner_half.jpg",
        rating: 4.4,
        rooms: [
            {
                type: "Interior",
                price: 400,
                sleeps: "1-4",
                description: [
                    "Affordable and practical accommodation",
                    "Perfect for minimalist travelers",
                    "130 - 300 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/interior4.jpg",
            },
            {
                type: "Ocean View",
                price: 700,
                sleeps: "1-6",
                description: [
                    "Large windows for enjoying Northern European scenery",
                    "Comfortable for families",
                    "200 - 350 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/oceanview5.jpg",
            },
            {
                type: "Balcony",
                price: 1200,
                sleeps: "1-4",
                description: [
                    "Private balcony with spectacular Baltic views",
                    "Perfect for couples or families",
                    "300 - 450 sq. ft. stateroom"
                ],
                roomsimage: "",
            },
            {
                type: "Suite",
                price: 2000,
                sleeps: "1-4",
                description: [
                    "Luxurious suite with spacious interiors and premium features",
                    "Includes a private dining area and concierge services",
                    "450 - 650 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/suite4.jpg",
            }
        ]
    },
    {
        id: 6,
        name: "Exotic South America",
        description: "Dive into the vibrant cultures and breathtaking landscapes of South America. From the beaches of Rio to the vineyards of Chile, this cruise is an unforgettable experience.",
        destination: "South America",
        duration: 15,
        price: 2499,
        departuredate: "2025-04-01",
        returndate: "2025-04-16",
        ship: "Amazon Explorer",
        ports: ["Rio de Janeiro, Brazil", "Buenos Aires, Argentina", "Montevideo, Uruguay", "Santiago, Chile"],
        activities: ["Samba Classes", "Local Cooking Demonstrations", "Cultural Talks", "Wine Tasting"],
        dining: ["Churrasco Grill", "Wine Pairing Experience", "Traditional Empanadas"],
        image: "../cruiseimages/royal-caribbean-star-of-the-seas-rendering.avif",
        rating: 4.8,
        rooms: [
            {
                type: "Interior",
                price: 800,
                sleeps: "1-4",
                description: [
                    "Budget-friendly option with comfortable bedding",
                    "Perfect for adventure seekers",
                    "150 - 300 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/interior5.jpg",
            },
            {
                type: "Ocean View",
                price: 1200,
                sleeps: "1-6",
                description: [
                    "Expansive windows to enjoy South American views",
                    "Family-friendly and spacious",
                    "220 - 350 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/oceanview6.jpg",
            },
            {
                type: "Balcony",
                price: 1800,
                sleeps: "1-4",
                description: [
                    "Private balcony with panoramic views of coastlines",
                    "Perfect for relaxation and stargazing",
                    "300 - 450 sq. ft. stateroom"
                ],
                roomsimage: "",
            },
            {
                type: "Suite",
                price: 3000,
                sleeps: "1-4",
                description: [
                    "Ultimate luxury suite with large living spaces",
                    "Includes exclusive access to VIP amenities",
                    "450 - 650 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/suite5.jpg",
            }
        ]
    },
    {
        id: 7,
        name: "Australian Coastal",
        description: "Journey along Australia's stunning coastline, visiting world-famous beaches, bustling cities, and pristine reefs. Ideal for outdoor enthusiasts and beach lovers.",
        destination: "Australia",
        duration: 9,
        price: 1399,
        departuredate: "2025-07-01",
        returndate: "2025-07-10",
        ship: "Coral Breeze",
        ports: ["Sydney, Australia", "Brisbane, Australia", "Cairns, Australia"],
        activities: ["Great Barrier Reef Diving", "Marine Biology Lectures", "Surfing Classes"],
        dining: ["Australian Barbecue", "Fresh Seafood", "Outback Steakhouse"],
        image: "../cruiseimages/scenic-cruise-french-polynesia-2.jpg",
        rating: 4.7,
        rooms: [
            {
                type: "Interior",
                price: 600,
                sleeps: "1-4",
                description: [
                    "Compact and affordable",
                    "Ideal for adventurers focused on excursions",
                    "140 - 280 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/interior6.jpg",
            },
            {
                type: "Ocean View",
                price: 950,
                sleeps: "1-6",
                description: [
                    "Windows offering breathtaking views of Australia's coast",
                    "Perfect for families",
                    "220 - 320 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/oceanview5.jpg",
            },
            {
                type: "Balcony",
                price: 1500,
                sleeps: "1-4",
                description: [
                    "Private balcony for watching the ocean sunrise",
                    "Perfect for romantic getaways",
                    "250 - 400 sq. ft. stateroom"
                ],
                roomsimage: "",
            }
        ]
    },
    {
        id: 8,
        name: "Arabian Nights",
        description: "Explore the enchanting Middle East, where ancient traditions meet modern luxury. From dazzling deserts to vibrant cities, this cruise offers an unforgettable journey.",
        destination: "Middle East",
        duration: 7,
        price: 1199,
        departuredate: "2025-08-05",
        returndate: "2025-08-12",
        ship: "Desert Voyager",
        ports: ["Dubai, UAE", "Muscat, Oman", "Doha, Qatar"],
        activities: ["Desert Safaris", "Stargazing Nights", "Henna Art Workshops"],
        dining: ["Middle Eastern Feast", "Luxury Tea Service", "Mediterranean Tapas"],
        image: "../cruiseimages/sydney-australia-_port_19056.avif",
        rating: 4.3,
        rooms: [
            {
                type: "Interior",
                price: 500,
                sleeps: "1-4",
                description: [
                    "Affordable and cozy",
                    "Perfect for those planning to explore onshore",
                    "140 - 280 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/interior7.jpg",
            },
            {
                type: "Ocean View",
                price: 800,
                sleeps: "1-6",
                description: [
                    "Windows offering sweeping views of Arabian landscapes",
                    "Ideal for families",
                    "220 - 320 sq. ft. stateroom"
                ],
                roomsimage: "../cruiseimages/oceanview4.jpg",
            },
            {
                type: "Balcony",
                price: 1400,
                sleeps: "1-4",
                description: [
                    "Private balcony for enjoying Middle Eastern sunsets",
                    "Luxury at its finest",
                    "250 - 450 sq. ft. stateroom"
                ],
                roomsimage: "",
            }
        ]
    }
];
