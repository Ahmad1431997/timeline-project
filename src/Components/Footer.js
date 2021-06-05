//styling
import "../App.css";

function Footer() {
  return (
    <div className="container">
      <ul className="timeline">
        <li>
          <div className="timeline-image">
            <img
              className="img-responsive image-style"
              src="firstTalkingPic.jpg"
              alt="invention"
            />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4>1913</h4>
              <h4 className="subheading">First Talking Motion Picture</h4>
              <br />
            </div>
            <div className="timeline-body">
              <p>
                Edison invented the equipment and procedure needed to produce
                the first talking motion picture.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
