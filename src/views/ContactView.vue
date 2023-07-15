<template>
    <div>
        <!-- Home Banner -->
        <section class="home_banerr parallex-banner contact_us">
            <div class="banner_wrp">
                <h1 class="css-typing">
                    <p><span class="strong_class">Contact</span> Us</p>            
                </h1>         
            </div>
        </section>
        <!-- About Us Content -->
        <!-- About -->
        <section class="contact_us main_about contact-wrapper">
            <div class="grid_wrp">        
                    <div class="heding-title text-center">
                        <div class="title">
                            <h2 class="text-center">It’s Nice to Meet You!</h2>
                            <p>Please Complete the Fields Below and We Will Respond to Your Inquiry Within 48 Hours.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="FormWrapper">
                            <div class="col-lg-12 form-wrap">
                                <div class="hide-form" id="HideContactForm">
                                    <form name="ContactForm" id="ContactForm" method="post" action="" target="_blank" novalidate="novalidate">  
                                        <div class="row g-3">
                                            <div class="col-md-4 col-sm-6">
                                                <input type="text" class="form-control" id="FName" name="FName" placeholder="First Name*" required="">
                                            </div>
                                            <div class="col-md-4 col-sm-6">
                                                <input type="text" class="form-control" id="LName" name="LName" placeholder="Last Name">
                                            </div>
                                            <div class="col-md-4 col-sm-6">
                                                <input type="text" class="form-control" id="Company" name="Company" placeholder="Company*" required="">
                                            </div>
                                            <div class="col-md-4 col-sm-6">
                                                <input type="text" class="form-control" id="Phone" name="Phone" placeholder="Phone*" required="">
                                            </div>
                                            <div class="col-sm-8">
                                                <input type="email" class="form-control" id="Email" name="Email" placeholder="Email*" required="">
                                                <input type="hidden" id="_Email" name="_Email">
                                            </div>
                                            <div class="col-12">
                                                <input type="text" class="form-control" id="Address" name="Address" placeholder="Address">
                                            </div>
                                            <div class="col-12">
                                                <textarea class="form-control" placeholder="Comments" id="Comments" name="Comments" style="height: 150px"></textarea>                                        
                                            </div>                                                                        
                                            <div class="col-sm-12 text-sm-end text-center submit-btn">
                                                <button class="btn btn-primary" type="submit" id="ContactBtnForm">Submit</button>                                      
                                            </div>
                                        </div>
                                    </form>
                                </div>                        
                            </div>
                        </div><!--FormWrapper-->
                    </div>               
            </div>
        </section>
        <!-- Newsletter -->
        <section class="Newsletter parallex-banner">
            <div class="wrp_title wrp_top">        
                <h2>Newsletter</h2>
            </div>
            <div class="banner_wrp"> 
                <div class="news-box">
                    <input type="text" placeholder="Enter Your Email...">
                    <button class="btn_shop">
                        Subscribe
                    </button>
                </div>       
            </div>
        </section>
    </div>
</template>
  
  <script setup>
//   import { ref, onMounted } from 'vue';
  
 
//   onMounted(async () => {

//   })
  
  </script>