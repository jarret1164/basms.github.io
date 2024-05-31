// Get form elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('login-form');

// Get user role and attendance actions
const userRoleDiv = document.getElementById('user-role');
const attendanceActionsDiv = document.getElementById('attendance-actions');
const markAttendanceButton = document.getElementById('mark-attendance');
const recordAttendanceButton = document.getElementById('record-attendance');

// Get system management buttons
const manageUsersButton = document.getElementById('manage-users');
const configureSystemButton = document.getElementById('configure-system');
const generateReportsButton = document.getElementById('generate-reports');

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    // Validate login credentials
    if (username === 'admin' && password === 'password') {
        // Display user role
        userRoleDiv.textContent = 'Welcome, Admin!';
        // Display attendance actions
        attendanceActionsDiv.style.display = 'block';
        // Display system management options
        document.getElementById('system-management').style.display = 'block';
    } else if (username === 'teacher' && password === 'password') {
        // Display user role
        userRoleDiv.textContent = 'Welcome, Teacher!';
        // Display attendance actions
        attendanceActionsDiv.style.display = 'block';
        // Display system management options
        document.getElementById('system-management').style.display = 'block';
    } else if (username === 'student' && password === 'password') {
        // Display user role
        userRoleDiv.textContent = 'Welcome, Student!';
        // Display attendance actions
        attendanceActionsDiv.style.display = 'block';
        // Display system management options
        document.getElementById('system-management').style.display = 'block';
    } else {
        // Display error message
        alert('Invalid login credentials');
    }
});

// Handle attendance actions
markAttendanceButton.addEventListener('click', () => {
    // Simulate biometric scan
    const scanResult = prompt('Biometric scan result (Match/No Match):');
    if (scanResult === 'Match') {
        alert('Attendance recorded successfully.');
    } else {
        alert('Invalid scan. Please try again.');
    }
});

recordAttendanceButton.addEventListener('click', () => {
    // Simulate biometric scan
    const scanResult = prompt('Biometric scan result (Match/No Match):');
    if (scanResult === 'Match') {
        alert('Attendance recorded successfully.');
    } else {
        alert('Invalid scan. Please try again.');
    }
});

// Handle system management options
manageUsersButton.addEventListener('click', () => {
    alert('Managing users...');
});

configureSystemButton.addEventListener('click', () => {
    alert('Configuring system...');
});

generateReportsButton.addEventListener('click', () => {
    alert('Generating reports...');
});