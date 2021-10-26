// React Native Bottom Navigation - Example using React Navigation V5 //
// https://aboutreact.com/react-native-bottom-navigation //
import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, ScrollView, SafeAreaView} from 'react-native';

const FAQScreen = ({navigation}) => {

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Šta mapa pokazuje?</Text>
      <Text style={styles.paragraph}>Mapa pokazuje broj i lokacije trenutno instaliranih klimerko uređaja za merenje kvaliteta vazduha na teritoriji Beograda, Smedereva i Novog Sada. Kako je ovo inicijativa građana, broj uređaja raste kako građani sklope nov uređaj, tako da će i broj lokacija rasti i mapa pokazivati više mesta na teritoriji Srbije.</Text>
      <Text style={styles.title}>Da li klimerko uređaji mere spoljašnji ili unutrašnji kvalitet vazduha?</Text>
      <Text style={styles.paragraph}>klimerko uređaji mere spoljašnji kvalitet vazduha.</Text>
      <Text style={styles.title}>Šta svaki klimerko uređaj individualno meri?</Text>
      <Text style={styles.paragraph}>klimerko uređaji mere:{"\n"}a) vlažnost vazduha.{"\n"}b) temperaturu vazduha.{"\n"}c) koncentraciju PM2.5 i PM10 čestica u mikrogramima prema jednom kubnom metru vazduha.</Text>
      <Text style={styles.title}>Šta su PM2.5 i PM10 čestice?</Text>
      <Text style={styles.paragraph}>PM (particular matter) ili suspendovane čestice jesu veoma male čestice koje su tečnog ili čvrstog agregatnog stanja i nalaze se u zagađenom vazduhu. Od njih su posebno opasne one koje mogu lako da dođu do najdubljih delova pluća, a to su PM2.5 i PM10 čestice. Broj pored oznake PM označava prečnik čestice, a opisno rečeno ove čestice su manje od 1/7 debljine prosečne ljudske dlake.</Text>
      <Text style={styles.title}>Kako ove čestice nastaju?</Text>
      <Text style={styles.paragraph}>Većina njih nastaje tokom različitih procesa sagorevanja i izduvnih gasova koji nastaju nakon istih (termoelektrane, livnice, dizel gorivo, čeličane, spaljivanje smeća…).</Text>
      <Text style={styles.title}>Koliko su PM2.5 i PM10 čestice loše za zdravlje i u kojoj koncentraciji?</Text>
      <Text style={styles.paragraph}>Svaka PM čestica koja ima prečnik manji od 10 mikrometara je opasna po zdravlje čoveka jer lako ulazi u pluća i lepi se za alveole. Kriterijum iznad kog količina PM čestica postaje rizična za zdravlje prema Svetskoj zdravstvenoj organizaciji je 50 mikrograma po metru kubnom vazduha.</Text>
      <Text style={styles.title}>Da li klimerko uređaji mere koncentraciju PM2.5 i PM10 čestica u vazduhu u realnom vremenu?</Text>
      <Text style={styles.paragraph}>Da, klimerko uređaji pokazuju trenutni nivo zagađenja vazduha na lokaciji na kojoj su postavljeni. Softver je napisan da uređaj izmeri i prikaže novu vrednost svakih 15 minuta.</Text>
      <Text style={styles.title}>Kako se čitaju podaci sa mape?</Text>
      <Text style={styles.paragraph}>Dva ili više uređaja koji su geografski blizu mogu se grupisati – tako da onda mapa pokazuje srednju vrednost i boji 2 ili više grupisana uređaja. Ako kliknete na njih i zoomirate – onda ćete moći pročitati pojedinačne vrednosti na mapi a detaljnije na levom meni-u takođe.</Text>
      <Text style={styles.title}>Kako mogu videti rezultate merenja konkretne klimerko merne stanice na mapi?</Text>
      <Text style={styles.paragraph}>Konkretne informacije o nivou zagađenja vazduha mogu se videti zumiranjem mape i klikom na svaki pojedinačni klimerko uređaj.</Text>
      <Text style={styles.title}>Koliko je klimerko uređaj jednostavan za korišćenje?</Text>
      <Text style={styles.paragraph}>Sklopljeni klimerko uređaj koji je sam po sebi veličine prosečne šolje za čaj potrebno je postaviti na spoljnu lokaciju, recimo balkon, i aktivirati ga kako bi proces merenja kvaliteta vazduha počeo. Nakon toga rezulati merenja dostupni su na korisnickom nalogu.</Text>
      <Text style={styles.title}>Da li je rađena kalibracija Klimerka?</Text>
      <Text style={styles.paragraph}>Kalibracija Klimerka nije rađena jer je ustanovljeno da su PMS7003 senzori dovoljno precizni sa građansko merenje. Ovo je potvrđeno instalacijom 4 PMS7003 senzora na vozilo Instituta za javno zdravlje “Dr. Milan Jovanović Batut” i poređenjem podataka sa njihovim profesionalnim senzorima, kao i poređenjem zvaničnih vrednosti koje daje Agencija za zaštitu životne sredine sa vrednostima klimerko uređaja u blizini. Jedan od problema sa ovim senzorima (kada je rađeno poređenje sa profesionalnim senzorima iz Instituta Batut) je to što naleti zagađenog vazduha mogu loše da utiču na očitavanja. Ovaj problem je rešen u klimerko Firmware-u 1.3.0 tako što se radi 10 očitavanja pre slanja podataka, a podatak koji se šalje na platformu je srednja vrednost tih 10 očitavanja. Takođe, PMS7003 senzori međusobno imaju jako malo odstupanje u očitavanju.</Text>
      <Text style={styles.title}>Ko je napravio Klimerka?</Text>
      <Text style={styles.paragraph}>Uređaj je napravljen na Beogradskom Hackaton-u desc0n 2018 i od tada se stalno hardverski i softverski usavršava i održava od strane tehničke zajednice, Internet društva Srbije i Haklab Beograda.{"\n"}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  paragraph: {
    marginBottom: 15,
  }
});

export default FAQScreen;