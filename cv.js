const dutch = document.querySelector(".dutch");

dutch.addEventListener("click", () => {
  document.body.innerHTML = `    <section id="header">
  <div class="container">
    <div class="user-box">
      <img src="images/mypic.jpg" alt="" />
      <h1>Abdulrahman Sadek</h1>
    </div>
  </div>
  <div class="scroll-btn">
    <div class="scroll-bar">
      <a href="#about"><span><i class="bi bi-arrow-down"></i></span></a>
    </div>
  </div>
</section>
<!----------- user-info---------------->
<section id="user-info">
  <div class="nav-bar">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand ml-auto" href="#">
          <img src="images/Abdulrahman-designstyle-boots-m.png" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <i class="bi bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#top"
                >HOME</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">Over Mij </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume">CV</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">CONTACT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">PROJECTEN</a>
            </li>
          </ul>
          <div class="en-nl">
           <ul>
             <li><p class="english">English</p></li>
             <li>|</li>
             <li><p class="dutch">Nethelands</p></li>
           </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <!--------ABOUT--------->
  <div class="about container" id="about">
    <div class="row">
      <div class="col-md-6 text-center">
        <img src="images/mypic.jpg" alt="" class="profile-img" />
      </div>
      <div class="col-md-6">
        <h3>
        WIE BEN IK ?
        </h3>
        <p>
        Ik ben Abdulrahaman sadek Ik kom uit Syrië Damascus Ik woon hier in Amsterdam voor 6 jaar geleden toen ik bedrijfskunde in Syrië heb gedaan mijn hoofdvak was finance banking toen ik naar Nederland verhuisde Ik werkte op zoveel verschillende gebieden, zoals gastvrijheid en klantenservice en zoveel andere dingen, maar nu studeer ik wat ik leuk vind en waar ik mijn patiënten vind. Ik ben een paar maanden geleden naar mijn school gegaan en is Bootcamp voor webontwikkeling hopelijk ben ik over een paar maanden afgestudeerd waar ik studeer ze leren me hoe ik veel technische problemen kan oplossen en in verschillende sferen kan werken. elke dag coderen is
         iets wat ik leuk vind en ik open aan het einde om in één baan te belanden voor wat ik leuk vind.
        </p>
        <div class="skills-bar">
          <p>Css</p>
          <div class="progress">
            <div class="progress-bar" style="width: 70%">70%</div>
          </div>

          <div class="skills-bar">
            <p>Html</p>
            <div class="progress">
              <div class="progress-bar" style="width: 70%">70%</div>
            </div>




            <div class="skills-bar">
              <p>javascript</p>
              <div class="progress">
                <div class="progress-bar" style="width: 80%">80%</div>
              </div>



              <div class="skills-bar">
                <p>Using APIs</p>
                <div class="progress">
                  <div class="progress-bar" style="width: 80%">80%</div>
                </div>
                <div class="skills-bar">
                  <p>Express.js</p>
                  <div class="progress">
                    <div class="progress-bar" style="width: 60%">60%</div>
                  </div>



        </div>
      </div>
    </div>
  </div>



  <!-----------------------social icons-------------->





</section>
<div id="social-icons">
<ul><a href="https://www.linkedin.com/in/abdulrahman-sadek-b814951a0/"><li><i class="bi bi-linkedin"></i></li></a>
  <a href="https://github.com/Abdulrahmansadek"><li><i class="bi bi-github"></i></li></a>
  

</ul>

</div>

<div class="resume" id="resume">

  <div class="container">
<div class="row">
<div class="col-md-6">
<h3 class="text-center"> Mijn Ervaring</h3>
<ul class="timeline">
<li>
  <h4>Klantenservice</h4>
  
  ▪ Herinrichting van de werkvloer<br>
  ▪ Klanten helpen te vinden wat ze nodig hebben<br>
  ▪ Werken als kassier<br>
  ▪ Verantwoordelijk voor het verpakken van de online bestellingen<br>
  ▪ Klanten telefonisch te woord staan<br>
  
  <b>Bedrijf</b> - Bershka<br>
  <b>Looptijd</b> - 2 years [2019-2021]<br>
  <b>Locatie</b>- Amsterdam<br>

</li>




<li>
  <h4>Computeronderhoud </h4>
  
  ▪ Onderhoud van computers<br>
▪ Onderhoudssoftware en hardware<br>
   
  
  <b>Bedrijf</b> - Zein<br>
  <b>Looptijd</b> - 1 jaar [2011]<br>
  <b>Locatie</b> - Damascus, Syria<br>

</li>




<li>
  <h4>Accountant</h4>
 
  ▪ Biedt financiële informatie aan het management door boekhoudgegevens te onderzoeken en te analyseren
   rapporten opstellen.<br>
  ▪ Documenteert financiële transacties door rekeninginformatie in te voeren.<br>
  ▪ Onderbouwt financiële transacties door documenten te controleren.<br>
  ▪ Beveelt financiële acties aan door boekhoudopties te analyseren.<br>
 
  <b>Bedrijf</b> - Kaikate<br>
  <b>Looptijd</b>  - 1 year [2010]<br>
  <b>Locatie</b> - Damascus-Syria<br>

</li>
</ul>
</div>
<!-------------------------Education----------------------->
<div class="col-md-6 ">
<h3 class="text-center">Mijn Opleiding</h3>
<ul class="timeline">
<li>
  <h4>Business Administratie [2009-2012]</h4>
  
   
  
  <b>Universiteit</b> - Arabic international university <br>
  <b>Looptijd</b> - 4 years [2009-2012]<br>
  <b>Locatie</b> - Damascus Syria<br>

</li>




<li>
  <h4>Full stack web development</h4>
 
   ▪ Html <br>
   ▪ Css<br>
  ▪ jQuery<br>
  ▪ Javascript<br>
    ▪ react js<br>
    ▪ node js<br>
    ▪ MySQL<br>
 
  <b>School</b> Hack your Future<br>
  <b>Looptijd</b> - 1 year [2021] still in progress<br>
  <b>Locatie</b> - Amsterdam <br>

</li>
</ul>
</div>

</div>
  </div>
</div>
<!--------------------- projects---------------------->
<div class="projects" id="projects">

<div class="container">

<h1 class="text-center">Projects</h1>
<p></p>
<div class="row">
<div class="col-md-4">

<div class="projects-box">
<span>Currency Exchange</span>
<p>demo: <a href="https://abdulrahmansadek.github.io/money-Exchange/">EX-money</a></p>
</div>

</div>
<div class="col-md-4">

<div class="projects-box">
<span>Weather App</span>
<p>demo: <a href="https://abdulrahmansadek.github.io/weatherApp/">Weather-App</a></p>
</div>

</div>
<div class="col-md-4">

<div class="projects-box">
  <span>Movies App</span>
  <p>demo: <a href="https://abdulrahmansadek.github.io/movies-app/">Movies</a></p>
</div>
</div>
</div>
</div>
</div>


<!----------- languages ----------->
<div class="languages " id="languages ">
  <div class="container">
  <h1 class="text-center">Talen</h1>

  <p>Engels</p>
  <div class="progress">
    <div class="progress-bar" style="width: 70%">70%</div>
  </div>

 
    <p>Nederlands</p>
    <div class="progress">
      <div class="progress-bar" style="width: 60%">60%</div>
    </div>




   
      <p>Arabisch</p>
      <div class="progress">
        <div class="progress-bar" style="width: 100%">100%</div>
      </div>


</div>
</div>
</div>

<!-------------------contacts-------------------->
<div class="contact" id="contact">
<div class="container text-center">
<h1>Contact Me</h1>
<p class="text-center">English is the language i studied in University</p>
<div class="row">
<div class="col-md-4">
<span><i class="bi bi-telephone"></i></span> 
<p>+31 640679482</p>
</div>

<div class="col-md-4">
<span><i class="bi bi-envelope-open"></i></span> 
<p>boody.sad@gmail.com</p>
</div>
<div class="col-md-4">
<span><i class="bi bi-linkedin"></i></span> 
<p><a href="" style="color:white;">linkedin.com/in/abdulrahman-sadek-b814951a0</a></p>
</div>
</div>

</div>
<div class="footer text-center">



</div>

<script src="cv.js"></script>
<script src="smooth-scroll.js"></script>
<script>
  var scroll = new SmoothScroll('a[href*="#"]');
</script>
`;
  const english = document.querySelector(".english");
  english.addEventListener("click", () => {
    location.reload();
  });
});
