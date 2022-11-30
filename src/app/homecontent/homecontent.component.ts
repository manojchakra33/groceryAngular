import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.css']
})
export class HomecontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
    // this.Repeat();
    this.showSlides();
     
   }
  
   
 
   // startIndex:any;
 
   // Repeat() {
   //   setTimeout(() => {
   //     this.__FunctionSlide();
   //     this.Repeat();
   //   }, 2000);
     
   // }
 
   // __FunctionSlide() {
   //   this.Imagedata=["https://github.com/gilchrist01/imagesforslides/blob/main/slider_1.jpg?raw=true",
   //   "https://github.com/gilchrist01/imagesforslides/blob/main/slider_2.jpg?raw=true",
   //   "https://github.com/gilchrist01/imagesforslides/blob/main/slider_3.jpg?raw=true",
   //   "https://github.com/gilchrist01/imagesforslides/blob/main/slider_4.jpg?raw=true",
   //   "https://github.com/gilchrist01/imagesforslides/blob/main/slider_5.jpg?raw=true"];
    
 
   //   const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
   //   if (slides === []) {
   //     this.Repeat();
   //   }
   //   for (const x of slides) {
   //     const y = x as HTMLElement;
   //     y.style.display = 'none';
   //   }
   //   if (this.startIndex > slides.length - 1) {
   //     this.startIndex = 0;
   //     const slide = slides[this.startIndex] as HTMLElement;
   //     slide.style.display = 'block';
   //     this.startIndex++;
   //   } else {
 
   //     const slide = slides[this.startIndex] as HTMLElement;
   //     slide.style.display = 'block';
   //     this.startIndex++;
   //   }
   // }
 
    slideIndex:number = 0;
 
 
  showSlides()
   {
   let i;
   let x:any;
   let slides =Array.from(document.getElementsByClassName("mySlides"));
   for (i = 0; i < slides.length; i++) {
     slides[i]=x;
     const y = x as HTMLElement;
     y.style.display = "none";
   }
   this.slideIndex++;
   if (this.slideIndex > slides.length) {this.slideIndex = 1}
         x=slides[this.slideIndex-1];
   const z = x as HTMLElement;
   z.style.display = "block";
   setTimeout(this.showSlides, 2000); // Change image every 2 seconds
 }
  
}
