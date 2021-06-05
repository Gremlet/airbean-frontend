import '../scss/about.scss'
import footer from '../assets/footer.svg'
import ceo from '../assets/ceo.png'

function About() {
    return (
        <div className="about">
            <div className="about-content">
                <h1 className="about-title">Our Coffee</h1>
                <p className="inset">
                    Extra sugar fair trade cortado extra est, espresso irish sweet coffee chicory. Iced, percolator,
                    half and half at skinny coffee sugar cultivar acerbic barista kopi-luwak. Coffee, strong, in single
                    shot flavour organic and id white wings sugar. Cortado robusta grounds steamed flavour grounds
                    flavour cup mocha aromatic whipped.
                </p>
                <p className="about-text">
                    Qui, coffee redeye arabica doppio, café au lait bar robust aftertaste organic that sugar black.
                    Caramelization, robusta, et extraction cultivar, con panna caffeine acerbic, coffee sweet iced, con
                    panna a flavour grinder crema, sugar, french press percolator, sweet strong shop body frappuccino.
                    Crema, chicory galão extraction white eu java whipped qui percolator froth extraction java lungo at
                    galão dripper. Sit galão, bar white, grounds café au lait variety dark single origin cup robusta qui
                    body.
                </p>
                <p className="about-text">
                    Aged breve sweet, trifecta single shot, ristretto, cup irish percolator iced caramelization instant
                    acerbic at caramelization whipped saucer. Cup organic cup macchiato, ut cultivar frappuccino pumpkin
                    spice cinnamon milk mocha cup barista whipped spoon grounds seasonal.
                </p>
            </div>
            <div className="founder">
                <img src={ceo} alt="our-ceo" />
                <h2>Eva Cortado</h2>
                <p className="about-text">CEO and founder</p>
            </div>
            <img src={footer} alt="footer-img" id="footer-img" />
        </div>
    )
}

export default About
