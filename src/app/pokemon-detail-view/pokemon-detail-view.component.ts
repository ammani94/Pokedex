import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-pokemon-detail-view',
  templateUrl: './pokemon-detail-view.component.html',
  styleUrls: ['./pokemon-detail-view.component.scss']
})
export class PokemonDetailViewComponent implements OnInit {

  pokemon_details;
  

  constructor(private _activatedRoute: ActivatedRoute, private http:HttpClient){
    
  }

  ngOnInit() {
    this._activatedRoute.url.subscribe((s:UrlSegment[]) => {
      this.pokemon_details = null;
      this.getPokemon(s[1]['path']);
    });
  
  }

  getPokemon(pokemonId) {
    if (pokemonId != "") {
      let obs = this.http.get('https://pokeapi.co/api/v2/pokemon/'+pokemonId);
      obs.subscribe((response) => this.pokemon_details = response);
      return obs;
    }
    else
      this.pokemon_details = null;
  }


}