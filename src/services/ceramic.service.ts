import { Ceramic } from "../models/ceramic";
import { Injectable } from "@angular/core";

@Injectable()
export class ListService {

    private ceramics: Array<Ceramic>;

    constructor() {
        this.ceramics = [];
    }

    getAllCeramics() {
        this.ceramics = [];

        this.ceramics.push({
            id: 1,
            name: 'Wheel thrown bowl',
            description: "made at City Clay in Charlottesville",
            slideshow: ['../assets/imgs/image1.jpg', '../assets/imgs/image2.jpg'],
            tracking: "kiln",
            weight: 5,
            height: 2,
            glaze: "black"
          });
          this.ceramics.push({
            id: 2,
            name: 'Coffee imprint mug',
            description: "made at City Clay in Charlottesville",
            slideshow: ['../assets/imgs/image1', '../assets/imgs/image2'],
            tracking: "kiln",
            weight: 5,
            height: 2,
            glaze: "black"
          });
          this.ceramics.push({
            id: 3,
            name: 'Windowsill planter',
            description: "made at City Clay in Charlottesville",
            slideshow: ['../assets/imgs/image1', '../assets/imgs/image2'],
            tracking: "kiln",
            weight: 5,
            height: 2,
            glaze: "black"
          });

        return this.ceramics;
    }
}