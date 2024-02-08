const Map = () => {
  return (
    <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23951.671700644038!2d2.160762782042676!3d41.3749763055851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f628927535%3A0x9261a9f64a1b3b12!2sCiutat%20Vella%2C%20Barcelona!5e0!3m2!1sen!2ses!4v1707399804811!5m2!1sen!2ses"
            width="100%"
            height={355}
            id="gmap_canvas"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
          ></iframe>
          <a href="https://fmovies-online.net">fmovies</a>
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.mapouter{position:relative;text-align:right;height:355px;width:100%;}',
            }}
          />
          <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}',
            }}
          />
        </div>
      </div>
      {/* Get your API here https://www.embedgooglemap.net */}
    </div>
  );
};
export default Map;
