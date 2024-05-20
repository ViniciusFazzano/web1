function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  
  document.addEventListener('click', function(e) {
    var sidebar = document.getElementById("sidebar");
    var toggleBtn = document.querySelector('.toggle-btn');
    if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
      sidebar.classList.remove("active");
    }
  });
  