import React from 'react';
import ReactDOM from 'react-dom';
import Sideimage from './Sideimage.jsx';
import Modal from './Modal.jsx';
import Slideshow from './Slideshow.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarClick = this.sideBarClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.state = {
      showModal: false,
      images: [
        'https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?',
        'https://target.scene7.com/is/image/Target/GUEST_077a9562-86e2-457a-b7ec-afb1f7d8416c?',
        'https://target.scene7.com/is/image/Target/GUEST_6ec263bd-0c5b-4de1-a80d-3c0533b0b8e0?',
        'https://d28m5bx785ox17.cloudfront.net/v1/img/h51TdE6kEIKxsaufROdLDDLuk4cK5tyTXutnDXmSlaI=/sc/600x600',
        'https://d28m5bx785ox17.cloudfront.net/v1/img/h51TdE6kEIKxsaufROdLDDLuk4cK5tyTXutnDXmSlaI=/sc/600x600'
      ],
      imgMain:'https://target.scene7.com/is/image/Target/GUEST_e12c9357-b0b4-4192-861d-b52bb2f05c71?',
      imgMore: [],
      active: 'one'
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  sideBarClick(newMain, name) {
    this.setState({
      active: name,
      imgMain: newMain
    });
  }

  showModal() {
    this.setState({
      showModal: true
    });
  }

  hideModal() {
    this.setState({
      showModal: false
    });
  };

  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <Slideshow hideModal={this.hideModal} images={this.state.images} />
        </div> 
      </Modal>
    ) : null;
    return (
      <div>      
        <div className="container">
          <Sideimage name={'one'} active={this.state.active} imageUrl={this.state.images[0]} sideBarClick={this.sideBarClick} />
          <Sideimage name={'two'} active={this.state.active} imageUrl={this.state.images[1]} sideBarClick={this.sideBarClick} />
          <Sideimage name={'three'} active={this.state.active} imageUrl={this.state.images[2]} sideBarClick={this.sideBarClick} />
          <Sideimage name={'four'} active={this.state.active} imageUrl={this.state.images[3]} sideBarClick={this.sideBarClick} />
          <figure id='five'>
            <img src={this.state.images[4]} alt="Gallery image 5" className="image"></img>
          </figure>
          <div id='shade'></div>
          <div id='text' onClick={this.showModal} >+ more</div>
          <figure id='main'>
            <img src={this.state.imgMain} alt="Gallery image 6" className="image"></img>
          </figure>
        </div>
          {modal}
      </div>
    );
  }
}

export default App;