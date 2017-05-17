import React from 'react';
import './scss/Header.scss'
import Logo from '../../components/Logo/Logo'
import User from '../../components/User/User'

class Header extends React.Component{
    constructor(props){
        super(props);
    };
    render(){
        return(
            <header className="header-section container-fluid">
                <div className="row">
                    <div className="col-xs-2">
                        <Logo />
                    </div>
                    <div className="col-xs-8">
                        <div className="main-menu">
                            <div className="icon-container">
                                <button type="button" name="button" className="hide-on-desktop">
                                <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                                <button type="button" name="button" className="hide-on-desktop clear-editor-button">
                                <i className="fa fa-times" aria-hidden="true"></i>
                                </button>
                                <button type="button" name="button">
                                <i className="fa fa-sticky-note" aria-hidden="true"></i>
                                </button>
                                <button type="button" name="button">
                                <i className="fa fa-book" aria-hidden="true"></i>
                                </button>
                                <button type="button" name="button" id="tag">
                                <i className="fa fa-tags" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-2">
                        <User />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;