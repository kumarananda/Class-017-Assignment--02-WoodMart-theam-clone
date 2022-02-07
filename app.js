

const tabManu = document.querySelectorAll('.left-body-menu ul li a.m-item');
const tabManuAll = document.querySelectorAll('.left-body-menu ul li a');


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
})

// tabManuAll.forEach(item => {
    
//     item.addEventListener('click', function (e) {
//         e.preventDefault(); 




//     });


// })






console.log(tabManu);
console.log(tabManuAll);
//e.nextElementSibling.style.height = 0;