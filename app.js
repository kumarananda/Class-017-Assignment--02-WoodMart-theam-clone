

const tabManu = document.querySelectorAll('.left-body-menu ul li a.m-item');
const tabManuAll = document.querySelectorAll('.left-body-menu ul li a');
const Allpane = document.querySelectorAll('.main-contetn .contetnt-body .tab-pen');



tabManuAll.forEach(item => {
    
    item.addEventListener('click', function (e) {
        e.preventDefault(); 

        

        Allpane.forEach(item => {
            item.classList.remove('activeFP')
        });


        const pane = document.querySelector(this.getAttribute('href'));
        pane.classList.add('activeFP')
        
    });


});



tabManu.forEach(item => {
    item.addEventListener('click', function(e){
        e.preventDefault();

        
        tabManu.forEach(item => {
            item.classList.remove('active');
            item.nextElementSibling.style.height = '0'
        })
        
        if(item == this){
            item.classList.add('active');
            item.nextElementSibling.style.height = 'fit-content';
        }else{
            item.classList.remove('active');
            item.nextElementSibling.style.height = '0';
        }

    })
});










// console.log(tabManu);
// console.log(tabManuAll);
//e.nextElementSibling.style.height = 0;