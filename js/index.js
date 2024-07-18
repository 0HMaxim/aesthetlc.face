let header = document.getElementsByClassName("header");

console.log(header[0])





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

  let newLang = "DE"
  let oldLang = "UA"


  let countPoin=""

function header_refresh(header_menuArr, newLang, oldLang) {

    countPoin=""
    let folder = document.getElementsByClassName("folder");
    

    if(folder.length>0){
        console.log(folder.length*2);

        for (let i = 0; i < folder.length; i++) {
            countPoin += "..";
        }
        
        countPoin += "/";
    }
  

    console.log(countPoin);


    header[0].innerHTML=`


    <div class="card-header fixed container-fluid p-0 m-0 px-2 " style="height: 20vh ;">


           

                <div class="header_top_row d-flex justify-content-between align-items-center">
                
                    <div class=d-flex align-items-center text-center>

                        <a href="${countPoin}index.html" class="d-flex header_logo text-center">

                            <img id="logo" src="${countPoin}logo.jpg" style="width: 150px; height: auto;">

                            <div class="text-center">
                                AESTHETIC
                                <br>
                                FACE
                            </div>

                        </a>
                    </div>



                    <div class="d-flex">

                
                        <div class="fa-solid fa-mobile-screen fa-4x" >
                        </div>


                        <div class="details">


                            <p>
                                
                                <a href="https://maps.app.goo.gl/pYLtY2N4UoZVUGzQ9" >Poggendörper Weg 3-9, 24149 Kiel

                                <span class="fa-solid fa-location-dot"></span></a>
                            </p>
                            

                            <b>
                                <a href="tel:+491605122398" class="fa-brands" >+49 (160) 512 2398</a>
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
                        <a href="tel:+491605122398" class="fa-brands fa-whatsapp fa-4x" ></a>
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

                    <div class="navbar d-flex">

                        <ul class="d-flex"> 
                            <li><a href="${countPoin}about.html">${header_menuArr[0]}</a></li>
                            <li><a href="${countPoin}index.html">${header_menuArr[1]}</a></li>
                            
                            <li id="dienstleistungen">
                                <a  href="${countPoin}services/index.html">${header_menuArr[2]}</a>
                                <ul id="dienstleistungen_header_menu" class="hide">
                                
                                    
                                </ul>
                            </li>


                            <li><a href="${countPoin}team/index.html" >${header_menuArr[3]}</a></li>
                            <li><a href="${countPoin}price.html" >${header_menuArr[4]}</a></li>
                            <li><a href="" >${header_menuArr[5]}</a></li>
                            <li><a href="" >${header_menuArr[6]}</a></li>
                            <li><a href="" >${header_menuArr[7]}</a></li>
                            <li><a href="" >${header_menuArr[8]}</a></li>
                            <li><a href="${countPoin}contact.html" >${header_menuArr[9]}</a></li>


                            

                        </ul>

                    </div>


                    <div id="lang_block" class="m-0 p-0">
                        <p class="fw500 m-0 p-0">${newLang}</p>
                            <ul class="langs m-0 p-0 hide">
                                <li class="m-0 p-0" id="lang_change">${oldLang}</li>
                            </ul>
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

        langs[0].classList.add('show');
    })



    lang_block.addEventListener('mouseout', function(e) {

        langs[0].classList.remove('show');
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


    <li><a href="${countPoin}services/vidalennya-novoutvoren.html" >ВИДАЛЕННЯ НОВОУТВОРЕНЬ</a></li>

    <li><a href="${countPoin}services/kosmetologiya.html" >КОСМЕТОЛОГІЯ ОБЛИЧЧЯ ТА ТІЛА</a></li>


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

        dienstleistungen_header_menu.classList.add('show');
    });


    dienstleistungen.addEventListener('mouseout', function(e) {

        dienstleistungen_header_menu.classList.remove('show');
    });


    
    let breadcrumbs = document.getElementById("breadcrumbs");


    breadcrumbs.innerHTML=`
    
        <div class="container">
                <ol class="d-flex">
                    
                        <a itemprop="item" href="${countPoin}index.html">
                            <span>Головна</span>
                        </a>


                     
                    <li>
                        <a itemprop="item" href="${countPoin}about.html">
                            <span>Про клініку</span>
                        </a>
                    </li>
                </ol>
            
         </div>
    
    
    
    `





};

header_refresh(header_menuArr, "DE", "UA");



window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        header[0].classList.add('header_fixed');
    } else {
        header[0].classList.remove('header_fixed');
    }
});




let buttonShowTable = document.getElementsByClassName("cross");


    // Преобразуем HTMLCollection в массив для удобства
    Array.from(buttonShowTable).forEach(function(button) {
        button.addEventListener('click', function() {
            // Находим родительский элемент с классом "price_item"
            let priceItem = this.closest('.price_item');
            if (priceItem) {
                // Добавляем класс "open" к родительскому элементу
                priceItem.classList.toggle('open');
            }
        });
    });
    
    