
document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                
                
                this.classList.add('active');
            });
        });

        const searchInput = document.querySelector('.nav-search input');
        searchInput.addEventListener('focus', function() {
            this.style.backgroundColor = '#ffffff';
        });
        
        searchInput.addEventListener('blur', function() {
            if (!this.value) {
                this.style.backgroundColor = '#eef3f8';
            }
        });
