if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/fepasa-app/sw.js', { scope: '/fepasa-app/' })})}