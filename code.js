document.getElementById("small-screen-menu-button").addEventListener("click", display_nav);
        function display_nav() {
            let nav = document.getElementById("navbar");
            nav.className = "nav_in_small_screens";

            document.getElementById("small-screen-menu-button").style.display = "none";
        }

        document.querySelector("nav header").addEventListener("click", hide_nav);
        let nav_link = document.getElementsByClassName("nav-link");
        for(let i=0; i<nav_link.length; i++){
            nav_link[i].addEventListener("click", hide_nav);
        }
        function hide_nav() {
            let nav = document.getElementById("navbar");
            nav.className = "hidden_nav_in_small_screens";
            document.getElementById("small-screen-menu-button").style.display = "block";
        }
