<template>

    <nav class="navbar navbar-expand-lg fixed-top">
              <a href="#" class="navbar-brand">
                <div><img src="./../../assets/logo.png" alt="logo" id="logo"></div>
              </a>

              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"><i class="fas fa-bars" style="color:#fff; font-size:28px;"></i></span>
            </button>

            <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
                <ul id="navbar-nav" class="navbar-nav ml-auto">
                    <li><a class="nav-item nav-link" href="#homepage">Home</a></li>
                    <li><a class="nav-item nav-link" href="#inspirational">About</a></li>
                    <li><a class="nav-item nav-link" href="#events">Events</a></li>
                    <li><a class="nav-item nav-link" href="#references">References</a></li>
                    <li><a class="nav-item nav-link" href="#contact">Contact</a></li>
                    <li><a class="nav-item nav-link sign-up" href="#sign-up">Sign up</a></li>
                </ul>
            </div>
          </nav>
          <router-view/>

</template>
