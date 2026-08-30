import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css'
})
export class Achievements {

  achievements = [

    {
      number: '01',
      title: 'Smart India Hackathon 2025',
      category: 'COMPETITIVE INNOVATION',
      description:
        'Qualified for the Grand Finale of Smart India Hackathon 2025 with a technology-driven solution.'
    },

    {
      number: '02',
      title: 'TCS Internship',
      category: 'PROFESSIONAL EXPERIENCE',
      description:
        'Completed an internship at TCS, gaining practical experience in software development and working with technologies including Java, Spring Boot, JSP, JDBC, MySQL, Python and Flask.'
    },

    {
      number: '03',
      title: 'Angular & Spring Boot',
      category: 'FULL STACK DEVELOPMENT',
      description:
        'Developing skills in modern full-stack development using Angular for frontend applications and Spring Boot for backend development.'
    },

    {
      number: '04',
      title: 'IoT & Robotics Projects',
      category: 'ENGINEERING',
      description:
        'Built and explored multiple IoT and robotics systems involving ESP32, sensors, automation, robotics hardware and web-based control.'
    }

  ];

}