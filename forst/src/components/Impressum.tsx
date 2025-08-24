import React from "react";
import { Link } from "react-router-dom";
import "./Impressum.css";

const Impressum: React.FC = () => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="impressum">
      <div className="container">
        <h1>Impressum</h1>
        <div className="back-navigation">
          <Link to="/" className="back-link">
            ← Zurück zur Startseite
          </Link>
        </div>
        <p>Angaben gemäß § 5 TMG</p>
        <p>
          Friedemann Gumz - Diplom-Ingenieur (FH)-Forst  - Steuerberater - 
          <br />
          Karlstraße 19
          <br />
          73614 Schorndorf
          <br />
        </p>

        <p>
          <strong>Vertreten durch:</strong>
          <br />
          Friedemann Gumz
          <br />
        </p>

        <p>
          <strong>Kontakt:</strong>
          <br />
          Telefon: 07181/2579517
          <br />
          Mobil: 0172/3127810
          <br />
          E-Mail:{" "}
          <a href="mailto:fredgumz@googlemail.com">fredgumz@googlemail.com</a>
          <br />
        </p>

        <p>
          <strong>Berufsbezeichnung:</strong>
          <br />
          Diplom-Ingenieur (FH)-Forst 
          <br />
          Steuerberater
          <br />
          Verliehen durch: Bundesrepublik Deutschland
          <br />
          Zuständige Kammer: Steuerberaterkammer Stuttgart
          <br />
          Es gelten folgende berufsrechtliche Regelungen:
          <br />
          - Steuerberatungsgesetz (StBerG)
          <br />
          - Durchführungsverordnung zur Steuerberatungsordnung (DVStB)
          <br />
          - Berufsordnung der Steuerberater (BOStB)
          <br />
          Die Regelungen sind einsehbar unter:{" "}
          <a
            href="https://www.bstbk.de/de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.bstbk.de
          </a>
        </p>

        <p>
          <strong>Umsatzsteuer-ID:</strong>
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          [71 532 406 483]
          <br />
        </p>

        <p>
          <strong>Aufsichtsbehörde:</strong>
          <br />
          Steuerberaterkammer Stuttgart
          <br />
          Lange Straße 21
          <br />
          70174 Stuttgart
          <br />
        </p>

        <br />

        <p>
          <strong>Haftungsausschluss:</strong>
          <br />
          <br />
          <strong>Haftung für Inhalte</strong>
          <br />
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der
          Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
          <br />
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
          <br />
          <br />
          <strong>Haftung für Links</strong>
          <br />
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          <br />
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
          <br />
          <br />
          <strong>Urheberrecht</strong>
          <br />
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          <br />
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <br />

        <p>
          <strong>Datenschutz</strong>
          <br />
          <br />
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben.
          <br />
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
          <br />
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
          angeforderter Werbung und Informationsmaterialien wird hiermit
          ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
          ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
          von Werbeinformationen, etwa durch Spam-Mails, vor.
        </p>
      </div>
    </section>
  );
};

export default Impressum;
