let header = document.getElementsByClassName("header");

let header_menuArrDE = [
    "Über die Klinik",
    "Angebot",
    "Dienstleistungen",
    "Experten",
    "Price",
    "Feedback",
    "FAQ",
    "Galery",
    "Blog",
    "Kontakt"
  ];


  let header_menuArrUA = [
    "Про клініку",
    "Акції",
    "Послуги",
    "Фахівці",
    "Прайс",
    "Відгуки",
    "FAQ",
    "Галерея",
    "Блог",
    "Контакти"
  ];



let header_menuArr = header_menuArrDE;




function header_refresh(header_menuArr, newLang, oldLang) {


    console.log("aaa");


    header[0].innerHTML=`


    <div class="card-header fixed container-fluid p-0 m-0 " style="height: 20vh;">


            <div class="px-1"> 

                <div class="header_top_row d-flex justify-content-between align-items-center">
                   
                    <a href="index.html" class="d-flex ">

                        <img id="logo" src="logo.jpg" style="width: 150px; height: auto;">

                        <p>
                            AESTHETIC
                            <br>
                            FACE
                        </p>

                    </a>


                    <div class="d-flex">

                
                        <div class="fa-solid fa-mobile-screen fa-4x" >
                        </div>


                        <div class="details">


                            <p>
                                Poggendörper Weg 3-9, 24149 Kiel
                                <a href="https://maps.app.goo.gl/pYLtY2N4UoZVUGzQ9" class="fa-solid fa-location-dot" ></a>
                            </p>
                            

                            <b>
                                +49 (160) 512 2398
                            </b>


                        </div>
                            
                    


                    </div>

                    

                    <div class="d-flex">

                        <div class="fa-regular fa-clock fa-4x"></div>

                        <p>
                            <span>Mo - So</span>
                            <b>10:00 - 20:00</b>
                        </p>

                    </div>



            
                    <div class="d-flex">

                        <a href="https://web.telegram.org/k/#@beautifulinjections" class="fa-brands fa-telegram fa-4x" ></a>
                        <div class="fa-brands fa-viber fa-4x" ></div>
                        <a href="https://www.instagram.com/aesthetlc.face/" class="fa-brands fa-instagram fa-4x" ></a>

                        
                    </div>



                    <div class="btn btn-outline-dark d-flex">
                        <div class="d-flex align-items-center">
                            <div class="fa-solid fa-calendar-days fa-4x m-2" ></div>
                            <div class="">Termin ONLINE BUCHEN</div>
                        </div>
                    
                    </div>
                    



                
                </div>





                <div class="header_under_row d-flex justify-content-between m-0">

                    <div class="navbar  d-flex">

                        <ul class="d-flex"> 
                            <li><a href="about.html">${header_menuArr[0]}</a></li>
                            <li><a href="">${header_menuArr[1]}</a></li>
                            
                            <li id="dienstleistungen">
                                <a  href="">${header_menuArr[2]}</a>
                                <ul id="dienstleistungen_header_menu">
                                
                                    
                                </ul>
                            </li>


                            <li>${header_menuArr[3]}</li>
                            <li>${header_menuArr[4]}</li>
                            <li>${header_menuArr[5]}</li>
                            <li>${header_menuArr[6]}</li>
                            <li>${header_menuArr[7]}</li>
                            <li>${header_menuArr[8]}</li>
                            <li>${header_menuArr[9]}</li>
                            <li>${header_menuArr[10]}</li>


                            

                        </ul>

                    </div>


                    <div id="lang_block" class="m-0 p-0">
                        <p class="fw500 m-0 p-0">${newLang}</p>
                            <ul class="langs m-0 p-0 hide">
                                <li class="m-0 p-0" id="lang_change">${oldLang}</li>
                            </ul>
                    </div>


                </div>





            </div>



        </div>`

    ;



    let lang_block = document.getElementById("lang_block");
    let langs = document.getElementsByClassName("langs");
    let dienstleistungen = document.getElementById("dienstleistungen");


    let lang_change = document.getElementById("lang_change");



    let dienstleistungen_header_menu = document.getElementById("dienstleistungen_header_menu");




    lang_block.addEventListener("mouseover", function(e){

        langs[0].style.display = 'block';

    })



    lang_block.addEventListener('mouseout', function(e) {

        langs[0].style.display = 'none';

    });



    lang_change.addEventListener('click', function(e) {

        let oldLang = document.querySelector('#lang_block > p.fw500');

        console.log(oldLang.textContent)
        console.log(lang_change.innerText)
        
        if(lang_change.innerText=="UA")
            header_menuArr=header_menuArrUA
        else
            header_menuArr=header_menuArrDE;



        header_refresh(header_menuArr, lang_change.innerText ,oldLang.textContent);

    });





    dienstleistungen_header_menu.innerHTML=`


    <li><a>ВИДАЛЕННЯ НОВОУТВОРЕНЬ</a></li>

    <li><a>КОСМЕТОЛОГІЯ ОБЛИЧЧЯ ТА ТІЛА</a></li>

    <li><a>ІНТИМНА КОСМЕТОЛОГІЯ</a></li>

    <li><a>МЕЗОТЕРАПІЯ</a></li>
        
    <li><a>БІОРЕВІТАЛІЗАЦІЯ / БІОРЕПАРАЦІЯ</a></li>
        
    <li><a>БОТУЛІНОТЕРАПІЯ</a></li>
        
    <li><a>ЛАЗЕРНЕ ВИДАЛЕННЯ РОЗТЯЖЕК / РУБЦІВ</a></li>
        
    <li><a>IPL LUMENIS M22 ( ЛІКУВАННЯ КУПЕРОЗУ , ПІГМЕНТАЦІЇ , АКНЕ )</a></li>
                                        
    <li><a>ФРАКЦІЙНЕ ОМОЛОДЖЕННЯ RESUR - FX</a></li>
        
    <li><a>КОНТУРНА ПЛАСТИКА</a></li>
        
    <li><a>ЛАЗЕРНА EПІЛЯЦІЯ</a></li>
        
    <li><a>ПЛАЗМОЛІФТИНГ</a></li>
        
    <li><a>СКЛЕРОТЕРАПІЯ</a></li>
        
    <li><a>ВОЛЮМІЗАЦІЯ ОБЛИЧЧЯ (БЕЗОПЕРАЦІЙНА ПІДТЯЖКА)</a></li>
        
    <li><a>БЛАНШИНГ</a></li>
        
    <li><a>ХІМІЧНА ЛІПОСАКЦІЯ</a></li>
        
    <li><a>ПЕРМАНЕНТНИЙ МАКІЯЖ</a></li>`;




    dienstleistungen.addEventListener('mouseover', function(e) {

        dienstleistungen_header_menu.style.display = 'block';

    });


    dienstleistungen.addEventListener('mouseout', function(e) {

        dienstleistungen_header_menu.style.display = 'none';

    });


    

};

header_refresh(header_menuArr, "DE", "UA");



window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header[0].classList.add('show');
        header[0].setAttribute('id', 'header_fixed');
    } else {
        header[0].classList.remove('show');
        header[0].removeAttribute('id');
    }
});
