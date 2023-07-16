<template>
    <div>
        <!-- Home Banner -->
        <loader-vue/>
        <section class="home_banerr parallex-banner">
            <div class="banner_wrp">
                <h1 class="css-typing">
                    <p><span class="strong_class">Your</span> Comfort Is</p>
                    <p>Our <span class="strong_class">Happiness.</span></p>
                </h1> 
                <p class="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Dolores veritatis ad blanditiis molestias sunt aspernatur.</p>       
                <button class="btn_shop">
                    Explore More    
                </button>
            </div>
        </section>
        <!-- Collection Banner -->
        <section class="collection_grid">
            <div class="wrp_title wrp_top">
                <p>NEW ARRIVAL</p>
                <h2>Products</h2>
            </div> 
            <div class="grid_wrp">         
                <div class="grid_main">
                    <div class="box_wrp">
                    <div class="img_wrp">
                        <img src="../assets/menu_furnishing.jpg">
                    </div>
                    <!-- <div class="wrp_title">
                        <h3>Product 1</h3>
                    </div> -->
                </div>
                </div>
                <div class="grid_main">
                    <div class="box_wrp">
                    <div class="img_wrp">
                        <img src="../assets/garments.jpg">
                    </div>
                    <!-- <div class="wrp_title">
                        <h3>Product 1</h3>
                    </div> -->
                    </div>
                </div>
                <div class="grid_main">
                    <div class="box_wrp">
                    <div class="img_wrp">
                        <img src="../assets/ambrodary.jpg">
                    </div>
                    <!-- <div class="wrp_title">
                        <h3>Product 1</h3>
                    </div> -->
                </div>
                </div>        
            </div>
        </section>
        <!-- Counter -->
        <!-- Brand -->
        <section class="Services">
            <div class="wrp_title wrp_top">
                <p>Our Numbers Don't Lie </p>
                <h2>Growth In Numbers</h2>
            </div>
            <div class="brand_wrp grid_wrp">
                <div id="counter">
                    <div class="item">
                        <h1 class="count" > 
                            <number
                            ref="number1"
                            :to="15"
                            :duration="5"
                            :delay="2"
                            easing="Power1.easeOut"/>
                        </h1>
                        <h3 class="text box">Clients</h3>
                    </div>
                    <div class="item">
                        <h1 class="count" > 
                            <number
                            ref="number2"
                            :to="5"
                            :duration="5"
                            :delay="2"
                            easing="Power1.easeOut"/>
                        </h1>
                        <h3 class="text box">year+ Eexperience</h3>
                    </div>
                    <div class="item">
                        <h1 class="count" > 
                            <number
                            ref="number3"
                            :to="100"
                            :duration="5"
                            :delay="2"
                            easing="Power1.easeOut"/>
                        </h1>
                        <h3 class="text box">Products</h3>
                    </div>            
                    
                    </div>
            </div>
        </section>
        <!-- About -->
        <section class="about_us parallex-banner">
            <div class="grid_wrp">
                <div class="about-us wrp_top">
                    <div class="About_img">
                        <img src="../assets/company.jpg">
                    </div>
                    <div class="about_content wrp_title">
                        <p>About Us</p>
                        <h2>
                            Cloth is important part
                            for comfort
                        </h2>
                        <p class="wpr_content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vel illo atque assumenda consectetur. Nostrum sequi inventore praesentium, 
                            id repellat temporibus eos explicabo. Ipsum voluptatibus vel, porro culpa in beatae quis!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vel illo atque assumenda consectetur. Nostrum sequi inventore praesentium,  
                        </p>
                        <p class="wpr_content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Vel illo atque assumenda consectetur. Nostrum sequi inventore praesentium, 
                            id repellat temporibus eos explicabo. Ipsum voluptatibus vel, porro culpa in beatae quis!                       
                        </p>
                        <button class="btn_shop">
                            Explore More    
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- Brand -->
        <section class="brand">
            <div class="wrp_title wrp_top">
                <!-- <p>Brands</p> -->
                <h2>Our Customers</h2>
            </div>
            <div class="brand_wrp grid_wrp">
                <div class="flex_wrp">
                <div class="brand_logo">
                    <img src="../assets/brand-logo.jpg" alt="google">
                </div>
                <div class="brand_logo">
                    <img src="../assets/brandlogo2.png" alt="tesla">
                </div>
                <div class="brand_logo">
                    <img src="../assets/brand-logo.jpg" alt="netflix">
                </div>
                <div class="brand_logo">
                    <img src="../assets/brandlogo2.png" alt="google">
                </div>
                <div class="brand_logo">
                    <img src="../assets/brand-logo.jpg" alt="tesla">
                </div>
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
  
  import { ref, onMounted } from 'vue';
  const number1 = ref(null)
  const number2 = ref(null)
  const number3 = ref(null)
  
  onMounted(async () => {
    console.log(number1.value)
  })

  </script>