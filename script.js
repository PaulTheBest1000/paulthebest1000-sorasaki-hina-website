// script.js

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    });
  }
  
  // main.js (or your script.js file)
  
  const startOfflineTime = new Date();
  startOfflineTime.setHours(12, 0, 0, 0); // Set 12:00 PM
  
  const endOfflineTime = new Date();
  endOfflineTime.setHours(19, 30, 0, 0); // Set 7:30 PM
  
  function checkOfflinePeriod() {
      const currentTime = new Date();
  
      // Check if the current time is between the offline start and end time
      if (currentTime >= startOfflineTime && currentTime <= endOfflineTime) {
          // Enable offline behavior
          enableOfflineMode();
      } else {
          // Disable offline behavior
          disableOfflineMode();
      }
  }
  
  function enableOfflineMode() {
      console.log("Website is in offline mode.");
      // Optionally, show a message or activate service worker's caching behavior
  }
  
  function disableOfflineMode() {
      console.log("Website is back online.");
      // Reset to normal behavior
  }
  
  // Check if the site should be offline immediately
  checkOfflinePeriod();
  
  // Optionally, check every minute
  setInterval(checkOfflinePeriod, 60000);
  
  // Function to update the time
  function updateTime() {
      const timeElement = document.getElementById('time');
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      timeElement.innerHTML = `Current Time: ${hours}:${minutes}:${seconds}`;
  }
  
  // Function to update the calendar date
  function updateCalendar() {
      const calendarElement = document.getElementById('calendar');
      const now = new Date();
      const day = now.getDate();
      const month = now.getMonth() + 1; // months are 0-indexed
      const year = now.getFullYear();
      const dayOfWeek = now.toLocaleString('default', { weekday: 'long' });
  
      calendarElement.innerHTML = `Today: ${dayOfWeek}, ${month}/${day}/${year}`;
  }
  
  setInterval(updateTime, 1000); // Keep updating time every second
  setInterval(updateCalendar, 60000); // Update calendar every minute (60000 ms)
  
  // Initialize the time and calendar display
  updateTime();
  updateCalendar();
 
function showMessage() {
    alert('WE LOVE SORASAKI HINA!!!'); // Show alert with the message

        // Display the JPG
        const gifContainer = document.getElementById('jpg-container');
        gifContainer.style.display = 'block';  // Show the JPG container
    
        // Hide the JPG after 5 seconds (5000 ms)
        setTimeout(() => {
            gifContainer.style.display = 'none';  // Hide the JPG container
        }, 5000); // 5000ms = 5 seconds
    }
    