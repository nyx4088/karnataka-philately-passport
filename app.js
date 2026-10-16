
"use strict";
const LOCATIONS = [{"n": 1, "name": "Aihole", "office_type": "BO", "office_type_full": "Branch Office", "pin": "587124", "district": "Bagalkot", "region": "North Karnataka", "district_color": "#C74141", "lat": 16.01955, "lng": 75.88058, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Badami", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಐಹೊಳೆ", "nearby": ["Durga Temple complex", "Lad Khan Temple", "Meguti Jain Temple"], "fact": "Aihole was the first capital of the Early Chalukyas and is called the 'Cradle of Indian Temple Architecture' — over 125 temples here experiment with early Dravida and Nagara styles."}, {"n": 2, "name": "Badami", "office_type": "SO", "office_type_full": "Sub Office", "pin": "587201", "district": "Bagalkot", "region": "North Karnataka", "district_color": "#C74141", "lat": 15.91661, "lng": 75.67751, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Badami", "ppc": {"motif": "Nataraja", "introduced": "29 September 1987"}, "verified": "approx", "approx": true, "kn_name": "ಬಾದಾಮಿ", "nearby": ["Badami Cave Temples", "Bhutanatha Temple, Agastya Lake", "Badami Fort"], "fact": "Badami's red sandstone cliff temples were carved by the Early Chalukyas in the 6th century; the Bhutanatha temples sit picturesquely on the Agastya lake."}, {"n": 3, "name": "Pattadkal", "office_type": "BA", "office_type_full": "Branch", "pin": "587201", "district": "Bagalkot", "region": "North Karnataka", "district_color": "#C74141", "lat": 15.94963, "lng": 75.81622, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Badami", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಪಟ್ಟದಕಲ್", "nearby": ["Virupaksha Temple", "Mallikarjuna Temple", "Galaganatha Temple"], "fact": "A UNESCO World Heritage Site where Chalukya architects fused northern Nagara and southern Dravida styles — the Virupaksha Temple here was built by Queen Lokamahadevi in 745 CE."}, {"n": 4, "name": "Bellary Fort", "office_type": "SO", "office_type_full": "Sub Office", "pin": "583102", "district": "Ballari", "region": "North Karnataka", "district_color": "#41C768", "lat": 15.16602, "lng": 76.85858, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Ballari", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಬಳ್ಳಾರಿ ಕೋಟೆ", "nearby": ["Ballari Gudda", "Kumaraswamy Temple", "Durgamma Temple"], "fact": "The Ballari Fort sits atop Ballari Gudda, a massive granite monolith; Hyder Ali built the lower fort in 1769 and the French engineer later added the upper fort."}, {"n": 5, "name": "Sandur", "office_type": "SO", "office_type_full": "Sub Office", "pin": "583119", "district": "Ballari", "region": "North Karnataka", "district_color": "#41C768", "lat": 15.08195, "lng": 76.5435, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Ballari", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಸಂದೂರು", "nearby": ["Kumaraswamy Temple", "Sandur Palace", "Narihalla Reservoir"], "fact": "Sandur valley is one of India's richest iron-ore belts; the Kumaraswamy Temple here hosts a famous annual car festival drawing lakhs."}, {"n": 6, "name": "Belagavi", "office_type": "HO", "office_type_full": "Head Office", "pin": "590001", "district": "Belagavi", "region": "North Karnataka", "district_color": "#8F41C7", "lat": 15.85217, "lng": 74.50984, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Belagavi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಬೆಳಗಾವಿ", "nearby": ["Belagavi Fort", "Kapileshwara Temple", "Gokak Falls (60 km)"], "fact": "Belagavi (Belgaum) was the site of the 1924 Congress session — the only one presided over by Mahatma Gandhi; the city is known for its military cantonment heritage."}, {"n": 7, "name": "Belagavi Fort", "office_type": "SO", "office_type_full": "Sub Office", "pin": "590016", "district": "Belagavi", "region": "North Karnataka", "district_color": "#8F41C7", "lat": 15.86338, "lng": 74.52521, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Belagavi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಬೆಳಗಾವಿ ಕೋಟೆ", "nearby": ["Kamal Basadi", "Kapileshwara Temple", "Shani Temple"], "fact": "Built by the Ratta dynasty in the 12th century, Belagavi Fort houses the Kamal Basadi with exquisite lotus carvings and two ancient Jain temples."}, {"n": 8, "name": "Kittur", "office_type": "SO", "office_type_full": "Sub Office", "pin": "591115", "district": "Belagavi", "region": "North Karnataka", "district_color": "#8F41C7", "lat": 15.597688, "lng": 74.790813, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Belagavi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಕಿತ್ತೂರು", "nearby": ["Kittur Fort ruins", "Rani Chennamma Memorial", "Kalmeshwara Temple"], "fact": "Kittur is immortalized by Rani Chennamma, who led one of India's first armed rebellions against the British in 1824 — decades before 1857."}, {"n": 9, "name": "Nandgad", "office_type": "SO", "office_type_full": "Sub Office", "pin": "591120", "district": "Belagavi", "region": "North Karnataka", "district_color": "#8F41C7", "lat": 15.576438, "lng": 74.571328, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Belagavi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ನಂದಗಡ", "nearby": ["Sangolli Rayanna Memorial (Sangolli)", "Kittur Fort", "Malaprabha Dam"], "fact": "Nandgad is associated with Sangolli Rayanna, the valiant freedom fighter and associate of Rani Chennamma who was hanged by the British in 1831."}, {"n": 10, "name": "Halashi", "office_type": "BO", "office_type_full": "Branch Office", "pin": "591142", "district": "Belagavi", "region": "North Karnataka", "district_color": "#8F41C7", "lat": 15.54102, "lng": 74.58998, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Belagavi", "ppc": {"motif": "Kadamba Royal Logo", "introduced": "04 May 1993"}, "verified": "approx", "approx": true, "kn_name": "ಹಲಶಿ", "nearby": ["Bhuvaraha Temple", "Jain Basadis", "Ramalingeshwara Temple"], "fact": "Halashi (Halsi) was an early Kadamba capital; its Bhuvaraha Narasimha Temple and Jain basadis date to the 5th century Kadamba era."}, {"n": 11, "name": "Hooli", "office_type": "BO", "office_type_full": "Branch Office", "pin": "591126", "district": "Belagavi", "region": "North Karnataka", "district_color": "#8F41C7", "lat": 15.794263, "lng": 75.191766, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Belagavi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಹೂಲಿ", "nearby": ["Panchalingeshwara Temple", "Tarakeshwara Temple (Hangal)", "Saundatti Yallamma"], "fact": "Hooli's Panchalingeshwara Temple complex is a jewel of Western Chalukya architecture with five shrines in a row, dating to the 11th-12th century."}, {"n": 12, "name": "Yallamma Hill", "office_type": "SO", "office_type_full": "Sub Office", "pin": "591173", "district": "Belagavi", "region": "North Karnataka", "district_color": "#8F41C7", "lat": 15.754338, "lng": 75.151672, "landscape": "hills", "theme": {"label": "Hills", "accent": "#4A7C59", "soft": "#E4F0E6"}, "transit_town": "Belagavi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಯಲ್ಲಮ್ಮ ಗುಡ್ಡ", "nearby": ["Renuka Yellamma Temple", "Malaprabha Dam", "Parasgad Fort"], "fact": "Yallamma Hill (Yellamma Gudda) at Saundatti is one of Karnataka's most important Shakti pilgrimage centers, drawing lakhs for the annual jatre."}, {"n": 13, "name": "Shiroli", "office_type": "BO", "office_type_full": "Branch Office", "pin": "591302", "district": "Belagavi", "region": "North Karnataka", "district_color": "#8F41C7", "lat": 15.56381, "lng": 74.43828, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Belagavi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಶಿರೊಲಿ", "nearby": ["Khanapur forests", "Malaprabha Dam", "Bhimgad Wildlife Sanctuary"], "fact": "Shiroli in Khanapur taluk is a quiet Western Ghats village near the forested border with Goa, known for its areca and paddy landscape."}, {"n": 14, "name": "Gokak Falls", "office_type": "SO", "office_type_full": "Sub Office", "pin": "591308", "district": "Belagavi", "region": "North Karnataka", "district_color": "#8F41C7", "lat": 16.19012, "lng": 74.77684, "landscape": "riverside", "theme": {"label": "Riverside", "accent": "#3E8E8A", "soft": "#E0F2F0"}, "transit_town": "Gokak Road", "ppc": null, "verified": "near", "approx": false, "kn_name": "ಗೋಕಾಕ ಜಲಪಾತ", "nearby": ["Gokak Falls viewpoint", "Hanging Bridge", "Godchinmalki Falls"], "fact": "Gokak Falls on the Ghataprabha plunges 52 metres over a sandstone cliff; a 1907 hanging bridge spans the gorge and a century-old hydroelectric station still runs here."}, {"n": 15, "name": "Bengaluru GPO", "office_type": "PB", "office_type_full": "Philatelic Bureau", "pin": "560001", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 12.98101, "lng": 77.59504, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bengaluru", "ppc": {"motif": "Vidhana Soudha", "introduced": "15 January 1979"}, "verified": "confirmed", "approx": false, "kn_name": "ಬೆಂಗಳೂರು ಜಿಪಿಓ", "nearby": ["Cubbon Park", "Vidhana Soudha", "Government Museum"], "fact": "Bengaluru GPO on Cubbon Road dates to 1800 as a dispatch office; the current heritage building was completed in the 1930s and remains the city's postal headquarters."}, {"n": 16, "name": "High Court", "office_type": "SO", "office_type_full": "Sub Office", "pin": "560001", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 12.97724, "lng": 77.59152, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bengaluru", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಹೈಕೋರ್ಟ್", "nearby": ["Cubbon Park", "Vidhana Soudha", "Venkatappa Art Gallery"], "fact": "The Karnataka High Court (Attara Kacheri) is a striking red neoclassical building completed in 1868 under Tipu's successors and the British."}, {"n": 17, "name": "Dr Ambedkar Veedhi", "office_type": "SO", "office_type_full": "Sub Office", "pin": "560001", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 12.976838, "lng": 77.588609, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bengaluru", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಡಾ. ಅಂಬೇಡ್ಕರ್ ವೀಧಿ", "nearby": ["Vidhana Soudha", "Cubbon Park", "St. Mark's Cathedral"], "fact": "Dr Ambedkar Veedhi (formerly South Parade) is Bengaluru's ceremonial boulevard linking Vidhana Soudha to the High Court."}, {"n": 18, "name": "Basavanagudi", "office_type": "HO", "office_type_full": "Head Office", "pin": "560004", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 12.944813, "lng": 77.573937, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bengaluru", "ppc": {"motif": "Kempe Gowda Tower, Basavanagudi", "introduced": "09 October 2013"}, "verified": "confirmed", "approx": false, "kn_name": "ಬಸವನಗುಡಿ", "nearby": ["Bull Temple", "Dodda Ganesha Temple", "Lalbagh Botanical Garden"], "fact": "Basavanagudi, one of Bengaluru's oldest localities, is named after the Basavanna (bull) Temple; the annual Kadlekai Parishe groundnut fair has run here since 1537."}, {"n": 19, "name": "Rajajinagar", "office_type": "HO", "office_type_full": "Head Office", "pin": "560010", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 12.99341, "lng": 77.55438, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bengaluru", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ರಾಜಾಜಿನಗರ", "nearby": ["ISKCON Temple", "Orion Mall", "Navrang Theatre"], "fact": "Rajajinagar was developed in the 1950s as one of Bengaluru's first planned suburbs, named after C. Rajagopalachari."}, {"n": 20, "name": "Jayanagar 3rd Block", "office_type": "SO", "office_type_full": "Sub Office", "pin": "560011", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 12.930513, "lng": 77.583422, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bengaluru", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಜಯನಗರ", "nearby": ["Jayanagar 4th Block", "Lalbagh", "Ragigudda Anjaneya Temple"], "fact": "Jayanagar, laid out in the 1960s, was once Asia's largest planned residential layout; its 4th Block shopping complex defined Bengaluru retail for decades."}, {"n": 21, "name": "Science Institute", "office_type": "SO", "office_type_full": "Sub Office", "pin": "560012", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 13.01845, "lng": 77.56108, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bengaluru", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ", "nearby": ["IISc Campus", "C.V. Raman Museum", "Sankey Tank"], "fact": "The Indian Institute of Science campus (est. 1909, Jamsetji Tata's vision) is one of India's premier research institutions, set in 400 acres of green."}, {"n": 22, "name": "NAL", "office_type": "SO", "office_type_full": "Sub Office", "pin": "560017", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 12.95846, "lng": 77.66792, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bengaluru", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಎನ್ಎಎಲ್", "nearby": ["HAL Heritage Centre", "Cubbon Park", "Visvesvaraya Museum"], "fact": "The National Aerospace Laboratories campus in Kodihalli has been at the heart of India's indigenous aircraft programmes since 1959."}, {"n": 23, "name": "Museum Road", "office_type": "SO", "office_type_full": "Sub Office", "pin": "560025", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 12.97268, "lng": 77.60343, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bengaluru", "ppc": null, "verified": "near", "approx": false, "kn_name": "ಮ್ಯೂಜಿಯಂ ರೋಡ್", "nearby": ["Visvesvaraya Museum", "Government Museum", "Cubbon Park"], "fact": "Museum Road is home to the Visvesvaraya Industrial & Technological Museum (est. 1962), a beloved science museum for generations of schoolchildren."}, {"n": 24, "name": "Bannerghatta", "office_type": "SO", "office_type_full": "Sub Office", "pin": "560083", "district": "Bengaluru", "region": "Bengaluru region", "district_color": "#C7B741", "lat": 12.811588, "lng": 77.580516, "landscape": "forest", "theme": {"label": "Forest", "accent": "#2E6B4F", "soft": "#E3EFE7"}, "transit_town": "Bengaluru", "ppc": {"motif": "Malabar Banded Peacock", "introduced": "23 May 2009"}, "verified": "confirmed", "approx": false, "kn_name": "ಬನ್ನೇರುಘಟ್ಟ", "nearby": ["Bannerghatta National Park", "Suvarnamukhi Temple", "Bilikal Rangaswamy Betta"], "fact": "Bannerghatta, on Bengaluru's southern edge, is gateway to the Bannerghatta Biological Park — zoo, safari and butterfly park spread over 25,000 acres of forest."}, {"n": 25, "name": "Kamathana", "office_type": "SO", "office_type_full": "Sub Office", "pin": "585226", "district": "Bidar", "region": "North Karnataka", "district_color": "#41B1C7", "lat": 17.85556, "lng": 77.45303, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Bidar", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಕಾಮತಾನಾ", "nearby": ["Jain Temples", "Bidar Fort (25 km)", "Gurudwara Nanak Jhira"], "fact": "Kamthana (Kamtana) near Bidar is known for its historic Jain temples and as a center of the region's syncretic Deccan heritage."}, {"n": 26, "name": "Basavakalyana", "office_type": "SO", "office_type_full": "Sub Office", "pin": "585327", "district": "Bidar", "region": "North Karnataka", "district_color": "#41B1C7", "lat": 17.87082, "lng": 76.94745, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Bidar", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಬಸವಕಲ್ಯಾಣ", "nearby": ["Basava Samadhi", "Anubhava Mantapa", "Basavakalyana Fort"], "fact": "Ancient capital of the Kalyana Chalukyas and cradle of the 12th-century Lingayat movement — Basavanna established the Anubhava Mantapa, often called the world's first religious parliament, here."}, {"n": 27, "name": "Bidar", "office_type": "HO", "office_type_full": "Head Office", "pin": "585401", "district": "Bidar", "region": "North Karnataka", "district_color": "#41B1C7", "lat": 17.913012, "lng": 77.517109, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Bidar", "ppc": {"motif": "Madarsa of Mohammed Gawan", "introduced": "11 December 2005"}, "verified": "confirmed", "approx": false, "kn_name": "ಬೀದರ್", "nearby": ["Bidar Fort", "Bahmani Tombs (Ashtur)", "Chaubara"], "fact": "Capital of the Bahmani Sultanate and later the Barid Shahis; the city gave its name to Bidriware, the famous black-metal inlay craft."}, {"n": 28, "name": "Bidar Gurunanak Jhira", "office_type": "SO", "office_type_full": "Sub Office", "pin": "585402", "district": "Bidar", "region": "North Karnataka", "district_color": "#41B1C7", "lat": 17.92659, "lng": 77.50915, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Bidar", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಬೀದರ್ ಗುರುನಾನಕ್ ಜೀರಾ", "nearby": ["Gurudwara Nanak Jhira", "Bidar Fort", "Bahmani Tombs"], "fact": "Guru Nanak is believed to have struck a rock with his sword here in 1512, creating a freshwater spring (jhira) that still flows; it is one of Karnataka's most important Sikh pilgrimage sites."}, {"n": 29, "name": "Bandipur", "office_type": "BO", "office_type_full": "Branch Office", "pin": "571126", "district": "Chamarajanagar", "region": "Mysuru region", "district_color": "#C7418A", "lat": 11.66572, "lng": 76.62764, "landscape": "forest", "theme": {"label": "Forest", "accent": "#2E6B4F", "soft": "#E3EFE7"}, "transit_town": "Mysuru", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಬಂಡೀಪುರ", "nearby": ["Bandipur National Park", "Himavad Gopalaswamy Betta", "Bandipur Tiger Reserve"], "fact": "One of India's first tiger reserves, established in 1974 under Project Tiger, and part of the Nilgiri Biosphere Reserve — the country's largest protected forest landscape."}, {"n": 30, "name": "Kyathadevaragudi", "office_type": "BO", "office_type_full": "Branch Office", "pin": "571342", "district": "Chamarajanagar", "region": "Mysuru region", "district_color": "#C7418A", "lat": 11.93192, "lng": 76.95983, "landscape": "forest", "theme": {"label": "Forest", "accent": "#2E6B4F", "soft": "#E3EFE7"}, "transit_town": "Chamarajanagar", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಕ್ಯಾತದೇವರಗುಡಿ", "nearby": ["Biligiri Rangaswamy Temple", "K Gudi Forest Camp", "Biligiri Ranganatha Hills"], "fact": "A village at the foothills of the Biligiri Ranganatha Hills; the Biligiri Rangaswamy Temple atop the hills uniquely blends Vaishnavite worship with the traditions of the Soliga tribal community."}, {"n": 31, "name": "Male Mahadeshwara Hills", "office_type": "SO", "office_type_full": "Sub Office", "pin": "571490", "district": "Chamarajanagar", "region": "Mysuru region", "district_color": "#C7418A", "lat": 12.02989, "lng": 77.59035, "landscape": "hills", "theme": {"label": "Hills", "accent": "#4A7C59", "soft": "#E4F0E6"}, "transit_town": "Chamarajanagar", "ppc": null, "verified": "near", "approx": false, "kn_name": "ಮಲೆ ಮಹದೇಶ್ವರ ಬೆಟ್ಟ", "nearby": ["Male Mahadeshwara Temple", "Bheemeshwari", "Kaveri Wildlife Sanctuary"], "fact": "A major Shaivite pilgrimage center dedicated to Lord Mahadeshwara; the annual car festival here draws lakhs of devotees."}, {"n": 32, "name": "Nandi Hills", "office_type": "BO", "office_type_full": "Branch Office", "pin": "562101", "district": "Chikkaballapur", "region": "Bengaluru region", "district_color": "#62C741", "lat": 13.43373, "lng": 77.73108, "landscape": "hills", "theme": {"label": "Hills", "accent": "#4A7C59", "soft": "#E4F0E6"}, "transit_town": "Chikkaballapur", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ನಂದಿ ಬೆಟ್ಟ", "nearby": ["Bhoga Nandeeshwara Temple", "Tipu's Drop", "Muddenahalli (Visvesvaraya Memorial)"], "fact": "Tipu Sultan's summer retreat; the Bhoga Nandeeshwara Temple at its base dates to the 9th-century Nolamba dynasty and is among Karnataka's oldest temples."}, {"n": 33, "name": "Chikkamagaluru", "office_type": "HO", "office_type_full": "Head Office", "pin": "577101", "district": "Chikkamagaluru", "region": "Malnad", "district_color": "#4741C7", "lat": 13.31559, "lng": 75.77406, "landscape": "hills", "theme": {"label": "Hills", "accent": "#4A7C59", "soft": "#E4F0E6"}, "transit_town": "Kadur", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಚಿಕ್ಕಮಗಳೂರು", "nearby": ["Mullayyanagiri", "Baba Budan Giri", "Bhadra Wildlife Sanctuary"], "fact": "Birthplace of Indian coffee — legend says Baba Budan smuggled seven coffee beans from Yemen in 1670 and planted them on Chandragiri Hill."}, {"n": 34, "name": "Sringeri", "office_type": "SO", "office_type_full": "Sub Office", "pin": "577139", "district": "Chikkamagaluru", "region": "Malnad", "district_color": "#4741C7", "lat": 13.42502, "lng": 75.25499, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Shivamogga", "ppc": {"motif": "Vidyashankara Temple", "introduced": "27 January 1985"}, "verified": "approx", "approx": true, "kn_name": "ಶೃಂಗೇರಿ", "nearby": ["Sharadamba Temple", "Vidyashankara Temple", "Tunga River"], "fact": "The first of Adi Shankaracharya's four cardinal mathas, founded in the 8th century on the banks of the Tunga; the Vidyashankara Temple's zodiac pillars are aligned so sunlight falls on each in its solar month."}, {"n": 35, "name": "Chitradurga", "office_type": "HO", "office_type_full": "Head Office", "pin": "577501", "district": "Chitradurga", "region": "North Karnataka", "district_color": "#C76E41", "lat": 14.224687, "lng": 76.395641, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Chitradurga", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಚಿತ್ರದುರ್ಗ", "nearby": ["Chitradurga Fort", "Chandravalli", "Vani Vilas Sagar Dam"], "fact": "Immortalized by Onake Obavva, who single-handedly defended the fort against Hyder Ali's soldiers with a rice pounder (onake) in 1779."}, {"n": 36, "name": "Kateel", "office_type": "SO", "office_type_full": "Sub Office", "pin": "574148", "district": "Dakshina Kannada", "region": "Coastal", "district_color": "#41C795", "lat": 13.04507, "lng": 74.87079, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Mangaluru", "ppc": {"motif": "Sri Durga Parameshwari Temple, Kateel", "introduced": "11 October 2013"}, "verified": "approx", "approx": true, "kn_name": "ಕಟೀಲು", "nearby": ["Kateel Durgaparameshwari Temple", "Surathkal Beach", "Nandini River Island"], "fact": "A temple town on an island in the Nandini River, home to the Durgaparameshwari Temple; the town is a major center of Yakshagana performance."}, {"n": 37, "name": "Dharmasthala", "office_type": "SO", "office_type_full": "Sub Office", "pin": "574216", "district": "Dakshina Kannada", "region": "Coastal", "district_color": "#41C795", "lat": 12.95074, "lng": 75.38193, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Subrahmanya Road", "ppc": {"motif": "Sri Manjunatheswara Temple", "introduced": "02 January 1989"}, "verified": "approx", "approx": true, "kn_name": "ಧರ್ಮಸ್ಥಳ", "nearby": ["Manjunatha Temple", "Bahubali Statue", "Netravati River"], "fact": "A rare symbol of religious harmony — a Jain family, the Heggades, has administered this Shiva temple for over 800 years."}, {"n": 38, "name": "Moodabidri", "office_type": "SO", "office_type_full": "Sub Office", "pin": "574227", "district": "Dakshina Kannada", "region": "Coastal", "district_color": "#41C795", "lat": 13.07035, "lng": 74.99728, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Mangaluru", "ppc": {"motif": "Saavira Kambada Temple", "introduced": "16 December 2016"}, "verified": "approx", "approx": true, "kn_name": "ಮೂಡುಬಿದಿರೆ", "nearby": ["Saavira Kambada Basadi", "Guru Basadi", "Kere Basadi (Varanga)"], "fact": "Called the 'Jain Kashi of the South'; the 15th-century Saavira Kambada Basadi (Thousand Pillars Temple) is a Vijayanagara-era architectural masterpiece."}, {"n": 39, "name": "Subrahmanya", "office_type": "SO", "office_type_full": "Sub Office", "pin": "574238", "district": "Dakshina Kannada", "region": "Coastal", "district_color": "#41C795", "lat": 12.66606, "lng": 75.61336, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Subrahmanya Road", "ppc": {"motif": "Head of Serpent Vasuki", "introduced": "14 April 2005"}, "verified": "approx", "approx": true, "kn_name": "ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ", "nearby": ["Kukke Subramanya Temple", "Kumaradhara River", "Adi Subramanya Temple"], "fact": "One of India's most important serpent-worship (Naga) centers; devotees perform the Sarpa Samskara ritual here to relieve serpent curses."}, {"n": 40, "name": "Venur", "office_type": "SO", "office_type_full": "Sub Office", "pin": "574242", "district": "Dakshina Kannada", "region": "Coastal", "district_color": "#41C795", "lat": 13.0124, "lng": 75.14488, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Mangaluru", "ppc": {"motif": "Bahubali (Lord Gommateshwara Statue)", "introduced": "26 December 2016"}, "verified": "approx", "approx": true, "kn_name": "ವೇಣೂರು", "nearby": ["Bahubali Monolith", "Mahadeva Temple", "Moodbidri"], "fact": "Capital of the Ajila dynasty, which erected the 35-foot Bahubali monolith here in 1604."}, {"n": 41, "name": "Mangaluru", "office_type": "HO", "office_type_full": "Head Office", "pin": "575001", "district": "Dakshina Kannada", "region": "Coastal", "district_color": "#41C795", "lat": 12.85851, "lng": 74.83755, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Mangaluru", "ppc": {"motif": "Light House", "introduced": "11 September 1989"}, "verified": "confirmed", "approx": false, "kn_name": "ಮಂಗಳೂರು", "nearby": ["Panambur Beach", "Kadri Manjunatha Temple", "St. Aloysius Chapel"], "fact": "A historic port city named after Goddess Mangaladevi; the 9th-century Kadri Manjunatha Temple houses some of South India's oldest bronze statues."}, {"n": 42, "name": "Ullal", "office_type": "SO", "office_type_full": "Sub Office", "pin": "575020", "district": "Dakshina Kannada", "region": "Coastal", "district_color": "#41C795", "lat": 12.82115, "lng": 74.84169, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Mangaluru", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಉಳ್ಳಾಲ", "nearby": ["Ullal Beach", "Someshwara Temple", "Rani Abbakka Fort ruins"], "fact": "Ruled by Queen Rani Abbakka Chowta in the 16th century, one of India's earliest freedom fighters who repeatedly defeated the Portuguese."}, {"n": 43, "name": "Davangere", "office_type": "HO", "office_type_full": "Head Office", "pin": "577001", "district": "Davangere", "region": "North Karnataka", "district_color": "#BC41C7", "lat": 14.46893, "lng": 75.91995, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Davangere", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ದಾವಣಗೆರೆ", "nearby": ["Harihareshwara Temple (Harihar)", "Durgambika Temple", "Kunaduvadu Lake"], "fact": "Once called the 'Manchester of Karnataka' for its cotton mills; the city is famous for its benne (butter) dosa."}, {"n": 44, "name": "Narayanapura", "office_type": "SO", "office_type_full": "Sub Office", "pin": "580008", "district": "Dharwad", "region": "North Karnataka", "district_color": "#ABC741", "lat": 15.47028, "lng": 75.01811, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Hubballi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ನಾರಾಯಣಪುರ", "nearby": ["Nrupatunga Hill", "Karnataka College Dharwad", "Unkal Lake (Hubballi)"], "fact": "A locality in Dharwad, the cultural capital of North Karnataka — home to Karnatak University and birthplace of Hindustani legends like Bhimsen Joshi and Gangubai Hangal."}, {"n": 45, "name": "Hubli", "office_type": "HO", "office_type_full": "Head Office", "pin": "580020", "district": "Dharwad", "region": "North Karnataka", "district_color": "#ABC741", "lat": 15.35227, "lng": 75.14486, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Hubballi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಹುಬ್ಬಳ್ಳಿ", "nearby": ["Unkal Lake", "Chandramouleshwara Temple", "Nrupatunga Hill"], "fact": "North Karnataka's commercial capital; its historic railway workshop, established in 1880, is among India's oldest."}, {"n": 46, "name": "Annigeri", "office_type": "SO", "office_type_full": "Sub Office", "pin": "582201", "district": "Dharwad", "region": "North Karnataka", "district_color": "#ABC741", "lat": 15.4303, "lng": 75.43504, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Hubballi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಅಣ್ಣಿಗೇರಿ", "nearby": ["Amruteshwara Temple", "Gadag", "Lakkundi"], "fact": "Birthplace of Adikavi Pampa, the 10th-century 'father of Kannada poetry'; its Amruteshvara Temple is a fine example of Western Chalukya architecture."}, {"n": 47, "name": "Gadag", "office_type": "HO", "office_type_full": "Head Office", "pin": "582101", "district": "Gadag", "region": "North Karnataka", "district_color": "#4184C7", "lat": 15.432538, "lng": 75.636328, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Gadag", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಗದಗ", "nearby": ["Trikuteshwara Temple Complex", "Veera Narayana Temple", "Saraswati Temple"], "fact": "The Trikuteshwara Temple complex houses a shrine to Saraswati — rare in India; the poet Kumaravyasa composed his Kannada Mahabharata here in the 15th century."}, {"n": 48, "name": "Lakkundi", "office_type": "SO", "office_type_full": "Sub Office", "pin": "582115", "district": "Gadag", "region": "North Karnataka", "district_color": "#4184C7", "lat": 15.38891, "lng": 75.71913, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Gadag", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಲಕ್ಕುಂಡಿ", "nearby": ["Brahma Jinalaya", "Kashivishveshvara Temple", "Nanneshwara Temple"], "fact": "Once boasted over 100 temples; its stepwells (pushkarnis) and the 11th-century Kashivishveshvara Temple showcase the finest Western Chalukya architecture."}, {"n": 49, "name": "Belur", "office_type": "SO", "office_type_full": "Sub Office", "pin": "573115", "district": "Hassan", "region": "Malnad", "district_color": "#C7415D", "lat": 13.16307, "lng": 75.86258, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Hassan", "ppc": {"motif": "Darpana Sundari", "introduced": "02 January 1978"}, "verified": "approx", "approx": true, "kn_name": "ಬೇಲೂರು", "nearby": ["Chennakeshava Temple", "Yagachi Dam", "Halebidu"], "fact": "The Chennakeshava Temple, commissioned by Vishnuvardhana in 1117 CE, became a UNESCO World Heritage Site in 2023 as part of the Sacred Ensembles of the Hoysala."}, {"n": 50, "name": "Halebeedu", "office_type": "SO", "office_type_full": "Sub Office", "pin": "573121", "district": "Hassan", "region": "Malnad", "district_color": "#C7415D", "lat": 13.21416, "lng": 75.99405, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Hassan", "ppc": {"motif": "Shilabalikas", "introduced": "02 January 1978"}, "verified": "approx", "approx": true, "kn_name": "ಹಳೇಬೀಡು", "nearby": ["Hoysaleshwara Temple", "Kedareshwara Temple", "Belur"], "fact": "Former Hoysala capital (then called Dwarasamudra); the Hoysaleshwara Temple's outer walls narrate the Ramayana and Mahabharata in continuous stone friezes."}, {"n": 51, "name": "Shravanabelagola", "office_type": "SO", "office_type_full": "Sub Office", "pin": "573135", "district": "Hassan", "region": "Malnad", "district_color": "#C7415D", "lat": 12.8597, "lng": 76.48276, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Hassan", "ppc": {"motif": "Gommateshwara", "introduced": "02 January 1978"}, "verified": "approx", "approx": true, "kn_name": "ಶ್ರವಣಬೆಳಗೊಳ", "nearby": ["Gomateshwara Statue (Vindhyagiri)", "Chandragiri Hill", "Bhandara Basadi"], "fact": "Famous for the 57-foot monolithic Gomateshwara statue carved in 981 CE by Chamundaraya; the Mahamastakabhisheka is held every 12 years."}, {"n": 52, "name": "Ranebennur", "office_type": "MDG", "office_type_full": "Mukhy Dak Ghar", "pin": "581115", "district": "Haveri", "region": "North Karnataka", "district_color": "#41C74C", "lat": 14.621037, "lng": 75.632922, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Ranebennur", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ರಾಣೆಬೆನ್ನೂರು", "nearby": ["Ranebennur Blackbuck Sanctuary", "Shishuvinahala (Shishunala Sharif's town)", "Siddheshwara Temple, Haveri"], "fact": "Historic cotton trading center; its Blackbuck Sanctuary protects the endangered blackbuck and great Indian bustard."}, {"n": 53, "name": "Shishuvinahal", "office_type": "BO", "office_type_full": "Branch Office", "pin": "581126", "district": "Haveri", "region": "North Karnataka", "district_color": "#41C74C", "lat": 15.09655, "lng": 75.32394, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Haveri", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಶಿಶುವಿನಹಾಳ", "nearby": ["Shishunala Sharif Dargah", "Ranebennur Blackbuck Sanctuary", "Siddheshwara Temple, Haveri"], "fact": "Birthplace of saint-poet Shishunala Sharif (1819-1889), Karnataka's Kabir; devotees of all faiths visit here."}, {"n": 54, "name": "Kalaburagi", "office_type": "HO", "office_type_full": "Head Office", "pin": "585101", "district": "Kalaburagi", "region": "North Karnataka", "district_color": "#7441C7", "lat": 17.341438, "lng": 76.834609, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Kalaburagi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಕಲಬುರಗಿ", "nearby": ["Khwaja Bande Nawaz Dargah", "Kalaburagi Fort", "Sharana Basaveshwara Temple"], "fact": "Capital of the Bahmani Sultans from 1347 to 1425; the Jama Masjid built in 1367 is among India's oldest mosques."}, {"n": 55, "name": "Madikeri", "office_type": "HO", "office_type_full": "Head Office", "pin": "571201", "district": "Kodagu", "region": "Malnad", "district_color": "#C79B41", "lat": 12.42244, "lng": 75.74029, "landscape": "hills", "theme": {"label": "Hills", "accent": "#4A7C59", "soft": "#E4F0E6"}, "transit_town": "Mysuru", "ppc": {"motif": "Odikathi and Peechikathi", "introduced": "01 April 1992"}, "verified": "confirmed", "approx": false, "kn_name": "ಮಡಿಕೇರಿ", "nearby": ["Raja's Seat", "Abbey Falls", "Omkareshwara Temple"], "fact": "Capital of Kodagu; the Madikeri Fort was ruled by Kodagu kings; the name evolved from Muddurajakeri to Madikeri."}, {"n": 56, "name": "Nagarahole", "office_type": "BO", "office_type_full": "Branch Office", "pin": "571258", "district": "Kodagu", "region": "Malnad", "district_color": "#C79B41", "lat": 12.03144, "lng": 76.12068, "landscape": "forest", "theme": {"label": "Forest", "accent": "#2E6B4F", "soft": "#E3EFE7"}, "transit_town": "Mysuru", "ppc": {"motif": "Gloriosa Superba (Wild Lily)", "introduced": "06 November 1987"}, "verified": "approx", "approx": true, "kn_name": "ನಾಗರಹೊಳೆ", "nearby": ["Nagarhole National Park", "Irupu Falls", "Brahmagiri Hills"], "fact": "A major tiger reserve in the Nilgiri Biosphere; famous for elephant sightings at the Kabini backwaters."}, {"n": 57, "name": "Oorgaum", "office_type": "SO", "office_type_full": "Sub Office", "pin": "563120", "district": "Kolar", "region": "Bengaluru region", "district_color": "#41C7C2", "lat": 12.954913, "lng": 78.256859, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Bangarapet", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಊರಗಾಮ್", "nearby": ["KGF Gold Mine heritage sites", "Kolaramma Temple, Kolar", "Kotilingeshwara Temple"], "fact": "Historic Kolar Gold Fields town; the Champion Reef mine was among the world's deepest at about 3.2 km."}, {"n": 58, "name": "Masthi", "office_type": "SO", "office_type_full": "Sub Office", "pin": "563139", "district": "Kolar", "region": "Bengaluru region", "district_color": "#41C7C2", "lat": 12.87178, "lng": 77.99655, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Malur", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಮಸ್ತಿ", "nearby": ["Masti Venkatesha Iyengar Memorial", "Kotilingeshwara Temple", "Antaragange, Kolar"], "fact": "Birthplace of Jnanpith laureate Masti Venkatesha Iyengar; his novel Chikaveera Rajendra won the Jnanpith in 1983."}, {"n": 59, "name": "Anegundi", "office_type": "BO", "office_type_full": "Branch Office", "pin": "583227", "district": "Koppal", "region": "North Karnataka", "district_color": "#C741A5", "lat": 15.35011, "lng": 76.4355, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Hosapete", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಆನೆಗುಂದಿ", "nearby": ["Hampi (across Tungabhadra)", "Pampa Sarovara", "Anjanadri Hill"], "fact": "Believed to be the Kishkindha of Ramayana; older than Hampi, with Neolithic and Vijayanagara remains."}, {"n": 60, "name": "Koppal", "office_type": "HO", "office_type_full": "Head Office", "pin": "583231", "district": "Koppal", "region": "North Karnataka", "district_color": "#C741A5", "lat": 15.349312, "lng": 76.153813, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Koppal", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಕೊಪ್ಪಳ", "nearby": ["Koppal Fort", "Mahadeva Temple, Itagi", "Huligemma Temple, Huligi"], "fact": "Koppal Fort witnessed the famous 1790-91 siege during the Third Anglo-Mysore War; it was a Jain center in Western Chalukya times."}, {"n": 61, "name": "Kokkare Bellur", "office_type": "BO", "office_type_full": "Branch Office", "pin": "571433", "district": "Mandya", "region": "Mysuru region", "district_color": "#7EC741", "lat": 12.52017, "lng": 77.0878, "landscape": "riverside", "theme": {"label": "Riverside", "accent": "#3E8E8A", "soft": "#E0F2F0"}, "transit_town": "Maddur", "ppc": {"motif": "Flying Pelican", "introduced": "28 January 1992"}, "verified": "approx", "approx": true, "kn_name": "ಕೊಕ್ಕರೆಬೆಲ್ಲೂರು", "nearby": ["Kokkarebellur Bird Sanctuary", "Ranganathittu Bird Sanctuary", "Srirangapatna"], "fact": "One of India's oldest community-protected bird sanctuaries; villagers have protected painted storks and pelicans for generations as family."}, {"n": 62, "name": "Srirangapatna", "office_type": "HO", "office_type_full": "Head Office", "pin": "571438", "district": "Mandya", "region": "Mysuru region", "district_color": "#7EC741", "lat": 12.41669, "lng": 76.69417, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Srirangapatna", "ppc": {"motif": "Mausoleum of Tipu Sultan (20 Oct 1978) + Sword & Headgear of Tipu Sultan (20 Jun 1987)", "introduced": "20 October 1978 / 20 June 1987"}, "verified": "approx", "approx": true, "kn_name": "ಶ್ರೀರಂಗಪಟ್ಟಣ", "nearby": ["Ranganathaswamy Temple", "Tipu's Summer Palace (Daria Daulat)", "Ranganathittu Bird Sanctuary"], "fact": "Tipu Sultan's island fort capital; Tipu fell here in the 1799 siege; the town is named after the 9th-century Ranganathaswamy Temple."}, {"n": 63, "name": "Mysuru", "office_type": "HO", "office_type_full": "Head Office", "pin": "570001", "district": "Mysuru", "region": "Mysuru region", "district_color": "#4157C7", "lat": 12.31385, "lng": 76.65674, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Mysuru", "ppc": {"motif": "Elephant carrying Howdah", "introduced": "11 October 2002"}, "verified": "confirmed", "approx": false, "kn_name": "ಮೈಸೂರು", "nearby": ["Mysuru Palace", "Chamundi Hill", "Brindavan Gardens"], "fact": "Former Wodeyar capital; famous for the centuries-old Dasara Jumbo Savari tradition; Mysuru Palace is among India's most-visited monuments."}, {"n": 64, "name": "Lakshmipuram", "office_type": "SO", "office_type_full": "Sub Office", "pin": "570004", "district": "Mysuru", "region": "Mysuru region", "district_color": "#4157C7", "lat": 12.29692, "lng": 76.6457, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Mysuru", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಲಕ್ಷ್ಮೀಪುರಂ", "nearby": ["Mysuru Palace", "Kukkarahalli Lake", "Chamundi Hill"], "fact": "One of Mysuru's oldest planned localities, developed in the early 20th century during Wodeyar rule."}, {"n": 65, "name": "Saraswathipuram", "office_type": "HO", "office_type_full": "Head Office", "pin": "570009", "district": "Mysuru", "region": "Mysuru region", "district_color": "#4157C7", "lat": 12.303438, "lng": 76.629688, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Mysuru", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಸರಸ್ವತೀಪುರಂ", "nearby": ["Manasagangotri (Mysore University)", "Kukkarahalli Lake", "Mysuru Palace"], "fact": "Locality named after goddess Saraswati; home to the University of Mysore's Manasagangotri campus."}, {"n": 66, "name": "Chamundi Betta", "office_type": "BO", "office_type_full": "Branch Office", "pin": "570010", "district": "Mysuru", "region": "Mysuru region", "district_color": "#4157C7", "lat": 12.27462, "lng": 76.67061, "landscape": "hills", "theme": {"label": "Hills", "accent": "#4A7C59", "soft": "#E4F0E6"}, "transit_town": "Mysuru", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಚಾಮುಂಡಿ ಬೆಟ್ಟ", "nearby": ["Chamundeshwari Temple", "Monolithic Nandi", "Mysuru Palace"], "fact": "The Chamundeshwari Temple atop this 3,489-ft hill; the massive monolithic Nandi was carved in 1659 during Dodda Devaraja Wodeyar's reign."}, {"n": 67, "name": "SGS Ashram", "office_type": "SO", "office_type_full": "Sub Office", "pin": "570025", "district": "Mysuru", "region": "Mysuru region", "district_color": "#4157C7", "lat": 12.28355, "lng": 76.65906, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Mysuru", "ppc": {"motif": "Nada Mantapa", "introduced": "31 May 2008"}, "verified": "approx", "approx": true, "kn_name": "ಎಸ್.ಜಿ.ಎಸ್. ಆಶ್ರಮ", "nearby": ["Chamundi Hill", "Shuka Vana (Parrot Park)", "Mysuru Palace"], "fact": "Sri Ganapati Sachchidananda Swamiji's ashram; known for the Shuka Vana with 500+ parrots and a world-famous bonsai collection."}, {"n": 68, "name": "Somanathapura", "office_type": "BO", "office_type_full": "Branch Office", "pin": "571120", "district": "Mysuru", "region": "Mysuru region", "district_color": "#4157C7", "lat": 12.27599, "lng": 76.88202, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Mysuru", "ppc": {"motif": "Lord Somanatha Temple", "introduced": "08 September 1989"}, "verified": "approx", "approx": true, "kn_name": "ಸೋಮನಾಥಪುರ", "nearby": ["Chennakeshava Temple", "Talakad Panchalinga Temples", "Mallikarjuna Temple, Mudukuthore"], "fact": "The Chennakeshava Temple built in 1268 by Hoysala general Somanatha became a UNESCO World Heritage Site in 2023."}, {"n": 69, "name": "Talakad", "office_type": "SO", "office_type_full": "Sub Office", "pin": "571122", "district": "Mysuru", "region": "Mysuru region", "district_color": "#4157C7", "lat": 12.19269, "lng": 77.02772, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Mysuru", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ತಲಕಾಡು", "nearby": ["Vaidyanatheshwara Temple", "Panchalinga Temples", "Kaveri River sand dunes"], "fact": "Ancient Ganga capital buried under sand dunes; famous for the legend of Alamelamma's 1610 curse on Talakad."}, {"n": 70, "name": "Bichali", "office_type": "BO", "office_type_full": "Branch Office", "pin": "584140", "district": "Raichur", "region": "North Karnataka", "district_color": "#C75241", "lat": 15.95843, "lng": 77.32276, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Raichur", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಬಿಚ್ಚಾಲಿ", "nearby": ["Raghavendra Swamy Temple, Bichali", "Raichur Fort", "Tungabhadra River bank"], "fact": "Revered in Madhva tradition as Appanacharya's town; Sri Raghavendra Swamy is believed to have appeared to Appanacharya here."}, {"n": 71, "name": "Helagali", "office_type": "BO", "office_type_full": "Branch Office", "pin": "562117", "district": "Ramanagara", "region": "Bengaluru region", "district_color": "#41C779", "lat": 12.5513, "lng": 77.42313, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Ramanagara", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಹೆಲಗಾಳಿ", "nearby": ["Ramadevara Betta", "Janapada Loka", "Channapatna Toys"], "fact": "Village near Ramanagara's granite hills; Ramadevara Betta was a filming location for the 1975 film Sholay."}, {"n": 72, "name": "Agumbe", "office_type": "SO", "office_type_full": "Sub Office", "pin": "577411", "district": "Shivamogga", "region": "Malnad", "district_color": "#A141C7", "lat": 13.51173, "lng": 75.15791, "landscape": "forest", "theme": {"label": "Forest", "accent": "#2E6B4F", "soft": "#E3EFE7"}, "transit_town": "Udupi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಆಗುಂಬೆ", "nearby": ["Agumbe Sunset Point", "Barkana Falls", "Onake Abbi Falls"], "fact": "Called the Cherrapunji of the South, among India's wettest places; famous for king cobra conservation work."}, {"n": 73, "name": "Kendalbailu", "office_type": "BO", "office_type_full": "Branch Office", "pin": "577411", "district": "Shivamogga", "region": "Malnad", "district_color": "#A141C7", "lat": 13.75021, "lng": 75.20085, "landscape": "forest", "theme": {"label": "Forest", "accent": "#2E6B4F", "soft": "#E3EFE7"}, "transit_town": "Shivamogga", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಕೆಂದಾಳಬೈಲು", "nearby": ["Agumbe", "Kundadri Hill", "Thirthahalli"], "fact": "A Malnad village in the Western Ghats foothills; part of the areca-growing, heavy-monsoon region."}, {"n": 74, "name": "Devangi", "office_type": "SO", "office_type_full": "Sub Office", "pin": "577415", "district": "Shivamogga", "region": "Malnad", "district_color": "#A141C7", "lat": 13.62838, "lng": 75.28355, "landscape": "forest", "theme": {"label": "Forest", "accent": "#2E6B4F", "soft": "#E3EFE7"}, "transit_town": "Shivamogga", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ದೇವಂಗಿ", "nearby": ["Shivamogga City", "Gajanur Dam", "Sakrebailu Elephant Camp"], "fact": "A Malnad village in Shivamogga district; part of the Tunga river valley's paddy-areca farmland."}, {"n": 75, "name": "Jog Falls", "office_type": "SO", "office_type_full": "Sub Office", "pin": "577435", "district": "Shivamogga", "region": "Malnad", "district_color": "#A141C7", "lat": 14.20995, "lng": 74.81566, "landscape": "riverside", "theme": {"label": "Riverside", "accent": "#3E8E8A", "soft": "#E0F2F0"}, "transit_town": "Talguppa", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಜೋಗ ಜಲಪಾತ", "nearby": ["Raja/Rani/Roarer/Rocket viewpoints", "Linganamakki Dam", "Sharavati Valley"], "fact": "Formed by the Sharavati, at ~253m it's India's second-highest waterfall; in monsoon the Raja, Rani, Roarer and Rocket streams thunder together."}, {"n": 76, "name": "Humcha", "office_type": "BO", "office_type_full": "Branch Office", "pin": "577436", "district": "Shivamogga", "region": "Malnad", "district_color": "#A141C7", "lat": 13.86369, "lng": 75.20667, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Shivamogga", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಹುಂಚ", "nearby": ["Humcha Jain Matha & Padmavati Temple", "Kuppalli (Kuvempu's birthplace)", "Jog Falls"], "fact": "Humcha was the capital of the Santara dynasty, and its Jain matha — established in the 8th century — is one of the oldest Jain monasteries in Karnataka, centred on the Padmavati shrine."}, {"n": 77, "name": "Siddaganga Mutt", "office_type": "SO", "office_type_full": "Sub Office", "pin": "572104", "district": "Tumakuru", "region": "Bengaluru region", "district_color": "#C7C741", "lat": 13.32234, "lng": 77.14891, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Tumakuru", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಸಿದ್ದಗಂಗಾ ಮಠ", "nearby": ["Siddaganga Matha", "Namada Chilume", "Devarayanadurga Hills"], "fact": "The Siddaganga Mutt's free residential Gurukula, nurtured by Shivakumara Swamiji, has educated lakhs of rural children regardless of caste or means."}, {"n": 78, "name": "Hirehalli", "office_type": "SO", "office_type_full": "Sub Office", "pin": "572168", "district": "Tumakuru", "region": "Bengaluru region", "district_color": "#C7C741", "lat": 13.28266, "lng": 77.18462, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Tumakuru", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಹಿರೇಹಳ್ಳಿ", "nearby": ["Namada Chilume", "Devarayanadurga", "Siddaganga Mutt"], "fact": "Hirehalli lies in Tumakuru's coconut country, close to the Ramayana-linked Namada Chilume spring and the Devarayanadurga hill temples."}, {"n": 79, "name": "Karkala", "office_type": "HO", "office_type_full": "Head Office", "pin": "574104", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.212787, "lng": 74.994703, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Udupi", "ppc": {"motif": "Seated Tirthankara", "introduced": "05 February 1991"}, "verified": "confirmed", "approx": false, "kn_name": "ಕಾರ್ಕಳ", "nearby": ["Bahubali (Gomateshwara) Monolith", "Chaturmukha Basadi", "St. Lawrence Basilica, Attur"], "fact": "Karkala's 42-foot Bahubali monolith, installed in 1432 CE by Veera Pandya Bhairarasa, is the second-tallest monolithic Bahubali statue in the world after Shravanabelagola."}, {"n": 80, "name": "Katapadi", "office_type": "SO", "office_type_full": "Sub Office", "pin": "574105", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.28445, "lng": 74.75032, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Udupi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಕಟಪಾಡಿ", "nearby": ["Kaup Beach & Lighthouse", "Udupi Krishna Matha", "Malpe Beach"], "fact": "Katapadi is a coastal highway town just south of Udupi, best known as the turn-off for the 1901 Kaup lighthouse beach."}, {"n": 81, "name": "Kaup", "office_type": "SO", "office_type_full": "Sub Office", "pin": "574106", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.23617, "lng": 74.74631, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Udupi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಕಾಪು", "nearby": ["Kaup Lighthouse (1901)", "Kaup Beach", "St. Mary's Island, Malpe"], "fact": "Kaup's 27-metre lighthouse, built in 1901, still guides ships along the Karavali coast; the adjoining Mariamma temple beach is a popular sunset spot."}, {"n": 82, "name": "Varanga", "office_type": "BO", "office_type_full": "Branch Office", "pin": "574108", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.38371, "lng": 75.00196, "landscape": "lake", "theme": {"label": "Lake", "accent": "#2F6F9F", "soft": "#E0EFF7"}, "transit_town": "Udupi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ವರಂಗ", "nearby": ["Kere Basadi (Lake Temple)", "Karkala Bahubali", "Someshwara Wildlife Sanctuary"], "fact": "Varanga's 12th-century Kere Basadi — a Jain temple to Parshwanatha standing in the middle of a lake — is one of Karnataka's most photographed shrines."}, {"n": 83, "name": "Shankarapura", "office_type": "SO", "office_type_full": "Sub Office", "pin": "574115", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.25955, "lng": 74.77012, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Udupi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಶಂಕರಪುರ", "nearby": ["Udupi Krishna Matha", "Malpe Beach", "St. Mary's Island"], "fact": "Shankarapura is home to the GI-tagged Udupi Mallige (Shankarapura jasmine), famed for its intense fragrance."}, {"n": 84, "name": "Udupi", "office_type": "HO", "office_type_full": "Head Office", "pin": "576101", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.340613, "lng": 74.748797, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Udupi", "ppc": {"motif": "Sri Krishna, Udupi Temple", "introduced": "23 January 1985"}, "verified": "confirmed", "approx": false, "kn_name": "ಉಡುಪಿ", "nearby": ["Sri Krishna Matha", "Malpe Beach", "St. Mary's Island"], "fact": "Madhvacharya founded the Krishna Matha here in the 13th century; the Kanakana Kindi is the window through which the saint Kanakadasa is believed to have seen the deity turn towards him."}, {"n": 85, "name": "Manipal", "office_type": "HO", "office_type_full": "Head Office", "pin": "576104", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.348937, "lng": 74.785937, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Udupi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಮಣಿಪಾಲ್", "nearby": ["Manipal Lake", "Udupi Krishna Matha", "Malpe Beach"], "fact": "Manipal rose from a barren hillock into a global education hub after T.M.A. Pai founded Kasturba Medical College here in 1953 — India's first private medical college."}, {"n": 86, "name": "Malpe", "office_type": "SO", "office_type_full": "Sub Office", "pin": "576108", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.34737, "lng": 74.723, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Udupi", "ppc": {"motif": "St. Mary's Islands", "introduced": "13 February 2015"}, "verified": "approx", "approx": true, "kn_name": "ಮಲ್ಪೆ", "nearby": ["St. Mary's Island", "Malpe Beach", "Sea Walk, Malpe"], "fact": "Malpe is Karnataka's largest fishing harbour; nearby St. Mary's Island has 88-million-year-old columnar basalt formations, and Vasco da Gama is said to have landed there in 1498."}, {"n": 87, "name": "Nandalike", "office_type": "BO", "office_type_full": "Branch Office", "pin": "576111", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.22165, "lng": 74.98529, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Udupi", "ppc": {"motif": "Kannada poet and writer Muddana, Nandalike", "introduced": "24 February 2015"}, "verified": "approx", "approx": true, "kn_name": "ನಂದಳಿಕೆ", "nearby": ["Mahalingeshwara Temple, Nandalike", "Karkala Bahubali", "Varanga Kere Basadi"], "fact": "Nandalike is the birthplace of Mahakavi Muddana (Nandalike Lakshmi Narayanappa), the Kannada poet famed for 'Ramashvamedha'; its Mahalingeshwara temple is over 1,000 years old."}, {"n": 88, "name": "Someshwara", "office_type": "BO", "office_type_full": "Branch Office", "pin": "576112", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.49038, "lng": 75.06775, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Udupi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಸೋಮೇಶ್ವರ", "nearby": ["Someshwara Wildlife Sanctuary", "Agumbe", "Kudlu Teertha Falls"], "fact": "The Someshwara Wildlife Sanctuary protects evergreen Western Ghats forest on the Mookambika corridor, sheltering lion-tailed macaques and the great Indian hornbill."}, {"n": 89, "name": "Attur", "office_type": "BO", "office_type_full": "Branch Office", "pin": "576117", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.20793, "lng": 74.97171, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Udupi", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಅತ್ತೂರು", "nearby": ["St. Lawrence Basilica", "Karkala Bahubali", "Chaturmukha Basadi"], "fact": "St. Lawrence Basilica at Attur-Karkala is a minor basilica and one of coastal Karnataka's biggest pilgrimage centres, drawing lakhs for the January annual feast."}, {"n": 90, "name": "Kundapura", "office_type": "HO", "office_type_full": "Head Office", "pin": "576201", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.631913, "lng": 74.691859, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Udupi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಕುಂದಾಪುರ", "nearby": ["Kodi Beach", "Maravanthe Beach", "Kollur Mookambika Temple"], "fact": "Kundapura takes its name from the Kundeshwara Shiva temple of the Alupa era; just north, the highway at Maravanthe runs between the Souparnika river and the sea."}, {"n": 91, "name": "Barkur", "office_type": "SO", "office_type_full": "Sub Office", "pin": "576210", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.46477, "lng": 74.74583, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Udupi", "ppc": {"motif": "Kathale Basadi", "introduced": "12 February 2015"}, "verified": "approx", "approx": true, "kn_name": "ಬಾರ್ಕೂರು", "nearby": ["Alupa-era temples of Barkur", "Kotilingeshwara Temple, Koteshwara", "Malpe Beach"], "fact": "Barkur was the capital of the Alupa dynasty, among the longest-ruling dynasties of the Karnataka coast; tradition holds 365 temples once stood here."}, {"n": 92, "name": "Kollur", "office_type": "SO", "office_type_full": "Sub Office", "pin": "576220", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.86269, "lng": 74.81087, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Mookambika Road", "ppc": {"motif": "Kollur Mookambika Temple", "introduced": "13 October 2002"}, "verified": "confirmed", "approx": false, "kn_name": "ಕೊಲ್ಲೂರು", "nearby": ["Mookambika Temple", "Kodachadri", "Arishina Gundi Falls"], "fact": "The Mookambika Temple at Kollur is one of the seven sacred Muktisthalas of Karnataka; Adi Shankaracharya is believed to have installed the deity here."}, {"n": 93, "name": "Kota", "office_type": "SO", "office_type_full": "Sub Office", "pin": "576221", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.52753, "lng": 74.70483, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Udupi", "ppc": null, "verified": "confirmed", "approx": false, "kn_name": "ಕೋಟ", "nearby": ["Kotilingeshwara Temple, Koteshwara", "Kodi Beach", "Kundapura"], "fact": "Kota (Koteshwara) is one of the seven Mukti Sthalas of Parashurama Kshetra; its ancient Kotilingeshwara Shiva temple hosts the famous Kodi Habba car festival."}, {"n": 94, "name": "Mandarthi", "office_type": "SO", "office_type_full": "Sub Office", "pin": "576223", "district": "Udupi", "region": "Coastal", "district_color": "#41A0C7", "lat": 13.49617, "lng": 74.81134, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Udupi", "ppc": {"motif": "Yakshagana of Mandarthi", "introduced": "14 October 2005"}, "verified": "confirmed", "approx": false, "kn_name": "ಮಂದಾರ್ತಿ", "nearby": ["Durgaparameshwari Temple", "Kundapura", "Kodi Beach"], "fact": "Mandarthi is known for the ancient Durgaparameshwari Temple, a Shakti shrine whose annual Rathotsava draws devotees from across the coast."}, {"n": 95, "name": "Manjuguni", "office_type": "BO", "office_type_full": "Branch Office", "pin": "581315", "district": "Uttara Kannada", "region": "Coastal", "district_color": "#C74178", "lat": 14.5678, "lng": 74.66958, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Kumta", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಮಂಜುಗುಣಿ", "nearby": ["Sirsi (Marikamba Temple)", "Sahasralinga", "Benne Hole Falls"], "fact": "Manjuguni's 1,000-year-old Venkataramana Temple is called the 'Tirupati of Karnataka'; winter fog (manju) over the Sahyadri forests gives the village its name."}, {"n": 96, "name": "Murudeshwara", "office_type": "SO", "office_type_full": "Sub Office", "pin": "581350", "district": "Uttara Kannada", "region": "Coastal", "district_color": "#C74178", "lat": 14.09475, "lng": 74.48993, "landscape": "coastal", "theme": {"label": "Coastal", "accent": "#2A7FA8", "soft": "#E0F0F7"}, "transit_town": "Murdeshwar", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಮುರುಡೇಶ್ವರ", "nearby": ["Murudeshwara Temple & Shiva Statue", "Netrani Island", "Murudeshwara Beach"], "fact": "Murudeshwara's 123-foot Shiva statue and 20-storey gopuram were built by R.N. Shetty; the temple's origin lies in the legend of Ravana's Atma-Linga."}, {"n": 97, "name": "Hampi", "office_type": "SO", "office_type_full": "Sub Office", "pin": "583239", "district": "Vijayanagara", "region": "North Karnataka", "district_color": "#51C741", "lat": 15.32637, "lng": 76.45588, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Hosapete", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಹಂಪಿ", "nearby": ["Virupaksha Temple", "Vittala Temple & Stone Chariot", "Matanga Hill"], "fact": "Hampi, a UNESCO World Heritage Site, was the capital of the Vijayanagara Empire — around 1500 CE it was among the world's largest cities."}, {"n": 98, "name": "Kannada University Campus", "office_type": "SO", "office_type_full": "Sub Office", "pin": "583276", "district": "Vijayanagara", "region": "North Karnataka", "district_color": "#51C741", "lat": 15.28607, "lng": 76.49164, "landscape": "heritage", "theme": {"label": "Heritage", "accent": "#B4622A", "soft": "#F7E9DB"}, "transit_town": "Hosapete", "ppc": {"motif": "Sloth Bear", "introduced": "05 January 2011"}, "verified": "approx", "approx": true, "kn_name": "ಕನ್ನಡ ವಿಶ್ವವಿದ್ಯಾಲಯ ಆವರಣ", "nearby": ["Hampi (Virupaksha Temple)", "Tungabhadra Dam", "Anegundi"], "fact": "Kannada University at Vidyaranya (est. 1991), beside Hampi, is dedicated to Kannada language, literature and culture, and publishes the definitive Kannada encyclopedia."}, {"n": 99, "name": "Vijayapura", "office_type": "HO", "office_type_full": "Head Office", "pin": "586101", "district": "Vijayapura", "region": "North Karnataka", "district_color": "#5841C7", "lat": 16.829913, "lng": 75.716078, "landscape": "urban", "theme": {"label": "Urban", "accent": "#5A6B7C", "soft": "#E8ECF0"}, "transit_town": "Vijayapura", "ppc": {"motif": "Gol Gumbaz", "introduced": "28 September 1987"}, "verified": "confirmed", "approx": false, "kn_name": "ವಿಜಯಪುರ", "nearby": ["Gol Gumbaz", "Ibrahim Rauza", "Bara Kaman"], "fact": "Gol Gumbaz (1656) has the world's second-largest dome, with a whispering gallery where the faintest sound echoes; Vijayapura was the Adil Shahi capital."}, {"n": 100, "name": "Bonhal", "office_type": "BO", "office_type_full": "Branch Office", "pin": "585290", "district": "Yadgir", "region": "North Karnataka", "district_color": "#C77F41", "lat": 16.57304, "lng": 77.25328, "landscape": "plains", "theme": {"label": "Plains", "accent": "#A8894A", "soft": "#F5EEDC"}, "transit_town": "Yadgir", "ppc": null, "verified": "approx", "approx": true, "kn_name": "ಬೋನಾಳ್", "nearby": ["Bonal Bird Sanctuary", "Shorapur"], "fact": "The Bonal Bird Sanctuary, about a kilometre north of this Shorapur-taluk village, is a seasonal haven for migratory waterbirds in Yadgir district."}];

/* ================= state ================= */
const LS_KEY = "stampquest_v1";
let state = { visited:{}, planned:{}, theme:"light", lang:"en", firstRun:false, milestones:[], sharePhotos:false };
try { const s = JSON.parse(localStorage.getItem(LS_KEY)); if (s && typeof s === "object") state = Object.assign(state, s); } catch(e){}
function save(){ try{ localStorage.setItem(LS_KEY, JSON.stringify(state)); }catch(e){} }
const byN = {}; LOCATIONS.forEach(l => byN[l.n] = l);
const statusOf = n => state.visited[n] ? "visited" : (state.planned[n] ? "planned" : "unvisited");
const visitedCount = () => LOCATIONS.filter(l => state.visited[l.n]).length;

/* ================= helpers ================= */
const $ = id => document.getElementById(id);
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
// Focus trap utility: traps Tab/Shift+Tab within container, restores focus on close
function trapFocus(container, onClose){
  const prevFocus = document.activeElement;
  const sel = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  function handler(e){
    if (e.key === "Escape" && onClose){ onClose(); return; }
    if (e.key !== "Tab") return;
    const items = [...container.querySelectorAll(sel)].filter(el => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], last = items[items.length-1];
    if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
  container.addEventListener("keydown", handler);
  // Focus first focusable element
  const first = container.querySelector(sel);
  if (first) first.focus();
  return function release(){
    container.removeEventListener("keydown", handler);
    if (prevFocus && prevFocus.focus) prevFocus.focus();
  };
}

function toast(msg, undoFn){ const t = $("toast"); t.innerHTML = "";
  const s = document.createElement("span"); s.textContent = msg; t.appendChild(s);
  if (undoFn){
    const b = document.createElement("button");
    b.textContent = "Undo"; b.className = "toast-undo";
    b.onclick = (e) => { e.stopPropagation(); t.classList.remove("show"); undoFn(); };
    t.appendChild(b);
  }
  t.classList.add("show");
  clearTimeout(t._h); t._h = setTimeout(()=>t.classList.remove("show"), 4000); }
function gmapsDir(lat,lng){ return "https://www.google.com/maps/dir/?api=1&destination="+lat+","+lng; }
function gmapsSearch(l){ return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(l.name+" post office "+l.pin+", Karnataka"); }
function reportLink(l){
  const title = encodeURIComponent("Location report: #"+l.n+" "+l.name);
  const body = encodeURIComponent("Office #"+l.n+" — "+l.name+" ("+l.pin+")\n\nWhat is wrong with the location:\n");
  return "https://github.com/nyx4088/karnataka-philately-passport/issues/new?title="+title+"&body="+body;
}
function gmapsPhotos(l){ return "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(l.name+" "+l.office_type_full+" "+l.transit_town+" "+l.pin); }
function fullName(l){ return l.name + (l.office_type_full ? " " + l.office_type_full : ""); }
function havKm(a,b,c,d){ const R=6371, r=x=>x*Math.PI/180, dLa=r(c-a), dLo=r(d-b);
  const h=Math.sin(dLa/2)**2 + Math.cos(r(a))*Math.cos(r(c))*Math.sin(dLo/2)**2; return 2*R*Math.asin(Math.sqrt(h)); }

/* ================= theme ================= */
function applyTheme(){ document.documentElement.dataset.theme = state.theme;
  $("themeToggle").checked = state.theme === "dark";
  $("sharePhotosToggle").checked = !!state.sharePhotos;
  document.querySelector('meta[name="theme-color"]').content = state.theme === "dark" ? "#16120F" : "#F3EBD8"; }

/* ================= map ================= */
const map = L.map("map", { zoomControl:false, attributionControl:true, zoomSnap:0.1, zoomDelta:0.5, bounceAtZoomLimits:false }).setView([15.0, 76.6], 7);
// (zoom lives in the glass rail; no default Leaflet zoom control)
map.attributionControl.setPrefix(false);
/* Karnataka bbox (buffered, from karnataka.geojson) — tiles never load outside this */
const KA_BOUNDS = L.latLngBounds([11.608, 74.073], [18.479, 78.587]);
const layers = {
  streets: L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom:19, bounds:KA_BOUNDS, attribution:"© OpenStreetMap contributors" }),
  satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { maxZoom:19, bounds:KA_BOUNDS, attribution:"Imagery © Esri" }),
  terrain: L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", { maxZoom:17, bounds:KA_BOUNDS, attribution:"© OpenStreetMap contributors, SRTM | style: © OpenTopoMap" })
};
layers.streets.addTo(map);
let curLayer = "streets";

const markers = {};
const cluster = L.markerClusterGroup({
  iconCreateFunction: c => L.divIcon({ html:'<div class="mk-cluster" style="width:40px;height:40px;font-size:14px">'+c.getChildCount()+'</div>',
    className:"", iconSize:[40,40] }),
  maxClusterRadius: 46
});
function pinIcon(l, sel){
  const st = statusOf(l.n);
  const cls = "mk " + st + (sel ? " sel" : "");
  const inner = st === "visited" ? '<span class="mk-check">✓</span>'
    : st === "planned" ? '<span class="mk-n">'+l.n+'</span><span class="mk-star">★</span>'
    : '<span class="mk-n">'+l.n+'</span>';
  return L.divIcon({ html:'<div class="'+cls+'">'+inner+'</div>',
    className:"", iconSize: sel?[40,40]:[32,32], iconAnchor: sel?[20,38]:[16,30] });
}
LOCATIONS.forEach(l => {
  const m = L.marker([l.lat, l.lng], { icon: pinIcon(l,false), title: fullName(l) });
  m.on("click", () => openLocation(l.n, { pan:false }));
  m._locN = l.n; markers[l.n] = m; cluster.addLayer(m);
});
map.addLayer(cluster);

/* ================= Karnataka-only fog map (Part 4 v2) ================= */
let kaRings = null; // buffered Karnataka outer rings, [lat,lng]
function kaContains(lat, lng){
  if (!kaRings) return true;
  let inside = false;
  for (const ring of kaRings){
    let j = ring.length - 1;
    for (let i = 0; i < ring.length; i++){
      const xi = ring[i][1], yi = ring[i][0], xj = ring[j][1], yj = ring[j][0];
      if ((yi > lat) !== (yj > lat) && lng < (xj - xi) * (lat - yi) / (yj - yi) + xi) inside = !inside;
      j = i;
    }
  }
  return inside;
}
fetch("karnataka.geojson").then(r => { if (!r.ok) throw 0; return r.json(); }).then(gj => {
  const feat = gj.type === "FeatureCollection" ? gj.features[0] : gj;
  const polys = feat.geometry.type === "MultiPolygon" ? feat.geometry.coordinates : [feat.geometry.coordinates];
  kaRings = polys.map(poly => poly[0].map(([x, y]) => [y, x]));
  const bounds = L.latLngBounds(kaRings.flat());
  /* opaque inverted mask: huge outer rectangle with Karnataka cut out (covers any gesture/transition) */
  const outer = [[-90,-180],[90,-180],[90,180],[-90,180]];
  const fog = L.polygon([outer, ...kaRings], { className:"fog-poly", stroke:false, fillOpacity:1 }).addTo(map);
  fog.on("click", () => toast(t("toast.beyond")));
  /* brand border along the edge */
  L.polygon(kaRings, { className:"ka-border", stroke:true, fill:false, interactive:false }).addTo(map);
  /* (fog label removed per #4e; tap-on-fog toast stays) */
  /* map limits + fit */
  map.options.maxBoundsViscosity = 0.35; // rubber-band: allow overshoot, snap back on release
  map.setMaxBounds(bounds.pad(0.12));
  window.fitKarnataka = function(){
    const headerH = (document.querySelector(".hcard")?.offsetHeight || 112) + 16;
    const navH = (document.getElementById("nav")?.offsetHeight || 64) + 16;
    const sheetH = document.getElementById("sheet")?.classList.contains("open")
      ? document.getElementById("sheet").offsetHeight : 0;
    // rail is 40px wide at right:8px = 48px; use 72px to clear it with margin
    map.fitBounds(bounds, {
      paddingTopLeft: L.point(12, headerH),
      paddingBottomRight: L.point(72, navH + sheetH),
      animate: false
    });
    map.setMinZoom(map.getZoom());
  };
  fitKarnataka();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let rsT;
  window.addEventListener("resize", () => { clearTimeout(rsT); rsT = setTimeout(()=>window.fitKarnataka(), 150); });
  window.addEventListener("orientationchange", () => setTimeout(()=>window.fitKarnataka(), 300));
  /* rubber-band: snap back on release */
  map.on("dragend", () => {
    const c = map.getCenter();
    if (bounds.contains(c)) return;
    const atMin = map.getZoom() <= map.getMinZoom() + 0.05;
    if (atMin){
      const target = bounds.getCenter(), z = map.getMinZoom();
      if (reducedMotion) map.setView(target, z, { animate:false });
      else map.flyTo(target, z, { duration:0.3 });
    } else {
      const target = map.getCenter();
      // clamp to bounds
      const cl = L.latLng(
        Math.max(bounds.getSouth(), Math.min(bounds.getNorth(), target.lat)),
        Math.max(bounds.getWest(), Math.min(bounds.getEast(), target.lng))
      );
      if (reducedMotion) map.setView(cl, map.getZoom(), { animate:false });
      else map.flyTo(cl, map.getZoom(), { duration:0.3 });
    }
  });
  map.on("zoomend", () => {
    if (map.getZoom() < map.getMinZoom()) map.setZoom(map.getMinZoom());
  });
  /* drifting cloud texture above fog, below markers */
  L.DomUtil.create("div", "fog-texture", map.getContainer());
}).catch(() => {});
$("btnMapReset").onclick = () => { if (window.fitKarnataka) window.fitKarnataka(); else map.setView([15.0, 76.6], 7); };
$("btnZoomIn").onclick = () => map.zoomIn();
$("btnZoomOut").onclick = () => map.zoomOut();
function refreshMarker(n){ const l = byN[n]; if (l && markers[n]) markers[n].setIcon(pinIcon(l, n === selectedN)); }

/* layer switcher */
$("btnLayers").onclick = e => { e.stopPropagation(); const s = $("layerSheet");
  s.style.display = s.style.display === "block" ? "none" : "block"; };
document.addEventListener("click", e => { if (!e.target.closest(".layersheet") && !e.target.closest("#btnLayers")) $("layerSheet").style.display = "none"; });
$("layerSheet").querySelectorAll("button").forEach(b => b.onclick = () => {
  map.removeLayer(layers[curLayer]); curLayer = b.dataset.layer; map.addLayer(layers[curLayer]);
  $("layerSheet").querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
  $("layerSheet").style.display = "none";
});

/* ================= bottom sheet ================= */
let selectedN = null;
const sheet = $("sheet");
function setSnap(s){ sheet.dataset.snap = s; }
let releaseSheetTrap = null;
function openSheet(){ sheet.classList.add("open"); sheet.removeAttribute("aria-hidden"); setSnap("half"); document.body.classList.add("sheet-open"); releaseSheetTrap = trapFocus(sheet, closeSheet); }
function closeSheet(){ if (releaseSheetTrap){ releaseSheetTrap(); releaseSheetTrap = null; } sheet.classList.remove("open"); sheet.setAttribute("aria-hidden", "true"); selectedN = null; document.body.classList.remove("sheet-open");
  if (location.hash.startsWith("#loc=")) history.replaceState(null,"",location.pathname+location.search);
  if (window.fitKarnataka) setTimeout(()=>window.fitKarnataka(), 350); }
$("sheetClose").onclick = closeSheet;

/* drag handle */
(()=>{ const h = $("sheetHandle"); let y0=null, snap0=null;
  const snaps=["peek","half","full"];
  h.addEventListener("pointerdown", e=>{ y0=e.clientY; snap0=sheet.dataset.snap; h.setPointerCapture(e.pointerId); });
  h.addEventListener("pointermove", e=>{ if(y0===null) return; const dy=e.clientY-y0;
    if (Math.abs(dy)>40){ const i=snaps.indexOf(snap0); setSnap(snaps[Math.min(2,Math.max(0,i+(dy<0?1:-1)))]); y0=e.clientY; snap0=sheet.dataset.snap; } });
  h.addEventListener("pointerup", ()=>{ y0=null; });
  h.addEventListener("click", ()=>{ const i=snaps.indexOf(sheet.dataset.snap); setSnap(snaps[(i+1)%3]); });
})();

function openLocation(n, opts){
  opts = opts || {};
  const l = byN[n]; if (!l) return;
  if (selectedN && markers[selectedN]) refreshMarker(selectedN);
  selectedN = n;
  refreshMarker(n);
  $("shNo").textContent = "No. " + l.n;
  $("shName").textContent = fullName(l);
  $("shMeta").textContent = (l.pin + " · " + l.district).toUpperCase() + (l.kn_name ? " · " + l.kn_name : "");
  renderSheetBody(l);
  openSheet();
  if (opts.pan !== false) map.flyTo([l.lat, l.lng], Math.max(map.getZoom(), 12), { duration:.6 });
  if (location.hash !== "#loc="+n) history.replaceState(null,"","#loc="+n);
}
const LANDSCAPE_LABEL = { forest:"Forest", coastal:"Coastal", heritage:"Heritage", urban:"Urban",
  hills:"Hills", riverside:"Riverside", plains:"Plains", lake:"Lake" };
function renderSheetBody(l){
  const st = statusOf(l.n);
  const badge = $("shBadge");
  badge.className = "badge " + st;
  badge.textContent = st === "visited" ? "VISITED ✓" : st.toUpperCase();
  const old = sheet.querySelector(".stamp-pop"); if (old) old.remove();
  let ppc = "";
  if (l.ppc) ppc = '<div class="kv"><span class="k">CANCELLATION</span><span class="v">'+esc(l.ppc.motif)+'<span class="sub">Introduced '+esc(l.ppc.introduced)+'</span></span></div>';
  const office = l.office_type_full ? esc(l.office_type_full) : "Office type unknown";
  const vline = l.verified === "approx"
    ? '<div class="hintline">Approximate location — pinned to the town centre.</div>'
    : '<div class="hintline ok">Location confirmed.</div>';
  $("sheetBody").innerHTML =
    '<div class="stampcard" id="stampCard">'+
      '<div class="kv"><span class="k">OFFICE</span><span class="v">'+office+'</span></div>'+
      '<div class="kv"><span class="k">DISTRICT</span><span class="v">'+esc(l.district)+'</span></div>'+
      '<div class="kv"><span class="k">REGION</span><span class="v">'+esc(l.region)+'</span></div>'+
      '<div class="kv"><span class="k">SETTING</span><span class="v">'+esc(LANDSCAPE_LABEL[l.landscape] || l.landscape)+'</span></div>'+
      ppc +
      (l.fact ? '<div class="kv"><span class="k">DID YOU KNOW</span><span class="v" style="font-weight:400">'+esc(l.fact)+'</span></div>' : '')+
      (l.nearby && l.nearby.length ? '<div class="kv"><span class="k">NEARBY</span><span class="v" style="font-weight:400">'+l.nearby.map(esc).join(' · ')+'</span></div>' : '')+
      '<div class="kv"><span class="k">GETTING THERE</span><span class="v">Via '+esc(l.transit_town)+'<span class="sub">Nearest transit town — indicative only</span></span></div>'+
      vline +
      '<div class="photosec" id="photoSec"></div>'+
      '<div class="actionrow">'+
        '<a class="btn ghost" style="flex:1;text-decoration:none;text-align:center" target="_blank" rel="noopener" href="'+gmapsPhotos(l)+'">Photos</a>'+
        '<button class="btn ghost" id="btnPlanned" style="flex:1">'+(st==="planned"?"★ Planned":"Plan to visit")+'</button>'+
      '</div>'+
      '<div class="linkrow">'+
        '<a target="_blank" rel="noopener" href="'+gmapsDir(l.lat,l.lng)+'">Directions to map pin</a>'+
        '<a href="'+reportLink(l)+'">Report a wrong location</a>'+
      '</div>'+
    '</div>';
  $("sheetFoot").innerHTML =
    '<a class="btn primary" style="text-decoration:none;text-align:center" target="_blank" rel="noopener" href="'+gmapsSearch(l)+'">Directions</a>'+
    (st === "visited"
      ? '<button class="btn ghost" id="btnVisited">Unmark visited</button>'
      : '<button class="btn ghost" id="btnVisited">Mark visited without photo</button>');
  $("btnVisited").onclick = () => toggleVisited(l.n);
  $("btnPlanned").onclick = () => togglePlanned(l.n);
  renderPhotoSection(l);
}
function stampPop(){
  const c = $("stampCard"); if (!c) return;
  const d = document.createElement("div"); d.className = "stamp-pop"; d.textContent = "VISITED";
  c.appendChild(d); setTimeout(()=>d.remove(), 1400);
}
function toggleVisited(n){
  const was = !!state.visited[n];
  if (was) delete state.visited[n];
  else { state.visited[n] = new Date().toISOString().slice(0, 10); delete state.planned[n]; }
  save(); refreshMarker(n); renderSheetBody(byN[n]); renderProgress(); renderGrid(); renderDistricts();
  if (typeof rivalSync === "function") rivalSync();
  if (!was){ stampPop(); checkMilestones(); toast("Stamped! " + visitedCount() + " of 100 collected."); }
  else toast(t("toast.removed"));
}
function togglePlanned(n){
  if (state.visited[n]){ toast(t("toast.already")); return; }
  if (state.planned[n]) delete state.planned[n]; else state.planned[n] = true;
  save(); refreshMarker(n); renderSheetBody(byN[n]); renderGrid();
  toast(state.planned[n] ? "Added to your postbox." : "Removed from postbox.");
}
function checkMilestones(){
  const c = visitedCount();
  [25,50,75,100].forEach(m => {
    if (c >= m && !state.milestones.includes(m)){ state.milestones.push(m); save();
      toast(m === 100 ? "INCREDIBLE — all 100 stamps collected!" : m + " stamps! Milestone reached."); }
  });
}

/* ================= Stamp photos (Part 6/7) ================= */
const PHOTO_CAP = 25 * 1024 * 1024; // 25MB
let photoTargetN = null;

function toastAction(msg, label, fn){
  const t = $("toast");
  t.innerHTML = "";
  t.appendChild(document.createTextNode(msg));
  const b = document.createElement("button");
  b.textContent = label;
  b.onclick = () => { t.classList.remove("show"); fn(); };
  t.appendChild(b);
  t.classList.add("show");
  clearTimeout(t._h); t._h = setTimeout(()=>t.classList.remove("show"), 5000);
}

/* IndexedDB: photos live on-device only, never in JSON backup */
function photoDB(){
  return new Promise((res, rej) => {
    const r = indexedDB.open("stampquest_photos", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("photos", { keyPath:"n" });
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
async function photoGet(n){
  const db = await photoDB();
  return new Promise((res, rej) => {
    const tx = db.transaction("photos", "readonly");
    const q = tx.objectStore("photos").get(n);
    q.onsuccess = () => res(q.result || null);
    q.onerror = () => rej(q.error);
  });
}
async function photoPut(rec){
  const db = await photoDB();
  return new Promise((res, rej) => {
    const tx = db.transaction("photos", "readwrite");
    tx.objectStore("photos").put(rec);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}
async function photoDel(n){
  const db = await photoDB();
  return new Promise((res, rej) => {    const tx = db.transaction("photos", "readwrite");
    tx.objectStore("photos").delete(n);
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}
async function photoTotalBytes(){
  const db = await photoDB();
  return new Promise((res, rej) => {
    let total = 0;
    const tx = db.transaction("photos", "readonly");
    const cur = tx.objectStore("photos").openCursor();
    cur.onsuccess = () => {
      const c = cur.result;
      if (c){ total += (c.value.full?.size||0) + (c.value.thumb?.size||0); c.continue(); }
      else res(total);
    };
    cur.onerror = () => rej(cur.error);
  });
}
async function photoCountAll(){
  const db = await photoDB();
  return new Promise((res, rej) => {
    const tx = db.transaction("photos", "readonly");
    const rq = tx.objectStore("photos").count();
    rq.onsuccess = () => res(rq.result);
    rq.onerror = () => rej(rq.error);
  });
}
async function photoClearAll(){
  const db = await photoDB();
  return new Promise((res, rej) => {
    const tx = db.transaction("photos", "readwrite");    tx.objectStore("photos").clear();
    tx.oncomplete = () => res();
    tx.onerror = () => rej(tx.error);
  });
}
async function photoHas(n){ return !!(await photoGet(n)); }
async function photoGetAll(){
  const db = await photoDB();
  return new Promise((res, rej) => {
    const tx = db.transaction("photos", "readonly");
    const rq = tx.objectStore("photos").getAll();
    rq.onsuccess = () => res(rq.result || []);
    rq.onerror = () => rej(rq.error);
  });
}

/* Resize + JPEG + EXIF strip (canvas redraw drops EXIF) */
function resizeBlob(file, maxPx, quality){
  return new Promise((res, rej) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const s = Math.min(1, maxPx / Math.max(img.width, img.height));
      const c = document.createElement("canvas");
      c.width = Math.round(img.width * s); c.height = Math.round(img.height * s);
      c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
      c.toBlob(b => b ? res(b) : rej(new Error("encode")), "image/jpeg", quality);
    };
    img.onerror = () => { URL.revokeObjectURL(url); rej(new Error("decode")); };
    img.src = url;
  });
}

let photoSheetPushed = false;
function closePhotoPicker(){
  const d = document.getElementById("photoChoice");
  if (d) d.remove();
  const b = document.getElementById("photoBackdrop");
  if (b) b.remove();
  document.removeEventListener("keydown", photoEscHandler);
  if (photoSheetPushed){
    photoSheetPushed = false;
    try { history.back(); } catch(e){}
  }
}
function pushPhotoSheet(){
  if (photoSheetPushed) return;
  photoSheetPushed = true;
  pushPhotoSheet();
}
/* tile photo long-press actions */
function openTilePhotoActions(n){
  closePhotoPicker();
  const b = document.createElement("div");
  b.id = "photoBackdrop";
  b.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:955";
  b.onclick = closePhotoPicker;
  document.body.appendChild(b);
  const d = document.createElement("div");
  d.id = "photoChoice"; d.className = "photosheet"; d.setAttribute("role", "dialog"); d.setAttribute("aria-label", "Photo options");
  const l = byN[n];
  d.innerHTML = '<div style="text-align:center;padding:8px 0 4px;font-weight:600;color:var(--ink)">'+n+'. '+esc(l?l.name:"")+'</div>'+
    '<button id="tpChange">Change photo</button><button id="tpRemove" style="color:var(--error)">Remove photo</button><button id="tpCancel" class="cancel">Cancel</button>';
  document.body.appendChild(d);
  requestAnimationFrame(() => d.classList.add("open"));
  $("tpChange").onclick = () => { closePhotoPicker(); openPhotoPicker(n); };
  $("tpRemove").onclick = () => { closePhotoPicker(); removePhoto(n); };
  $("tpCancel").onclick = closePhotoPicker;
  document.addEventListener("keydown", photoEscHandler);
  pushPhotoSheet();
}
function photoEscHandler(e){ if (e.key === "Escape") closePhotoPicker(); }
function openPhotoPicker(n){
  photoTargetN = n;
  closePhotoPicker();
  const b = document.createElement("div");
  b.id = "photoBackdrop";
  b.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:955";
  b.onclick = closePhotoPicker;
  document.body.appendChild(b);
  const d = document.createElement("div");
  d.id = "photoChoice"; d.className = "photosheet"; d.setAttribute("role", "dialog"); d.setAttribute("aria-label", "Add stamp photo");
  d.innerHTML = '<button id="pcCam">Take photo</button><button id="pcGal">Choose from gallery</button><button id="pcCancel" class="cancel">Cancel</button>';
  document.body.appendChild(d);
  requestAnimationFrame(() => d.classList.add("open"));
  $("pcCam").onclick = () => { closePhotoPicker(); $("photoCam").click(); };
  $("pcGal").onclick = () => { closePhotoPicker(); $("photoGal").click(); };
  $("pcCancel").onclick = closePhotoPicker;
  document.addEventListener("keydown", photoEscHandler);
  // close on browser back
  pushPhotoSheet();
}
window.addEventListener("popstate", (e) => {
  if (document.getElementById("photoChoice")) {
    photoSheetPushed = false; // already popped, don't go back again
    closePhotoPicker();
  }
});
$("photoCam").addEventListener("change", e => { if (e.target.files[0]) handlePhotoFile(photoTargetN, e.target.files[0]); e.target.value = ""; });
$("photoGal").addEventListener("change", e => { if (e.target.files[0]) handlePhotoFile(photoTargetN, e.target.files[0]); e.target.value = ""; });

async function handlePhotoFile(n, file){
  if (!n || !file || !file.type.startsWith("image/")) return;
  toast(t("toast.processing"));
  try {
    const full = await resizeBlob(file, 1000, 0.8);
    const thumb = await resizeBlob(file, 300, 0.75);
    const used = await photoTotalBytes();
    const old = await photoGet(n);
    const oldSize = old ? (old.full.size + old.thumb.size) : 0;
    if (used - oldSize + full.size + thumb.size > PHOTO_CAP){
      toast(t("toast.full"));
      return;
    }
    const wasVisited = !!state.visited[n];
    const wasPlanned = !!state.planned[n];
    await photoPut({ n, full, thumb, addedAt: Date.now() });
    // clear shared flag so a replaced photo re-uploads on next sync
    try { const sh = JSON.parse(localStorage.getItem("sq_shared_photos") || "{}"); delete sh[n]; localStorage.setItem("sq_shared_photos", JSON.stringify(sh)); } catch(e){}
    // auto-mark visited with date; planned -> visited
    const today = new Date().toISOString().slice(0, 10);
    state.visited[n] = today;
    delete state.planned[n];
    save();
    refreshMarker(n); renderSheetBody(byN[n]); renderProgress(); renderGrid(); renderDistricts();
    if (!wasVisited){ stampPop(); checkMilestones(); }
    toastAction("Marked visited.", "Undo", async () => {
      if (old) await photoPut(old); else { await photoDel(n); if (typeof rivalRemovePhotos === "function") rivalRemovePhotos([n]); }
      if (!wasVisited) delete state.visited[n];
      if (wasPlanned) state.planned[n] = true;
      save();
      refreshMarker(n); renderSheetBody(byN[n]); renderProgress(); renderGrid(); renderDistricts();
      toast(old ? "Previous photo restored." : "Photo removed, visit undone.");
    });
  } catch(err){
    toast(t("toast.unreadable"));
  }
}

async function removePhoto(n){
  if (!confirm(t("confirm.remove_photo"))) return;
  await photoDel(n);
  if (typeof rivalRemovePhotos === "function") rivalRemovePhotos([n]);
  save(); renderSheetBody(byN[n]); renderGrid(); renderPhotoMeter();
  toast(t("toast.photo_removed"));
}

async function renderPhotoSection(l){
  const el = document.getElementById("photoSec");
  if (!el) return;
  const rec = await photoGet(l.n);
  if (rec){
    const url = URL.createObjectURL(rec.thumb);
    el.innerHTML = '<img class="thumb" alt="Your stamp photo" style="cursor:zoom-in">'+
      '<div class="prow"><button class="btn ghost" id="btnPhotoRm">Remove photo</button></div>';
    const img = el.querySelector(".thumb");
    img.src = url;
    img.onclick = () => openPhotoViewer(l.n);
    $("btnPhotoRm").onclick = () => removePhoto(l.n);
  } else {
    el.innerHTML = '<button class="btn primary" id="btnPhotoAdd" style="width:100%">Add stamp photo</button>'+
      '<div class="note" style="margin-top:6px">Take or pick a photo — the office is marked visited automatically.</div>';
    $("btnPhotoAdd").onclick = () => openPhotoPicker(l.n);
  }
}
/* fullscreen photo viewer with swipe */
let pvList = [], pvIdx = 0, pvUrl = null;
async function openPhotoViewer(n){
  pvList = [];
  for (const l of LOCATIONS){
    if (await photoHas(l.n)) pvList.push(l.n);
  }
  pvIdx = Math.max(0, pvList.indexOf(n));
  if (pvIdx < 0) return;
  const v = document.createElement("div");
  v.id = "photoViewer";
  v.innerHTML = '<div class="pv-top"><span id="pvCap"></span><button id="pvClose" aria-label="Close">✕</button></div>'+
    '<img id="pvImg" alt="Stamp photo"><div class="pv-nav"><button id="pvPrev" aria-label="Previous">‹</button><button id="pvNext" aria-label="Next">›</button></div>';
  document.body.appendChild(v);
  requestAnimationFrame(() => v.classList.add("open"));
  $("pvClose").onclick = closePhotoViewer;
  $("pvPrev").onclick = (e) => { e.stopPropagation(); pvShow(pvIdx - 1); };
  $("pvNext").onclick = (e) => { e.stopPropagation(); pvShow(pvIdx + 1); };
  v.onclick = (e) => { if (e.target === v || e.target.id === "pvImg") closePhotoViewer(); };
  // swipe
  let sx = 0;
  v.addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive:true });
  v.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 60) pvShow(pvIdx + (dx < 0 ? 1 : -1));
  }, { passive:true });
  document.addEventListener("keydown", pvKey);
  pvReleaseTrap = trapFocus(v, closePhotoViewer);
  pvShow(pvIdx);
}
let pvReleaseTrap = null;
function pvKey(e){
  if (!document.getElementById("photoViewer")) return;
  if (e.key === "Escape") closePhotoViewer();
  else if (e.key === "ArrowLeft") pvShow(pvIdx - 1);
  else if (e.key === "ArrowRight") pvShow(pvIdx + 1);
}
async function pvShow(i){
  if (!pvList.length) return;
  pvIdx = (i + pvList.length) % pvList.length;
  const n = pvList[pvIdx], l = byN[n];
  const rec = await photoGet(n);
  if (!rec) return;
  if (pvUrl) URL.revokeObjectURL(pvUrl);
  pvUrl = URL.createObjectURL(rec.full);
  $("pvImg").src = pvUrl;
  $("pvCap").textContent = n + ". " + (l ? l.name : "") + "  (" + (pvIdx+1) + "/" + pvList.length + ")";
  $("pvPrev").style.visibility = pvList.length > 1 ? "visible" : "hidden";
  $("pvNext").style.visibility = pvList.length > 1 ? "visible" : "hidden";
}
function closePhotoViewer(){
  if (pvReleaseTrap){ pvReleaseTrap(); pvReleaseTrap = null; }
  const v = document.getElementById("photoViewer");
  if (v) v.remove();
  if (pvUrl){ URL.revokeObjectURL(pvUrl); pvUrl = null; }
  document.removeEventListener("keydown", pvKey);
  pvList = [];
}

async function renderPhotoMeter(){
  const el = document.getElementById("photoMeter");
  if (!el) return;
  try {
    const used = await photoTotalBytes();
    const pct = Math.min(100, used / PHOTO_CAP * 100);
    el.innerHTML = '<div class="meter"><i style="width:'+pct.toFixed(1)+'%"></i></div>'+
      '<div class="note">'+(used/1048576).toFixed(1)+' MB of 25 MB used · kept on this device, not included in JSON backups</div>';
  } catch(e){
    el.innerHTML = '<div class="note">Photo storage unavailable on this browser.</div>';
  }
}

/* ask the browser to persist storage */
if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(()=>{});

/* ================= search ================= */
const sInput = $("searchInput"), sBox = $("searchResults"), sClear = $("searchClear");
sInput.addEventListener("input", () => {
  const q = sInput.value.trim().toLowerCase();
  sClear.style.display = q ? "block" : "none";
  if (q.length < 2){ sBox.style.display = "none"; sBox.innerHTML = ""; return; }
  const hits = LOCATIONS.filter(l =>
    l.name.toLowerCase().includes(q) || l.district.toLowerCase().includes(q) ||
    l.pin.includes(q) || String(l.n) === q).slice(0,8);
  if (!hits.length){ sBox.innerHTML = '<div style="padding:12px;font-size:13px;color:var(--ink-2)">No matches.</div>'; }
  else sBox.innerHTML = hits.map(l =>
    '<button data-n="'+l.n+'"><span class="n">'+l.n+'</span><span><b>'+esc(fullName(l))+'</b><br><span style="color:var(--ink-2);font-size:12px">'+esc(l.district)+' · '+l.pin+'</span></span></button>').join("");
  sBox.style.display = "block";
  sBox.querySelectorAll("button").forEach(b => b.onclick = () => {
    sBox.style.display = "none"; sInput.value = ""; sClear.style.display = "none"; sInput.blur();
    switchTab("explore"); openLocation(+b.dataset.n);
  });
});
sClear.onclick = () => { sInput.value = ""; sClear.style.display = "none"; sBox.style.display = "none"; sInput.focus(); };
document.addEventListener("click", e => { if (!e.target.closest(".topbar")) sBox.style.display = "none"; });

/* ================= nearest to me ================= */
let myPos = null;
$("btnLocate").onclick = () => {
  if (!navigator.geolocation){ nearbyManual("Geolocation isn't available on this device."); return; }
  $("btnLocate").classList.add("on"); toast(t("toast.locating"));
  navigator.geolocation.getCurrentPosition(
    p => { $("btnLocate").classList.remove("on"); myPos = { lat:p.coords.latitude, lng:p.coords.longitude };
      if (!kaContains(myPos.lat, myPos.lng)) toast(t("toast.outside"));
      showNearby(); },
    err => { $("btnLocate").classList.remove("on"); nearbyManual("Location permission was denied."); },
    { timeout:12000 });
};
function nearbyManual(msg){
  selectedN = null;
  $("shNo").textContent = "NEARBY"; $("shName").textContent = "Nearest post offices";
  $("shMeta").textContent = "FIND CLOSEST STAMPS";
  const b = $("shBadge"); b.className = "badge unvisited"; b.textContent = "NEARBY";
  $("sheetBody").innerHTML = '<div class="stampcard"><div class="note" style="font-size:13px;color:var(--ink)">'+esc(msg||"")+
    ' Enter a location manually to sort by distance.</div><div class="manrow">'+
    '<input id="manLat" inputmode="decimal" placeholder="Latitude e.g. 12.87">'+
    '<input id="manLng" inputmode="decimal" placeholder="Longitude e.g. 74.84"></div>'+
    '<div class="actionrow"><button class="btn accent" id="manGo" style="flex:1">Use this location</button></div></div>';
  $("sheetFoot").innerHTML = "";
  openSheet();
  $("manGo").onclick = () => {
    const la = parseFloat($("manLat").value), ln = parseFloat($("manLng").value);
    if (!isFinite(la) || !isFinite(ln)){ toast(t("toast.latlng")); return; }
    myPos = { lat:la, lng:ln }; showNearby();
  };
}
function showNearby(){
  if (!myPos) return;
  const sorted = LOCATIONS.map(l => ({ l, d: havKm(myPos.lat, myPos.lng, l.lat, l.lng) }))
    .sort((a,b) => a.d - b.d).slice(0, 12);
  selectedN = null;
  $("shNo").textContent = "NEARBY"; $("shName").textContent = "Nearest post offices";
  $("shMeta").textContent = "SORTED BY DISTANCE";
  const b = $("shBadge"); b.className = "badge unvisited"; b.textContent = "NEARBY";
  $("sheetBody").innerHTML = '<div class="stampcard">' + sorted.map(({l,d}) =>
    '<button class="nearby-row" data-n="'+l.n+'">'+
    '<span><b>'+l.n+'. '+esc(l.name)+'</b><br><span style="color:var(--ink-2);font-size:12px">'+esc(l.district)+' · '+(statusOf(l.n)==="visited"?"✓ visited":statusOf(l.n))+'</span></span>'+
    '<span class="d">'+d.toFixed(1)+' km</span></button>').join("") + "</div>";
  $("sheetFoot").innerHTML = "";
  openSheet();
  $("sheetBody").querySelectorAll(".nearby-row").forEach(r => r.onclick = () => openLocation(+r.dataset.n));
}

/* ================= tabs ================= */
function switchTab(name){
  document.querySelectorAll("#nav button").forEach(b => b.classList.toggle("on", b.dataset.tab === name));
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === "view-"+name));
  // close all overlays on tab change
  if (typeof closePhotoPicker === "function") closePhotoPicker();
  const sBox = document.getElementById("searchResults");
  if (sBox) sBox.style.display = "none";
  document.querySelectorAll(".toast").forEach(t => t.remove());
  if (name !== "explore" && sheet.classList.contains("open")){
    const n = selectedN; closeSheet(); if (n && markers[n]) refreshMarker(n);
  }
  if (name === "explore"){ setTimeout(()=>map.invalidateSize(), 60); }
  if (name === "passport"){ renderProgress(); renderGrid(); renderDistricts(); }
  if (name === "circuits") renderCircuits();
  if (name === "rivals") renderRivals();
  if (name === "rivals") renderRivals();
  if (name === "settings") renderPhotoMeter();
}
document.querySelectorAll("#nav button").forEach(b => b.onclick = () => switchTab(b.dataset.tab));
$("progChip").onclick = () => switchTab("passport");

/* ================= circuits ================= */
const REGION_ORDER = ["Coastal","Malnad","Mysuru region","Bengaluru region","North Karnataka"];
/* circuits dropdowns (persist open/closed) */
let circuitOpen = {};
try { circuitOpen = JSON.parse(localStorage.getItem("sq_circuits") || "{}"); } catch(e){}
function saveCircuitOpen(){ try { localStorage.setItem("sq_circuits", JSON.stringify(circuitOpen)); } catch(e){} }
function renderCircuits(){
  const order = REGION_ORDER;
  if (order.length && !(order[0] in circuitOpen)) circuitOpen[order[0]] = true;
  $("circuitList").innerHTML = order.map((rg, ri) => {
    const stops = LOCATIONS.filter(l => l.region === rg).sort((a,b)=>a.n-b.n);
    const done = stops.filter(l => state.visited[l.n]).length;
    const open = !!circuitOpen[rg];
    const cid = "cr-" + ri;
    return '<div class="card" data-region="'+esc(rg)+'"><button class="chead" aria-expanded="'+open+'" aria-controls="'+cid+'" id="ch-'+ri+'">'+
      '<span class="serif" style="font-size:17px">'+esc(rg)+'</span>'+
      '<span class="cmeta"><span class="note">'+done+'/'+stops.length+' collected</span><span class="chev'+(open?" open":"")+'">›</span></span></button>'+
      '<div class="cbody'+(open?" open":"")+'" id="'+cid+'" role="region" aria-labelledby="ch-'+ri+'">'+
      '<div class="dbar"><i style="width:'+(stops.length?done/stops.length*100:0)+'%"></i></div>'+
      '<div style="margin-top:10px">'+stops.map(l =>
        '<button class="rowbtn" data-n="'+l.n+'">'+
        '<span class="grow"><span class="t">'+l.n+'. '+esc(l.name)+'</span><span class="s" style="display:block">'+esc(l.district)+' · '+l.pin+'</span></span>'+
        '<span style="color:var(--ink-2)">›</span></button>').join("")+'</div>'+
      '<button class="btn ghost" data-fit="'+esc(rg)+'" style="width:100%;margin-top:4px">Show on map</button></div></div>';
  }).join("");
  $("circuitList").querySelectorAll(".chead").forEach(h => h.onclick = () => {
    const rg = REGION_ORDER[+h.id.split("-")[1]];
    circuitOpen[rg] = !circuitOpen[rg];
    saveCircuitOpen(); renderCircuits();
  });
  $("circuitList").querySelectorAll(".rowbtn").forEach(b => b.onclick = () => { switchTab("explore"); openLocation(+b.dataset.n); });
  $("circuitList").querySelectorAll("[data-fit]").forEach(b => b.onclick = () => {
    const stops = LOCATIONS.filter(l => l.region === b.dataset.fit);
    switchTab("explore");
    map.flyToBounds(L.latLngBounds(stops.map(l => [l.lat, l.lng])).pad(0.15), { duration:.8 });
  });
}

/* ================= passport ================= */
let gridFilter = "all";
function renderProgress(){
  const c = visitedCount();
  $("progChipTxt").textContent = c + "/100";
  $("ringNum").textContent = c;
  $("ringFg").style.strokeDashoffset = (326.7 * (1 - c/100)).toFixed(1);
  const msgs = [[0,"Your passport is waiting for its first stamp."],[1,"Off to a great start — keep going."],[25,"A quarter century of stamps!"],[50,"Halfway there. The map is filling up."],[75,"The final stretch — almost legendary."],[100,"All 100 collected. Legendary."]];
  let m = msgs[0][1]; msgs.forEach(([t,x]) => { if (c >= t) m = x; });
  $("ringMsg").textContent = m;
  $("exploredNum").textContent = c;
  $("notchBar").innerHTML = LOCATIONS.map(l => '<i class="'+(state.visited[l.n]?"hit":"")+'"></i>').join("");
  $("milestoneBadges").innerHTML = [25,50,75,100].map(mn =>
    '<span class="mstone'+(c>=mn?" hit":"")+'">'+mn+' stamps</span>').join("");
}
$("gridFilters").querySelectorAll(".chip").forEach(ch => ch.onclick = () => {
  $("gridFilters").querySelectorAll(".chip").forEach(x => { x.classList.toggle("on", x === ch); x.setAttribute("aria-pressed", x === ch ? "true" : "false"); });
  gridFilter = ch.dataset.f; renderGrid();
});
/* tile photo URL cache (revoked on re-render) */
let tilePhotoURLs = {};
function clearTilePhotoURLs(){
  Object.values(tilePhotoURLs).forEach(u => { try { URL.revokeObjectURL(u); } catch(e){} });
  tilePhotoURLs = {};
}
function renderGrid(){
  clearTilePhotoURLs();
  const g = $("tileGrid");
  g.innerHTML = LOCATIONS.filter(l => gridFilter === "all" || statusOf(l.n) === gridFilter).map(l => {
    const st = statusOf(l.n);
    const pm = st === "visited" ? '<span class="postmark">'+esc(l.district)+'</span>' : "";
    const ck = st === "visited" ? '<span class="check" aria-hidden="true">✓</span>' : "";
    return '<div class="tile '+st+'" data-n="'+l.n+'" role="button" tabindex="0" aria-label="'+l.n+". "+esc(l.name)+", "+st+'"><span class="tno">'+l.n+'</span><span class="nm">'+esc(dispName(l))+'</span><span class="pcam" data-n="'+l.n+'" role="button" aria-label="Add stamp photo" title="Add stamp photo"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></span>'+ck+pm+'<span class="tphoto" aria-hidden="true"></span></div>';
  }).join("");
  g.querySelectorAll(".tile").forEach(t => {
    t.onclick = () => { switchTab("explore"); openLocation(+t.dataset.n); };
    t.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); switchTab("explore"); openLocation(+t.dataset.n); } };
  });
  g.querySelectorAll(".pcam").forEach(b => b.onclick = e => { e.stopPropagation(); openPhotoPicker(+b.dataset.n); });
  // long-press on photo tile: quick actions (Remove / Change)
  function attachLongPress(t){
    if (t.dataset.lp) return;
    t.dataset.lp = "1";
    let lpTimer = null, lpFired = false;
    const cancel = () => { if (lpTimer){ clearTimeout(lpTimer); lpTimer = null; } };
    t.addEventListener("touchstart", e => {
      cancel(); lpFired = false;
      lpTimer = setTimeout(() => {
        lpTimer = null; lpFired = true;
        if (navigator.vibrate) navigator.vibrate(15);
        openTilePhotoActions(+t.dataset.n);
      }, 550);
    }, { passive:true });
    t.addEventListener("touchend", cancel, { passive:true });
    t.addEventListener("touchmove", cancel, { passive:true });
    t.addEventListener("contextmenu", e => { e.preventDefault(); cancel(); openTilePhotoActions(+t.dataset.n); });
    // tap photo directly: fullscreen viewer (not if long-press fired)
    const ph = t.querySelector(".tphoto");
    if (ph){
      ph.style.cursor = "zoom-in";
      ph.addEventListener("click", e => {
        if (lpFired) return;
        e.stopPropagation();
        openPhotoViewer(+t.dataset.n);
      });
    }
  }
  // lazy-load photo thumbnails
  const io = new IntersectionObserver(entries => {
    entries.forEach(async en => {
      if (!en.isIntersecting) return;
      const tile = en.target;
      io.unobserve(tile);
      const n = +tile.dataset.n;
      const rec = await photoGet(n);
      if (!rec || !rec.thumb) return;
      if (!document.body.contains(tile)) return;
      const url = URL.createObjectURL(rec.thumb);
      tilePhotoURLs[n] = url;
      tile.classList.add("hasphoto");
      const ph = tile.querySelector(".tphoto");
      if (ph) ph.style.backgroundImage = 'url("'+url+'")';
      const pcam = tile.querySelector(".pcam");
      if (pcam){ pcam.classList.add("has"); pcam.setAttribute("aria-label", "Change photo"); pcam.setAttribute("title", "Change photo"); }
      attachLongPress(tile);
    });
  }, { rootMargin: "100px" });
  g.querySelectorAll(".tile").forEach(t => io.observe(t));
}
function renderDistricts(){
  const seen = []; LOCATIONS.forEach(l => { if (!seen.includes(l.district)) seen.push(l.district); });
  $("districtProg").innerHTML = seen.map(d => {
    const ds = LOCATIONS.filter(l => l.district === d), done = ds.filter(l => state.visited[l.n]).length;
    return '<div style="padding:6px 0"><div class="drow"><span>'+esc(d)+'</span><b>'+done+'/'+ds.length+'</b></div>'+
      '<div class="dbar"><i style="width:'+(done/ds.length*100)+'%"></i></div></div>';
  }).join("");
}

/* share card */
function cssVar(n){ return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function shareColors(){
  const dark = state.theme==="dark";
  return {
    paper:cssVar("--paper")||(dark?"#16120F":"#F3EBD8"),
    ink:cssVar("--ink")||(dark?"#F3EDE0":"#1F1B16"),
    ink2:cssVar("--ink-2")||(dark?"#B9AF9F":"#54493C"),
    brand:cssVar("--brand")||(dark?"#F0707A":"#A91F26"),
    subtle:cssVar("--border-subtle")||(dark?"#3A322A":"#D9CFB4"),
    collected:cssVar("--collected")||(dark?"#6FCB9A":"#2B6A46")
  };
}
function topDistricts(){
  const byD = {};
  LOCATIONS.forEach(l => {
    if (!byD[l.district]) byD[l.district] = { total:0, done:0 };
    byD[l.district].total++;
    if (state.visited[l.n]) byD[l.district].done++;
  });
  return Object.entries(byD).map(([d,v]) => ({ d, ...v }))
    .filter(x => x.done > 0).sort((a,b) => b.done - a.done || b.done/b.total - a.done/a.total).slice(0,3);
}
async function recentPhotos(limit){
  try {
    const db = await photoDB();
    return new Promise((res) => {
      const out = [];
      const tx = db.transaction("photos", "readonly");
      const cur = tx.objectStore("photos").openCursor();
      cur.onsuccess = () => {
        const c = cur.result;
        if (c){ out.push(c.value); c.continue(); }
        else res(out.sort((a,b) => b.addedAt - a.addedAt).slice(0, limit));
      };
      cur.onerror = () => res([]);
    });
  } catch(e){ return []; }
}
function drawPostmark(x, cx, cy, r, brand){
  x.strokeStyle = brand; x.lineWidth = r*0.055;
  x.beginPath(); x.arc(cx, cy, r, 0, 7); x.stroke();
  x.lineWidth = r*0.02; x.beginPath(); x.arc(cx, cy, r*0.74, 0, 7); x.stroke();
}
/* polaroid helper: draws a polaroid with photo (or number/name), hanging from thread */
async function drawPolaroid(x, px, py, pw, ph, photo, num, name, C){
  const FD='Fraunces,Georgia,serif', FS='DM Sans,system-ui,sans-serif';
  // shadow
  x.save(); x.shadowColor="rgba(0,0,0,.18)"; x.shadowBlur=12; x.shadowOffsetY=4;
  x.fillStyle="#FFFFFF"; x.fillRect(px, py, pw, ph); x.restore();
  // photo area (top 72%)
  const iw=pw-24, ih=Math.floor(ph*0.62), ix=px+12, iy=py+12;
  if (photo){
    try {
      const bmp = await createImageBitmap(photo.thumb || photo);
      x.save(); x.beginPath(); x.rect(ix, iy, iw, ih); x.clip();
      const s=Math.max(iw/bmp.width, ih/bmp.height);
      x.drawImage(bmp, ix-(bmp.width*s-iw)/2, iy-(bmp.height*s-ih)/2, bmp.width*s, bmp.height*s);
      x.restore();
    } catch(e){
      x.fillStyle=C.locked; x.fillRect(ix, iy, iw, ih);
    }
  } else {
    x.fillStyle=C.locked; x.fillRect(ix, iy, iw, ih);
    x.fillStyle=C.ink2; x.font="600 44px "+FD; x.textAlign="center";
    x.fillText(num+"", px+pw/2, iy+ih/2+8);
  }
  // caption (number + name)
  x.fillStyle=C.ink; x.textAlign="center";
  x.font="600 30px "+FD;
  const label = num+". "+name;
  // truncate if too long
  let txt = label;
  while (x.measureText(txt).width > pw-24 && txt.length > 10) txt = txt.slice(0,-2);
  if (txt !== label) txt = txt.slice(0,-1)+"…";
  x.fillText(txt, px+pw/2, py+ph-22);
  // clip at top
  x.fillStyle=C.ink2; x.beginPath();
  const cxp=px+pw/2;
  x.roundRect(cxp-14, py-10, 28, 26, 6); x.fill();
}
function drawThread(x, x0, y0, x1, y1, C){
  x.strokeStyle=C.subtle; x.lineWidth=3; x.beginPath();
  x.moveTo(x0, y0);
  x.quadraticCurveTo((x0+x1)/2, Math.max(y0,y1)+40, x1, y1);
  x.stroke();
}
async function drawStoryCard(withPhotos){
  const W=1080, H=1920, cv=document.createElement("canvas"); cv.width=W; cv.height=H;
  const x=cv.getContext("2d"), C=shareColors();
  const FD='Fraunces,Georgia,serif', FS='DM Sans,system-ui,sans-serif';
  x.fillStyle=C.paper; x.fillRect(0,0,W,H);
  x.strokeStyle=C.subtle; x.lineWidth=3; x.strokeRect(40,40,W-80,H-80);
  const cx=W/2, c=visitedCount();
  // compact header (y 250-680)
  drawPostmark(x, cx, 330, 62, C.brand);
  x.save(); x.translate(cx,330); x.rotate(-0.12);
  x.fillStyle=C.brand; x.font="600 38px "+FD; x.textAlign="center"; x.fillText("100",0,13); x.restore();
  x.fillStyle=C.ink; x.font="600 40px "+FD; x.fillText("MY PHILATELY JOURNEY", cx, 440);
  x.font="600 110px "+FD; x.fillStyle=C.brand; x.fillText(c+"", cx, 570);
  x.font="400 32px "+FS; x.fillStyle=C.ink2; x.fillText("of 100 post offices", cx, 620);
  const bw=W-400; x.fillStyle=C.subtle; x.fillRect((W-bw)/2, 650, bw, 18);
  x.fillStyle=C.collected; x.fillRect((W-bw)/2, 650, bw*c/100, 18);
  // polaroids on thread (y 720-1560): 9 max, 3 per row
  const photos = withPhotos ? await recentPhotos(9) : [];
  const visited = LOCATIONS.filter(l => state.visited[l.n]).sort((a,b)=>b.n-a.n);
  const items = [];
  for (let i=0; i<9 && i<visited.length; i++){
    const l = visited[i];
    const ph = photos.find(p => p.n === l.n);
    items.push({ n:l.n, name:l.name, photo:ph });
  }
  const pw=300, ph=220, gapX=30, gapY=24;
  const cols=3, rows=Math.max(3, Math.ceil(items.length/cols));
  const tw=cols*pw+(cols-1)*gapX, tx0=cx-tw/2;
  const ty0=730;
  // thread across top
  drawThread(x, tx0-20, ty0-28, tx0+tw+20, ty0-28, C);
  for (let i=0; i<items.length; i++){
    const r=Math.floor(i/cols), col=i%cols;
    const px=tx0+col*(pw+gapX), py=ty0+r*(ph+gapY);
    await drawPolaroid(x, px, py, pw, ph, items[i].photo, items[i].n, items[i].name, C);
  }
  // "+N more"
  const remaining = c - items.length;
  let fy = ty0 + rows*(ph+gapY) + 12;
  if (remaining > 0){
    x.font="500 32px "+FS; x.fillStyle=C.ink2; x.textAlign="center";
    x.fillText("+"+remaining+" more stamp"+(remaining>1?"s":"")+" collected", cx, fy); fy += 40;
  }
  // footer (above 1670)
  x.font="600 34px "+FD; x.fillStyle=C.ink; x.textAlign="center";
  x.fillText("STAMPQUEST", cx, 1620);
  x.font="400 24px "+FS; x.fillStyle=C.ink2;
  const url=(location.origin+location.pathname).replace(/^https?:\/\//,"");
  x.fillText(url, cx, 1655);
  return cv;
}
async function drawShareCard(withPhotos){
  const W=1080,H=1350,cv=document.createElement("canvas");cv.width=W;cv.height=H;
  const x=cv.getContext("2d"), C=shareColors();
  const FD='Fraunces,Georgia,serif', FS='DM Sans,system-ui,sans-serif';
  x.fillStyle=C.paper; x.fillRect(0,0,W,H);
  x.strokeStyle=C.subtle; x.lineWidth=3; x.strokeRect(40,40,W-80,H-80);
  const cx=W/2, c=visitedCount();
  // header
  drawPostmark(x, cx, 220, 70, C.brand);
  x.save(); x.translate(cx,220); x.rotate(-0.12);
  x.fillStyle=C.brand; x.font="600 44px "+FD; x.textAlign="center"; x.fillText("100",0,15); x.restore();
  x.fillStyle=C.ink; x.font="600 44px "+FD; x.fillText("MY PHILATELY JOURNEY", cx, 340);
  x.font="600 120px "+FD; x.fillStyle=C.brand; x.fillText(c+"", cx, 480);
  x.font="400 34px "+FS; x.fillStyle=C.ink2; x.fillText("of 100 post offices", cx, 530);
  const bw=W-400; x.fillStyle=C.subtle; x.fillRect((W-bw)/2, 570, bw, 20);
  x.fillStyle=C.collected; x.fillRect((W-bw)/2, 570, bw*c/100, 20);
  // polaroids: 6 max, 3 per row x 2 rows
  const photos = withPhotos ? await recentPhotos(6) : [];
  const visited = LOCATIONS.filter(l => state.visited[l.n]).sort((a,b)=>b.n-a.n);
  const items = [];
  for (let i=0; i<6 && i<visited.length; i++){
    const l = visited[i];
    const ph = photos.find(p => p.n === l.n);
    items.push({ n:l.n, name:l.name, photo:ph });
  }
  const pw=280, ph=240, gapX=32, gapY=25;
  const cols=3, tw=cols*pw+(cols-1)*gapX, tx0=cx-tw/2, ty0=650;
  drawThread(x, tx0-20, ty0-28, tx0+tw+20, ty0-28, C);
  for (let i=0; i<items.length; i++){
    const r=Math.floor(i/cols), col=i%cols;
    await drawPolaroid(x, tx0+col*(pw+gapX), ty0+r*(ph+gapY), pw, ph, items[i].photo, items[i].n, items[i].name, C);
  }
  const remaining = c - items.length;
  let fy = ty0 + 2*(ph+gapY) + 15;
  if (remaining > 0){
    x.font="500 28px "+FS; x.fillStyle=C.ink2; x.textAlign="center";
    x.fillText("+"+remaining+" more stamp"+(remaining>1?"s":"")+" collected", cx, fy); fy += 38;
  }
  x.font="600 32px "+FD; x.fillStyle=C.ink; x.textAlign="center"; x.fillText("STAMPQUEST", cx, 1220);
  x.font="400 22px "+FS; x.fillStyle=C.ink2;
  const url=(location.origin+location.pathname).replace(/^https?:\/\//,"");
  x.fillText(url, cx, 1270);
  return cv;
}
let shareFmt = "post";
document.querySelectorAll("#shareFmt .seg").forEach(b => b.onclick = () => {
  shareFmt = b.dataset.fmt;
  document.querySelectorAll("#shareFmt .seg").forEach(x => x.classList.toggle("on", x === b));
});
$("btnShare").onclick = async () => {
  try { await document.fonts.ready; } catch(e){}
  const withPhotos = $("sharePhotos").checked;
  const cv = shareFmt === "story" ? await drawStoryCard(withPhotos) : await drawShareCard(withPhotos);
  // preview
  const prev = document.getElementById("sharePreview");
  if (prev){
    prev.innerHTML = "";
    const img = document.createElement("img");
    img.src = cv.toDataURL("image/png");
    img.alt = "Share card preview";
    img.style.cssText = "max-width:100%;border-radius:12px;border:1px solid var(--border-subtle)";
    prev.appendChild(img);
    prev.style.display = "block";
  }
  const blob = await new Promise(r => cv.toBlob(r,"image/png"));
  const fname = shareFmt === "story" ? "stampquest-story.png" : "stampquest-journey.png";
  const file = new File([blob], fname, {type:"image/png"});
  const url = location.origin + location.pathname;
  if (navigator.canShare && navigator.canShare({ files:[file] })){
    try{ await navigator.share({ files:[file], title:"My StampQuest journey", text:"I've collected "+visitedCount()+" of 100 Karnataka Philately Passport stamps! "+url }); return; }
    catch(e){ if (e && e.name === "AbortError") return; }
  }
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download=fname; a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 4000);
  toast(t("toast.downloaded"));
};

/* export / import */
$("btnExport").onclick = () => {
  const blob = new Blob([JSON.stringify({ app:"stampquest", v:1, exported:new Date().toISOString(), state }, null, 1)], {type:"application/json"});
  const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="stampquest-backup.json"; a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href), 4000); toast(t("toast.exported"));
};
$("fileImport").addEventListener("change", e => {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => { try{
      const j = JSON.parse(r.result); const s = j.state || j;
      // validate: visited/planned must be plain objects with keys 1-100 and date-string values
      const bad = "That doesn't look like a StampQuest backup.";
      if (!s || typeof s !== "object" || Array.isArray(s)){ toast(bad); return; }
      const checkObj = (o) => {
        if (!o || typeof o !== "object" || Array.isArray(o)) return false;
        return Object.entries(o).every(([k,v]) => {
          const n = +k; return n >= 1 && n <= 100 && typeof v === "string" && !isNaN(Date.parse(v));
        });
      };
      if (!checkObj(s.visited) || !checkObj(s.planned)){ toast(bad); return; }
      const curV = Object.keys(state.visited).length;
      const newV = Object.keys(s.visited).length;
      if (!confirm(t("confirm.import", {a:curV, b:newV}))) return;
      // keep previous state for Undo
      const prev = JSON.parse(JSON.stringify({ visited:state.visited, planned:state.planned, theme:state.theme, milestones:state.milestones }));
      state.visited = s.visited || {}; state.planned = s.planned || {};
      if (s.theme) state.theme = s.theme; state.milestones = s.milestones || [];
      save(); applyTheme(); LOCATIONS.forEach(l => refreshMarker(l.n));
      renderProgress(); renderGrid(); renderDistricts();
      toast("Backup imported. Undo", () => {
        state.visited = prev.visited; state.planned = prev.planned;
        state.theme = prev.theme; state.milestones = prev.milestones;
        save(); applyTheme(); LOCATIONS.forEach(l => refreshMarker(l.n));
        renderProgress(); renderGrid(); renderDistricts();
      });
    }catch(err){ toast(t("toast.unreadable_file")); } e.target.value = ""; };
  r.readAsText(f);
});

/* ================= saved ================= */
const POSTBOX = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" style="stroke:var(--brand)" stroke-width="1.8" aria-hidden="true"><rect x="4" y="8" width="16" height="11" rx="2"/><path d="M4 8a8 5 0 0 1 16 0"/><rect x="10" y="3.5" width="4" height="3" rx="1"/><path d="M9 19v2M15 19v2"/></svg>';
/* ================= settings ================= */
$("themeToggle").addEventListener("change", e => { state.theme = e.target.checked ? "dark" : "light"; save(); applyTheme(); });
$("langToggle").addEventListener("change", e => {
  state.lang = e.target.checked ? "kn" : "en"; save(); applyLang();
});
$("sharePhotosToggle").addEventListener("change", e => {
  state.sharePhotos = e.target.checked; save();
  if (state.sharePhotos){ rivalSync(); toast(t("toast.share_on")); }
  else { rivalRemovePhotos(); toast(t("toast.share_off")); }
});
function applyLang(){
  const kn = state.lang === "kn";
  $("langToggle").checked = kn;
  document.documentElement.lang = kn ? "kn" : "en";
  // static HTML via data-i18n attributes
  // SAFETY: skip elements containing form controls (input/button/select/textarea)
  // to avoid wiping toggle switches and buttons
  document.querySelectorAll("[data-i18n]").forEach(el => {
    if (el.querySelector("input,button,select,textarea")) return;
    el.innerHTML = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-ph"));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.title = t(el.getAttribute("data-i18n-title"));
  });
  // nav labels (keep SVG icons)
  const navKeys = ["nav.explore","nav.circuits","nav.passport","nav.rivals","nav.settings"];
  document.querySelectorAll("#nav button").forEach((b, i) => {
    const svg = b.querySelector("svg");
    b.innerHTML = "";
    if (svg) b.appendChild(svg);
    b.appendChild(document.createTextNode(t(navKeys[i])));
  });
  // re-render dynamic content
  if (typeof renderGrid === "function") renderGrid();
  if (typeof renderDistricts === "function") renderDistricts();
  if (typeof renderRivals === "function" && rivalProfile) renderRivals();
  if (typeof renderPhotoMeter === "function") renderPhotoMeter();
}
function dispName(l){ return (state.lang === "kn" && l.kn_name) ? l.kn_name : l.name; }
$("btnReset").onclick = async () => {
  const vCount = Object.keys(state.visited).length;
  const photoCount = await photoCountAll().catch(()=>0);
  const photoMsg = photoCount > 0 ? " "+t("confirm.kept_photos", {n:photoCount}) : "";
  if (!confirm(t("confirm.reset", {n:vCount})+photoMsg)) return;
  let delPhotos = false;
  if (photoCount > 0){
    delPhotos = confirm("Also delete your "+photoCount+" stamp photo"+(photoCount>1?"s":"")+"? (Cancel keeps them.)");
  }
  state.visited = {}; state.planned = {}; state.milestones = []; save();
  if (delPhotos){ await photoClearAll().catch(()=>{}); if (typeof rivalRemovePhotos === "function") await rivalRemovePhotos().catch(()=>{}); }
  LOCATIONS.forEach(l => refreshMarker(l.n));
  renderProgress(); renderGrid(); renderDistricts(); renderPhotoMeter();
  toast(delPhotos ? "Progress and photos reset." : "Progress reset. Photos kept.");
};

/* ================= rivals (Supabase leaderboard + friend codes) ================= */
// Fill these in from your Supabase project dashboard (Settings → API)
const SB_URL = "https://cpygucvkxnvghpxyqqjr.supabase.co";
const SB_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNweWd1Y3ZreG52Z2hweHlxcWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxMTU4NTQsImV4cCI6MjEwNzY5MTg1NH0.28JaSAVtjzjPwLm93E4ToOzYU75Q1DkG0rkihE3Rm44";
let sb = null, rivalUser = null, rivalProfile = null;

function sbReady(){ return !!(SB_URL && SB_KEY && window.supabase); }
function initSupabase(){
  if (!sbReady()) return false;
  if (!sb) sb = window.supabase.createClient(SB_URL, SB_KEY);
  return true;
}
// compress a photo blob to ~400px JPEG for leaderboard sharing
function compressForShare(blob){
  return new Promise(res => {
    const img = new Image();
    img.onload = () => {
      const s = Math.min(1, 400 / Math.max(img.width, img.height));
      const cv = document.createElement("canvas");
      cv.width = Math.round(img.width * s); cv.height = Math.round(img.height * s);
      cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
      cv.toBlob(b => res(b), "image/jpeg", 0.75);
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => res(null);
    img.src = URL.createObjectURL(blob);
  });
}
async function rivalInit(){
  if (!initSupabase()) return;
  try {
    const { data: { session } } = await sb.auth.getSession();
    if (session) rivalUser = session.user;
    else {
      const { data, error } = await sb.auth.signInAnonymously();
      if (error) throw error;
      rivalUser = data.user;
    }
    // load or create profile
    let { data: prof } = await sb.from("profiles").select("*").eq("id", rivalUser.id).single();
    if (!prof){
      const code = await sb.rpc("gen_friend_code").then(r => r.data).catch(() => Math.random().toString(36).slice(2,8).toUpperCase());
      const { data: np, error } = await sb.from("profiles").insert({ id: rivalUser.id, friend_code: code }).select().single();
      if (error) throw error;
      prof = np;
    }
    rivalProfile = prof;
    renderRivalProfile();
    rivalSync(); // push current progress
    // one-time cleanup: photos uploaded before sharing became opt-in
    try {
      if (!state.sharePhotos && !localStorage.getItem("sq_photo_cleanup")){
        await rivalRemovePhotos();
        localStorage.setItem("sq_photo_cleanup", "1");
      }
    } catch(e){}
  } catch(e){ console.warn("rivals init:", e.message); }
}
function renderRivalProfile(){
  const card = $("rivalProfile");
  if (!rivalProfile){ card.style.display = "none"; return; }
  card.style.display = "block";
  $("rivalAvatar").textContent = (rivalProfile.display_name || "C").slice(0,1).toUpperCase();
  $("rivalName").textContent = rivalProfile.display_name || "Collector";
  $("rivalCode").textContent = "Your code: " + rivalProfile.friend_code;
  $("rivalNameInput").value = rivalProfile.display_name || "";
  if (typeof renderRivalEmailState === "function") renderRivalEmailState();
}
$("rivalCopyCode").onclick = () => {
  if (!rivalProfile) return;
  navigator.clipboard.writeText(rivalProfile.friend_code).then(() => toast(t("toast.copied")));
};
$("rivalSaveName").onclick = async () => {
  const name = $("rivalNameInput").value.trim().slice(0, 24) || "Collector";
  const { error } = await sb.from("profiles").update({ display_name: name }).eq("id", rivalUser.id);
  if (!error){ rivalProfile.display_name = name; renderRivalProfile(); toast(t("toast.saved")); }
};
// link email to anonymous account (converts to permanent, keeps friend code + progress)
$("rivalLinkEmail").onclick = async () => {
  const email = $("rivalEmailInput").value.trim();
  if (!email || !email.includes("@")){ toast(t("toast.email_invalid")); return; }
  const { error } = await sb.auth.updateUser({ email }, { emailRedirectTo: location.origin + location.pathname });
  if (error){ toast("Could not send link: " + error.message); return; }
  toast(t("toast.email_sent"));
};
function renderRivalEmailState(){
  const row = $("rivalEmailRow"), note = $("rivalEmailNote");
  if (!row) return;
  const email = rivalUser && rivalUser.email;
  if (email){
    row.style.display = "none";
    note.textContent = "Signed in as " + email + ". Keeps your friend code and leaderboard spot. Restoring your passport on a new device is not available yet — use Export backup.";
  } else {
    row.style.display = "flex";
  }
}
// sync visited array + new photos to Supabase (debounced)
let syncT = 0;
function rivalSync(){
  if (!sbReady() || !rivalUser) return;
  clearTimeout(syncT);
  syncT = setTimeout(doRivalSync, 1500);
}
async function doRivalSync(){
  try {
    const visited = Object.keys(state.visited).map(Number);
    await sb.from("progress").upsert({ user_id: rivalUser.id, visited, updated_at: new Date().toISOString() });
    if (!state.sharePhotos) return; // photo sharing is opt-in; count sync still runs above
    // upload photos not yet shared (tracked in localStorage)
    let shared = {};
    try { shared = JSON.parse(localStorage.getItem("sq_shared_photos") || "{}"); } catch(e){}
    const photos = await photoGetAll().catch(() => []);
    for (const p of photos){
      if (shared[p.n] || !p.full) continue;
      const small = await compressForShare(p.full);
      if (!small) continue;
      const path = rivalUser.id + "/" + p.n + ".jpg";
      const { error } = await sb.storage.from("quest-photos").upload(path, small, { upsert: true, contentType: "image/jpeg" });
      if (!error) shared[p.n] = 1;
    }
    localStorage.setItem("sq_shared_photos", JSON.stringify(shared));
  } catch(e){ console.warn("rival sync:", e.message); }
}
// delete shared photo copies from Supabase storage; ns omitted = all
async function rivalRemovePhotos(ns){
  if (!sbReady() || !rivalUser) return;
  try {
    let targets = ns;
    if (!targets){
      const { data: files, error } = await sb.storage.from("quest-photos").list(rivalUser.id, { limit: 200 });
      if (error) throw error;
      targets = (files || []).map(f => parseInt(f.name)).filter(n => !isNaN(n));
    }
    if (!targets.length) return;
    const paths = targets.map(n => rivalUser.id + "/" + n + ".jpg");
    const { error } = await sb.storage.from("quest-photos").remove(paths);
    if (error) throw error;
    let shared = {};
    try { shared = JSON.parse(localStorage.getItem("sq_shared_photos") || "{}"); } catch(e){}
    targets.forEach(n => delete shared[n]);
    localStorage.setItem("sq_shared_photos", JSON.stringify(shared));
  } catch(e){
    toast(t("toast.del_fail"));
  }
}
function buildRivalRow(r, i, avatarBg){
  const me = rivalUser && r.id === rivalUser.id;
  const row = document.createElement("div");
  row.className = "card";
  row.style.cssText = "display:flex;align-items:center;gap:12px;margin-bottom:8px;cursor:pointer;" + (me ? "border:2px solid var(--brand)" : "");
  row.setAttribute("role", "button");
  row.setAttribute("tabindex", "0");
  row.setAttribute("aria-label", (r.display_name || "Collector") + ", " + r.stamps + " of 100 stamps, self-reported" + ((r.photos > 0) ? ", " + r.photos + " photos shared" : ""));
  row.onclick = () => openRivalProfile(r.id);
  row.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openRivalProfile(r.id); } };
  const medal = document.createElement("div");
  medal.style.cssText = "font-size:20px;min-width:36px;text-align:center";
  medal.textContent = i < 0 ? "★" : i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : (i + 1) + ".";
  const av = document.createElement("div");
  av.style.cssText = "width:40px;height:40px;border-radius:50%;background:" + avatarBg + ";color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800";
  av.textContent = String(r.display_name || "C").slice(0, 1).toUpperCase();
  const mid = document.createElement("div");
  mid.style.flex = "1";
  const nm = document.createElement("div");
  nm.style.fontWeight = "700";
  nm.textContent = r.display_name || "Collector";
  if (me){
    const you = document.createElement("span");
    you.style.cssText = "font-size:12px;color:var(--brand)";
    you.textContent = " (you)";
    nm.appendChild(you);
  }
  const sub = document.createElement("div");
  sub.style.cssText = "font-size:12px;color:var(--ink-2)";
  const photoTxt = (r.photos > 0) ? " · 📷 " + r.photos + " shared" : "";
  sub.textContent = r.stamps + " / 100 stamps (self-reported)" + photoTxt;
  mid.appendChild(nm); mid.appendChild(sub);
  const count = document.createElement("div");
  count.style.cssText = "font-weight:800;font-size:18px;color:var(--brand)";
  count.textContent = r.stamps;
  row.appendChild(medal); row.appendChild(av); row.appendChild(mid); row.appendChild(count);
  return row;
}
async function renderRivals(){
  if (!sbReady()){
    $("rivalBoard").innerHTML = '<div class="note">Leaderboard not connected yet.</div>';
    return;
  }
  if (!navigator.onLine){ $("rivalOffline").style.display = "block"; return; }
  $("rivalOffline").style.display = "none";
  try {
    const { data: board } = await sb.from("leaderboard").select("*").limit(50);
    const el = $("rivalBoard");
    el.textContent = "";
    if (!board || !board.length){
      const empty = document.createElement("div");
      empty.className = "note"; empty.textContent = "No collectors yet — be the first!";
      el.appendChild(empty);
    } else {
      board.forEach((r, i) => el.appendChild(buildRivalRow(r, i, "var(--brand)")));
    }
    // friends list
    if (rivalUser){
      const { data: links } = await sb.from("friend_links").select("friend_id").eq("user_id", rivalUser.id);
      const fids = (links || []).map(l => l.friend_id);
      const fel = $("rivalFriends");
      fel.textContent = "";
      if (!fids.length){
        const empty = document.createElement("div");
        empty.className = "note"; empty.textContent = "No friends added yet.";
        fel.appendChild(empty);
      } else {
        const { data: fps } = await sb.from("profiles").select("id,display_name,friend_code").in("id", fids);
        const { data: fpr } = await sb.from("progress").select("user_id,visited").in("user_id", fids);
        const pmap = {}; (fpr || []).forEach(p => pmap[p.user_id] = (p.visited || []).length);
        (fps || []).forEach(f => {
          f.stamps = pmap[f.id] || 0;
          fel.appendChild(buildRivalRow(f, -1, "var(--collected)"));
        });
      }
    }
  } catch(e){
    const el = $("rivalBoard");
    el.textContent = "";
    const err = document.createElement("div");
    err.className = "note"; err.textContent = "Could not load leaderboard.";
    el.appendChild(err);
  }
}
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
$("rivalAddBtn").onclick = async () => {
  const code = $("rivalCodeInput").value.trim().toUpperCase();
  if (!code || !rivalUser) return;
  if (rivalProfile && code === rivalProfile.friend_code){ toast(t("toast.own_code")); return; }
  const { data: f } = await sb.from("profiles").select("id,display_name").eq("friend_code", code).single();
  if (!f){ toast(t("toast.not_found")); return; }
  const { error } = await sb.from("friend_links").upsert({ user_id: rivalUser.id, friend_id: f.id });
  if (!error){ $("rivalCodeInput").value = ""; toast("Added " + (f.display_name || "friend") + "!"); renderRivals(); }
  else toast(t("toast.already_added"));
};
let rsReleaseTrap = null;
async function openRivalProfile(uid){
  $("rivalSheet").style.display = "block";
  rsReleaseTrap = trapFocus($("rivalSheet"), closeRivalSheet);
  const grid = $("rsPhotos");
  grid.textContent = "";
  const loading = document.createElement("div");
  loading.className = "note"; loading.textContent = "Loading…";
  grid.appendChild(loading);
  try {
    const { data: prof } = await sb.from("profiles").select("display_name,friend_code").eq("id", uid).single();
    const { data: prog } = await sb.from("progress").select("visited").eq("user_id", uid).single();
    const visited = (prog && prog.visited) || [];
    $("rsAvatar").textContent = String(prof.display_name||"C").slice(0,1).toUpperCase();
    $("rsName").textContent = prof.display_name || "Collector";
    $("rsStats").textContent = visited.length + " / 100 stamps";
    // list their photos from storage
    const { data: files } = await sb.storage.from("quest-photos").list(uid, { limit: 100 });
    grid.textContent = "";
    if (!files || !files.length){
      const empty = document.createElement("div");
      empty.className = "note"; empty.textContent = "No photos shared yet.";
      grid.appendChild(empty); return;
    }
    for (const f of files){
      const { data: { publicUrl } } = sb.storage.from("quest-photos").getPublicUrl(uid + "/" + f.name);
      const n = parseInt(f.name);
      const loc = byN[n];
      const d = document.createElement("div");
      d.style.cssText = "position:relative;border-radius:10px;overflow:hidden;aspect-ratio:1;background:var(--surface-2)";
      const img = document.createElement("img");
      img.src = publicUrl; img.loading = "lazy"; img.alt = "Stamp photo";
      img.style.cssText = "width:100%;height:100%;object-fit:cover";
      const cap = document.createElement("div");
      cap.style.cssText = "position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.55);color:#fff;font-size:11px;padding:4px 6px";
      cap.textContent = (isNaN(n) ? "" : n + ". ") + (loc ? loc.name : "");
      d.appendChild(img); d.appendChild(cap);
      grid.appendChild(d);
    }
  } catch(e){
    grid.textContent = "";
    const err = document.createElement("div");
    err.className = "note"; err.textContent = "Could not load profile.";
    grid.appendChild(err);
  }
}
function closeRivalSheet(){ if (rsReleaseTrap){ rsReleaseTrap(); rsReleaseTrap = null; } $("rivalSheet").style.display = "none"; }
$("rsClose").onclick = closeRivalSheet;
$("rivalSheet").addEventListener("click", e => { if (e.target.id === "rivalSheet") closeRivalSheet(); });

/* ================= deep link / first run / init ================= */
function handleHash(){
  const m = location.hash.match(/^#loc=(\d+)$/);
  if (!m) return;
  const n = +m[1];
  if (byN[n]) openLocation(n);
  else { toast(t("toast.not_found_office")); history.replaceState(null, "", location.pathname + location.search); }
}
window.addEventListener("hashchange", handleHash);
/* ---- 3-card swipeable tutorial ---- */
let tIdx = 0;
const tReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function tShow(i){
  tIdx = Math.max(0, Math.min(2, i));
  const tr = $("tTrack");
  tr.scrollTo({ left: tIdx * tr.clientWidth, behavior: tReduced ? "auto" : "smooth" });
  tSyncUI();
}
function tSyncUI(){
  document.querySelectorAll("#tDots span").forEach((d, k) => d.classList.toggle("on", k === tIdx));
  $("btnTNext").textContent = tIdx === 2 ? "Start exploring" : "Next";
}
function tClose(){ state.firstRun = true; save(); $("firstrun").classList.remove("show"); }
$("btnTNext").onclick = () => { if (tIdx === 2) tClose(); else tShow(tIdx + 1); };
$("btnTSkip").onclick = tClose;
$("replayTutorial").onclick = () => { tShow(0); $("firstrun").classList.add("show"); };
// sync dots when user swipes natively (scroll-snap)
(function(){
  const tr = $("tTrack");
  let raf = 0;
  tr.addEventListener("scroll", () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const i = Math.round(tr.scrollLeft / tr.clientWidth);
      if (i !== tIdx && i >= 0 && i <= 2){ tIdx = i; tSyncUI(); }
    });
  }, { passive:true });
})();

applyTheme();
applyLang();
renderProgress(); renderCircuits(); renderGrid(); renderDistricts();
if (typeof rivalInit === "function") setTimeout(rivalInit, 2000);
if (!state.firstRun) $("firstrun").classList.add("show");
setTimeout(handleHash, 400);
if ("serviceWorker" in navigator){
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
