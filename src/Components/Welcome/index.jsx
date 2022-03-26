import PropTypes from 'prop-types';
import './Welcome.css';

function Welcome({ information }) {
  return (
    <div className="home-Welcome">
      <div className="home-Welcome-message">
        {' '}
        bienvenid@
        {information.license ? <span>Dr</span> : <div />}
        <br />
        <span id="home-Welcome--doctor">
          <h3>
            {information.name}
            {' '}
            {information.lastName}
          </h3>
        </span>
      </div>
      {
        information.license
          ? (
            <div className="home_content__parrafo">
              <p>
                {' '}
                <strong> Tus proximas citas</strong>
                {' '}
              </p>
            </div>
          )
          : (
            <div className="home_content__parrafo">
              <p>
                {' '}
                <strong> Tu proxima cita</strong>
                {' '}
              </p>
            </div>
          )
}
    </div>
  );
}
Welcome.propTypes = {
  information: PropTypes.objectOf(PropTypes.string),
};
Welcome.defaultProps = {
  information: {},
};
export default Welcome;
