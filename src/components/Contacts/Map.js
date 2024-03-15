
const GoogleMap = () => {
  return (
    <div className="mapouter" style={{ position: 'relative', textAlign: 'right', height: '700px', width: '100%' }}>
      <div className="gmap_canvas" style={{ overflow: 'hidden', background: 'none !important', height: '700px', width: '100%' }}>
        <iframe
          width="100%"
          height="700"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=GANGA%20SYSTEMS%20%26%20CCTV%2C%2013%2F6-5%2C%20Thuraiyur%20Rd%2C%20Thirumurugan%20Nagar%2C%20Musiri%2C%20Tamil%20Nadu%20621211&t=k&z=18&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          title="GMap"
        ></iframe>
        {/* Optionally remove links if they are not needed */}
        <a href="https://online.stopwatch-timer.net/pomodoro-timer">Tomato Timer</a>
        <br />
        <a href="https://www.calc-calc.com/">Calculator</a>
        <br />
        <a href="https://www.ongooglemaps.com">Generate Google Maps</a>
      </div>
    </div>
  );
};

export default GoogleMap;
