import React, { Component } from 'react';
import  Mega from './Mega'
import  MegaItem from './MegaItem'
import  MegaCol from './MegaCol'
import  Link from './Link'
import  DropDown from './DropDown'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showMobileButton:this.props.showMobile,
          showMobileMenu:false,
        }
    }

    /**
   * Calculate & Update state of new dimensions
   */
  toggleMenu() {
    if(window.innerWidth < 768) {
      this.setState({ showMobileButton: true});
    } else {
      this.setState({ showMobileButton: false });
    }
  }

  handlershowMobileButton(e){
    e.preventDefault();
    this.setState({ showMobileButton: !this.state.showMobileButton});
  }

 
  /**
   * Add event listener
   */
  componentDidMount() {
    this.toggleMenu();
    window.addEventListener("resize", this.toggleMenu.bind(this));
       
     }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.toggleMenu.bind(this));
    window.removeEventListener("click", this.handlershowMobileButton.bind(this));
  }
    
    render() {
      var styles ={
        display:this.state.showMobileButton ? "none" : "block"
      }
          return <div id="menurc" className="menurc menurc-responsive" >
                <a href="javascript:void(0)" className="showhide" onClick={this.handlershowMobileButton.bind(this)}><em></em><em></em><em></em></a>
                <a href="#" className="menurc-brand">{this.props.name}</a>
                <ul className="menurc-menu" style = {styles}>
                    <Mega title="Mega" >
                      <MegaItem tipo="megamenu-quarter-width">
                        <MegaCol tipo="col6">
                          <ul>
                          <Link  title="link 1" href = "javascript:void(0)" />
                          <Link  title="link 2" href = "javascript:void(0)" />
                          </ul>
                        </MegaCol >
                        <MegaCol tipo="col6">
                          <ul>
                          <Link  title="link 1" href = "javascript:void(0)" />
                          </ul>
                        </MegaCol >
                      </MegaItem >
                    </Mega>
                    <DropDown  title="Dropdown" >
                        <Link  title="link 1" href = "javascript:void(0)" />
                        <Link  title="link 2" href = "javascript:void(0)" >

                        </Link >
                        <DropDown  title="Dropdown" >
                            <Link  title="link 2" href = "javascript:void(0)" />
                          </DropDown>
                    </DropDown>


                    <Mega title="Mega 2" >
                      <MegaItem tipo="megamenu-half-width">
                        <MegaCol tipo="col12">
                          <ul>
                            <Link  title="link 1" href = "javascript:void(0)" />
                          </ul>
                        </MegaCol >
                      </MegaItem >
                    </Mega>

                    <Link  title="link 1" href = "javascript:void(0)" />

                    <Mega title="Mega" >
                      <MegaItem tipo="megamenu-quarter-width">
                        <MegaCol tipo="col6">
                          <ul>
                          <Link  title="link 1" href = "javascript:void(0)" />
                          <Link  title="link 2" href = "javascript:void(0)" />
                          </ul>
                        </MegaCol >
                        <MegaCol tipo="col6">
                          <ul>
                          <Link  title="link 1" href = "javascript:void(0)" />
                          </ul>
                        </MegaCol >
                      </MegaItem >
                    </Mega>
                   
                  
                </ul>
             </div>
    }
  }
Menu.defaultProps= {
    showMobile :false 
 };

export default Menu;