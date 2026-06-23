// script.js

// ฟังก์ชันสำหรับเปลี่ยนโหมดสว่าง/มืด (Dark Mode Toggle)
function toggleDarkMode() {
    // สลับคลาส 'dark-mode' ที่แท็ก <body>
    document.body.classList.toggle('dark-mode');
    
    // เปลี่ยนข้อความในปุ่ม
    const btn = document.getElementById('darkModeBtn');
    if (document.body.classList.contains('dark-mode')) {
        btn.innerText = "☀️ Light Mode";
    } else {
        btn.innerText = "🌙 Dark Mode";
    }
}

// แอบใส่ข้อความทักทายใน Console (กด F12 ในเบราว์เซอร์เพื่อดู)
console.log("ยินดีต้อนรับสู่แฟ้มสะสมผลงานของ ธนกฤต วิมลรัตน์! 🚀");
