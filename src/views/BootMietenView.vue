<template>
  <div class="boot-mieten-view">
    <section class="hero" :style="{ backgroundImage: 'url(' + dockImage + ')' }">
      <div class="overlay"></div>
      <div class="container">
        <h1>Boot mieten in Cape Coral</h1>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="text-content">
          <div class="text-block">
            <p>Die beliebte Ferienregion Cape Coral im Sunshine State Florida ist vor allem für ihre wunderschöne Kanal- und die kilometerlangen Strände bekannt. Wer hier Urlaub macht, sollte deshalb unbedingt ein Boot mieten und die vielschichtige Flora und Fauna vom Wasser aus erkunden. Wir von Intervilla bieten Ihnen luxuriöse Ferienvillen im praktischen Paket mit Boot und Anlegeplatz. Buchen Sie jetzt und gönnen Sie sich ein ganz besonderes Erlebnis.</p>

            <h2>Bootsvermietung in Cape Coral - Welche Voraussetzungen müssen erfüllt sein?</h2>
            <p>Ein Boot in Cape Coral zu mieten, ist ganz einfach. Neben unserem hauseigenen Verleih gibt es noch andere Vermieter, bei denen Sie sich unkompliziert ein passendes Modell aussuchen können. Wer mindestens 21 Jahre alt ist, benötigt keinen Bootsführerschein. Ein deutscher Pkw-Führerschein ist in diesem Fall ausreichend. Lediglich Personen, die jünger als 21 Jahre sind, brauchen eine Florida Boating Safety Identification Card.</p>

            <h2>Das passende Boot für jeden Bedarf</h2>
            <p>In Cape Coral können Sie verschiedenste Arten von Booten schnell und unkompliziert mieten. Dabei ist für jeden Bedarf die passende Ausstattung dabei. So gibt es etwa Kühlboxen, Schwimmleitern, herausnehmbare Picknick-Tische, Schwimmplattformen mit Stauraum, Außenduschen und viele weitere Extras. Je nach Angebot ist im Bootspreis auch ein All-Inclusive-Paket eingeschlossen. Darin sind unter anderem die Anlieferung des Bootes, die Endreinigung, aber auch Beach Packages und Wassersport-Equipment enthalten. Auf größeren Booten haben bis zu 10 Personen Platz. Hinweis: Alle Boote sind über SEA TOW Haftpflicht- und Vollkasko-versichert. Darüber hinaus ist der Abschluss einer Skipper-Haftpflicht- bzw. einer Charter-Versicherung empfehlenswert. Die entsprechenden Links finden Sie auf unserer Homepage.</p>

            <h2>Unsere Boote im Angebot</h2>
          </div>

          <section class="featured-boats">
            <div class="boats-grid">
              <BoatCard
                v-for="boat in boats"
                :key="boat.title"
                v-bind="boat"
              />
            </div>
          </section>

          <div class="text-block">
            <h2>Einweisung vor der ersten Fahrt</h2>
            <p>Ehe es mit dem Bootfahren losgeht, bekommen Sie eine umfangreiche Einweisung. Das ist in Florida Pflicht. So wissen Sie in den vielbefahrenen Kanälen von Cape Coral immer genau, wie Sie Ihr Boot sicher führen. Außerdem erfahren Sie bei der Einweisung auch, wie Sie elektrisch und benzinbetriebene Boote richtig aufladen bzw. tanken.</p>

            <h2>Cape Coral mit dem Boot entdecken</h2>
            <p>Dass die Ferienregion Cape Coral bei deutschen Urlaubern immer beliebter wird, hat seinen guten Grund. Das maritime Kleinod im Sunshine State Florida bietet das ganze Jahr über sonniges Wetter, wehende Palmen, eine große Vielfalt an Erlebnismöglichkeiten und eine atemberaubende Pflanzen- und Tierwelt. Mit einem kraftvollen, wendigen und komfortablen Powerboot entdeckt man dieses Ambiente mit seinen weitverzweigten Kanälen und langgezogenen Stränden auf eine besonders eindrucksvolle Weise.</p>

            <p>Einen Besuch wert sind zum Beispiel die vorgelagerten Inseln Pine Island, Sanibel Island, La Costa Island und Little Pine Island. Diese sind nicht nur wegen ihrer faszinierenden Flora zu empfehlen. Auch die artenreiche Tierwelt sucht ihresgleichen. Vom Boot aus können überall Delfine betrachtet werden, die einem nicht selten während der ganzen Fahrt folgen. Zu guter Letzt gibt es an der Küste auch zahlreiche Restaurants, die bequem mit dem Boot erreicht werden können. Speziell zu empfehlen wäre Cabbage Key. Sie legen einfach an und genießen kurze Zeit später schon viele regionale Köstlichkeiten.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import axios from 'axios'
import dockImage from '../assets/background-intervillas.jpg'
import BoatCard from '../components/BoatCard.vue'
import boat1Image from '../assets/boot-1.jpg'
import boat2Image from '../assets/boot-2.jpg'
import boat3Image from '../assets/boot-3.jpg'

const boats = ref([]);

onMounted(async () => {
  const response = await axios.get('${process.env.VILLA_API_BASE_URL}/boats.json');
  if(response) {
    boats.value = response.data
  }
})

// const boats = [
//   {
//     title: 'Regal 29 OBX/500HP',
//     price: 1300,
//     image: boat1Image,
//     capacity: 13,
//     length: '29ft',
//     power: '500 HP'
//   },
//   {
//     title: 'Chaparral SunCoast 250/300HP',
//     price: 875,
//     image: boat2Image,
//     capacity: 14,
//     length: '24ft',
//     power: '300 HP'
//   },
//   {
//     title: 'Key West 239 FS/250HP',
//     price: 600,
//     image: boat3Image,
//     capacity: 10,
//     length: '23ft',
//     power: '250 HP'
//   }
// ]
</script>

<style scoped>
.boot-mieten-view {
  padding-top: 0;
}

.hero {
  width: 100%;
  height: 100vh;
  background-color: var(--primary-color);
  color: white;
  position: relative;
  background-size: cover;
  background-position: center;
  margin-top: -80px;
  display: flex;
  align-items: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 300;
  margin: 0;
  position: relative;
}

.text-content {
  max-width: 1400px;
  margin: 4rem auto;
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--primary-color);
}

.text-block {
  width: 100%;
}

h2 {
  font-family: var(--font-heading);
  color: var(--primary-color);
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
}

p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.featured-boats {
  padding: 4rem 0;
  background-color: #f5f5f5;
  margin: 3rem -50vw;
  position: relative;
  left: 50%;
  right: 50%;
  width: 100vw;
}

.boats-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  padding: 0 1rem;
}

@media (max-width: 1024px) {
  .boats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 4rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .boats-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  h2 {
    font-size: 1.6rem;
  }

  .featured-boats {
    padding: 2rem 0;
  }
}
</style> 