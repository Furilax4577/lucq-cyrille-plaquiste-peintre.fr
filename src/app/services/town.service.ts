import { Injectable } from '@angular/core';

import config from '../config.json';
import { URLify } from '../common';

export interface ConfigTown {
  name: string;
  postalCode: number;
}

export interface Town extends ConfigTown {
  path: string;
  name: string;
  postalCode: number;
}

@Injectable({
  providedIn: 'root',
})
export class TownService {
  towns: Town[] = [];

  constructor() {
    config.towns.forEach((town) => {
      this.towns.push({
        path: URLify(town.name),
        name: town.name,
        postalCode: town.postalCode,
      });
    });
  }

  getTownFromPath(townPath: string) {
    return this.towns.find((town) => {
      return town.path === townPath;
    });
  }
}
