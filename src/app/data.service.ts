import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = [
    {
      id: 1,
      verified: true,
      title: 'SOFTWARE DEVELOPER',
      address:'Hyderabad, Telangana',
      avatar:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhuman&psig=AOvVaw2DJ6aacCwrl8aPupy6qhDt&ust=1611677285935000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCc3fO7t-4CFQAAAAAdAAAAABAD',
      name: 'G SIDHARTHA',
      info:
        'A freshly graduated student that full of energy and proactive for the challenges. Furthermore I am a responsible person for every task that I undertake or situation that I am presented with through my previous work experience. Beside I also willing to embrace change and gain experience. I am confident that I will be a great asset to your team '
    },
  ]
  constructor() { }
   getData() {
    return this.data;
  }

}
