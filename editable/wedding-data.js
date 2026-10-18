/**
 * wedding-data.js — Customer-facing editable data layer for saga-of-love
 * Edit this file to update couple names, dates, events, itinerary, venue, blessing, and contacts.
 */

window.WEDDING_DATA = {
  couple: {
    bride: "Sonam",
    brideShort: "Sonam",
    groom: "Abhishek",
    groomShort: "Abhishek",
    hashtag: "#SonamWedsAbhishek",
  },

  invite: {
    kicker: "Together with their families",
    line: "cordially invite you to celebrate the Tilak Ceremony of Abhishek",
  },

  event: {
    title: "Tilak Ceremony of Abhishek",
    startsAt: "2026-11-20T18:00:00+05:30",
    endsAt: "2026-11-20T23:00:00+05:30",
    dateLabel: "20 . 11 . 2026",
    dayLabel: "Friday",
    timeLabel: "06.00 PM Onwards",
    note: "Dinner & Celebrations to follow",
  },

  venue: {
    name: "Shri Dev Villa",
    address: "24 N, Indira Nagar, Kalyanpur, Kanpur, Uttar Pradesh 208026 (Near State Bank of India, Indira Nagar)",
    mapsQuery: "Shri Dev Villa, 24 N, Indira Nagar, Kalyanpur, Kanpur, Uttar Pradesh 208026 Near State Bank of India, Indira Nagar",
    mapsUrl: "https://maps.app.goo.gl/wHtKJ18q3cHZTwSE8",
    lat: 26.4947,
    lng: 80.2647,
  },

  story: [
    {
      year: "20 November",
      title: "TILAK CEREMONY",
      text: "06.00 PM Onwards, Shri Dev Villa, Kanpur",
      image: "story-1",
    },
  ],

  blessing: {
    line: "May your intentions be one, may your hearts beat as one.",
    translation: "Two souls, two families, united with love and blessings for a lifetime of joy and togetherness.",
    source: "A blessing from both families",
  },

  footer: {
    families: `With Blessings & Warm Regards,\n\nLate Mr. Shyam Gopal Shukla & Late Mrs. Prema Devi Shukla\n(Grandparents)\n\n&\n\nMr. Anil Kumar Shukla & Mrs. Anamika Shukla & Family\n(Parents)`,
    contacts: [
      { name: "Groom's Family", phone: "9455043621" },
      { name: "Groom's Family", phone: "9793140908" },
    ],
  },

  images: {
    heroArch: "./editable/assets/hero-arch.webp",
    gatePanel: "./editable/assets/gate-panel.webp",
    mapPreview: "./editable/assets/map-preview.webp",
    footerFloral: "./editable/assets/footer-floral.webp",
    story1: "./editable/assets/story-1.webp",
    story2: "./editable/assets/story-2.webp",
    story3: "./editable/assets/story-3.webp",
  },

  music: {
    src: "./editable/assets/bg.mp3",
    title: "Banke Tera Jogi",
    autoplay: true,
    loop: true,
  },
};
