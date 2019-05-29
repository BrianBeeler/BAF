import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.less']
})
export class IndustriesComponent implements OnInit {

  industries = [
    {
      name: 'AGRICULTURE',
      message: 'Big Ass Fans and Lights are an economical, energy-efficient solution for a herd of agricultural issues-from worker safety and product intrgrity to animal health, productivity, air quality, bird and big deterrance and more.',
      linkUrl: 'https://www.bigassfans.com/industries/agriculture',
      imageUrl: 'https://s3.amazonaws.com/ba-en-us/global/header-footer/industries/agriculture.jpg'
    },
    {
      name: 'AVIATION',
      message: 'No hangar, terminal, FBO or aircraft manufacturing plant is too big or small for Big Ass Fans and Lights. We offer fans and lights for every space to keep technicians alert and productive, aircraft in top condition and passengers and personnel comfortable and happy.',
      imageUrl: 'https://s3.amazonaws.com/ba-en-us/global/header-footer/industries/aviation.jpg',
      linkUrl: 'https://www.bigassfans.com/industries/aviation'
    },
    {
      name: 'COMMERCIAL/PUBLIC SPACES',
      message: 'Big Ass Fans and Lights are ideal for any commercial space, small or large. Working with existing HVAC systems and lighting grids to improve energy efficiency, our products look good and perform even better.',
      imageUrl: 'https://s3.amazonaws.com/ba-en-us/global/header-footer/industries/commercial.jpg',
      linkUrl: 'https://www.bigassfans.com/industries/commercial-public-spaces'
    },
    {
      name: 'EDUCTION',
      message: 'Big Ass Fans and Lights get straight A\'s in Comfort 101. Not only can they sport school colors, but they also make your students cooler and your classrooms, gymnasiums and lunch rooms brighter and more energetic.',
      imageUrl: 'https://s3.amazonaws.com/ba-en-us/global/header-footer/industries/education.jpg',
      linkUrl: 'https://www.bigassfans.com/industries/education'
    },
    {
      name: 'FITNESS',
      message: 'Whether a 40,000-sq-ft fitness center or a 2,500-sq-ft specialty gym, Big Ass Fans can make a person feel up to 10°F cooler without the noise and clutter of floor fans. Our bright Big Ass Lights will improve the look and feel of your gym with energy-efficient LED technology.',
      imageUrl: 'https://s3.amazonaws.com/ba-en-us/global/header-footer/industries/fitness.jpg',
      linkUrl: 'https://www.bigassfans.com/industries/fitness'
    },
    {
      name: 'GOVERNMENT',
      message: 'There may be only two things that governments can agree on: comfort and energy savings. Whether in a library, office, courtroom, or millitary installation, Big Ass Fans and Lights control energy costs and enhance comfort and light quality.',
      imageUrl: 'https://s3.amazonaws.com/ba-en-us/global/header-footer/industries/government.jpg',
      linkUrl: 'https://www.bigassfans.com/industries/government'
    },
    {
      name: 'INDUSTRIAL',
      message: 'Big Ass Fans and Lights are right at home in warehouses and manufacturing facilities. Whether you store, assemble, fabricate, wash or bottle your product, our products have the mettle to stand up to the toughest environments.',
      imageUrl: 'https://s3.amazonaws.com/ba-en-us/global/header-footer/industries/industrial.jpg',
      linkUrl: 'https://www.bigassfans.com/industries/industrial'

    },
    {
      name: 'MOTOR VEHICLES',
      message: 'From shop to showroom, Big Ass Fans will move air throughout your entire space, including up and over obstructions such as cars, lifts, and racking. Bug Ass Light offers LED lighting fixtures suitable for lots, offices, and service bays, too.',
      linkUrl: 'https://www.bigassfans.com/industries/motor-vehicles',
      imageUrl: 'https://s3.amazonaws.com/ba-en-us/global/header-footer/industries/motor-vehicles.jpg',
    },
    {
      name: 'I DON\'T KNOW',
      message: 'Can\'t find what you\'re looking for? Not to worry. We\'ve built our business on customized solutions, and we\'ve yet to shy away from a facility with unique specs. Actually, we welcome the challenge.',
      imageUrl: 'https://s3.amazonaws.com/ba-en-us/global/header-footer/industries/other.jpg',
      linkUrl: 'https://www.bigassfans.com/industries/motor-vehicles'
    },
  ];


  constructor() {



  }

  ngOnInit() {


  }

}
