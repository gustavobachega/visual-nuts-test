import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  list: (string | number)[] = []
  countriesList : Array<any> = [
    {
      country:"US",
      languages: ["en"]
    },
    {
      country:"BE",
      languages: ["nl","fr","de"]
    },
    {
      country:"NL",
      languages: ["nl"]
    },
    {
      country:"DE",
      languages: ["de"]
    },
    {
      country:"ES",
      languages: ["es"]
    }
  ]
  countriesLength: number = 0
  mostLanguagesCountryGerman: any = {}
  mostLanguagesCountry: any = {}
  mostCommonLanguage: any = ''

  ngOnInit() {
    this.fillNumbers(100)
    this.checkCountriesLength(this.countriesList);
    this.mostLanguagesCountryGerman = this.checkCountryWithMostLanguages(this.countriesList, 'de');
    this.mostLanguagesCountry = this.checkCountryWithMostLanguages(this.countriesList);
    this.mostCommonLanguage = this.checkMostCommonLanguage(this.countriesList);
  }

  fillNumbers(number: number): void {
    let visualCount = 0
    let nutsCount = 0
    for(var i=1; i <= number; i++) {
      visualCount++
      nutsCount++
      if (visualCount == 3 && nutsCount == 5) {
        this.list.push('Visual Nuts')
        visualCount = 0
        nutsCount = 0
      }
      else if (visualCount == 3) {
        this.list.push('Visual')
        visualCount = 0
      }
      else if (nutsCount == 5) {
        this.list.push('Nuts')
        nutsCount = 0
      }
      else {
        this.list.push(i)
      }
    }
  }

  checkCountriesLength(countriesList: Array<any>): number {
    return this.countriesLength = countriesList.length
  }

  checkCountryWithMostLanguages(countriesList: Array<any>, language?: string): object {
    let mostLanguages: number = 0
    let mostLanguagesCountry = {}
    
    if(!language) {
      countriesList.forEach((country) => {
        if(country.languages.length > mostLanguages) {
          mostLanguages = country.languages.length
          mostLanguagesCountry = country
        }
      })

      return mostLanguagesCountry;
    }

    countriesList.forEach((country) => {
      if(country.languages.includes(language) && country.languages.length > mostLanguages) {
        mostLanguages = country.languages.length
        mostLanguagesCountry = country
      }
    })

    return mostLanguagesCountry;
  }

  checkMostCommonLanguage(countriesList: Array<any>) {
    let allLanguages: Array<string> = []
    
    countriesList.forEach((country) => {
      allLanguages = allLanguages.concat(country.languages)
    })

    return allLanguages.sort((a,b) =>
    allLanguages.filter(v => v===a).length -
    allLanguages.filter(v => v===b).length
    ).pop();

  }
}
