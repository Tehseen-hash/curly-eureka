A modern, fully responsive university information kiosk website designed to help students access details about courses, faculty, events, and campus facilities. This single-page application features an intuitive interface with tab-based navigation and comprehensive filtering capabilities.

✨ Features
🏠 Home Dashboard
Welcome section with quick access cards

Important announcements display

Real-time date and time

Responsive grid layout

📚 Courses Section
Complete course catalog with search functionality

Filter by department and academic level

Detailed course information including:

Course code and title

Instructor details

Credit hours

Schedule information

Course descriptions

👨‍🏫 Faculty Directory
Comprehensive faculty listing

Search by name, title, or department

Contact information and office locations

Professional profiles

📅 Events Calendar
Interactive monthly calendar

Event highlighting on relevant dates

Upcoming events list

Detailed event information

🏢 Campus Facilities
Facility status indicators (Open/Closed)

Operating hours

Quick overview of campus amenities

Visual status badges

🗺️ Campus Map
Interactive location selection

Building directory

(Placeholder for actual map integration)

🛠️ Technical Stack
HTML5 - Semantic markup structure

CSS3 - Modern styling with CSS Grid and Flexbox

JavaScript (ES6+) - Dynamic functionality and interactivity

Font Awesome - Icon library

Google Fonts - Typography (Montserrat & Open Sans)

📁 File Structure
text
university-kiosk/
│
├── index.html          # Main HTML file
├── styles.css          # Complete styling
├── script.js           # All JavaScript functionality
└── README.md           # This file
🚀 Installation & Setup
Prerequisites
Modern web browser (Chrome, Firefox, Safari, Edge)

Local server (for full functionality)

Quick Start
Download all three files (index.html, styles.css, script.js)

Place them in the same directory

Open index.html in a web browser

Local Server (Recommended)
For best performance, use a local server:

bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
Then navigate to http://localhost:8000 in your browser.

🎨 Design Features
Color Scheme
Primary: #2c3e50 (Dark Blue)

Secondary: #3498db (Blue)

Accent: #e74c3c (Red)

Light: #ecf0f1 (Light Gray)

Success: #2ecc71 (Green)

Warning: #f39c12 (Orange)

Typography
Headers: Montserrat (600 weight)

Body: Open Sans (300, 400, 600 weights)

Responsive Design
Mobile-first approach

Breakpoints:

Large: 1200px+

Medium: 768px - 1199px

Small: 576px - 767px

Extra Small: < 576px

🔧 Customization
Adding New Courses
Edit the coursesData array in script.js:

javascript
{
    id: 7,
    code: "NEW101",
    title: "New Course Title",
    department: "department-name",
    level: "undergraduate", // or "graduate"
    credits: 3,
    instructor: "Instructor Name",
    description: "Course description",
    schedule: "Days Time"
}
Adding Faculty Members
Edit the facultyData array:

javascript
{
    id: 7,
    name: "Full Name",
    title: "Professional Title",
    department: "Department Name",
    email: "email@university.edu",
    phone: "(123) 456-7890",
    office: "Building, Room Number"
}
Adding Events
Edit the eventsData array:

javascript
{
    id: 7,
    title: "Event Title",
    date: "YYYY-MM-DD",
    time: "Start - End Time",
    location: "Event Location",
    description: "Event description"
}
Modifying Colors
Update CSS custom properties in :root section of styles.css:

css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* ... other colors */
}
🎯 Browser Compatibility
Chrome 60+

Firefox 55+

Safari 12+

Edge 79+

📱 Mobile Features
Touch-friendly navigation

Responsive grid layouts

Optimized typography scaling

Collapsible navigation on smaller screens

🔍 Search & Filter Capabilities
Courses
Text search across:

Course codes

Course titles

Instructor names

Descriptions

Department filtering

Academic level filtering

Faculty
Text search across:

Faculty names

Professional titles

Department names

📊 Data Structure
Course Object
javascript
{
    id: Number,
    code: String,
    title: String,
    department: String,
    level: String,
    credits: Number,
    instructor: String,
    description: String,
    schedule: String
}
Faculty Object
javascript
{
    id: Number,
    name: String,
    title: String,
    department: String,
    email: String,
    phone: String,
    office: String
}
Event Object
javascript
{
    id: Number,
    title: String,
    date: String (YYYY-MM-DD),
    time: String,
    location: String,
    description: String
}
🚀 Future Enhancements
Potential Integrations
University API integration

Real-time facility status updates

Interactive campus map with Leaflet/Google Maps

User authentication for personalized content

Dark mode toggle

Multilingual support

Accessibility improvements (ARIA labels)

PWA capabilities for offline use

Backend database integration

Advanced Features
Course registration simulation

Faculty office hours display

Room availability checker

Campus news feed

Emergency alerts system

Transportation schedules

Dining hall menus

🐛 Troubleshooting
Common Issues
Calendar not displaying correctly

Ensure JavaScript is enabled

Check browser console for errors

Search/filter not working

Verify all JavaScript files are loaded

Check data structure in console

Styling issues

Clear browser cache

Verify CSS file path

Responsive layout problems

Check viewport meta tag

Test on different screen sizes

Debugging
Open browser developer tools (F12) and check:

Console for JavaScript errors

Network tab for failed resource loading

Elements tab for CSS conflicts

📄 License
This project is open source and available under the MIT License.

👥 Contributing
Fork the project

Create a feature branch

Commit your changes

Push to the branch

Open a Pull Request

📞 Support
For issues or questions:

Check the troubleshooting section

Review browser compatibility

Verify file structure

Contact development team

Version: 1.0.0
Last Updated: October 2023
Maintainer: University IT Department