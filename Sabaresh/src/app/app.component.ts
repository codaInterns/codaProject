import { Component } from '@angular/core';
import { GetPokemonService } from './get-pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HeroesApp';
  constructor(private obj:GetPokemonService){}
  poke:any;
  pokemon:any;
  ngOnInit(){
    this.obj.test();
    this.getData();
    
  }
  getData(){
    this.obj.get()
    .subscribe(
      result  => {
        this.poke = result
      }
    );
    this.poke=this.poke.results

  }
}
