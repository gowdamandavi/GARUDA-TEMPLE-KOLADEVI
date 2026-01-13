import React from "react";
import "./Legend.css";

import sitaAbductionImg from "../assets/images/sita-abduction-koladevi-fullview.jpg";
import garudaDeityImg from "../assets/images/garuda-deity-koladevi.jpg";
import jatayuSacrificeImg from "../assets/images/jatayu-sacrifice-ramayana.jpg";
import garudaProtectorImg from "../assets/images/garuda-protector-symbolism.jpg";

export default function Legend() {
  return (
    <main className="page legend-page" aria-labelledby="legend-heading">
      <section className="legend-section fade-in">
        <h1 id="legend-heading" className="legend-title">
          Legend — Garuda, Jatayu and the Sita Abduction
        </h1>

        <figure className="legend-hero">
          <img
            src={sitaAbductionImg}
            alt="Sita abduction scene depicted at Koladevi"
            loading="eager"
          />
          <figcaption>
            Ramayana legend — Sita’s abduction as depicted at Koladevi
          </figcaption>
        </figure>

        <p className="legend-text">
Ramayana Legend — Sita’s Abduction

The episode of Sita’s abduction occupies a central place in the Ramayana, not merely as a dramatic turning point in the narrative, but as a profound ethical moment that illuminates the values of duty, loyalty, and moral courage. When Ravana abducts Sita and carries her away in his aerial chariot, the act represents a grave violation of dharma, disrupting both personal virtue and cosmic order. The scene is marked by sorrow and injustice, yet it also gives rise to one of the most moving demonstrations of selfless action in Hindu epic literature.

Jatayu, the noble bird and devoted ally of Lord Rama, witnesses the abduction and chooses to intervene despite his advanced age and the overwhelming power of Ravana. Fully aware that victory is impossible, Jatayu confronts Ravana out of an unshakeable commitment to righteousness. His resistance delays Ravana and symbolizes the principle that moral responsibility demands action, even when success is uncertain.

The abduction of Sita thus becomes more than an episode of loss; it serves as the catalyst for the larger struggle between dharma and adharma. It underscores the idea that righteousness is preserved not only through divine intervention, but also through the courageous choices of individuals who act in defense of truth.
        </p>
      </section>

      <section className="legend-section soft-bg fade-in">
        <h2>Garuda — The Unique Deity at Koladevi</h2>

        <figure className="legend-inline">
          <img
            src={garudaDeityImg}
            alt="Garuda worshipped at Koladevi Temple"
            loading="lazy"
          />
          <figcaption>
            Garuda as the embodiment of disciplined devotion
          </figcaption>
        </figure>

        <p className="legend-text">
          Garuda is revered not merely as the divine vehicle, but as a moral
          exemplar representing vigilance, restraint, and service to dharma.Garuda occupies a distinguished position within Hindu religious and philosophical thought as a symbol of vigilance, strength, and disciplined devotion. Traditionally known as the divine vehicle (vāhana) of Lord Vishnu, Garuda’s significance extends well beyond this functional role. He is revered as a conscious, morally resolute being whose life exemplifies unwavering loyalty, courage, and commitment to dharma. Classical texts portray Garuda as fearless and resolute, endowed with immense power that is always guided by ethical clarity rather than personal ambition or dominance.

In Vaishnava tradition, Garuda represents the ideal of service-oriented devotion. His actions are motivated not by the pursuit of authority, but by an inner discipline rooted in responsibility and righteousness. This orientation distinguishes Garuda from figures associated primarily with sovereignty or cosmic control. Instead, he embodies alertness, restraint, and readiness to act in defense of moral order. Garuda’s vigilance is symbolic of the devotee’s duty to remain ethically aware and spiritually attentive in all circumstances.

Garuda also signifies liberation from bondage, both physical and moral. Mythological narratives often associate him with the overcoming of fear, ignorance, and constraint, reinforcing his role as a guide toward spiritual freedom. In worship and iconography, Garuda is thus understood as a moral exemplar whose life teaches that true devotion is expressed through consistent service, ethical action, and unwavering fidelity to dharma. Through this lens, Garuda continues to inspire reflective devotion and principled living within the Vaishnava tradition.
        </p>
      </section>

      <section className="legend-section fade-in">
        <h2>Jatayu’s Sacrifice</h2>

        <figure className="legend-inline">
          <img
            src={jatayuSacrificeImg}
            alt="Jatayu confronting Ravana during Sita abduction"
            loading="lazy"
          />
          <figcaption>
            Jatayu’s final stand — courage beyond victory
          </figcaption>
        </figure>

        <p className="legend-text">
          Despite knowing the battle was unequal, Jatayu chose action over
          silence, embodying moral courage and selfless service.Jatayu’s sacrifice in the Ramayana stands as one of the most profound expressions of moral courage and selfless duty in Hindu epic tradition. When Jatayu witnessed the abduction of Sita by Ravana, he chose to intervene despite his advanced age and the clear imbalance of power. Fully aware that he could not defeat Ravana, Jatayu nevertheless acted, guided by an unwavering commitment to righteousness and loyalty to Lord Rama. His decision reflects a form of courage rooted not in the hope of victory, but in the refusal to remain silent in the face of injustice.

During the brief yet decisive confrontation, Jatayu was grievously wounded, but his actions delayed Ravana’s escape and disrupted the act of wrongdoing. In his final moments, Jatayu fulfilled a crucial responsibility by informing Rama of Sita’s direction, thereby transforming personal sacrifice into a pivotal moral contribution. His life and death affirm that dharma is upheld through action, conscience, and selfless service, even at the cost of one’s own life.
        </p>
      </section>

      <section className="legend-section soft-bg fade-in">
        <h2>Connection to Garuda</h2>

        <figure className="legend-inline">
          <img
            src={garudaProtectorImg}
            alt="Garuda as protector in Vaishnava tradition"
            loading="lazy"
          />
          <figcaption>
            Garuda — guardian of dharma and protector of the righteous
          </figcaption>
        </figure>

        <p className="legend-text">
          Together, Garuda and Jatayu affirm that devotion is fulfilled through
          ethical courage, vigilance, and selfless action.
        </p>
      </section>
    </main>
  );
}
