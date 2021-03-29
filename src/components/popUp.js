import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function CustomModal(props) {
    return (
  <Popup
    trigger={<button className="button"> Read More </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>

        {/* Heading */}
        {props.id === 8 && <div className="header">WildFire</div>}
        {props.id === 12 && <div className="header">Volcano</div>}
        {props.id === 15 && <div className="header">Melting Glaciers</div>}

        {/* Content */}
        {props.id === 12 && <div className="content">
          <img src="https://images.newscientist.com/wp-content/uploads/2020/12/21145328/volcanoes-f0r7pt_web.jpg" alt="volcano-img" className="img"/>
          <p>A volcano is a rupture in the crust of a planetary-mass object, 
          such as Earth, that allows hot lava, volcanic ash, and gases to escape 
          from a magma chamber below the surface.On Earth, volcanoes are most often 
          found where tectonic plates are diverging...
          <a href="https://en.wikipedia.org/wiki/Volcano#:~:text=A%20volcano%20is%20a%20rupture,and%20most%20are%20found%20underwater.">    Read More</a></p>
        </div>}
        {props.id === 8 && <div className="content">
          <img src="https://cdn.britannica.com/90/191790-050-092C8C2A/Wildfire-Stanislaus-National-Forest-California-2013.jpg" alt="wildfires-img" className="img"/>
          <p>A wildfire, bushfire, wildland fire or rural fire is an unplanned,
           unwanted, uncontrolled fire in an area of combustible vegetation 
           starting in rural areas and urban areas. Depending on the type 
           of vegetation present, a wildfire can also be classified more specifically...
          <a href="https://en.wikipedia.org/wiki/Wildfire">    Read More</a></p>
        </div>}
        {props.id === 15 && <div className="content">
          <img src="https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_2400/public/glacier_greenland.jpg?itok=pTgyPZ30" alt="glacier-img" className="img"/>
          <p>When temperatures rise and ice melts, more water flows 
          to the seas from glaciers and ice caps, and ocean water 
          warms and expands in volume. This combination of effects 
          has played the major role in raising average global 
          sea...
          <a href="https://www.nationalgeographic.com/environment/article/big-thaw">    Read More</a></p>
        </div>}



        <div className="actions">
          {/* <Popup
            trigger={<button className="button"> Read More </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup> */}
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </Popup>
)
}

export default CustomModal;