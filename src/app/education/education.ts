import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [DecimalPipe],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {

  education = [

    {
      period: '2023 — 2027',
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Integral University',
      result: 'CGPA: 7.80'
    },

    {
      period: '2022 — 2023',
      degree: 'Intermediate',
      field: 'Physics, Chemistry & Mathematics',
      institution: 'Safa Public School',
      result: 'Percentage: 72%'
    },

    {
      period: '2020 — 2021',
      degree: 'High School',
      field: '',
      institution: 'The Millennium School',
      result: 'Percentage: 85%'
    }

  ];

}