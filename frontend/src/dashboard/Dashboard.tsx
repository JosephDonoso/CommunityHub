import React, { useState } from 'react';
import { IonPage } from '@ionic/react';
import './Dashboard.css';
import DashboardMenu from './dashboardMenu/DashboardMenu';
import DashboardContent from './dashboardContent/DashboardContent';

const Dashboard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>('Inicio');
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
    setIsMenuVisible(false);
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <IonPage>
      <div className='dashboard-background'>
        <div className='dashboardnavbar-background-color'>
          <div className='dashboardnavbar-container'>
            <div className='dashboardnavbar-container-logo'>
              <h1>Community<span>Hub</span></h1>
            </div>
            <div className='dashboardnavbar-container-items'>
              <div className='dashboardnavbar-item-notifications'>
                <img src='/dasboard/item-notification.svg' alt="Notificaciones" />
              </div>
              <div className='dashboardnavbar-item-user'>
                <img src='/dasboard/item-user.png' alt="Usuario" />
              </div>
              <button className='menu-toggle' onClick={toggleMenuVisibility} aria-controls="navbar" aria-expanded={isMenuVisible}>
                <img 
                  src='dasboard/item-menu-hamburger-menu.svg' 
                  alt="Menú" 
                  className={isMenuVisible ? 'rotate' : ''} 
                />
              </button>
            </div>
          </div>
        </div>
        <div className='dashboard-main'>
          <div className={`dashboard-menu ${isMenuVisible ? 'show' : ''}`}>
            <DashboardMenu onMenuItemClick={handleMenuItemClick} />
          </div>
          <DashboardContent selectedItem={selectedItem} />
        </div>
      </div>
    </IonPage>
  );
};

export default Dashboard;
