<template>
  <footer class="footer">
    <br />
    <br />
    <hr />
    <div class="container bottom_border">
      <div class="row">
        <div class="col-sm-4 col-md col-sm-4 col-12 col">
          <h5 class="hseadin5_amrc col_white_amrc pt2">Customer Service</h5>
          <!--headin5_amrc-->
          <p class="mb10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <p><i class="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35</p>
          <p><i class="fa fa-phone"></i> +91-9999878398</p>
          <p><i class="fa fa fa-envelope"></i> pailou.nuneza@gmail.com</p>
        </div>

        <div class="col-sm-4 col-md col-6 col">
          <h5 class="headin5_amrc col_white_amrc pt2">About Cyberr</h5>
          <!--headin5_amrc-->
          <ul class="footer_ul_amrc">
            <li>
              <a href="http://webenlance.com">About Us</a>
            </li>
            <li>
              <a href="http://webenlance.com">Privacy Policy</a>
            </li>
            <li>
              <a href="http://webenlance.com">Cyberr Policies</a>
            </li>
            <li>
              <a href="http://webenlance.com">Malls</a>
            </li>
            <li>
              <a href="http://webenlance.com">Flash Sales</a>
            </li>
            <li>
              <a href="http://webenlance.com">Careers</a>
            </li>
          </ul>
          <!--footer_ul_amrc ends here-->
        </div>

        <div class="col-sm-4 col-md col-6 col">
          <h5 class="headin5_amrc col_white_amrc pt2">Payment</h5>
          <!--headin5_amrc-->
          <ul class="footer_ul_amrc">
            <li>
              <a href="http://webenlance.com">Remove Background</a>
            </li>
            <li>
              <a href="http://webenlance.com">Shadows & Mirror Reflection</a>
            </li>
            <li>
              <a href="http://webenlance.com">Logo Design</a>
            </li>
            <li>
              <a href="http://webenlance.com">Vectorization</a>
            </li>
            <li>
              <a href="http://webenlance.com">Hair Masking/Clipping</a>
            </li>
            <li>
              <a href="http://webenlance.com">Image Cropping</a>
            </li>
          </ul>
          <!--footer_ul_amrc ends here-->
        </div>

        <div class="col-sm-4 col-md col-12 col">
          <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
          <!--headin5_amrc ends here-->

          <ul class="footer_ul2_amrc">
            <li>
              <a href="#">
                <i class="fab fa-twitter fleft padding-right"></i>
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing...
                <a href="#">https://www.lipsum.com/</a>
              </p>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter fleft padding-right"></i>
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing...
                <a href="#">https://www.lipsum.com/</a>
              </p>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter fleft padding-right"></i>
              </a>
              <p>
                Lorem Ipsum is simply dummy text of the printing...
                <a href="#">https://www.lipsum.com/</a>
              </p>
            </li>
          </ul>
          <!--footer_ul2_amrc ends here-->
        </div>
      </div>
    </div>

    <div class="container">
      <ul class="social_footer_ul">
        <li>
          <a href="http://webenlance.com">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="http://webenlance.com">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="http://webenlance.com">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="http://webenlance.com">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      <!--social_footer_ul ends here-->
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
footer {
  width: 100%;
  min-height: 250px;
  padding: 10px 0px 25px 0px;
}
.pt2 {
  padding-top: 40px;
  margin-bottom: 20px;
}
footer p {
  font-size: 13px;
  padding-bottom: 0px;
  margin-bottom: 8px;
}
.mb10 {
  padding-bottom: 15px;
}
.footer_ul_amrc {
  margin: 0px;
  list-style-type: none;
  font-size: 14px;
  padding: 0px 0px 10px 0px;
}
.footer_ul_amrc li {
  padding: 0px 0px 5px 0px;
}
.footer_ul_amrc li a:hover {
  text-decoration: none;
}
.fleft {
  float: left;
}
.padding-right {
  padding-right: 10px;
}

.footer_ul2_amrc {
  margin: 0px;
  list-style-type: none;
  padding: 0px;
}
.footer_ul2_amrc li p {
  display: table;
}
.footer_ul2_amrc li a:hover {
  text-decoration: none;
}
.footer_ul2_amrc li i {
  margin-top: 5px;
}

.bottom_border {
  border-bottom: 1px solid #323f45;
  padding-bottom: 20px;
}
.foote_bottom_ul_amrc {
  list-style-type: none;
  padding: 0px;
  display: table;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
}
.foote_bottom_ul_amrc li {
  display: inline;
}
.foote_bottom_ul_amrc li a {
  margin: 0 12px;
}

.social_footer_ul {
  display: table;
  margin: 15px auto 0 auto;
  list-style-type: none;
}
.social_footer_ul li {
  padding-left: 20px;
  padding-top: 10px;
  float: left;
}
.social_footer_ul li a {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 50%;
}
.social_footer_ul li i {
  width: 20px;
  height: 20px;
  text-align: center;
}
</style>
