<template>
  <!-- Desktop Header Starts -->
    <header class="header desktop_header">
        
        <div class="logo">
            <img src="../assets/mobile_logo.png">
        </div>
        <div class="main-menu">
            <ul>
                <li><router-link to="/" >Home</router-link></li>
                <li>Products 
                    <span class="down-svg">
                        <svg fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg>
                    </span>
                    <div class="mega_menu">
                        <div class="mega_wrp">                
                    <ul class="sub_menu2 sub_menu ">
                        <li>
                            <router-link to="furnishing" class="products-navigation">
                                <h3>Furnishing</h3>
                            </router-link>
                        </li>
                        
                        <li>
                            <router-link to="furnishing" >Uphoistery</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Curtains</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Sheer</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Jacquard</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Hospital Curtains</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Burn Out</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Velvet</router-link>
                        </li>
                    </ul>
                    <ul class="sub_menu3 sub_menu">
                        <li>
                            <router-link to="furnishing" class="products-navigation">
                                <h3>Garments</h3>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Ethnic Wear</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Western Wear</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Sports Wear</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Mens Wear</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Childrens Wear</router-link>
                        </li>
                    </ul>
                    <ul class="sub_menu4 sub_menu">
                        <li>
                            <router-link to="furnishing" class="products-navigation">
                                <h3>Value Edition</h3>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Foil Print</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Mukesh Print</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Embroidery</router-link>
                        </li>
                        <li>
                            <router-link to="furnishing" >Digital Print</router-link>
                        </li>
                    </ul>
                    <ul class="sub_menu5 sub_menu">                   
                        <li class="img_get active" id="furnishing">
                            <img src="../assets/menu_furnishing.jpg" alt="furnishing">
                        </li>                                
                        <li class="img_get" id="garments" >
                            <img src="../assets/menu_garments.jpg" alt="garments">
                        </li>                                
                        <li class="img_get" id="edition">
                            <img src="../assets/menu_value_edition.jpg" alt="Value Edition">
                        </li>                                        
                    </ul>
                </div>
                </div>
                </li>            
                <li><router-link to="about" >About</router-link></li>
                <li> <router-link to="contact" >Contact</router-link></li>
            </ul>
        </div>
    </header>
    <!-- Mobile Header Starts -->
    <header class="Mobile_header" id="header">        
        <nav class="navbar container">
            <a href="javascript:void(0)" class="logo brand"></a>
            <div class="burger" id="burger">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            </div>
            <div class="menu" id="menu">            
            <ul class="menu-inner">
                <li class="menu-item"><router-link to="about" class="mege-link">Home</router-link></li>
                <li class="menu-item">
                    <a href="javascript:void(0)" class="mege-link">Products 
                        <span class="next-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M13 24a1.011 1.011 0 0 1-.707-1.707L18.586 16l-6.293-6.293a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 13 24z" fill="#000000" data-original="#000000" class=""></path></g></svg>
                        </span>
                    </a>
                    <ul class="mega-menu">                    
                        <li class="menu-item">
                            <router-link to="furnishing" class="mege-link">Furnishing
                                <span class="next-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M13 24a1.011 1.011 0 0 1-.707-1.707L18.586 16l-6.293-6.293a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 13 24z" fill="#000000" data-original="#000000" class=""></path></g></svg>
                                </span>
                            </router-link>
                            
                            <ul class="mega-menu child-menu">       
                                <li><router-link to="furnishing" >Uphoistery</router-link></li>
                                <li><router-link to="furnishing" >Curtains</router-link></li>                                         
                                <li><router-link to="furnishing" >Sheer</router-link></li>
                                <li><router-link to="furnishing" >Jacquard</router-link></li>
                                <li><router-link to="furnishing" >Hospital Curtains</router-link></li>
                                <li><router-link to="furnishing" >Burn Out</router-link></li>
                                <li><router-link to="furnishing" >Velvet</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <a href="#" class="mege-link">Garments
                                <span class="next-arrow">
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M13 24a1.011 1.011 0 0 1-.707-1.707L18.586 16l-6.293-6.293a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 13 24z" fill="#000000" data-original="#000000" class=""></path></g></svg>
                                </span>
                            </a>
                            <ul class="mega-menu child-menu">                                                
                                <li><router-link to="furnishing" >Ethnic Wear</router-link></li>
                                <li><router-link to="furnishing" >Western Wear</router-link></li>                                         
                                <li><router-link to="furnishing" >Sports Wear</router-link></li>
                                <li><router-link to="furnishing" >Means Wear</router-link></li>
                                <li><router-link to="furnishing" >Childrens Wear</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:void(0)" class="mege-link">Value Edition
                            <span class="next-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="M13 24a1.011 1.011 0 0 1-.707-1.707L18.586 16l-6.293-6.293a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7A1 1 0 0 1 13 24z" fill="#000000" data-original="#000000" class=""></path></g></svg>
                            </span>
                            </a>
                            <ul class="mega-menu child-menu">             
                                <li><router-link to="furnishing" >Foil Print</router-link></li>
                                <li><router-link to="furnishing" >Mukesh Print</router-link></li>                                         
                                <li><router-link to="furnishing" >Embroidery</router-link></li>
                                <li><router-link to="furnishing" >Digital Print</router-link></li>
                            </ul>
                        </li>
                    </ul>                
                </li>
                <li class="menu-item">
                    <router-link to="about" class="mege-link">About </router-link>
                </li>
                <li class="menu-item">
                    <router-link to="about" class="mege-link">Contact</router-link>
                </li>
            </ul>
            </div>
            <router-link to="/" class="logo brand"> <img src="../assets/nav_logo.png"> </router-link>
            <!-- <a href="#" class="menu-block">Discover</a> -->
        </nav>    
    </header>
</template>