import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  selectedCategory = 'ALL';

  categories = [
    'ALL',
    'DEVELOPMENT',
    'AI / ML',
    'IOT',
    'ROBOTICS'
  ];

  projects = [

    // 01 - Course Difficulty Prediction System
    {
      number: '01',
      category: 'AI • NLP • FULL STACK',
      types: ['DEVELOPMENT', 'AI / ML'],
      title: 'Course Difficulty Prediction System',
      description:
        'An ML and NLP based system for predicting course difficulty using text preprocessing, feature extraction and classification.',
      technologies: [
        'Python',
        'NLP',
        'Machine Learning',
        'Flask',
        'JSP',
        'JDBC',
        'MySQL'
      ]
    },

    // 02 - Smart Home Automation System
    {
      number: '02',
      category: 'IOT • FULL STACK',
      types: ['IOT', 'DEVELOPMENT'],
      title: 'Smart Home Automation System',
      description:
        'A smart home system designed for real-time remote appliance monitoring, scheduling, automation and energy analytics.',
      technologies: [
        'ESP32',
        'C++',
        'Angular',
        'Node.js',
        'Python',
        'MySQL'
      ]
    },
    // 03 - Web Controlled Drone
{
  number: '03',
  category: 'SIH • DRONE • WEB CONTROL',
  types: ['ROBOTICS', 'IOT', 'DEVELOPMENT'],
  title: 'Automatic Drone',
  description:
    'A web-controlled drone built using ESP32, BLDC motors and Electronic Speed Controllers (ESCs), with a web application used to control the drone remotely.',
  technologies: [
    'ESP32',
    'BLDC Motors',
    'ESC',
    'Web Application',
    'IoT',
    'Robotics'
  ]
},

    // 03 - Intelligent Pesticide Sprinkling System
    {
      number: '04',
      category: 'SIH 2025 • ROBOTICS',
      types: ['ROBOTICS', 'IOT'],
      title: 'Intelligent Pesticide Sprinkling System',
      description:
        'An automated sensor-driven pesticide spraying system designed for precision agriculture, reduced wastage and safer operation.',
      technologies: [
        'IoT',
        'Sensors',
        'Robotics',
        'Automation'
      ]
    },

    // 04 - Institutional Performance Tracking System
    {
      number: '05',
      category: 'AI • MACHINE LEARNING',
      types: ['AI / ML', 'DEVELOPMENT'],
      title: 'Institutional Performance Tracking System',
      description:
        'A data-driven platform designed to analyze institutional performance metrics using Machine Learning.',
      technologies: [
        'Machine Learning',
        'Python',
        'Data Analytics'
      ]
    },

    // 05 - Obstacle Avoiding Car
    {
      number: '06',
      category: 'ROBOTICS',
      types: ['ROBOTICS'],
      title: 'Obstacle Avoiding Car',
      description:
        'An autonomous robotic car using ultrasonic sensors and Arduino to detect and avoid obstacles.',
      technologies: [
        'Arduino',
        'Ultrasonic Sensor',
        'Robotics'
      ]
    },

    // 06 - IoT-Based Dustbin
    {
      number: '07',
      category: 'IOT • AUTOMATION',
      types: ['IOT'],
      title: 'IoT-Based Dustbin',
      description:
        'A sensor-enabled dustbin that automates lid operation, monitors the fill level and waste segregation.',
      technologies: [
        'NodeMCU',
        'Ultrasonic Sensor',
        'IoT'
      ]
    }

  ];

  get filteredProjects() {

    if (this.selectedCategory === 'ALL') {
      return this.projects;
    }

    return this.projects.filter(project =>
      project.types.includes(this.selectedCategory)
    );
  }

}