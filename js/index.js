let header = document.getElementsByClassName("header");

console.log(header[0])





let header_menuArrDE = [
    "Über die Klinik",
    "Angebot",
    "Leistungen",
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


    <div class="blur ">

    
                <div class="my_container row">

            


                    <div class="header_top_row d-flex align-items-center justify-content-between m-0 ">






                    
                            <div class="d-flex justify-content-center align-items-center  ">

                                <a href="${countPoin}index.html" class="d-flex align-items-center row ">

                                    <img class="col" id="logo" src="${countPoin}logo.jpg" >



                                    <div class="logo_name col justify-content-center">

                                                    <div class="row justify-content-center" >
                                                       AESTHETIC
                                                    </div>


                                                    <div class="row justify-content-center">
                                                        FACE
                                                    </div>
                                     </div>

                                </a>

                            </div>



                    
                    



                    

                                    
                            <div class="d-flex align-items-center ">
                
                                <div class="icon_block d-flex align-items-center">
                                    

                                                <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 0V26H16.1484V0H0ZM14.625 1.52344V3.45312H1.52344V1.52344H14.625ZM14.625 4.97656V20.4648H1.52344V4.97656H14.625ZM1.52344 24.4766V21.9883H14.625V24.4766H1.52344Z" fill="white"></path>
                                                    <path d="M7.32251 22.4453H8.83071V23.9535H7.32251V22.4453Z" fill="white"></path>
                                                </svg>


                                                <div class="details col ">
                                                    <a class=" row" href="https://maps.app.goo.gl/XYVPmSi8wqjrG6dr7" target="_blank" ">

                                                        Poggendörper Weg 3-9, 24149 Kiel
                                                    </a>
                                                    <a href="tel:+491605122398" class="row">+49 (160) 512 2398</a>

                                                </div>


                                    </div>
                            </div>











                            <div class="d-flex align-items-center ">
                    
                                    <div class="icon_block d-flex align-items-center">
                                        


                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5 0C5.60762 0 0 5.60762 0 12.5C0 19.3924 5.60762 25 12.5 25C19.3924 25 25 19.3924 25 12.5C25 5.60762 19.3924 0 12.5 0ZM12.5 23.4375C6.46896 23.4375 1.56251 18.531 1.56251 12.5C1.56251 6.46896 6.46896 1.56251 12.5 1.56251C18.531 1.56251 23.4375 6.46896 23.4375 12.5C23.4375 18.531 18.531 23.4375 12.5 23.4375Z" fill="white"></path>
                                                <path d="M13.2813 4.68753H11.7188V12.8235L16.6351 17.7399L17.7399 16.6351L13.2813 12.1765V4.68753Z" fill="white"></path>
                                            </svg>
                                                    


                                             <div class="details hours col ">
                                                        
                                                        <a class=" row">Mo - Sa</a>   
                                                        <a class="row">10:00 - 20:00</a>
                                            </div>

                                    </div>


                            </div>








                          <div class="d-flex align-items-center ">
                
                                <div class="icon_block d-flex align-items-center messengers ">
                                    


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







                                <div class="d-flex align-items-center my_btn ">
                    
                                    <div class="icon_block d-flex align-items-center  ">
                                    

                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.75 16.875H11.25C11.1505 16.875 11.0552 16.9145 10.9848 16.9848C10.9145 17.0552 10.875 17.1505 10.875 17.25V18.75C10.875 18.8495 10.9145 18.9448 10.9848 19.0152C11.0552 19.0855 11.1505 19.125 11.25 19.125H12.75C12.8495 19.125 12.9448 19.0855 13.0152 19.0152C13.0855 18.9448 13.125 18.8495 13.125 18.75V17.25C13.125 17.1505 13.0855 17.0552 13.0152 16.9848C12.9448 16.9145 12.8495 16.875 12.75 16.875ZM12.375 18.375H11.625V17.625H12.375V18.375Z" fill="white"></path>
                                                        <path d="M9.75 16.875H8.25C8.15054 16.875 8.05516 16.9145 7.98483 16.9848C7.91451 17.0552 7.875 17.1505 7.875 17.25V18.75C7.875 18.8495 7.91451 18.9448 7.98483 19.0152C8.05516 19.0855 8.15054 19.125 8.25 19.125H9.75C9.84946 19.125 9.94484 19.0855 10.0152 19.0152C10.0855 18.9448 10.125 18.8495 10.125 18.75V17.25C10.125 17.1505 10.0855 17.0552 10.0152 16.9848C9.94484 16.9145 9.84946 16.875 9.75 16.875ZM9.375 18.375H8.625V17.625H9.375V18.375Z" fill="white"></path>
                                                        <path d="M6.75 16.875H5.25C5.15054 16.875 5.05516 16.9145 4.98484 16.9848C4.91451 17.0552 4.875 17.1505 4.875 17.25V18.75C4.875 18.8495 4.91451 18.9448 4.98484 19.0152C5.05516 19.0855 5.15054 19.125 5.25 19.125H6.75C6.84946 19.125 6.94484 19.0855 7.01517 19.0152C7.08549 18.9448 7.125 18.8495 7.125 18.75V17.25C7.125 17.1505 7.08549 17.0552 7.01517 16.9848C6.94484 16.9145 6.84946 16.875 6.75 16.875ZM6.375 18.375H5.625V17.625H6.375V18.375Z" fill="white"></path>
                                                        <path d="M3.75 16.875H2.25C2.15054 16.875 2.05516 16.9145 1.98484 16.9848C1.91451 17.0552 1.875 17.1505 1.875 17.25V18.75C1.875 18.8495 1.91451 18.9448 1.98484 19.0152C2.05516 19.0855 2.15054 19.125 2.25 19.125H3.75C3.84946 19.125 3.94484 19.0855 4.01516 19.0152C4.08549 18.9448 4.125 18.8495 4.125 18.75V17.25C4.125 17.1505 4.08549 17.0552 4.01516 16.9848C3.94484 16.9145 3.84946 16.875 3.75 16.875ZM3.375 18.375H2.625V17.625H3.375V18.375Z" fill="white"></path>
                                                        <path d="M13.125 14.25C13.125 14.1505 13.0855 14.0552 13.0152 13.9848C12.9448 13.9145 12.8495 13.875 12.75 13.875H11.25C11.1505 13.875 11.0552 13.9145 10.9848 13.9848C10.9145 14.0552 10.875 14.1505 10.875 14.25V15.75C10.875 15.8495 10.9145 15.9448 10.9848 16.0152C11.0552 16.0855 11.1505 16.125 11.25 16.125H12.75C12.8495 16.125 12.9448 16.0855 13.0152 16.0152C13.0855 15.9448 13.125 15.8495 13.125 15.75V14.25ZM12.375 15.375H11.625V14.625H12.375V15.375Z" fill="white"></path>
                                                        <path d="M10.125 14.25C10.125 14.1505 10.0855 14.0552 10.0152 13.9848C9.94484 13.9145 9.84946 13.875 9.75 13.875H8.25C8.15054 13.875 8.05516 13.9145 7.98483 13.9848C7.91451 14.0552 7.875 14.1505 7.875 14.25V15.75C7.875 15.8495 7.91451 15.9448 7.98483 16.0152C8.05516 16.0855 8.15054 16.125 8.25 16.125H9.75C9.84946 16.125 9.94484 16.0855 10.0152 16.0152C10.0855 15.9448 10.125 15.8495 10.125 15.75V14.25ZM9.375 15.375H8.625V14.625H9.375V15.375Z" fill="white"></path>
                                                        <path d="M7.125 14.25C7.125 14.1505 7.08549 14.0552 7.01517 13.9848C6.94484 13.9145 6.84946 13.875 6.75 13.875H5.25C5.15054 13.875 5.05516 13.9145 4.98484 13.9848C4.91451 14.0552 4.875 14.1505 4.875 14.25V15.75C4.875 15.8495 4.91451 15.9448 4.98484 16.0152C5.05516 16.0855 5.15054 16.125 5.25 16.125H6.75C6.84946 16.125 6.94484 16.0855 7.01517 16.0152C7.08549 15.9448 7.125 15.8495 7.125 15.75V14.25ZM6.375 15.375H5.625V14.625H6.375V15.375Z" fill="white"></path>
                                                        <path d="M4.125 14.25C4.125 14.1505 4.08549 14.0552 4.01516 13.9848C3.94484 13.9145 3.84946 13.875 3.75 13.875H2.25C2.15054 13.875 2.05516 13.9145 1.98484 13.9848C1.91451 14.0552 1.875 14.1505 1.875 14.25V15.75C1.875 15.8495 1.91451 15.9448 1.98484 16.0152C2.05516 16.0855 2.15054 16.125 2.25 16.125H3.75C3.84946 16.125 3.94484 16.0855 4.01516 16.0152C4.08549 15.9448 4.125 15.8495 4.125 15.75V14.25ZM3.375 15.375H2.625V14.625H3.375V15.375Z" fill="white"></path>
                                                        <path d="M13.125 11.25C13.125 11.1505 13.0855 11.0552 13.0152 10.9848C12.9448 10.9145 12.8495 10.875 12.75 10.875H11.25C11.1505 10.875 11.0552 10.9145 10.9848 10.9848C10.9145 11.0552 10.875 11.1505 10.875 11.25V12.75C10.875 12.8495 10.9145 12.9448 10.9848 13.0152C11.0552 13.0855 11.1505 13.125 11.25 13.125H12.75C12.8495 13.125 12.9448 13.0855 13.0152 13.0152C13.0855 12.9448 13.125 12.8495 13.125 12.75V11.25ZM12.375 12.375H11.625V11.625H12.375V12.375Z" fill="white"></path>
                                                        <path d="M14.25 10.875C14.1505 10.875 14.0552 10.9145 13.9848 10.9848C13.9145 11.0552 13.875 11.1505 13.875 11.25V12.75C13.875 12.8495 13.9145 12.9448 13.9848 13.0152C14.0552 13.0855 14.1505 13.125 14.25 13.125C14.3495 13.125 14.4448 13.0855 14.5152 13.0152C14.5855 12.9448 14.625 12.8495 14.625 12.75V11.625H15.75C15.8495 11.625 15.9448 11.5855 16.0152 11.5152C16.0855 11.4448 16.125 11.3495 16.125 11.25C16.125 11.1505 16.0855 11.0552 16.0152 10.9848C15.9448 10.9145 15.8495 10.875 15.75 10.875H14.25Z" fill="white"></path>
                                                        <path d="M10.125 11.25C10.125 11.1505 10.0855 11.0552 10.0152 10.9848C9.94484 10.9145 9.84946 10.875 9.75 10.875H8.25C8.15054 10.875 8.05516 10.9145 7.98483 10.9848C7.91451 11.0552 7.875 11.1505 7.875 11.25V12.75C7.875 12.8495 7.91451 12.9448 7.98483 13.0152C8.05516 13.0855 8.15054 13.125 8.25 13.125H9.75C9.84946 13.125 9.94484 13.0855 10.0152 13.0152C10.0855 12.9448 10.125 12.8495 10.125 12.75V11.25ZM9.375 12.375H8.625V11.625H9.375V12.375Z" fill="white"></path>
                                                        <path d="M7.125 11.25C7.125 11.1505 7.08549 11.0552 7.01517 10.9848C6.94484 10.9145 6.84946 10.875 6.75 10.875H5.25C5.15054 10.875 5.05516 10.9145 4.98484 10.9848C4.91451 11.0552 4.875 11.1505 4.875 11.25V12.75C4.875 12.8495 4.91451 12.9448 4.98484 13.0152C5.05516 13.0855 5.15054 13.125 5.25 13.125H6.75C6.84946 13.125 6.94484 13.0855 7.01517 13.0152C7.08549 12.9448 7.125 12.8495 7.125 12.75V11.25ZM6.375 12.375H5.625V11.625H6.375V12.375Z" fill="white"></path>
                                                        <path d="M4.125 11.25C4.125 11.1505 4.08549 11.0552 4.01516 10.9848C3.94484 10.9145 3.84946 10.875 3.75 10.875H2.25C2.15054 10.875 2.05516 10.9145 1.98484 10.9848C1.91451 11.0552 1.875 11.1505 1.875 11.25V12.75C1.875 12.8495 1.91451 12.9448 1.98484 13.0152C2.05516 13.0855 2.15054 13.125 2.25 13.125H3.75C3.84946 13.125 3.94484 13.0855 4.01516 13.0152C4.08549 12.9448 4.125 12.8495 4.125 12.75V11.25ZM3.375 12.375H2.625V11.625H3.375V12.375Z" fill="white"></path>
                                                        <path d="M22.125 9.75C22.125 9.65054 22.0855 9.55516 22.0152 9.48483C21.9448 9.41451 21.8495 9.375 21.75 9.375H2.25C2.15054 9.375 2.05516 9.41451 1.98484 9.48483C1.91451 9.55516 1.875 9.65054 1.875 9.75C1.875 9.84946 1.91451 9.94484 1.98484 10.0152C2.05516 10.0855 2.15054 10.125 2.25 10.125H21.75C21.8495 10.125 21.9448 10.0855 22.0152 10.0152C22.0855 9.94484 22.125 9.84946 22.125 9.75Z" fill="white"></path>
                                                        <path d="M2.25 8.625H3.75C3.84946 8.625 3.94484 8.58549 4.01516 8.51517C4.08549 8.44484 4.125 8.34946 4.125 8.25C4.125 8.15054 4.08549 8.05516 4.01516 7.98483C3.94484 7.91451 3.84946 7.875 3.75 7.875H2.25C2.15054 7.875 2.05516 7.91451 1.98484 7.98483C1.91451 8.05516 1.875 8.15054 1.875 8.25C1.875 8.34946 1.91451 8.44484 1.98484 8.51517C2.05516 8.58549 2.15054 8.625 2.25 8.625Z" fill="white"></path>
                                                        <path d="M6.75 8.625C6.84946 8.625 6.94484 8.58549 7.01517 8.51517C7.08549 8.44484 7.125 8.34946 7.125 8.25C7.125 8.15054 7.08549 8.05516 7.01517 7.98483C6.94484 7.91451 6.84946 7.875 6.75 7.875H5.25C5.15054 7.875 5.05516 7.91451 4.98484 7.98483C4.91451 8.05516 4.875 8.15054 4.875 8.25C4.875 8.34946 4.91451 8.44484 4.98484 8.51517C5.05516 8.58549 5.15054 8.625 5.25 8.625H6.75Z" fill="white"></path>
                                                        <path d="M9.75 8.625C9.84946 8.625 9.94484 8.58549 10.0152 8.51517C10.0855 8.44484 10.125 8.34946 10.125 8.25C10.125 8.15054 10.0855 8.05516 10.0152 7.98483C9.94484 7.91451 9.84946 7.875 9.75 7.875H8.25C8.15054 7.875 8.05516 7.91451 7.98483 7.98483C7.91451 8.05516 7.875 8.15054 7.875 8.25C7.875 8.34946 7.91451 8.44484 7.98483 8.51517C8.05516 8.58549 8.15054 8.625 8.25 8.625H9.75Z" fill="white"></path>
                                                        <path d="M12.75 8.625C12.8495 8.625 12.9448 8.58549 13.0152 8.51517C13.0855 8.44484 13.125 8.34946 13.125 8.25C13.125 8.15054 13.0855 8.05516 13.0152 7.98483C12.9448 7.91451 12.8495 7.875 12.75 7.875H11.25C11.1505 7.875 11.0552 7.91451 10.9848 7.98483C10.9145 8.05516 10.875 8.15054 10.875 8.25C10.875 8.34946 10.9145 8.44484 10.9848 8.51517C11.0552 8.58549 11.1505 8.625 11.25 8.625H12.75Z" fill="white"></path>
                                                        <path d="M15.75 8.625C15.8495 8.625 15.9448 8.58549 16.0152 8.51517C16.0855 8.44484 16.125 8.34946 16.125 8.25C16.125 8.15054 16.0855 8.05516 16.0152 7.98483C15.9448 7.91451 15.8495 7.875 15.75 7.875H14.25C14.1505 7.875 14.0552 7.91451 13.9848 7.98483C13.9145 8.05516 13.875 8.15054 13.875 8.25C13.875 8.34946 13.9145 8.44484 13.9848 8.51517C14.0552 8.58549 14.1505 8.625 14.25 8.625H15.75Z" fill="white"></path>
                                                        <path d="M18.75 8.625C18.8495 8.625 18.9448 8.58549 19.0152 8.51517C19.0855 8.44484 19.125 8.34946 19.125 8.25C19.125 8.15054 19.0855 8.05516 19.0152 7.98483C18.9448 7.91451 18.8495 7.875 18.75 7.875H17.25C17.1505 7.875 17.0552 7.91451 16.9848 7.98483C16.9145 8.05516 16.875 8.15054 16.875 8.25C16.875 8.34946 16.9145 8.44484 16.9848 8.51517C17.0552 8.58549 17.1505 8.625 17.25 8.625H18.75Z" fill="white"></path>
                                                        <path d="M21.75 7.875H20.25C20.1505 7.875 20.0552 7.91451 19.9848 7.98483C19.9145 8.05516 19.875 8.15054 19.875 8.25C19.875 8.34946 19.9145 8.44484 19.9848 8.51517C20.0552 8.58549 20.1505 8.625 20.25 8.625H21.75C21.8495 8.625 21.9448 8.58549 22.0152 8.51517C22.0855 8.44484 22.125 8.34946 22.125 8.25C22.125 8.15054 22.0855 8.05516 22.0152 7.98483C21.9448 7.91451 21.8495 7.875 21.75 7.875Z" fill="white"></path>
                                                        <path d="M21.75 2.25H21.375V1.5C21.375 1.10218 21.217 0.720644 20.9357 0.43934C20.6544 0.158035 20.2728 0 19.875 0C19.4772 0 19.0956 0.158035 18.8143 0.43934C18.533 0.720644 18.375 1.10218 18.375 1.5V2.25H16.125V1.5C16.125 1.10218 15.967 0.720644 15.6857 0.43934C15.4044 0.158035 15.0228 0 14.625 0C14.2272 0 13.8456 0.158035 13.5643 0.43934C13.283 0.720644 13.125 1.10218 13.125 1.5V2.25H10.875V1.5C10.875 1.10218 10.717 0.720644 10.4357 0.43934C10.1544 0.158035 9.77282 0 9.375 0C8.97718 0 8.59564 0.158035 8.31434 0.43934C8.03304 0.720644 7.875 1.10218 7.875 1.5V2.25H5.625V1.5C5.625 1.10218 5.46696 0.720644 5.18566 0.43934C4.90436 0.158035 4.52282 0 4.125 0C3.72718 0 3.34564 0.158035 3.06434 0.43934C2.78304 0.720644 2.625 1.10218 2.625 1.5V2.25H2.25C1.65345 2.2506 1.0815 2.48784 0.659668 2.90967C0.23784 3.3315 0.000595661 3.90345 0 4.5L0 18.75C0.000595661 19.3466 0.23784 19.9185 0.659668 20.3403C1.0815 20.7622 1.65345 20.9994 2.25 21H19.125C20.2181 20.9994 21.2793 20.6312 22.1379 19.9547C22.9965 19.2782 23.6027 18.3326 23.8589 17.2699C24.1152 16.2072 24.0067 15.0893 23.5508 14.0957C23.095 13.1022 22.3183 12.2908 21.3456 11.792C20.3729 11.2933 19.2607 11.1361 18.1879 11.3457C17.115 11.5554 16.1439 12.1197 15.4305 12.9479C14.7172 13.7762 14.303 14.8203 14.2547 15.9124C14.2064 17.0044 14.5268 18.081 15.1642 18.969C15.2223 19.0498 15.3101 19.1041 15.4083 19.1202C15.5065 19.1362 15.607 19.1126 15.6877 19.0545C15.7685 18.9964 15.8229 18.9086 15.8389 18.8105C15.855 18.7123 15.8313 18.6118 15.7733 18.531C15.2334 17.7792 14.9621 16.8677 15.0029 15.9431C15.0437 15.0185 15.3943 14.1345 15.9982 13.4332C16.6022 12.7319 17.4245 12.2541 18.3328 12.0766C19.2412 11.8991 20.1828 12.0322 21.0063 12.4546C21.8299 12.8769 22.4874 13.564 22.8733 14.4052C23.2592 15.2465 23.3509 16.193 23.1338 17.0927C22.9166 17.9924 22.4033 18.793 21.6762 19.3656C20.9491 19.9383 20.0505 20.2498 19.125 20.25H2.25C1.85218 20.25 1.47064 20.092 1.18934 19.8107C0.908035 19.5294 0.75 19.1478 0.75 18.75V6.75H23.25V11.625C23.25 11.7245 23.2895 11.8198 23.3598 11.8902C23.4302 11.9605 23.5255 12 23.625 12C23.7245 12 23.8198 11.9605 23.8902 11.8902C23.9605 11.8198 24 11.7245 24 11.625V4.5C23.9994 3.90345 23.7622 3.3315 23.3403 2.90967C22.9185 2.48784 22.3466 2.2506 21.75 2.25ZM19.125 1.5C19.125 1.30109 19.204 1.11032 19.3447 0.96967C19.4853 0.829018 19.6761 0.75 19.875 0.75C20.0739 0.75 20.2647 0.829018 20.4053 0.96967C20.546 1.11032 20.625 1.30109 20.625 1.5V3.75C20.625 3.94891 20.546 4.13968 20.4053 4.28033C20.2647 4.42098 20.0739 4.5 19.875 4.5C19.6761 4.5 19.4853 4.42098 19.3447 4.28033C19.204 4.13968 19.125 3.94891 19.125 3.75V1.5ZM13.875 1.5C13.875 1.30109 13.954 1.11032 14.0947 0.96967C14.2353 0.829018 14.4261 0.75 14.625 0.75C14.8239 0.75 15.0147 0.829018 15.1553 0.96967C15.296 1.11032 15.375 1.30109 15.375 1.5V3.75C15.375 3.94891 15.296 4.13968 15.1553 4.28033C15.0147 4.42098 14.8239 4.5 14.625 4.5C14.4261 4.5 14.2353 4.42098 14.0947 4.28033C13.954 4.13968 13.875 3.94891 13.875 3.75V1.5ZM8.625 1.5C8.625 1.30109 8.70402 1.11032 8.84467 0.96967C8.98532 0.829018 9.17609 0.75 9.375 0.75C9.57391 0.75 9.76468 0.829018 9.90533 0.96967C10.046 1.11032 10.125 1.30109 10.125 1.5V3.75C10.125 3.94891 10.046 4.13968 9.90533 4.28033C9.76468 4.42098 9.57391 4.5 9.375 4.5C9.17609 4.5 8.98532 4.42098 8.84467 4.28033C8.70402 4.13968 8.625 3.94891 8.625 3.75V1.5ZM3.375 1.5C3.375 1.30109 3.45402 1.11032 3.59467 0.96967C3.73532 0.829018 3.92609 0.75 4.125 0.75C4.32391 0.75 4.51468 0.829018 4.65533 0.96967C4.79598 1.11032 4.875 1.30109 4.875 1.5V3.75C4.875 3.94891 4.79598 4.13968 4.65533 4.28033C4.51468 4.42098 4.32391 4.5 4.125 4.5C3.92609 4.5 3.73532 4.42098 3.59467 4.28033C3.45402 4.13968 3.375 3.94891 3.375 3.75V1.5ZM0.75 6V4.5C0.75 4.10218 0.908035 3.72064 1.18934 3.43934C1.47064 3.15804 1.85218 3 2.25 3H2.625V3.75C2.625 4.14782 2.78304 4.52936 3.06434 4.81066C3.34564 5.09196 3.72718 5.25 4.125 5.25C4.52282 5.25 4.90436 5.09196 5.18566 4.81066C5.46696 4.52936 5.625 4.14782 5.625 3.75V3H7.875V3.75C7.875 4.14782 8.03304 4.52936 8.31434 4.81066C8.59564 5.09196 8.97718 5.25 9.375 5.25C9.77282 5.25 10.1544 5.09196 10.4357 4.81066C10.717 4.52936 10.875 4.14782 10.875 3.75V3H13.125V3.75C13.125 4.14782 13.283 4.52936 13.5643 4.81066C13.8456 5.09196 14.2272 5.25 14.625 5.25C15.0228 5.25 15.4044 5.09196 15.6857 4.81066C15.967 4.52936 16.125 4.14782 16.125 3.75V3H18.375V3.75C18.375 4.14782 18.533 4.52936 18.8143 4.81066C19.0956 5.09196 19.4772 5.25 19.875 5.25C20.2728 5.25 20.6544 5.09196 20.9357 4.81066C21.217 4.52936 21.375 4.14782 21.375 3.75V3H21.75C22.1478 3 22.5294 3.15804 22.8107 3.43934C23.092 3.72064 23.25 4.10218 23.25 4.5V6H0.75Z" fill="white"></path>
                                                        <path d="M18.3749 18C18.4744 18 18.5697 17.9605 18.64 17.8902L21.64 14.8902C21.7083 14.8194 21.7461 14.7247 21.7453 14.6264C21.7444 14.5281 21.705 14.434 21.6355 14.3645C21.5659 14.2949 21.4719 14.2555 21.3736 14.2547C21.2752 14.2538 21.1805 14.2916 21.1098 14.3599L18.3749 17.0948L17.14 15.8599C17.0693 15.7916 16.9746 15.7538 16.8763 15.7547C16.7779 15.7555 16.6839 15.7949 16.6144 15.8645C16.5448 15.934 16.5054 16.0281 16.5045 16.1264C16.5037 16.2247 16.5415 16.3194 16.6098 16.3902L18.1098 17.8902C18.1801 17.9605 18.2755 18 18.3749 18Z" fill="white"></path>
                                                    
                                                </svg>



                                                        
                                                <div class="details text-center align-items-center">

                                                        <div class="">Записатися </div>
                                                        <div class="">Online</div> 

                                                </div>


                                    </div>


                                </div>


                        
                </div>











                    <div class="header_under_row d-flex align-items-center justify-content-between m-0">

                        <div class="navbar d-flex">

                            <ul class="d-flex"> 
                                <li><a href="${countPoin}about.html">${header_menuArr[0]}</a></li>
                                <li><a href="${countPoin}angebot/index.html">${header_menuArr[1]}</a></li>
                                
                                <li id="leistungen " class="first">
                                    <a  href="${countPoin}services/index.html">${header_menuArr[2]}</a>
                                    <ul id="leistungen_header_menu" class="submenu hide">
                                    
                                        
                                    </ul>
                                </li>


                                <li><a href="${countPoin}team/index.html" >${header_menuArr[3]}</a></li>
                                <li><a href="${countPoin}price.html" >${header_menuArr[4]}</a></li>
                                <li><a href="" >${header_menuArr[5]}</a></li>
                                <li><a href="${countPoin}faq.html" >${header_menuArr[6]}</a></li>
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



                </div>
            



        </div>`
        
    ;


    let lang_block = document.getElementById("lang_block");
    let langs = document.getElementsByClassName("langs");
    let leistungen = document.getElementById("leistungen");


    let lang_change = document.getElementById("lang_change");



    let leistungen_header_menu = document.getElementById("leistungen_header_menu");




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





    leistungen_header_menu.innerHTML=`


    <li class="has_child ">
        <a 
        
            href="${countPoin}services/vidalennya-novoutvoren.html" >ВИДАЛЕННЯ НОВОУТВОРЕНЬ
        
        </a>


        <ul class="submenu secondary hide">
                <li><a href="https://besedaclinic.com.ua/ua/vidalennya-novoutvoren/vidalennya-rodimok">ВИДАЛЕННЯ РОДИМОК</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/vidalennya-novoutvoren/vidalennya-papilom">ВИДАЛЕННЯ ПАПІЛОМ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/vidalennya-novoutvoren/vidalennya-keratom">ВИДАЛЕННЯ КЕРАТОМ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/vidalennya-novoutvoren/vidalennya-aterom">ВИДАЛЕННЯ АТЕРОМ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/vidalennya-novoutvoren/vidalennya-genitalnix-kondilom">ВИДАЛЕННЯ ГЕНІТАЛЬНИХ КОНДИЛОМ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/vidalennya-novoutvoren/vidalennya-miliumiv">ВИДАЛЕННЯ МІЛІУМІВ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/vidalennya-novoutvoren/vidalennya-ksantelazmi">ВИДАЛЕННЯ КСАНТЕЛАЗМИ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/vidalennya-novoutvoren/vidalennya-kontagioznogo-molyuska">ВИДАЛЕННЯ КОНТАГІОЗНОГО МОЛЮСКА</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/vidalennya-novoutvoren/vidalennya-borodavok">ВИДАЛЕННЯ БОРОДАВОК</a></li>
        </ul>
        
        
    </li>

    <li class="has_child">
    
    
        <a href="${countPoin}services/kosmetologiya.html" >КОСМЕТОЛОГІЯ ОБЛИЧЧЯ ТА ТІЛА</a>

    
        <ul class="submenu secondary hide">
               <li><a href="https://besedaclinic.com.ua/ua/kosmetologiya/cistka-obliccya">ЧИСТКА ОБЛИЧЧЯ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/kosmetologiya/ximicnii-piling">ХІМІЧНИЙ ПІЛІНГ</a></li>
               <li><a href="https://besedaclinic.com.ua/ua/kosmetologiya/doglyad-za-skiroyu-obliccya-i-zoni-dekolte">ДОГЛЯД ЗА ШКІРОЮ ОБЛИЧЧЯ І ЗОНИ ДЕКОЛЬТЕ</a></li>
                                                                                                                                   
        </ul>
    
    
    </li>


    <li class="has_child">
    
            <a href="${countPoin}services/intimna-kosmetologiya.html">ІНТИМНА КОСМЕТОЛОГІЯ</a>


            <ul class="submenu secondary hide">
                <li><a href="https://besedaclinic.com.ua/ua/intimna-kosmetologiya/intimnii-piling">ІНТИМНИЙ ПІЛІНГ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/intimna-kosmetologiya/intimna-biorevitalizaciyabioreparaciya">ІНТИМНА БІОРЕВІТАЛІЗАЦІЯ/БІОРЕПАРАЦІЯ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/intimna-kosmetologiya/mezoterapiya-intimnix-zon">МЕЗОТЕРАПІЯ ІНТИМНИХ ЗОН</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/intimna-kosmetologiya/intimna-konturna-plastika">ІНТИМНА КОНТУРНА ПЛАСТИКА</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/intimna-kosmetologiya/aparatne-likuvannya">АПАРАТНЕ ЛІКУВАННЯ</a></li>
                <li><a href="https://besedaclinic.com.ua/ua/intimna-kosmetologiya/likuvannya-gipergidrozu-intimnix-zon">ЛІКУВАННЯ ГІПЕРГІДРОЗУ ІНТИМНИХ ЗОН</a></li>

            </ul>
            
            
    </li>



    <li><a href="${countPoin}services/mezoterapiya.html">МЕЗОТЕРАПІЯ</a></li>
        
    <li><a href="${countPoin}services/biorevitalizaciya-bioreparaciya.html">БІОРЕВІТАЛІЗАЦІЯ / БІОРЕПАРАЦІЯ</a></li>
        
    <li class="has_child" ><a>БОТУЛІНОТЕРАПІЯ</a></li>
        
    <li><a>ЛАЗЕРНЕ ВИДАЛЕННЯ РОЗТЯЖЕК / РУБЦІВ</a></li>
        
    <li class="has_child" ><a>IPL LUMENIS M22 ( ЛІКУВАННЯ КУПЕРОЗУ , ПІГМЕНТАЦІЇ , АКНЕ )</a></li>
                                        
    <li><a>ФРАКЦІЙНЕ ОМОЛОДЖЕННЯ RESUR - FX</a></li>
        
    <li class="has_child"><a>КОНТУРНА ПЛАСТИКА</a></li>
        
    <li><a>ЛАЗЕРНА EПІЛЯЦІЯ</a></li>
        
    <li><a>ПЛАЗМОЛІФТИНГ</a></li>
        
    <li><a>СКЛЕРОТЕРАПІЯ</a></li>
        
    <li><a>ВОЛЮМІЗАЦІЯ ОБЛИЧЧЯ (БЕЗОПЕРАЦІЙНА ПІДТЯЖКА)</a></li>
        
    <li><a>БЛАНШИНГ</a></li>
        
    <li><a>ХІМІЧНА ЛІПОСАКЦІЯ</a></li>
        
    <li><a>ПЕРМАНЕНТНИЙ МАКІЯЖ</a></li>`;







    
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




let crossButton = document.getElementsByClassName("cross");
let faq_item = document.getElementsByClassName("faq_item");


function openClose(buttonsOpenClose) {


    // Преобразуем HTMLCollection в массив для удобства
    Array.from(buttonsOpenClose).forEach(function(button) {
        button.addEventListener('click', function() {
            // Находим родительский элемент с классом "price_item"
            let priceItem = this.closest('.price_item');
            if (priceItem) {
                // Добавляем класс "open" к родительскому элементу
                priceItem.classList.toggle('open');
            }
        });
    });
}

openClose(crossButton)

openClose(faq_item)

    
    