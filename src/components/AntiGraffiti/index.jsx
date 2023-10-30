import image1 from '../../assets/AntiGraffiti/14_-_NP_GRAFF-removebg-preview.png';
import image2 from '../../assets/AntiGraffiti/15_-_ND_GRAFF-removebg-preview.png';

import './styles.scss';

function AntiGraffiti() {
  return (
    <div>
      <p className="sols-p"> Nos Produits Anti Graffiti ! </p>
      <div className="container-sols">
        <div className="colonne-sols">
          <a href="/Produits/AntiGraffiti/NPGRAFF">
            <img src={image1} alt="test" className="column-image" />
          </a>
          <p className="sols-test"> N.P.GRAFF </p>
        </div>
        <div className="colonne-sols2">
          <a href="/Produits/AntiGraffiti/NDGRAFF">
            <img src={image2} alt="test" className="column-image" />
          </a>
          <p className="sols-test">  N.D.GRAFF </p>
        </div>
      </div>
    </div>
  );
}

export default AntiGraffiti;