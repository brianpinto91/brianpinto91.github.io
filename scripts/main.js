const groupItems = document.querySelectorAll('.group-container');
  
groupItems.forEach(groupItem => {
    groupItem.addEventListener('mouseover', () => {
    console.log(groupItem.childNodes[1].classList)
    groupItem.childNodes[1].classList.add('group-image-blur');
    });
  
    groupItem.addEventListener('mouseout', () => {
    console.log(groupItem.childNodes[1].classList)
    groupItem.childNodes[1].classList.remove('group-image-blur');
    });
});