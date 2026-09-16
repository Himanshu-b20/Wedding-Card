export interface EventItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venueName: string;
  venueAddress: string;
  mapUrl: string;
  attire: string;
  attireColorDescription: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  location: string;
}

export interface CarouselPhoto {
  url: string;
  title: string;
  caption: string;
  alt: string;
}

export interface ContactPerson {
  role: string;
  name: string;
  relation: string;
  phone: string;
}

export interface WeddingData {
  groom: {
    firstName: string;
    fullName: string;
    bio: string;
    parents: string;
    grandparents: string;
  };
  bride: {
    firstName: string;
    fullName: string;
    bio: string;
    parents: string;
    grandparents: string;
  };
  dateText: string;
  targetWeddingDate: string; // ISO date string for countdown
  shlokaHindi: string;
  shlokaEnglish: string;
  invitationText: string;
  hashtag: string;
  events: EventItem[];
  story: StoryMilestone[];
  carouselPhotos: CarouselPhoto[];
  youtubeVideoId: string;
  youtubeVideoTitle: string;
  thingsToKnow: {
    venue: {
      name: string;
      city: string;
      airportInfo: string;
      parkingInfo: string;
    };
    weather: string;
    contacts: ContactPerson[];
    guidelines: string[];
  };
  initialWishes: Array<{
    id: string;
    name: string;
    relation: string;
    message: string;
    date: string;
  }>;
}

export const weddingData: WeddingData = {
  groom: {
    firstName: "Ranbir",
    fullName: "Ranbir Raj Kapoor",
    bio: "Passionate artist, cinema enthusiast, and ardent lover of timeless music and quiet mountain retreats.",
    parents: "Late Shri Rishi Kapoor & Smt. Neetu Kapoor",
    grandparents: "Late Shri Raj Kapoor & Late Smt. Krishna Kapoor",
  },
  bride: {
    firstName: "Alia",
    fullName: "Alia Bhatt",
    bio: "Spirited soul, celebrated storyteller, animal lover, and seeker of everyday magic and sunshine.",
    parents: "Shri Mahesh Bhatt & Smt. Soni Razdan",
    grandparents: "Late Shri Nanabhai Bhatt & Smt. Shirin Mohammad Ali",
  },
  dateText: "Sunday, 31st January 2027",
  targetWeddingDate: "2027-01-31T17:30:00+05:30",
  shlokaHindi: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
  shlokaEnglish: "May Lord Ganesha, of curved trunk and immense radiance equal to ten million suns, bless this union and remove all obstacles from our journey forever.",
  invitationText: "Together with their loving families, Ranbir & Alia request the honour of your auspicious presence and blessings as they embark on a lifetime of companionship, laughter, and sacred vows.",
  hashtag: "#RanbirAlia2027",
  events: [
    {
      id: "mehndi",
      title: "The Auspicious Mehndi",
      subtitle: "Henna, Folk Rhythms & High Tea",
      date: "Friday, 29th January 2027",
      time: "03:00 PM onwards",
      venueName: "The Bageecha Courtyard, Oberoi Udaivilas",
      venueAddress: "Haridas Ji Ki Magri, Mulla Talai, Udaipur, Rajasthan 313001",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      attire: "Festive Pastels & Florals",
      attireColorDescription: "Gentle mints, gulabi pinks, and sunshine yellows",
      description: "An afternoon of intricate henna, fragrant marigolds, live Sufi qawwali, and lively chitchat under the winter sun.",
      iconName: "Palette",
      tag: "Day Celebration",
    },
    {
      id: "sangeet",
      title: "Sangeet & Cocktail Night",
      subtitle: "Royal Glitz, Grooves & Starlit Revelry",
      date: "Saturday, 30th January 2027",
      time: "07:30 PM onwards",
      venueName: "The Royal Lakefront Ballroom",
      venueAddress: "Lake Pichola, Udaipur, Rajasthan 313001",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      attire: "Royal Indo-Western / Glamorous Black Tie",
      attireColorDescription: "Midnight velvet, royal shimmer, jewel tones & gold",
      description: "Put on your dancing shoes for energetic family dance face-offs, soulful acoustics, bespoke cocktails, and non-stop music.",
      iconName: "Music",
      tag: "Evening Gala",
    },
    {
      id: "wedding",
      title: "The Pheras & Wedding Vows",
      subtitle: "The Sacred Seven Vows at Sunset",
      date: "Sunday, 31st January 2027",
      time: "04:30 PM Baraat | 06:00 PM Pheras",
      venueName: "The Grand Temple Mandap by the Lake",
      venueAddress: "Lake Pichola Heritage Point, Udaipur, Rajasthan 313001",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      attire: "Traditional Royal Indian Ethnic",
      attireColorDescription: "Deep crimsons, ivory silk, royal brocade & heritage jewels",
      description: "Witness the sacred Vedic rituals, Agni pradakshina, and sindoor ceremony as the sun sets over the serene lake waters.",
      iconName: "Heart",
      tag: "Auspicious Union",
    },
    {
      id: "reception",
      title: "The Regal Banquet",
      subtitle: "Dinner & Toasts under the Stars",
      date: "Sunday, 31st January 2027",
      time: "08:30 PM onwards",
      venueName: "The Sheesh Mahal Pavilion & Terraces",
      venueAddress: "Lake Pichola, Udaipur, Rajasthan 313001",
      mapUrl: "https://maps.google.com/?q=The+Oberoi+Udaivilas+Udaipur",
      attire: "Formal Elegance / Traditional Grandeur",
      attireColorDescription: "Timeless black, champagne, and gold accents",
      description: "A celebratory feast curated by master royal chefs, heartfelt toasts from childhood friends, and starry night celebrations.",
      iconName: "Sparkles",
      tag: "Grand Feast",
    },
  ],
  story: [
    {
      year: "2018",
      title: "The First Stolen Glance",
      description: "Met on the sets of Brahmāstra in the cold misty valleys of Bulgaria. What started as script rehearsals turned into conversations stretching into the dawn.",
      location: "Sofia & Manali",
    },
    {
      year: "2020",
      title: "Companions in Stillness",
      description: "Through quiet months of reflection, cooking experiments, and endless cinema marathons, finding in each other the safest, warmest sanctuary.",
      location: "Bandra, Mumbai",
    },
    {
      year: "2022",
      title: "A Balcony of Dreams",
      description: "Under their favourite tree with close family and endless tears of joy, taking their private vow of eternal togetherness.",
      location: "Vastu, Pali Hill",
    },
    {
      year: "2027",
      title: "The Royal Pilgrimage of Love",
      description: "Gathering all the people who make their world complete to tie the knot in the timeless royal serenity of Udaipur.",
      location: "Lake Pichola, Udaipur",
    },
  ],
  carouselPhotos: [
    {
      url: "/images/couple-royal.jpg",
      title: "Regal Elegance in Crimson & Gold",
      caption: "Wrapped in timeless heritage and royal grace at the palace terrace overlooking the lake.",
      alt: "Ranbir and Alia in royal wedding attire",
    },
    {
      url: "/images/couple-mehndi.jpg",
      title: "Laughter in Sunshine Yellow",
      caption: "Unfiltered joy and bright smiles during the vibrant daytime Mehndi ceremony.",
      alt: "Couple laughing during festive Mehndi ceremony",
    },
    {
      url: "/images/couple-sangeet.jpg",
      title: "Twirling into Forever",
      caption: "An unforgettable evening of dance, music, and shimmering chandeliers at the Sangeet.",
      alt: "Couple dancing at Sangeet celebration",
    },
  ],
  youtubeVideoId: "dQw4w9WgXcQ", // Replaceable with wedding teaser / YouTube embed ID
  youtubeVideoTitle: "A Glimpse Into Forever — Ranbir & Alia Teaser",
  thingsToKnow: {
    venue: {
      name: "The Oberoi Udaivilas, Udaipur",
      city: "Udaipur, Rajasthan",
      airportInfo: "Maharana Pratap Airport (UDR) is 45 minutes from the venue. Dedicated luxury chauffeurs will receive all arriving guests.",
      parkingInfo: "Complimentary 24/7 valet parking available at the main palace gates.",
    },
    weather: "Udaipur in late January offers pleasant sunny afternoons (22°C / 72°F) and crisp, cool evenings (10°C / 50°F). A light pashmina or tailored bandhgala jacket is recommended for outdoor evening events.",
    contacts: [
      {
        role: "Groom's Hospitality Concierge",
        name: "Armaan Jain",
        relation: "Family Coordinator",
        phone: "+91 98200 12345",
      },
      {
        role: "Bride's Hospitality Concierge",
        name: "Shaheen Bhatt",
        relation: "Family Coordinator",
        phone: "+91 98200 54321",
      },
      {
        role: "Wedding Planner & Logistics",
        name: "Royal Rajputana Events Desk",
        relation: "Guest Assistance",
        phone: "+91 80033 99999",
      },
    ],
    guidelines: [
      "We kindly request guests to arrive 15 minutes prior to ritual muhurats.",
      "Traditional Indian head coverings (safas / dupattas) will be provided for all guests during the Baraat and Pheras.",
      "Our personal photography team will capture every moment. We invite you to be fully present with us during the sacred pheras.",
      "Special dietary requirements (pure vegetarian, vegan, and Jain meals) will be enthusiastically catered.",
    ],
  },
  initialWishes: [
    {
      id: "w1",
      name: "Karan Johar",
      relation: "Family & Mentor",
      message: "To my darling Ranbir and my magical Alia, watching your bond grow has been the greatest emotional privilege. May your life together be cinematic, poetic, and overflowing with endless laughter!",
      date: "14 Jan 2027",
    },
    {
      id: "w2",
      name: "Ayan Mukerji",
      relation: "Best Friend",
      message: "From midnight set talks to this sacred day—you two are pure starlight together. May the Shiva and Isha within you always shine bright!",
      date: "18 Jan 2027",
    },
    {
      id: "w3",
      name: "Kareena Kapoor Khan",
      relation: "Sister",
      message: "The most gorgeous couple in the universe! Welcome to the craziest, happiest club. Can't wait to dance till the morning sun at Udaipur!",
      date: "20 Jan 2027",
    },
  ],
};
