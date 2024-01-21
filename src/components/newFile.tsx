import navIcon1 from "./icons/icon1.astro";
import navIcon2 from "./icons/icon2.astro";

<Fragment>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-sm-6 text-center text-sm-end">
          <div class="social-icon">
            <a href="https://www.instagram.com/_brenes_30/">
              <img src={navIcon1} alt="Icon" />
            </a>
            <a href="https://www.facebook.com/Josue.Brenes.3005/">
              <img src={navIcon2} alt="Icon" />
            </a>
          </div>
          <p>© Josué Brenes Portfolio | All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</Fragment>;
