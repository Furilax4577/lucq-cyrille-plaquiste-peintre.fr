import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private name = 'LC Création';

  private listeChiffre = [
    'un',
    'deux',
    'trois',
    'quattre',
    'cinq',
    'six',
    'sept',
    'huit',
    'neuf',
  ];

  private motsClesDeclencheurs = [
    'Ultime',
    'Meilleur',
    'Nouveau',
    'Éprouvé',
    'Comment',
    'Pourquoi',
    'Exclusif',
    'Essentiel',
    'Avancé',
    'Décisif',
    'Innovant',
    'Secret',
    'Révolutionnaire',
    'Facile',
    'Rapide',
    'Guide',
    'Expert',
    'Avant-première',
    'Complet',
    'Économique',
    'Premium',
    'Sur mesure',
    'Compact',
    'Efficient',
    'Durable',
    'Intuitif',
    'Intelligent',
    'Sécurisé',
    'Personnalisé',
  ];

  constructor(private title: Title, private meta: Meta) {}

  getTitle(titleStr: string) {
    if (titleStr && !titleStr.includes(this.name)) {
      return `${titleStr} | ${this.name}`;
    }
    return titleStr;
  }

  setTitle(titleStr: string) {
    const title = this.getTitle(titleStr);
    this.checkTitle(title);
    this.title.setTitle(title);
  }

  setKeywords(keywords: string[]) {
    keywords.unshift(this.name);
    this.meta.addTag({ name: 'keywords', content: keywords.join(', ') });
  }

  getTownKeywords(keywords: string[], townName: string) {
    return keywords.map((keyword) => {
      return `${keyword} ${townName}`;
    });
  }

  checkTitle(title: string) {
    // Veillez à ce que vos titres sous en dessous de 70 caractères
    if (title.length >= 70) {
      console.warn(
        `Le titre de la page est trop long: "${title}", (${title.length})`
      );
    }

    // Si possible, utilisez des chiffres (par exemple, utilisez "8" au lieu de "huit")
    if (this.contientMotCle(title, this.listeChiffre)) {
      console.warn(
        `Éviter les chiffres en toutes lettres dans les titres "${title}"`
      );
    }

    // Utilisez des mots déclencheurs tels que ultime, meilleur, nouveau, éprouvé, comment, pourquoi
    if (!this.contientMotCle(title, this.motsClesDeclencheurs)) {
      console.warn("Essayez d'utiliser un mot clé déclencheur", title);
    }

    // Utilisez des mots-clés sans exagérer
    // Utilisez différents titres pour différentes pages
    // Rédigez en pensant à vos clients
    // Si possible, utilisez votre nom de marque
  }

  contientMotCle(str: string, words: string[]) {
    const titreMinuscules = str.toLowerCase();
    for (let i = 0; i < words.length; i++) {
      const motCle = words[i].toLowerCase();
      if (titreMinuscules.includes(motCle)) {
        return true;
      }
    }
    return false;
  }
}
