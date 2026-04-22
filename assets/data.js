const heroImages = {
  main: "https://bookingenginecdn.hostaway.com/listing/58297-214155-fYKZn48sFzKvac-IDJtkh8lJ9W5fu2WKqqA97nmYgZE-655b628eba95e?format=webp&quality=70&v=2&width=2000",
  secondary: "https://bookingenginecdn.hostaway.com/listing/58297-214156-9NVaDls6LEAy2q--LRMJZzLPu4W--MqQ-rfmG3WE0JlcA-655b62b05c392?format=webp&quality=70&v=2&width=2000"
};

const pageHeroImages = {
  "gallery.html": "https://bookingenginecdn.hostaway.com/listing/58297-214156-jtrhRRLvm2Pm1pcmHkZDhB6AnXXtyIOXNmz1Xq9hebw-655b62b35f6d2?format=webp&quality=70&v=2&width=2000",
  "location.html": "https://bookingenginecdn.hostaway.com/listing/58297-214155-IwRtXQG55cY6IUgV7JgwOhCn-emvOGVReL93qT48bmk-655b629950684?format=webp&quality=70&v=2&width=2000",
  "attractions.html": "https://www.amishcountrylodging.com/wp-content/uploads/2019/08/horse-and-green-buggy.jpg",
  "collection.html": "https://bookingenginecdn.hostaway.com/listing/58297-214155-DWDCDh-P32UzARGOQI5A9pd-yDLcv9BUazkTLaYoHWc-655b6291437b4?format=webp&quality=70&v=2&width=2000",
  "faq.html": "https://bookingenginecdn.hostaway.com/listing/58297-214156-oixmvgQEYGbXAoCoMAeD6jthJq6LO-hIFP2IwhTQ9k0-655b62b7098a1?format=webp&quality=70&v=2&width=2000",
  "contact.html": "https://bookingenginecdn.hostaway.com/listing/58297-214155-NuCVG0KdLWo8NZRTykPEKMfy9yzn43jqepd4pcNUBY-655b629cb937a?format=webp&quality=70&v=2&width=2000"
};

const galleryItems = [
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214155-fYKZn48sFzKvac-IDJtkh8lJ9W5fu2WKqqA97nmYgZE-655b628eba95e?format=webp&quality=70&v=2&width=1600",
    title: "Country Bliss living room"
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214156-9NVaDls6LEAy2q--LRMJZzLPu4W--MqQ-rfmG3WE0JlcA-655b62b05c392?format=webp&quality=70&v=2&width=1600",
    title: "Village Dreams main floor"
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214155-DWDCDh-P32UzARGOQI5A9pd-yDLcv9BUazkTLaYoHWc-655b6291437b4?format=webp&quality=70&v=2&width=1200",
    title: "Country Bliss dining area"
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214156-jtrhRRLvm2Pm1pcmHkZDhB6AnXXtyIOXNmz1Xq9hebw-655b62b35f6d2?format=webp&quality=70&v=2&width=1200",
    title: "Village Dreams queen beds"
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214155-7-5Cpc--xd6UhcpGxcotkvYtRzvoRBrwAiivFVCqPpTs-655b629505136?format=webp&quality=70&v=2&width=1200",
    title: "Country Bliss kitchen"
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214156-oixmvgQEYGbXAoCoMAeD6jthJq6LO-hIFP2IwhTQ9k0-655b62b7098a1?format=webp&quality=70&v=2&width=1200",
    title: "Village Dreams living area"
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214155-IwRtXQG55cY6IUgV7JgwOhCn-emvOGVReL93qT48bmk-655b629950684?format=webp&quality=70&v=2&width=1200",
    title: "Country Bliss bedroom"
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214156-lRJfdRq3v-wwXvGMK4GIYn6niGzT5ttlWSZe0--uBP7w-655b62bac2561?format=webp&quality=70&v=2&width=1200",
    title: "Village Dreams pool table"
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214155-NuCVG0KdLWo8NZRTykPEKMfy9yzn43jqepd4pcNUBY-655b629cb937a?format=webp&quality=70&v=2&width=1200",
    title: "Country Bliss jetted tub"
  },
  {
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214156-BgvbyLlF2d7Kawaz--b3F6PiF4aCAcq3QvLUeaSyRSwg-655b74e8be911?format=webp&quality=70&v=2&width=1200",
    title: "Village Dreams cedar sauna"
  }
];

const faqs = [
  {
    question: "How do I book a stay at Berlin Cottages?",
    answer: "You can book directly from this website — each cottage card links straight to the booking engine. You can also call (330) 893-1300 or email info@amishcountrylodging.com for assistance."
  },
  {
    question: "Where exactly are the Berlin Cottages located?",
    answer: "Berlin Cottages are at 4895 West Main St. in downtown Berlin, Ohio — right on Main Street. You can walk to shops, bakeries, and restaurants without needing to drive."
  },
  {
    question: "How many guests can each cottage accommodate?",
    answer: "Country Bliss Cottage sleeps up to 4 guests with two king beds. Village Dreams Cottage sleeps up to 6 guests with one king bed and two queen beds."
  },
  {
    question: "What amenities are included with each cottage?",
    answer: "Both cottages include a gas fireplace, full kitchen, two-person jetted tub, cedar sauna, and complimentary WiFi. Country Bliss also features a ROKU Smart TV. Linens, towels, and basic kitchen essentials are provided."
  },
  {
    question: "What is a cedar sauna and how do we use it?",
    answer: "Each cottage includes a private cedar sauna — a dry heat sauna you can enjoy at your own pace. Instructions are provided in the cottage. It's a wonderful way to unwind after a day exploring Amish Country."
  },
  {
    question: "Is there parking available at Berlin Cottages?",
    answer: "Yes, parking is available on-site for guests. Because the cottages are right on Main Street, you can park and walk to most of downtown Berlin's shops and restaurants."
  },
  {
    question: "What is the cancellation policy?",
    answer: "Cancellation terms are shown at the time of booking and may vary by stay and season. For specific details or to make a change to your reservation, please call (330) 893-1300."
  },
  {
    question: "Are Berlin Cottages pet-friendly?",
    answer: "Berlin Cottages are not pet-friendly. However, several Amish Country Lodging properties do welcome pets, including Berlin Tiny Stays and Premier Cottages. Call (330) 893-1300 for recommendations."
  },
  {
    question: "Is there WiFi at the cottages?",
    answer: "Yes, complimentary WiFi is included with every stay. Cell coverage in downtown Berlin is generally reliable across all major carriers."
  },
  {
    question: "Are the cottages accessible for guests with mobility limitations?",
    answer: "The cottages are street-level and easier to access than elevated properties. Please call (330) 893-1300 to discuss your specific needs so we can help you choose the best option."
  },
  {
    question: "What is the best time of year to visit Berlin Cottages?",
    answer: "Berlin is a wonderful destination year-round. Fall is the most popular season with stunning foliage and harvest festivals. Winter is cozy and quiet with the fireplaces and sauna. Spring and summer bring full downtown activity and warm weather."
  },
  {
    question: "How far are the cottages from Cleveland or Columbus?",
    answer: "Berlin Cottages are roughly 90 minutes from Cleveland and about two hours from Columbus — an easy weekend escape from most of Ohio and the surrounding states."
  }
];

const units = [
  {
    name: "Country Bliss Cottage",
    guests: "Up to 4 guests",
    beds: "2 king beds",
    type: "Downtown cottage",
    highlight: "A beautiful two-bedroom cottage steps from Main Street, featuring a cedar sauna, gas fireplace, and two-person jetted tub.",
    amenities: ["Gas fireplace", "Cedar sauna", "Jetted tub", "Full kitchen", "2 king beds", "ROKU Smart TV"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214155",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214155-fYKZn48sFzKvac-IDJtkh8lJ9W5fu2WKqqA97nmYgZE-655b628eba95e?format=webp&quality=70&v=2&width=1200"
  },
  {
    name: "Village Dreams Cottage",
    guests: "Up to 6 guests",
    beds: "1 king + 2 queen beds",
    type: "Downtown cottage",
    highlight: "A spacious two-story cottage for families or groups, with a cedar sauna, pool table, gas fireplace, and jetted tub.",
    amenities: ["Gas fireplace", "Cedar sauna", "Jetted tub", "Full kitchen", "Pool table", "Sleeps 6"],
    bookingUrl: "https://book.amishcountrylodging.com/listings/214156",
    image: "https://bookingenginecdn.hostaway.com/listing/58297-214156-9NVaDls6LEAy2q--LRMJZzLPu4W--MqQ-rfmG3WE0JlcA-655b62b05c392?format=webp&quality=70&v=2&width=1200"
  }
];
