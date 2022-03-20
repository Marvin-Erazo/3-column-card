# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

Mobile



Desktop



### Links

- Solution URL: 
- Live Site URL: 

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- [SASS](https://sass-lang.com/) - For stylesheet

### What I learned

CSS grid layout for show the elements. Use html tags for the accesibility, Keyframes animations for elemets

```SCSS
//If you can show an element with a effect

@keyframes authorShow {
    from {
        transform: translateX(20px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }
} 
```
```js
//to show or hide the element when you clicked this.

authorBtn.addEventListener('click', function(){
    clicksCount +=1;
    
    if(clicksCount % 2 === 0){
        document.getElementById('author').className = 'author';
    }

    else{
        document.getElementById('author').className = 'author-active';
    }
});
```

### Continued development

CSS animations for some elements
DOOM manipluation and events in JS

### Useful resources

- [CSS Grid](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout) - This helped me for set the grid rows and columns

## Author

- Website - [Marvin Erazo](https://marvin-erazo.github.io/)
- Frontend Mentor - [@Marvin-Erazo](https://www.frontendmentor.io/profile/Marvin-Erazo)
- GitHub - [Marvin-Erazo](https://github.com/Marvin-Erazo)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Is better write accesilbility tags for the navigation instead of use divs for the layout
