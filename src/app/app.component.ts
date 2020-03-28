import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gerenciador de fotos';

  photos = [
    {
      url: 'https://3.bp.blogspot.com/-2KML1b7vcUQ/WIkTc6v2yaI/AAAAAAAAEwg/S57KnnZJt1QX8BfJymYCLqAgmC0HLKTYQCLcB/s320/8b6062f54b39290253eaef36f154727e.jpg',
      description: 'Porco'
    },
    {
      url: 'https://img1.topimagens.com/ti/animais-fofos/animais-fofos_003.jpg',
      description: 'Porquinho'
    }
  ];
 
}