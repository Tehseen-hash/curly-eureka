// Sample data for courses
const coursesData = [
    {
        id: 1,
        code: "CS101",
        title: "Introduction to Computer Science",
        department: "computer-science",
        level: "undergraduate",
        credits: 3,
        instructor: "Dr. Sarah Johnson",
        description: "Fundamental concepts of computer science and programming. Topics include algorithms, data structures, and problem-solving techniques.",
        schedule: "Mon/Wed 10:00-11:30 AM"
    },
    {
        id: 2,
        code: "BUS201",
        title: "Principles of Marketing",
        department: "business",
        level: "undergraduate",
        credits: 3,
        instructor: "Prof. Michael Chen",
        description: "Introduction to marketing concepts and strategies. Examines consumer behavior, market research, and marketing mix.",
        schedule: "Tue/Thu 1:00-2:30 PM"
    },
    {
        id: 3,
        code: "ENG301",
        title: "Thermodynamics",
        department: "engineering",
        level: "undergraduate",
        credits: 4,
        instructor: "Dr. Robert Williams",
        description: "Study of energy transformations and relationships between heat, work, and properties of systems.",
        schedule: "Mon/Wed/Fri 9:00-10:00 AM"
    },
    {
        id: 4,
        code: "ART110",
        title: "Art History: Renaissance to Modern",
        department: "arts",
        level: "undergraduate",
        credits: 3,
        instructor: "Dr. Elizabeth Martinez",
        description: "Survey of Western art from the Renaissance through the modern era, examining major movements and artists.",
        schedule: "Tue/Thu 11:00 AM-12:30 PM"
    },
    {
        id: 5,
        code: "BIO202",
        title: "Genetics and Molecular Biology",
        department: "sciences",
        level: "undergraduate",
        credits: 4,
        instructor: "Dr. James Wilson",
        description: "Principles of heredity, gene expression, and molecular mechanisms of inheritance.",
        schedule: "Mon/Wed 2:00-3:30 PM"
    },
    {
        id: 6,
        code: "CS550",
        title: "Machine Learning",
        department: "computer-science",
        level: "graduate",
        credits: 3,
        instructor: "Dr. Amanda Lee",
        description: "Advanced topics in machine learning algorithms, neural networks, and data mining techniques.",
        schedule: "Tue 6:00-9:00 PM"
    }
];

// Sample data for faculty
const facultyData = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        title: "Professor of Computer Science",
        department: "Computer Science",
        email: "s.johnson@university.edu",
        phone: "(123) 456-7891",
        office: "Science Building, Room 205"
    },
    {
        id: 2,
        name: "Prof. Michael Chen",
        title: "Associate Professor of Business",
        department: "Business Administration",
        email: "m.chen@university.edu",
        phone: "(123) 456-7892",
        office: "Business Hall, Room 102"
    },
    {
        id: 3,
        name: "Dr. Robert Williams",
        title: "Professor of Mechanical Engineering",
        department: "Engineering",
        email: "r.williams@university.edu",
        phone: "(123) 456-7893",
        office: "Engineering Building, Room 315"
    },
    {
        id: 4,
        name: "Dr. Elizabeth Martinez",
        title: "Associate Professor of Art History",
        department: "Arts & Humanities",
        email: "e.martinez@university.edu",
        phone: "(123) 456-7894",
        office: "Arts Center, Room 118"
    },
    {
        id: 5,
        name: "Dr. James Wilson",
        title: "Professor of Biology",
        department: "Natural Sciences",
        email: "j.wilson@university.edu",
        phone: "(123) 456-7895",
        office: "Science Building, Room 401"
    },
    {
        id: 6,
        name: "Dr. Amanda Lee",
        title: "Assistant Professor of Data Science",
        department: "Computer Science",
        email: "a.lee@university.edu",
        phone: "(123) 456-7896",
        office: "Science Building, Room 210"
    }
];

// Sample data for events
const eventsData = [
    {
        id: 1,
        title: "Career Fair 2023",
        date: "2023-10-20",
        time: "10:00 AM - 3:00 PM",
        location: "Student Union Building",
        description: "Annual university career fair with over 100 companies recruiting for full-time positions and internships."
    },
    {
        id: 2,
        title: "Research Symposium",
        date: "2023-10-25",
        time: "9:00 AM - 5:00 PM",
        location: "Science Building Auditorium",
        description: "Showcase of undergraduate and graduate research projects across all disciplines."
    },
    {
        id: 3,
        title: "Alumni Homecoming Weekend",
        date: "2023-11-03",
        time: "All Day",
        location: "Campus Wide",
        description: "Annual homecoming celebration with sports events, reunions, and campus tours."
    },
    {
        id: 4,
        title: "Guest Lecture: AI Ethics",
        date: "2023-10-18",
        time: "3:00 PM - 4:30 PM",
        location: "Computer Science Building, Room 101",
        description: "Distinguished speaker Dr. Elena Rodriguez on ethical considerations in artificial intelligence."
    },
    {
        id: 5,
        title: "Music Department Concert",
        date: "2023-10-22",
        time: "7:00 PM - 9:00 PM",
        location: "Arts Center Performance Hall",
        description: "Fall concert featuring university orchestra and choir performances."
    },
    {
        id: 6,
        title: "Study Abroad Fair",
        date: "2023-10-30",
        time: "11:00 AM - 2:00 PM",
        location: "Student Union Lobby",
        description: "Learn about study abroad opportunities and international programs."
    }
];

// Calendar functionality
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');
const quickLinkCards = document.querySelectorAll('.quick-link-card');
const coursesContainer = document.getElementById('courses-container');
const facultyContainer = document.getElementById('faculty-container');
const courseSearch = document.getElementById('course-search');
const facultySearch = document.getElementById('faculty-search');
const departmentFilter = document.getElementById('department-filter');
const levelFilter = document.getElementById('level-filter');
const calendarElement = document.getElementById('calendar');
const currentMonthElement = document.getElementById('current-month');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const eventsList = document.getElementById('events-list');
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');
const locationListItems = document.querySelectorAll('.location-list li');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeDateTime();
    initializeNavigation();
    initializeCourses();
    initializeFaculty();
    initializeCalendar();
    initializeEvents();
    initializeMapLocations();
    
    // Set up event listeners
    setupEventListeners();
});

// Initialize date and time display
function initializeDateTime() {
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
}

function updateDateTime() {
    const now = new Date();
    
    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = now.toLocaleDateString('en-US', options);
    
    // Format time
    currentTimeElement.textContent = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    });
}

// Initialize navigation functionality
function initializeNavigation() {
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(tab => tab.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Initialize courses display and filtering
function initializeCourses() {
    renderCourses(coursesData);
}

function renderCourses(courses) {
    coursesContainer.innerHTML = '';
    
    if (courses.length === 0) {
        coursesContainer.innerHTML = '<p class="no-results">No courses found matching your criteria.</p>';
        return;
    }
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-header">
                <div class="course-code">${course.code}</div>
                <div class="course-title">${course.title}</div>
            </div>
            <div class="course-body">
                <div class="course-info">
                    <span><i class="fas fa-user-graduate"></i> ${course.instructor}</span>
                    <span><i class="fas fa-clock"></i> ${course.credits} Credits</span>
                </div>
                <div class="course-info">
                    <span><i class="fas fa-calendar"></i> ${course.schedule}</span>
                    <span class="course-level">${course.level}</span>
                </div>
                <p class="course-description">${course.description}</p>
                <div class="course-actions">
                    <button class="btn btn-outline"><i class="fas fa-info-circle"></i> Details</button>
                    <button class="btn btn-primary"><i class="fas fa-bookmark"></i> Save</button>
                </div>
            </div>
        `;
        coursesContainer.appendChild(courseCard);
    });
}

// Initialize faculty display
function initializeFaculty() {
    renderFaculty(facultyData);
}

function renderFaculty(faculty) {
    facultyContainer.innerHTML = '';
    
    if (faculty.length === 0) {
        facultyContainer.innerHTML = '<p class="no-results">No faculty members found matching your criteria.</p>';
        return;
    }
    
    faculty.forEach(member => {
        const facultyCard = document.createElement('div');
        facultyCard.className = 'faculty-card';
        facultyCard.innerHTML = `
            <div class="faculty-img">
                <i class="fas fa-user-tie"></i>
            </div>
            <div class="faculty-info">
                <h3 class="faculty-name">${member.name}</h3>
                <p class="faculty-title">${member.title}</p>
                <p class="faculty-department">${member.department}</p>
                <div class="faculty-contact">
                    <p><i class="fas fa-envelope"></i> ${member.email}</p>
                    <p><i class="fas fa-phone"></i> ${member.phone}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${member.office}</p>
                </div>
            </div>
        `;
        facultyContainer.appendChild(facultyCard);
    });
}

// Initialize calendar
function initializeCalendar() {
    renderCalendar(currentMonth, currentYear);
}

function renderCalendar(month, year) {
    // Update month display
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    currentMonthElement.textContent = `${monthNames[month]} ${year}`;
    
    // Clear previous calendar
    calendarElement.innerHTML = '';
    
    // Add day headers
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    dayNames.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        calendarElement.appendChild(dayElement);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-date empty';
        calendarElement.appendChild(emptyCell);
    }
    
    // Add cells for each day of the month
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement('div');
        dateElement.className = 'calendar-date';
        dateElement.textContent = day;
        
        // Check if this date has events
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const hasEvent = eventsData.some(event => event.date === dateString);
        
        if (hasEvent) {
            dateElement.classList.add('has-event');
        }
        
        // Highlight today
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dateElement.classList.add('active');
        }
        
        // Add click event to show events for that day
        dateElement.addEventListener('click', function() {
            document.querySelectorAll('.calendar-date').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            displayEventsForDate(dateString);
        });
        
        calendarElement.appendChild(dateElement);
    }
}

// Initialize events display
function initializeEvents() {
    displayUpcomingEvents();
}

function displayUpcomingEvents() {
    // Sort events by date
    const sortedEvents = [...eventsData].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Display next 5 events
    const upcomingEvents = sortedEvents.slice(0, 5);
    
    eventsList.innerHTML = '';
    upcomingEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-item';
        
        // Format date
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
        
        eventElement.innerHTML = `
            <div class="event-date">${formattedDate} | ${event.time}</div>
            <div class="event-title">${event.title}</div>
            <div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
        `;
        
        eventsList.appendChild(eventElement);
    });
}

function displayEventsForDate(dateString) {
    const eventsForDate = eventsData.filter(event => event.date === dateString);
    
    eventsList.innerHTML = '';
    
    if (eventsForDate.length === 0) {
        eventsList.innerHTML = '<p class="no-results">No events scheduled for this date.</p>';
        return;
    }
    
    eventsForDate.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-item';
        
        // Format date
        const eventDate = new Date(event.date);
        const formattedDate = eventDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: 'numeric'
        });
        
        eventElement.innerHTML = `
            <div class="event-date">${formattedDate} | ${event.time}</div>
            <div class="event-title">${event.title}</div>
            <div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>
            <p class="event-description">${event.description}</p>
        `;
        
        eventsList.appendChild(eventElement);
    });
}

// Initialize map location functionality
function initializeMapLocations() {
    locationListItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            locationListItems.forEach(li => li.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // In a real implementation, this would update the map to show the selected location
            const location = this.getAttribute('data-location');
            alert(`Selected location: ${location}. In a real implementation, the map would now highlight this building.`);
        });
    });
}

// Set up all event listeners
function setupEventListeners() {
    // Quick link cards
    quickLinkCards.forEach(card => {
        card.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelector(`.nav-item[data-tab="${tabId}"]`).classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(tab => tab.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Course search and filters
    courseSearch.addEventListener('input', filterCourses);
    departmentFilter.addEventListener('change', filterCourses);
    levelFilter.addEventListener('change', filterCourses);
    
    // Faculty search
    facultySearch.addEventListener('input', filterFaculty);
    
    // Calendar navigation
    prevMonthButton.addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });
    
    nextMonthButton.addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });
}

// Filter courses based on search and filter criteria
function filterCourses() {
    const searchTerm = courseSearch.value.toLowerCase();
    const department = departmentFilter.value;
    const level = levelFilter.value;
    
    const filteredCourses = coursesData.filter(course => {
        const matchesSearch = course.code.toLowerCase().includes(searchTerm) || 
                             course.title.toLowerCase().includes(searchTerm) ||
                             course.instructor.toLowerCase().includes(searchTerm) ||
                             course.description.toLowerCase().includes(searchTerm);
        
        const matchesDepartment = department === 'all' || course.department === department;
        const matchesLevel = level === 'all' || course.level === level;
        
        return matchesSearch && matchesDepartment && matchesLevel;
    });
    
    renderCourses(filteredCourses);
}

// Filter faculty based on search criteria
function filterFaculty() {
    const searchTerm = facultySearch.value.toLowerCase();
    
    const filteredFaculty = facultyData.filter(member => {
        return member.name.toLowerCase().includes(searchTerm) ||
               member.title.toLowerCase().includes(searchTerm) ||
               member.department.toLowerCase().includes(searchTerm);
    });
    
    renderFaculty(filteredFaculty);
}