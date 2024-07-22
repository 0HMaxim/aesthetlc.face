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


    <div class="fixed align-items-center row my_container">


           


                <div class="header_top_row d-flex align-items-center justify-content-between m-0 ">
                
                    <div class="logo_block d-flex justify-content-center">

                        <a href="${countPoin}index.html" class="d-flex align-items-center">

                            <img id="logo" src="${countPoin}logo.jpg" style="width: 200px; height: auto;">

                            <p class="text-center">
                                AESTHETIC
                                <br>
                                FACE
                            </p>

                        </a>

                    </div>



                  
                
                        <div class="d-flex  icon_block justify-content-center">



                            <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0V26H16.1484V0H0ZM14.625 1.52344V3.45312H1.52344V1.52344H14.625ZM14.625 4.97656V20.4648H1.52344V4.97656H14.625ZM1.52344 24.4766V21.9883H14.625V24.4766H1.52344Z" fill="white"></path>
                                    <path d="M7.32251 22.4453H8.83071V23.9535H7.32251V22.4453Z" fill="white"></path>
                            </svg>
                                        
                            <div class="details d-flex row">
                                    <p class="w-auto">Poggendörper Weg 3-9, 24149 Kiel</p>
                                    <a href="tel:+491605122398" class="fw700 w-auto" >+49 (160) 512 2398</a>
                            </div>


                        </div>
                            
                    


               

            
                    <div class="d-flex  icon_block ">



                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5 0C5.60762 0 0 5.60762 0 12.5C0 19.3924 5.60762 25 12.5 25C19.3924 25 25 19.3924 25 12.5C25 5.60762 19.3924 0 12.5 0ZM12.5 23.4375C6.46896 23.4375 1.56251 18.531 1.56251 12.5C1.56251 6.46896 6.46896 1.56251 12.5 1.56251C18.531 1.56251 23.4375 6.46896 23.4375 12.5C23.4375 18.531 18.531 23.4375 12.5 23.4375Z" fill="white"></path>
                                    <path d="M13.2813 4.68753H11.7188V12.8235L16.6351 17.7399L17.7399 16.6351L13.2813 12.1765V4.68753Z" fill="white"></path>
                                </svg>
                                        


                                <div class="details hours d-flex row">

                                            <span>Mo - Sa</span>    <b>10:00 - 20:00</b>
                                </div>

                    </div>




            
                    <div class="d-flex justify-content-center icon_block">

                        <div class="details d-flex w-100">
                               

                                    <a href="https://web.telegram.org/k/#@beautifulinjections" class="d-flex tg" target="_blank">
                                    
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.8966 3.81554L19.8663 20.493C19.5372 22.3416 18.4439 23 17.53 23C17.0585 23 16.569 22.8386 16.0738 22.5191L15.9915 22.4653L15.9146 22.3995L9.61325 16.9633L9.37642 20.1402C9.2528 20.8824 8.66198 21.4155 7.98958 21.3522C7.47279 21.3033 7.05375 20.9169 6.87874 20.3994L5.82719 16.7912C5.77904 16.6803 5.74993 16.5588 5.74993 16.4286C5.74993 15.9747 6.07157 15.6071 6.46868 15.6071C6.78242 15.6071 7.04549 15.8371 7.14396 16.1567C7.14468 16.1567 7.14576 16.1559 7.14647 16.1546L8.0097 19.1179L8.1362 17.4221C8.1362 17.42 8.1362 17.42 8.1362 17.4192C8.21455 16.3329 9.04831 15.5246 9.99887 15.6137C10.3126 15.6425 10.5976 15.7702 10.838 15.9616L16.7804 21.0881C17.0571 21.2664 17.3086 21.3567 17.53 21.3567C17.9889 21.3567 18.3149 20.9666 18.4576 20.1653L21.4936 3.45657C21.7416 2.29836 21.2927 1.64286 20.6886 1.64286C20.5344 1.64286 20.3706 1.68557 20.2042 1.77305L2.37751 9.80129C1.16029 10.3718 1.16748 11.164 2.15541 11.5168L5.10197 12.5913C5.10268 12.5913 5.10556 12.5892 5.10628 12.59C5.30825 12.6619 5.53574 12.6369 5.72908 12.4984C5.73268 12.4964 5.73519 12.4972 5.73843 12.4952L13.6225 6.81704C14.2906 6.34636 15.1682 6.5743 15.5897 7.33495C15.948 7.981 15.8596 8.80161 15.4215 9.33512L11.2894 14.0571V14.0579L11.2783 14.0698L11.2775 14.069C11.1485 14.2103 10.9742 14.2982 10.782 14.2982C10.3848 14.2982 10.0632 13.9306 10.0632 13.4768C10.0632 13.2566 10.1397 13.0574 10.2637 12.91L10.263 12.9092L14.3578 8.22866L6.47408 13.9064C5.91129 14.2966 5.25362 14.3664 4.66891 14.1544C4.6646 14.1524 4.66029 14.1544 4.65562 14.1524L1.72668 13.0849C0.183141 12.5334 0.0163892 11.2548 0.00165462 10.8765C-0.021705 10.2391 0.183501 9.05379 1.83197 8.28082L1.8406 8.27671L1.84994 8.27261L19.6446 0.259571C19.9849 0.0874821 20.3361 0 20.6886 0C21.3926 0 22.042 0.357321 22.4704 0.982018C22.9735 1.71268 23.1241 2.71811 22.8966 3.81554ZM10.7812 18.8929C11.1784 18.8929 11.5 19.2604 11.5 19.7143C11.5 20.1681 11.1784 20.5357 10.7812 20.5357C10.3841 20.5357 10.0625 20.1681 10.0625 19.7143C10.0625 19.2604 10.3841 18.8929 10.7812 18.8929Z" 
                                            fill="white">
                                            </path>
                                        </svg>
                                        
                                    </a>



                                    <a href="tel:+491605122398" class="d-flex tg" target="_blank" >

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                        </svg>

                                    </a>
                                            



                                    <a href="https://www.instagram.com/aesthetlc.face/" class="d-flex tg" target="_blank">
                                    
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.6505 0H6.3462C2.84691 0 0 2.84704 0 6.34633V16.6506C0 20.1501 2.84691 22.997 6.3462 22.997H16.6505C20.1501 22.997 22.997 20.1499 22.997 16.6506V6.34633C22.9971 2.84704 20.1501 0 16.6505 0ZM20.9567 16.6506C20.9567 19.025 19.025 20.9566 16.6506 20.9566H6.3462C3.97199 20.9567 2.0404 19.025 2.0404 16.6506V6.34633C2.0404 3.97212 3.97199 2.0404 6.3462 2.0404H16.6505C19.0249 2.0404 20.9566 3.97212 20.9566 6.34633V16.6506H20.9567Z" fill="white"></path>
                                            <path d="M11.4985 5.57303C8.23099 5.57303 5.57275 8.23127 5.57275 11.4988C5.57275 14.7661 8.23099 17.4242 11.4985 17.4242C14.766 17.4242 17.4242 14.7661 17.4242 11.4988C17.4242 8.23127 14.766 5.57303 11.4985 5.57303ZM11.4985 15.3837C9.35621 15.3837 7.61316 13.6409 7.61316 11.4986C7.61316 9.35621 9.35607 7.6133 11.4985 7.6133C13.6409 7.6133 15.3838 9.35621 15.3838 11.4986C15.3838 13.6409 13.6408 15.3837 11.4985 15.3837Z" fill="white"></path>
                                            <path d="M17.6727 3.8429C17.2796 3.8429 16.8934 4.00205 16.6158 4.2809C16.3368 4.5584 16.1764 4.94471 16.1764 5.33919C16.1764 5.73245 16.3369 6.11863 16.6158 6.39748C16.8933 6.67498 17.2796 6.83549 17.6727 6.83549C18.0672 6.83549 18.4521 6.67498 18.731 6.39748C19.0098 6.11863 19.169 5.73231 19.169 5.33919C19.169 4.94471 19.0098 4.5584 18.731 4.2809C18.4535 4.00205 18.0672 3.8429 17.6727 3.8429Z" fill="white"></path>
                                        </svg>
                                        
                                    </a>


                        </div>


                        
                    </div>




                    <div class="d-flex align-items-center icon_block btn btn-outline-dark">

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


    <li><a href="${countPoin}services/intimna-kosmetologiya.html">ІНТИМНА КОСМЕТОЛОГІЯ</a></li>

    <li><a href="${countPoin}services/mezoterapiya.html">МЕЗОТЕРАПІЯ</a></li>
        
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
    
    